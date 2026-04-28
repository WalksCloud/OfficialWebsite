import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import { renderSSRHead } from '@unhead/vue/server'
import path from 'path'
import { DateTime } from 'luxon'
import git from 'git-rev-sync'
import YAML from 'yaml'
import { collectContentLastmod } from './scripts/utils/contentLastmod.js'

const projectSrc = path.resolve(__dirname, 'src')
const projectSrcPosix = projectSrc.replace(/\\/g, '/')

const sanitizeChunkName = (name = '') =>
  name
    .replace(/[@]/g, '')
    .replace(/[\\/]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/^-+/, '')
    .toLowerCase()

const normalizeId = (id = '') => id.replace(/\\/g, '/')

const stripFileExtension = (value = '') => value.replace(/\.(mjs|js|ts|cjs|jsx|tsx)$/i, '')

const normalizeViteDepsName = (raw = '') => {
  const clean = stripFileExtension(raw)
  if (!clean) return null
  if (clean.startsWith('@')) {
    const [scope, rest = ''] = clean.split('_', 2)
    if (!rest) return scope.replace(/_/g, '/')
    const pkg = rest.split('_')[0] || ''
    return `${scope.replace(/_/g, '/')}/${pkg}`
  }
  return clean.split('_')[0] || clean
}

const extractVendorChunkName = (() => {
  const cache = new Map()
  return (id = '') => {
    if (cache.has(id)) return cache.get(id)
    const normalizedId = normalizeId(id)
    let packageName = null
    const nodeModulesMatch =
      normalizedId.match(/node_modules\/(@?[^/]+)(?:\/([^/]+))?/) || null
    if (nodeModulesMatch) {
      const [, pkg, subPkg] = nodeModulesMatch
      packageName = pkg?.startsWith('@') && subPkg ? `${pkg}/${subPkg}` : pkg
    } else {
      const viteDepsMatch = normalizedId.match(/\.vite\/deps\/([^/?]+)/)
      if (viteDepsMatch) {
        packageName = normalizeViteDepsName(viteDepsMatch[1])
      }
    }
    const result = packageName ? `vendor-${sanitizeChunkName(packageName)}` : null
    cache.set(id, result)
    return result
  }
})()

const extractAppChunkName = (() => {
  const cache = new Map()
  return (id = '') => {
    if (cache.has(id)) return cache.get(id)
    const normalizedId = normalizeId(id)
    if (!normalizedId.startsWith(projectSrcPosix)) {
      cache.set(id, null)
      return null
    }
    const relativePath = path.posix.relative(projectSrcPosix, normalizedId)
    if (!relativePath) {
      cache.set(id, null)
      return null
    }
    const sanitized = relativePath.replace(/\.(vue|js|ts|mjs|jsx|tsx)$/, '')
    const result = `app-${sanitizeChunkName(sanitized)}`
    cache.set(id, result)
    return result
  }
})()

const resolveManualChunk = (id = '') => extractVendorChunkName(id) || extractAppChunkName(id)

const codeSplittingGroups = [
  {
    name: (id) => extractVendorChunkName(id),
    test: (id) => Boolean(extractVendorChunkName(id)),
    minShareCount: 1,
  },
  {
    name: (id) => extractAppChunkName(id),
    test: (id) => Boolean(extractAppChunkName(id)),
  },
]

const contentLastmodPlugin = () => {
  const virtualId = 'virtual:content-lastmod.yaml'
  return {
    name: 'virtual-content-lastmod',
    resolveId(id) {
      if (id === virtualId) return virtualId
      return null
    },
    load(id) {
      if (id === virtualId) {
        const data = collectContentLastmod()
        return YAML.stringify(data)
      }
      return null
    },
    handleHotUpdate(ctx) {
      const normalized = ctx.file.replace(/\\/g, '/')
      if (!normalized.includes('/src/content/')) return
      const mod = ctx.server.moduleGraph.getModuleById(virtualId)
      if (mod) {
        ctx.server.moduleGraph.invalidateModule(mod)
      }
    },
  }
}

const walksCloudUiColors = {
  primary: 'blue',
  secondary: 'cyan',
  success: 'emerald',
  info: 'blue',
  warning: 'amber',
  error: 'rose',
  neutral: 'zinc',
}

const FAQ_OUTPUT_PATH_PATTERN = /^\/(?:[a-z-]+\/)?faq(?:\/|$)/i
const DYNAMIC_ROUTE_PATH_PATTERN = /:/

