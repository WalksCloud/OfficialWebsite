import fs from 'node:fs'
import path from 'node:path'
import { globby } from 'globby'
import yaml from 'yaml'

const root = process.cwd()
const distDir = path.resolve(root, 'dist')
const siteFile = path.resolve(root, 'config/site-info.yaml')
const site = yaml.parse(fs.readFileSync(siteFile, 'utf8'))
const recovery = site.clientNavigationRecovery || {}
const manifestPath = recovery.precacheManifestPath || '/wc-precache-manifest.json'
const defaultLocale = site.defaultLocale || ''
const cacheInspectionPatterns = Array.isArray(recovery.cacheInspectionPatterns)
  ? recovery.cacheInspectionPatterns.map((pattern) => String(pattern || '').trim()).filter(Boolean)
  : []

const normalizeManifestPath = (value) => {
  const normalized = String(value || '').trim()
  if (!normalized.startsWith('/')) {
    throw new TypeError('clientNavigationRecovery.precacheManifestPath must start with "/".')
  }
  if (normalized.includes('..')) {
    throw new TypeError('clientNavigationRecovery.precacheManifestPath must not contain "..".')
  }
  return normalized
}

const publicPathFromRelative = (relativePath) => `/${relativePath.replace(/\\/g, '/')}`

const normalHtmlSuffix = '/index.normal.html'
const botHtmlSuffix = '/index.bot.html'
const textFileExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.json',
  '.svg',
  '.txt',
  '.webmanifest',
  '.xml',
])
const jsAssetReferenceExtensions = new Set([
  '.avif',
  '.css',
  '.gif',
  '.ico',
  '.jpeg',
  '.jpg',
  '.png',
  '.svg',
  '.webp',
  '.woff',
  '.woff2',
])
const mermaidTypeDiagramIds = new Map([
  ['architecture', ['architecture']],
  ['block', ['block']],
  ['block-beta', ['block']],
  ['classDiagram', ['class', 'classDiagram']],
  ['classDiagram-v2', ['classDiagram']],
  ['erDiagram', ['er']],
  ['eventmodeling', ['eventmodeling']],
  ['flowchart', ['flowchart', 'flowchart-v2', 'flowchart-elk']],
  ['flowchart-elk', ['flowchart-elk']],
  ['flowchart-v2', ['flowchart-v2']],
  ['gantt', ['gantt']],
  ['gitGraph', ['gitGraph']],
  ['graph', ['flowchart', 'flowchart-v2', 'flowchart-elk']],
  ['info', ['info']],
  ['ishikawa', ['ishikawa']],
  ['ishikawa-beta', ['ishikawa']],
  ['journey', ['journey']],
  ['kanban', ['kanban']],
  ['mindmap', ['mindmap']],
  ['packet', ['packet']],
  ['packet-beta', ['packet']],
  ['pie', ['pie']],
  ['quadrantChart', ['quadrantChart']],
  ['radar', ['radar']],
  ['radar-beta', ['radar']],
  ['requirement', ['requirement']],
  ['requirementDiagram', ['requirement']],
  ['sankey', ['sankey']],
  ['sankey-beta', ['sankey']],
  ['sequenceDiagram', ['sequence']],
  ['stateDiagram', ['state', 'stateDiagram']],
  ['stateDiagram-v2', ['stateDiagram']],
  ['timeline', ['timeline']],
  ['treeView', ['treeView']],
  ['treeView-beta', ['treeView']],
  ['treemap', ['treemap']],
  ['venn', ['venn']],
  ['venn-beta', ['venn']],
  ['wardley', ['wardley-beta']],
  ['wardley-beta', ['wardley-beta']],
  ['xychart', ['xychart']],
  ['xychart-beta', ['xychart']],
])

const routeAliasesForRoutePath = (routePath) => {
  const aliases = routePath === '/'
    ? ['/']
    : [routePath, routePath.replace(/\/$/, '')]
  const defaultLocalePrefix = `/${defaultLocale}/`
  if (defaultLocale && routePath.startsWith(defaultLocalePrefix)) {
    const nonPrefixedPath = routePath.slice(defaultLocale.length + 1) || '/'
    aliases.push(nonPrefixedPath)
    if (nonPrefixedPath !== '/') {
      aliases.push(nonPrefixedPath.replace(/\/$/, ''))
    }
  }
  if (defaultLocale && routePath === `/${defaultLocale}/`) {
    aliases.push('/')
  }
  return [...new Set(aliases)]
}

