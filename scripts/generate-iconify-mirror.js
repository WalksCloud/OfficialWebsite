import fs from 'node:fs'
import path from 'node:path'
import { globby } from 'globby'
import yaml from 'yaml'

const root = process.cwd()
const distDir = path.resolve(root, 'dist')
const siteFile = path.resolve(root, 'config/site-info.yaml')
const collectionsFile = path.resolve(root, 'node_modules/@iconify/collections/collections.json')
const site = yaml.parse(fs.readFileSync(siteFile, 'utf8'))
const iconifyCollections = JSON.parse(fs.readFileSync(collectionsFile, 'utf8'))
const mirror = site.iconifyMirror || {}
const providerScriptPattern = /<script\b[^>]*\bdata-wc-iconify-provider\b[^>]*>[\s\S]*?<\/script>\s*/gi
const iconNamePattern = /(?:@([a-z0-9]+(?:-[a-z0-9]+)*):)?([a-z0-9]+(?:-[a-z0-9]+)*):([a-z0-9]+(?:-[a-z0-9]+)*)/gi
const utilityIconPattern = /\bi-([a-z0-9]+(?:-[a-z0-9]+)*)\b/gi
const collectionPrefixes = new Set(Object.keys(iconifyCollections || {}))
const sortedCollectionPrefixes = [...collectionPrefixes].sort((left, right) => right.length - left.length)

const defaultScanInclude = [
  'dist/**/*.html',
  'src/**/*.{vue,js,yaml,yml,json,md}',
  'config/**/*.{yaml,yml,json}',
  'node_modules/@nuxt/ui/dist/runtime/**/*.{vue,js,mjs}',
  'node_modules/@nuxt/ui/dist/shared/**/*.{js,mjs}',
]

const normalizePublicDirectoryPath = (value, fallback) => {
  const normalized = String(value || fallback || '').trim()
  if (!normalized.startsWith('/')) {
    throw new TypeError('iconifyMirror.outputPath must start with "/".')
  }
  if (normalized.includes('..')) {
    throw new TypeError('iconifyMirror.outputPath must not contain "..".')
  }
  return normalized.endsWith('/') ? normalized : `${normalized}/`
}

const normalizeApiEndpoint = (value) => String(value || 'https://api.iconify.design').replace(/\/+$/, '')

const normalizeMaxUrl = (value) => {
  const number = Number(value)
  return Number.isFinite(number) && number > 100 ? number : 500
}

const normalizeTimeout = (value) => {
  const number = Number(value)
  return Number.isFinite(number) && number > 0 ? number : 5000
}

const normalizeGlobList = (value, fallback = []) => (
  Array.isArray(value)
    ? value.map((entry) => String(entry || '').trim()).filter(Boolean)
    : fallback
)

const normalizeIconName = (value) => String(value || '').trim().toLowerCase()

const addIconName = (iconsByPrefix, prefix, iconName) => {
  const normalizedPrefix = normalizeIconName(prefix)
  const normalizedIconName = normalizeIconName(iconName)
  if (!collectionPrefixes.has(normalizedPrefix) || !normalizedIconName) return
  const icons = iconsByPrefix.get(normalizedPrefix) || new Set()
  icons.add(normalizedIconName)
  iconsByPrefix.set(normalizedPrefix, icons)
}

const parseUtilityIcon = (value = '') => {
  const normalized = normalizeIconName(value)
  for (const prefix of sortedCollectionPrefixes) {
    const marker = `${prefix}-`
    if (!normalized.startsWith(marker)) continue
    const name = normalized.slice(marker.length)
    if (name) {
      return {
        prefix,
        name,
      }
    }
  }
  return null
}

const collectCandidateSnippets = (content) => {
  const source = String(content || '')
  const snippets = []
  const stringLiteralPattern = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g
  for (const match of source.matchAll(stringLiteralPattern)) {
    if (match[2] && match[2].length <= 1000) snippets.push(match[2])
  }
  for (const line of source.split(/\r?\n/)) {
    if (/\bicon\b|i-[a-z0-9-]+|[a-z0-9]+(?:-[a-z0-9]+)*:[a-z0-9]+/i.test(line)) {
      snippets.push(line)
    }
  }
  return snippets
}