const SEO_HEAD_TAG_PATTERNS = [
  /<title\b[^>]*>[\s\S]*?<\/title>/gi,
  /<meta\b[^>]*(?:name|property)\s*=\s*["'](?:description|robots|twitter:[^"']+|og:[^"']+|fb:[^"']+)["'][^>]*>/gi,
  /<link\b[^>]*\brel\s*=\s*["'](?:canonical|alternate)["'][^>]*>/gi,
  /<script\b[^>]*\btype\s*=\s*["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
]

const parseTagAttributes = (raw = '') => {
  const attrs = new Map()
  const pattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g
  let match
  while ((match = pattern.exec(raw)) !== null) {
    const key = match[1]
    if (!key || key === '/') continue
    const value = match[2] ?? match[3] ?? match[4] ?? true
    attrs.set(key, value)
  }
  return attrs
}

const escapeAttributeValue = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')

const stringifyTagAttributes = (attrs) =>
  Array.from(attrs.entries())
    .map(([key, value]) => (value === true ? ` ${key}` : ` ${key}="${escapeAttributeValue(value)}"`))
    .join('')

const mergeTagAttributes = (existingRaw = '', incomingRaw = '') => {
  const merged = parseTagAttributes(existingRaw)
  for (const [key, value] of parseTagAttributes(incomingRaw).entries()) {
    merged.set(key, value)
  }
  return stringifyTagAttributes(merged)
}

const applyTagAttributes = (html, tagName, incomingRaw = '') => {
  if (!incomingRaw || !incomingRaw.trim()) return html
  const matcher = new RegExp(`<${tagName}\\b([^>]*)>`, 'i')
  return html.replace(matcher, (_match, existingRaw = '') => `<${tagName}${mergeTagAttributes(existingRaw, incomingRaw)}>`)
}

const stripSeoHeadTags = (rawHead = '') => {
  let cleaned = rawHead
  SEO_HEAD_TAG_PATTERNS.forEach((pattern) => {
    cleaned = cleaned.replace(pattern, '')
  })
  return cleaned.trim()
}

const applyRenderedHead = (html, renderedHead) => {
  if (!renderedHead) return html
  let next = html
  next = applyTagAttributes(next, 'html', renderedHead.htmlAttrs || '')
  next = applyTagAttributes(next, 'body', renderedHead.bodyAttrs || '')

  if (renderedHead.bodyTagsOpen) {
    next = next.replace(/<body\b[^>]*>/i, (match) => `${match}\n${renderedHead.bodyTagsOpen}`)
  }
  if (renderedHead.bodyTags) {
    next = next.replace(/<\/body>/i, `${renderedHead.bodyTags}\n</body>`)
  }
  if (!renderedHead.headTags) {
    return next
  }

  return next.replace(/<head\b([^>]*)>([\s\S]*?)<\/head>/i, (_match, attrs = '', rawHead = '') => {
    const cleaned = stripSeoHeadTags(rawHead)
    const merged = [cleaned, renderedHead.headTags].filter(Boolean).join('\n')
    return `<head${attrs}>\n${merged}\n</head>`
  })
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'import.meta.env.buildTime': JSON.stringify(DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss ZZ')),
      'import.meta.env.buildHash': JSON.stringify(git.short(".") + (git.isDirty() ? '-dirty' : '')),
      'import.meta.env.__APP_ENV__': JSON.stringify(env.APP_ENV),
    },
    plugins: [
      vue(),
      ui({
        autoImport: false,
        components: false,
        ui: {
          prefix: 'wc',
          colors: walksCloudUiColors,
        },
      }),
      tailwindcss(),
      contentLastmodPlugin(),
      {
        name: 'yaml',
        transform(src, id) {
          if (!id.endsWith('.yaml')) return null
          const parsed = YAML.parse(src)
          return {
            code: `export default ${JSON.stringify(parsed)};`,
            map: null,
          }
        },
      },
    ],
    resolve: {
      alias: [
        {
          find: /^vue$/,
          replacement: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ]
    },
    ssgOptions: {
      includedRoutes: (paths = []) =>
        paths.filter(
          (routePath) =>
            !FAQ_OUTPUT_PATH_PATTERN.test(routePath) &&
            !DYNAMIC_ROUTE_PATH_PATTERN.test(routePath),
        ),
      onPageRendered: async (_route, renderedHTML, appCtx) => {
        if (!appCtx?.head) {
          return renderedHTML
        }
        const renderedHead = await renderSSRHead(appCtx.head)
        return applyRenderedHead(renderedHTML, renderedHead)
      },
    },
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            includeDependenciesRecursively: true,
            groups: codeSplittingGroups,
          },
        },
      },
      rollupOptions: {
        output: {
          manualChunks: resolveManualChunk,
        },
      },
    },
  }
})