const manifestEntryForPublicPath = (publicPath) => {
  if (publicPath.endsWith(botHtmlSuffix)) return null
  if (publicPath.endsWith(normalHtmlSuffix)) {
    const routePath = publicPath.slice(0, -'index.normal.html'.length)
    const aliases = routeAliasesForRoutePath(routePath).filter((alias) => alias !== routePath)
    return {
      url: routePath,
      ...(aliases.length ? { aliases } : {}),
    }
  }
  return { url: publicPath }
}

const isIgnoredPublicPath = (publicPath, outputManifestPath) => (
  publicPath === outputManifestPath ||
  publicPath === '/wc-sw.js' ||
  publicPath === '/_worker.js' ||
  publicPath.startsWith('/.')
)

const isNormalRouteHtmlPath = (publicPath) => publicPath.endsWith(normalHtmlSuffix)

const isBotRouteHtmlPath = (publicPath) => publicPath.endsWith(botHtmlSuffix)

const isTextPublicPath = (publicPath) => textFileExtensions.has(path.posix.extname(publicPath).toLowerCase())

const normalizePublicPath = (value) => {
  const normalized = path.posix.normalize(value.replace(/\\/g, '/'))
  return normalized.startsWith('/') ? normalized : `/${normalized}`
}

const stripUrlDecorators = (value) => String(value || '').trim()
  .replace(/&amp;/g, '&')
  .split('#')[0]
  .split('?')[0]

const candidateValuesFromSrcset = (value) => String(value || '')
  .split(',')
  .map((item) => item.trim().split(/\s+/)[0])
  .filter(Boolean)

const isMermaidVendorChunk = (publicPath) => /^\/assets\/vendor-mermaid-[^/]+\.js$/.test(publicPath)

const getHtmlAttribute = (tag, attributeName) => {
  const pattern = new RegExp(`\\b${attributeName}=["']([^"']+)["']`, 'i')
  return tag.match(pattern)?.[1] || ''
}

const extractHtmlCssCandidateValues = (content) => {
  const candidates = []
  const linkTagPattern = /<link\b[^>]*>/gi
  const attrPattern = /\b(?:src|content|poster|data-src|data-href)=["']([^"']+)["']/gi
  const srcsetPattern = /\bsrcset=["']([^"']+)["']/gi
  const cssUrlPattern = /url\(\s*["']?([^"')]+)["']?\s*\)/gi

  for (const match of content.matchAll(linkTagPattern)) {
    const tag = match[0]
    const rel = getHtmlAttribute(tag, 'rel').toLowerCase()
    const href = getHtmlAttribute(tag, 'href')
    if (!href || rel.split(/\s+/).includes('modulepreload')) continue
    candidates.push(href)
  }
  for (const match of content.matchAll(attrPattern)) {
    candidates.push(match[1])
  }
  for (const match of content.matchAll(srcsetPattern)) {
    candidates.push(...candidateValuesFromSrcset(match[1]))
  }
  for (const match of content.matchAll(cssUrlPattern)) {
    candidates.push(match[1])
  }

  return candidates
}