const collectIconsFromContent = (content, iconsByPrefix) => {
  for (const snippet of collectCandidateSnippets(content)) {
    collectIconsFromSnippet(snippet, iconsByPrefix)
  }
}

const collectIconsFromSnippet = (snippet, iconsByPrefix) => {
  for (const match of String(snippet || '').matchAll(iconNamePattern)) {
    addIconName(iconsByPrefix, match[2], match[3])
  }
  for (const match of String(snippet || '').matchAll(utilityIconPattern)) {
    const parsed = parseUtilityIcon(match[1])
    if (parsed) addIconName(iconsByPrefix, parsed.prefix, parsed.name)
  }
}

const collectIconNames = async ({ scanInclude, scanExclude }) => {
  const files = await globby(scanInclude, {
    cwd: root,
    onlyFiles: true,
    dot: true,
    ignore: scanExclude,
  })
  const iconsByPrefix = new Map()
  for (const file of files) {
    const absolutePath = path.resolve(root, file)
    const content = fs.readFileSync(absolutePath, 'utf8')
    collectIconsFromContent(content, iconsByPrefix)
  }
  return new Map(
    [...iconsByPrefix.entries()]
      .map(([prefix, icons]) => [prefix, [...icons].sort()])
      .sort(([left], [right]) => left.localeCompare(right)),
  )
}

const createIconifyRequestUrl = ({ endpoint, prefix, icons }) => {
  const url = new URL(`${endpoint}/${prefix}.json`)
  url.searchParams.set('icons', icons.join(','))
  return url.href
}

const splitIconRequests = ({ endpoint, prefix, icons, maxURL }) => {
  const chunks = []
  let current = []
  for (const icon of icons) {
    const next = [...current, icon]
    const nextUrl = createIconifyRequestUrl({ endpoint, prefix, icons: next })
    if (current.length && nextUrl.length > maxURL) {
      chunks.push(current)
      current = [icon]
    } else {
      current = next
    }
  }
  if (current.length) chunks.push(current)
  return chunks
}

const mergeIconifyData = (prefix, parts) => {
  const merged = {
    prefix,
    icons: {},
  }
  for (const part of parts) {
    if (!part || typeof part !== 'object' || part.prefix !== prefix || typeof part.icons !== 'object') {
      throw new TypeError(`Invalid Iconify response for prefix "${prefix}".`)
    }
    for (const [key, value] of Object.entries(part)) {
      if (key === 'icons' || key === 'aliases' || key === 'not_found') continue
      if (!(key in merged)) merged[key] = value
    }
    Object.assign(merged.icons, part.icons || {})
    if (part.aliases && typeof part.aliases === 'object') {
      merged.aliases = {
        ...(merged.aliases || {}),
        ...part.aliases,
      }
    }
    if (Array.isArray(part.not_found) && part.not_found.length) {
      merged.not_found = [...new Set([...(merged.not_found || []), ...part.not_found])].sort()
    }
  }
  return merged
}

const fetchWithTimeout = async (url, timeoutMs) => {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    return await fetch(url, { signal: controller.signal })
  } finally {
    clearTimeout(timer)
  }
}

const fetchIconifyPrefixData = async ({ endpoint, prefix, icons, maxURL, requestTimeoutMs }) => {
  const parts = []
  const requests = splitIconRequests({ endpoint, prefix, icons, maxURL })
  for (const chunk of requests) {
    const url = createIconifyRequestUrl({ endpoint, prefix, icons: chunk })
    const response = await fetchWithTimeout(url, requestTimeoutMs)
    if (!response.ok) {
      throw new Error(`Iconify API returned ${response.status} for ${url}`)
    }
    parts.push(await response.json())
  }
  return mergeIconifyData(prefix, parts)
}

const removeProviderScript = (html) => String(html || '').replace(providerScriptPattern, '')