const extractJsCandidateValues = (content, ownerPublicPath) => {
  const candidates = []
  const staticImportPattern = /\bimport(?!\s*\()\s*(?:(?:[^"'`;]|\{[^}]*\})*?\s*from\s*)?["'`]([^"'`]+)["'`]/g
  const dynamicImportPattern = /\bimport\(\s*["'`]([^"'`]+)["'`]\s*\)/g
  const assetLiteralPattern = /["'`]((?:\/|\.\/|\.\.\/|assets\/|img\/|pic\/|partner\/)[^"'`\s)]*)["'`]/g

  for (const match of content.matchAll(staticImportPattern)) {
    candidates.push(match[1])
  }
  for (const match of content.matchAll(dynamicImportPattern)) {
    if (isMermaidVendorChunk(ownerPublicPath)) continue
    candidates.push(match[1])
  }
  for (const match of content.matchAll(assetLiteralPattern)) {
    const extension = path.posix.extname(stripUrlDecorators(match[1])).toLowerCase()
    if (jsAssetReferenceExtensions.has(extension)) {
      candidates.push(match[1])
    }
  }

  return candidates
}

const extractCandidateValues = (content, ownerPublicPath) => {
  const extension = path.posix.extname(ownerPublicPath).toLowerCase()
  if (extension === '.js') {
    return extractJsCandidateValues(content, ownerPublicPath)
  }
  return extractHtmlCssCandidateValues(content)
}

const decodeHtmlEntities = (value) => String(value || '')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")

const normalizeMermaidType = (value) => {
  const token = String(value || '').trim().split(/\s+/)[0] || ''
  return token.replace(/-beta$/i, '-beta')
}

const resolveMermaidDiagramIds = (types = new Set()) => {
  const ids = []
  for (const type of types) {
    ids.push(...(mermaidTypeDiagramIds.get(type) || []))
  }
  return [...new Set(ids)].sort()
}

const collectMermaidDetectorIdVariables = (content) => {
  const values = new Map()
  const variablePattern = /(?:^|[;,])\s*(?:var\s+)?([A-Za-z_$][\w$]*)=`([^`]+)`/g
  for (const match of content.matchAll(variablePattern)) {
    values.set(match[1], match[2])
  }
  return values
}

const collectMermaidDiagramChunkMap = (vendorPublicPaths, fileByPublicPath) => {
  const diagramChunksById = new Map()
  const loaderPattern = /\{id:([A-Za-z_$][\w$]*),detector:[\s\S]*?loader:G\(async\(\)=>\{[\s\S]*?import\(`\.\/([^`]+\.js)`\)[\s\S]*?return\{id:\1,diagram:/g

  for (const vendorPublicPath of vendorPublicPaths) {
    const relativePath = fileByPublicPath.get(vendorPublicPath)
    if (!relativePath) continue

    const content = fs.readFileSync(path.join(distDir, relativePath), 'utf8')
    const idValues = collectMermaidDetectorIdVariables(content)
    const ownerDir = path.posix.dirname(vendorPublicPath)

    for (const match of content.matchAll(loaderPattern)) {
      const diagramId = idValues.get(match[1])
      const chunkPublicPath = normalizePublicPath(path.posix.join(ownerDir, match[2]))
      if (!diagramId || !fileByPublicPath.has(chunkPublicPath)) continue
      const chunks = diagramChunksById.get(diagramId) || []
      chunks.push(chunkPublicPath)
      diagramChunksById.set(diagramId, chunks)
    }
  }

  return new Map(
    [...diagramChunksById.entries()]
      .map(([diagramId, chunks]) => [diagramId, [...new Set(chunks)].sort()])
      .sort(([left], [right]) => left.localeCompare(right)),
  )
}

const collectMermaidTypesFromContent = (content) => {
  const types = new Set()
  const mermaidPattern = /<pre\b[^>]*\bclass=["'][^"']*\bmermaid\b[^"']*["'][^>]*>([\s\S]*?)<\/pre>/gi
  for (const match of content.matchAll(mermaidPattern)) {
    const source = decodeHtmlEntities(match[1])
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => line && !line.startsWith('%%'))
    const type = normalizeMermaidType(source)
    if (type) types.add(type)
  }
  return types
}

const collectMermaidDependencyPublicPaths = (routeHtmlPublicPaths, fileByPublicPath) => {
  const types = new Set()
  const vendorPublicPaths = [...fileByPublicPath.keys()]
    .filter(isMermaidVendorChunk)
    .sort()

  for (const publicPath of routeHtmlPublicPaths) {
    const relativePath = fileByPublicPath.get(publicPath)
    if (!relativePath) continue
    const content = fs.readFileSync(path.join(distDir, relativePath), 'utf8')
    collectMermaidTypesFromContent(content).forEach((type) => types.add(type))
  }

  const diagramIds = resolveMermaidDiagramIds(types)
  const chunkMap = collectMermaidDiagramChunkMap(vendorPublicPaths, fileByPublicPath)
  const matchedPublicPaths = [...new Set(diagramIds.flatMap((id) => chunkMap.get(id) || []))].sort()
  const missingDiagramIds = diagramIds.filter((id) => !chunkMap.has(id))

  if (types.size) {
    console.log('[precache-manifest] mermaid diagram chunks', JSON.stringify({
      types: [...types].sort(),
      diagramIds,
      chunks: matchedPublicPaths,
      missingDiagramIds,
    }, null, 2))
  }

  return matchedPublicPaths
}

const resolveCandidatePublicPath = (candidate, ownerPublicPath, fileByPublicPath) => {
  const value = stripUrlDecorators(candidate)
  if (!value || /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(value) || /^[a-z][a-z0-9+.-]*:/i.test(value)) {
    return ''
  }

  if (value.startsWith('/')) {
    const publicPath = normalizePublicPath(value)
    return fileByPublicPath.has(publicPath) ? publicPath : ''
  }

  if (value.includes('/')) {
    const rootPublicPath = normalizePublicPath(`/${value}`)
    if (fileByPublicPath.has(rootPublicPath)) return rootPublicPath
  }

  if (value.startsWith('./') || value.startsWith('../') || value.includes('/')) {
    const ownerDir = path.posix.dirname(ownerPublicPath)
    const publicPath = normalizePublicPath(path.posix.join(ownerDir, value))
    return fileByPublicPath.has(publicPath) ? publicPath : ''
  }

  return ''
}

const collectReferencedPublicPaths = (seedPublicPaths, fileByPublicPath, outputManifestPath) => {
  const selected = new Set()
  const queue = [...seedPublicPaths]

  while (queue.length) {
    const publicPath = queue.shift()
    if (!publicPath || selected.has(publicPath)) continue
    if (isIgnoredPublicPath(publicPath, outputManifestPath) || isBotRouteHtmlPath(publicPath)) continue

    selected.add(publicPath)
    if (!isTextPublicPath(publicPath)) continue

    const relativePath = fileByPublicPath.get(publicPath)
    if (!relativePath) continue

    const content = fs.readFileSync(path.join(distDir, relativePath), 'utf8')
    for (const candidate of extractCandidateValues(content, publicPath)) {
      const referencedPublicPath = resolveCandidatePublicPath(candidate, publicPath, fileByPublicPath)
      if (referencedPublicPath && !selected.has(referencedPublicPath)) {
        queue.push(referencedPublicPath)
      }
    }
  }

  return selected
}

const collectManifestCacheUrls = (manifest) => new Set(
  (manifest.entries || []).flatMap((entry) => [entry.url, ...(entry.aliases || [])]),
)

const collectManifestIndexedUrls = (manifest) => [...collectManifestCacheUrls(manifest)]

const findRequiredPatternMatches = (urls, patterns = []) => (
  Object.fromEntries(patterns.map((pattern) => [
    pattern,
    [...new Set(urls.filter((url) => url.includes(pattern)))],
  ]))
)

const dedupeManifestEntries = (entries) => {
  const byUrl = new Map()
  entries.forEach((entry) => {
    if (!entry?.url || byUrl.has(entry.url)) return
    byUrl.set(entry.url, entry)
  })
  return [...byUrl.values()].sort((a, b) => a.url.localeCompare(b.url))
}

const buildManifestPlan = (files, outputManifestPath) => {
  const fileByPublicPath = new Map(files.map((file) => [publicPathFromRelative(file), file]))
  const publicPaths = [...fileByPublicPath.keys()]
  const routeHtmlPublicPaths = publicPaths
    .filter((publicPath) => isNormalRouteHtmlPath(publicPath))
    .filter((publicPath) => !isIgnoredPublicPath(publicPath, outputManifestPath))
    .sort()
  const mermaidDependencyPublicPaths = collectMermaidDependencyPublicPaths(routeHtmlPublicPaths, fileByPublicPath)
  const selectedPublicPaths = collectReferencedPublicPaths(
    [...routeHtmlPublicPaths, ...mermaidDependencyPublicPaths],
    fileByPublicPath,
    outputManifestPath,
  )
  const routeEntries = routeHtmlPublicPaths
    .map(manifestEntryForPublicPath)
    .filter(Boolean)
  const referencedAssetEntries = [...selectedPublicPaths]
    .filter((publicPath) => !isNormalRouteHtmlPath(publicPath))
    .map(manifestEntryForPublicPath)
    .filter(Boolean)
  const entries = dedupeManifestEntries([
    ...routeEntries,
    ...referencedAssetEntries,
  ])
  const ignoredPublicPaths = publicPaths.filter((publicPath) => isIgnoredPublicPath(publicPath, outputManifestPath))
  const omittedPublicPaths = publicPaths
    .filter((publicPath) => !ignoredPublicPaths.includes(publicPath))
    .filter((publicPath) => !routeHtmlPublicPaths.includes(publicPath))
    .filter((publicPath) => !selectedPublicPaths.has(publicPath))
    .sort()

  return {
    entries,
    routeHtmlPublicPaths,
    selectedPublicPaths,
    omittedPublicPaths,
  }
}

const verifyManifest = (manifest, plan, outputManifestFile) => {
  if (!fs.existsSync(outputManifestFile)) {
    throw new TypeError(`Precache manifest was not written: ${outputManifestFile}`)
  }

  const cacheUrls = collectManifestCacheUrls(manifest)
  const indexedUrls = collectManifestIndexedUrls(manifest)
  const requiredPatternMatches = findRequiredPatternMatches(indexedUrls, cacheInspectionPatterns)
  const missingRequiredPatterns = Object.entries(requiredPatternMatches)
    .filter(([, matches]) => matches.length === 0)
    .map(([pattern]) => pattern)
  const missing = plan.entries
    .filter((entry) => !cacheUrls.has(entry.url))
    .map((entry) => entry.url)
  const missingRoutes = plan.routeHtmlPublicPaths
    .map(manifestEntryForPublicPath)
    .filter(Boolean)
    .filter((entry) => !cacheUrls.has(entry.url))
    .map((entry) => entry.url)
  const physicalHtmlUrls = [...cacheUrls].filter((url) => (
    url.endsWith(normalHtmlSuffix) ||
    url.endsWith(botHtmlSuffix)
  ))

  if (missing.length) {
    throw new TypeError(`Precache manifest is missing selected files:\n${missing.join('\n')}`)
  }
  if (missingRoutes.length) {
    throw new TypeError(`Precache manifest is missing route entries:\n${missingRoutes.join('\n')}`)
  }
  if (missingRequiredPatterns.length) {
    throw new TypeError(`Precache manifest is missing required cache path patterns:\n${missingRequiredPatterns.join('\n')}`)
  }
  if (physicalHtmlUrls.length) {
    throw new TypeError(`Precache manifest should use route URLs instead of physical HTML files:\n${physicalHtmlUrls.join('\n')}`)
  }
  if (cacheInspectionPatterns.length) {
    console.log('[precache-manifest] required pattern matches', JSON.stringify(requiredPatternMatches, null, 2))
  }
}

const run = async () => {
  if (!fs.existsSync(distDir)) {
    throw new TypeError('dist not found. Run the SSG build before generating the precache manifest.')
  }

  const outputManifestPath = normalizeManifestPath(manifestPath)
  const outputManifestFile = path.join(distDir, outputManifestPath.slice(1))
  const files = await globby('**/*', {
    cwd: distDir,
    onlyFiles: true,
    dot: true,
  })
  const plan = buildManifestPlan(files, outputManifestPath)

  const manifest = {
    version: 1,
    generatedAt: new Date().toISOString(),
    requiredCachePatterns: cacheInspectionPatterns,
    entries: plan.entries,
  }

  fs.mkdirSync(path.dirname(outputManifestFile), { recursive: true })
  fs.writeFileSync(outputManifestFile, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
  verifyManifest(manifest, plan, outputManifestFile)
  console.log(`Generated and verified precache manifest with ${manifest.entries.length} entries; omitted ${plan.omittedPublicPaths.length} unreferenced files.`)
}

await run().catch((err) => {
  console.error(err)
  process.exit(1)
})