const updateNormalHtmlProviderScripts = async ({ outputPublicPath, maxURL, enabled }) => {
  const script = enabled
    ? `<script data-wc-iconify-provider>window.IconifyProviders={"":{"resources":[window.location.origin],"path":${JSON.stringify(outputPublicPath)},"maxURL":${JSON.stringify(maxURL)}}};</script>\n`
    : ''
  const htmlFiles = fs.existsSync(distDir)
    ? (await globby('**/index.normal.html', {
      cwd: distDir,
      onlyFiles: true,
    })).map((file) => path.join(distDir, file))
    : []

  for (const file of htmlFiles) {
    const html = removeProviderScript(fs.readFileSync(file, 'utf8'))
    const nextHtml = enabled
      ? html.replace(/<\/head>/i, `${script}</head>`)
      : html
    fs.writeFileSync(file, nextHtml, 'utf8')
  }
  return htmlFiles.length
}

const writeMirrorFiles = async ({ outputDir, endpoint, maxURL, requestTimeoutMs, iconsByPrefix }) => {
  const prefixes = [...iconsByPrefix.keys()]
  fs.rmSync(outputDir, { recursive: true, force: true })
  fs.mkdirSync(outputDir, { recursive: true })

  const writtenFiles = []
  for (const prefix of prefixes) {
    const icons = iconsByPrefix.get(prefix) || []
    const data = await fetchIconifyPrefixData({ endpoint, prefix, icons, maxURL, requestTimeoutMs })
    const file = path.join(outputDir, `${prefix}.json`)
    fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
    writtenFiles.push(file)
  }
  return writtenFiles
}

const run = async () => {
  const enabled = mirror.enabled !== false
  const outputPublicPath = normalizePublicDirectoryPath(mirror.outputPath, '/icons/iconify/')
  const outputDir = path.join(distDir, outputPublicPath.slice(1))
  const endpoint = normalizeApiEndpoint(mirror.apiEndpoint)
  const maxURL = normalizeMaxUrl(mirror.maxURL)
  const requestTimeoutMs = normalizeTimeout(mirror.requestTimeoutMs)
  const scanInclude = normalizeGlobList(mirror.scanInclude, defaultScanInclude)
  const scanExclude = normalizeGlobList(mirror.scanExclude, [])

  if (!enabled) {
    fs.rmSync(outputDir, { recursive: true, force: true })
    const updatedHtmlCount = await updateNormalHtmlProviderScripts({ outputPublicPath, maxURL, enabled: false })
    console.log(`[iconify-mirror] disabled; removed provider scripts from ${updatedHtmlCount} HTML files.`)
    return
  }
  if (!fs.existsSync(distDir)) {
    throw new TypeError('dist not found. Run the SSG build before generating the Iconify mirror.')
  }

  const iconsByPrefix = await collectIconNames({ scanInclude, scanExclude })
  if (!iconsByPrefix.size) {
    fs.rmSync(outputDir, { recursive: true, force: true })
    const updatedHtmlCount = await updateNormalHtmlProviderScripts({ outputPublicPath, maxURL, enabled: false })
    console.log(`[iconify-mirror] no Iconify icons found; removed provider scripts from ${updatedHtmlCount} HTML files.`)
    return
  }

  try {
    const writtenFiles = await writeMirrorFiles({ outputDir, endpoint, maxURL, requestTimeoutMs, iconsByPrefix })
    const updatedHtmlCount = await updateNormalHtmlProviderScripts({ outputPublicPath, maxURL, enabled: true })
    console.log('[iconify-mirror] generated local Iconify mirror', {
      endpoint,
      outputPublicPath,
      requestTimeoutMs,
      prefixCount: iconsByPrefix.size,
      iconCount: [...iconsByPrefix.values()].reduce((count, icons) => count + icons.length, 0),
      updatedHtmlCount,
      writtenFiles: writtenFiles.map((file) => path.relative(root, file)),
      iconsByPrefix: Object.fromEntries(iconsByPrefix),
    })
  } catch (error) {
    fs.rmSync(outputDir, { recursive: true, force: true })
    const updatedHtmlCount = await updateNormalHtmlProviderScripts({ outputPublicPath, maxURL, enabled: false })
    console.error('[iconify-mirror] failed to generate local Iconify mirror; runtime will use the online Iconify API without precached icon JSON.', {
      endpoint,
      outputPublicPath,
      requestTimeoutMs,
      updatedHtmlCount,
      iconsByPrefix: Object.fromEntries(iconsByPrefix),
      error: String(error?.message || error),
    })
  }
}

await run().catch((error) => {
  console.error(error)
  process.exit(1)
})
