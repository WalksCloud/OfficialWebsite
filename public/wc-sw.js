const serviceWorkerParams = new URL(self.location.href).searchParams
const buildHash = serviceWorkerParams.get('v') || 'dev'
const runtimeCachePrefix = serviceWorkerParams.get('cachePrefix') || 'walkscloud-runtime-'
const normalizeInternalPath = (value, fallback) => {
  try {
    const url = new URL(value, self.location.origin)
    return url.origin === self.location.origin ? url.pathname : fallback
  } catch {
    return fallback
  }
}
const runtimeDocumentFallbackPath = normalizeInternalPath(
  serviceWorkerParams.get('fallbackPath'),
  '/__wc-runtime-document-fallback__',
)
const precacheManifestPath = normalizeInternalPath(
  serviceWorkerParams.get('precacheManifestPath'),
  '/wc-precache-manifest.json',
)
const precacheStatePath = `${precacheManifestPath}.state`
const runtimeCacheName = `${runtimeCachePrefix}${buildHash}`
const precachePendingCacheSuffix = '__precache_pending'
const precachePendingCacheName = `${runtimeCacheName}${precachePendingCacheSuffix}`
const offlineCacheHeaderName = 'X-WalksCloud-Offline-Cache'
const offlineCacheModeHeaderName = 'X-WalksCloud-Offline-Cache-Mode'
const offlineCacheMessageType = 'WALKSCLOUD_OFFLINE_CACHE_RESPONSE'
const precacheProgressMessageType = 'WALKSCLOUD_PRECACHE_PROGRESS'
const precacheProgressPorts = new Set()

const cacheLog = (action, details = {}) => {
  console.log(`[WalksCloud cache] ${action}`, details)
}

const cacheWarn = (action, details = {}) => {
  console.warn(`[WalksCloud cache] ${action}`, details)
}

const isRuntimeCacheName = (name = '') => (
  name.startsWith(runtimeCachePrefix) &&
  !name.endsWith(precachePendingCacheSuffix)
)

const isPhysicalVariantHtmlPath = (pathname = '') => /\/index\.(?:normal|bot)\.html$/i.test(pathname)

const isIgnoredPath = (pathname = '') => (
  pathname === '/wc-sw.js' ||
  pathname === '/_worker.js' ||
  pathname === precacheManifestPath ||
  pathname === precacheStatePath ||
  pathname === runtimeDocumentFallbackPath ||
  isPhysicalVariantHtmlPath(pathname)
)

const normalizeRuntimeUrl = (value) => {
  if (!String(value || '').trim()) return ''
  try {
    const url = new URL(value, self.location.origin)
    if (url.origin !== self.location.origin || isIgnoredPath(url.pathname)) return ''
    return url.href
  } catch {
    return ''
  }
}

const isCacheableResponse = (response) => (
  response &&
  response.status === 200 &&
  ['basic', 'default'].includes(response.type)
)

const isRedirectResponse = (response) => (
  response &&
  [301, 302, 303, 307, 308].includes(response.status)
)

const normalizeRedirectTargetUrl = (currentUrl, response) => {
  const location = response?.headers?.get('Location') || ''
  if (!location) return ''
  try {
    const url = new URL(location, currentUrl)
    if (url.origin !== self.location.origin || isIgnoredPath(url.pathname)) return ''
    return url.href
  } catch {
    return ''
  }
}

const fetchFollowingSameOriginRedirects = async (url, options = {}) => {
  const initialUrl = normalizeRuntimeUrl(url)
  const visitedUrls = new Set(initialUrl ? [initialUrl] : [])
  const redirectChain = []
  let currentUrl = initialUrl

  while (currentUrl) {
    const request = new Request(currentUrl, {
      ...options,
      redirect: 'follow',
    })
    const response = await fetch(request)
    if (!isRedirectResponse(response)) {
      return {
        response,
        requestUrl: currentUrl,
        redirectChain,
      }
    }

    const nextUrl = normalizeRedirectTargetUrl(currentUrl, response)
    redirectChain.push({
      from: currentUrl,
      to: nextUrl,
      status: response.status,
      location: response.headers.get('Location') || '',
    })
    if (!nextUrl || visitedUrls.has(nextUrl)) {
      return {
        response,
        requestUrl: currentUrl,
        redirectChain,
      }
    }
    visitedUrls.add(nextUrl)
    currentUrl = nextUrl
  }

  return {
    response: null,
    requestUrl: '',
    redirectChain,
  }
}

const shouldUseCachedFallback = (response) => (
  response &&
  response.status >= 400
)

const isNavigationRequest = (request) => (
  request.mode === 'navigate' ||
  String(request.headers.get('Accept') || '').includes('text/html')
)

const isFilePath = (pathname = '') => /\/[^/]+\.[^/]+$/.test(pathname)

const createCacheStorageResponse = (response) => {
  const headers = new Headers(response.headers)
  headers.delete('Vary')
  return new Response(response.clone().body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

const listCacheRequestUrls = async (cacheName) => {
  const cache = await caches.open(cacheName)
  return (await cache.keys()).map((request) => request.url)
}

const uniqueUrls = (urls = []) => [...new Set(urls.filter(Boolean))]

const deleteCacheWithLog = async (cacheName, reason) => {
  const urls = await listCacheRequestUrls(cacheName).catch(() => [])
  const deleted = await caches.delete(cacheName)
  cacheLog('delete cache', {
    cacheName,
    reason,
    deleted,
    entryCount: urls.length,
    urls,
  })
  return {
    cacheName,
    deleted,
    entryCount: urls.length,
    urls,
  }
}

const clearAllCachesWithLog = async (reason = 'manual') => {
  const cacheNames = await caches.keys()
  cacheLog('clear all caches start', {
    reason,
    cacheNames,
  })
  const deletedCaches = []
  for (const cacheName of cacheNames) {
    deletedCaches.push(await deleteCacheWithLog(cacheName, reason))
  }
  cacheLog('clear all caches complete', {
    reason,
    deletedCacheCount: deletedCaches.filter((entry) => entry.deleted).length,
    deletedCaches,
  })
  return deletedCaches
}

const normalizeInspectionPatterns = (patterns = []) => (
  Array.isArray(patterns)
    ? patterns.map((pattern) => String(pattern || '').trim()).filter(Boolean)
    : []
)

const matchInspectionPatterns = (urls = [], patterns = []) => (
  Object.fromEntries(patterns.map((pattern) => [
    pattern,
    uniqueUrls(urls.filter((url) => url.includes(pattern))),
  ]))
)

const findMissingInspectionPatterns = (urls = [], patterns = []) => (
  Object.entries(matchInspectionPatterns(urls, patterns))
    .filter(([, matches]) => matches.length === 0)
    .map(([pattern]) => pattern)
)

const inspectCachesWithLog = async (patterns = []) => {
  const normalizedPatterns = normalizeInspectionPatterns(patterns)
  const cacheNames = await caches.keys()
  const cachesReport = []
  for (const cacheName of cacheNames) {
    const urls = await listCacheRequestUrls(cacheName).catch(() => [])
    cachesReport.push({
      cacheName,
      entryCount: urls.length,
      urls,
      ...(normalizedPatterns.length
        ? { patternMatches: matchInspectionPatterns(urls, normalizedPatterns) }
        : {}),
    })
  }
  const allUrls = cachesReport.flatMap((entry) => entry.urls)
  const report = {
    patterns: normalizedPatterns,
    cacheCount: cachesReport.length,
    entryCount: allUrls.length,
    ...(normalizedPatterns.length
      ? { patternMatches: matchInspectionPatterns(allUrls, normalizedPatterns) }
      : {}),
    caches: cachesReport,
  }
  cacheLog('inspect caches', report)
  return report
}

const notifyOfflineCacheResponse = async (url) => {
  const windowClients = await self.clients.matchAll({
    type: 'window',
    includeUncontrolled: true,
  })
  windowClients.forEach((client) => {
    client.postMessage({
      type: offlineCacheMessageType,
      url,
    })
  })
}

const buildPrecacheProgressPayload = ({
  status = 'running',
  completed = 0,
  total = 0,
  url = '',
  reason = '',
} = {}) => {
  const normalizedTotal = Math.max(0, Number(total) || 0)
  const normalizedCompleted = Math.min(Math.max(0, Number(completed) || 0), normalizedTotal)
  const percent = normalizedTotal > 0
    ? Number(((normalizedCompleted / normalizedTotal) * 100).toFixed(2))
    : 0
  return {
    type: precacheProgressMessageType,
    buildHash,
    runtimeCacheName,
    status,
    completed: normalizedCompleted,
    total: normalizedTotal,
    percent,
    url,
    reason,
  }
}

const postPrecacheProgressToPort = (port, payload) => {
  try {
    port?.postMessage(payload)
  } catch {
    precacheProgressPorts.delete(port)
  }
}

const notifyPrecacheProgress = async (progress = {}, port = null) => {
  const payload = buildPrecacheProgressPayload(progress)
  const counter = `${payload.completed}/${payload.total}`
  cacheLog(`precache progress ${counter} (${payload.percent}%) ${payload.status}`, {
    status: payload.status,
    completed: payload.completed,
    total: payload.total,
    percent: payload.percent,
    counter,
    url: payload.url,
    reason: payload.reason,
    buildHash: payload.buildHash,
    runtimeCacheName: payload.runtimeCacheName,
  })
  new Set([port, ...precacheProgressPorts].filter(Boolean)).forEach((progressPort) => {
    postPrecacheProgressToPort(progressPort, payload)
  })
  const windowClients = await self.clients.matchAll({
    type: 'window',
    includeUncontrolled: true,
  })
  windowClients.forEach((client) => {
    client.postMessage(payload)
  })
}

const withOfflineCacheMarker = async (response, request, event, mode = 'exact') => {
  if (!response) return response

  const headers = new Headers(response.headers)
  headers.set(offlineCacheHeaderName, '1')
  headers.set(offlineCacheModeHeaderName, mode)

  if (!isNavigationRequest(request)) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  }

  event?.waitUntil(notifyOfflineCacheResponse(request.url))

  const contentType = String(headers.get('Content-Type') || '').toLowerCase()
  if (!contentType.includes('text/html')) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  }

  const markerScript = `<script>window.__WC_OFFLINE_CACHE_HIT__=${JSON.stringify({
    url: request.url,
    buildHash,
    mode,
  })}</script>`
  const html = await response.text()
  const markedHtml = html.includes('</head>')
    ? html.replace('</head>', `${markerScript}\n</head>`)
    : `${markerScript}\n${html}`

  return new Response(markedHtml, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

const isRuntimeRequest = (request) => {
  if (request.method !== 'GET') return false
  const url = new URL(request.url)
  return url.origin === self.location.origin && !isIgnoredPath(url.pathname)
}

const getRuntimeCacheNames = async () => (
  (await caches.keys()).filter(isRuntimeCacheName)
)

const getRuntimeCacheNamesForLookup = async () => {
  const names = await getRuntimeCacheNames()
  return [
    runtimeCacheName,
    ...names.filter((name) => name !== runtimeCacheName),
  ]
}

const putRuntimeCache = async (request, response) => {
  if (!isCacheableResponse(response)) return
  const cache = await caches.open(runtimeCacheName)
  await cache.put(request, createCacheStorageResponse(response))
  cacheLog('cache runtime response', {
    cacheName: runtimeCacheName,
    requestUrl: request.url,
    responseUrl: response.url || '',
    status: response.status,
    contentType: response.headers.get('Content-Type') || '',
  })
}

const putRuntimeCacheEntries = async (cache, cacheName, urls = [], response) => {
  const normalizedUrls = uniqueUrls(urls.map(normalizeRuntimeUrl))
  for (const url of normalizedUrls) {
    await cache.put(new Request(url), createCacheStorageResponse(response))
    cacheLog('cache response entry', {
      cacheName,
      url,
      responseUrl: response.url || '',
      status: response.status,
      contentType: response.headers.get('Content-Type') || '',
    })
  }
  return normalizedUrls
}

const putPrecacheEntry = async (cache, cacheName, entry) => {
  const fetchResult = await fetchFollowingSameOriginRedirects(entry.url, {
    cache: 'reload',
    credentials: 'same-origin',
  })
  const response = fetchResult.response
  if (!isCacheableResponse(response)) {
    cacheWarn('skip precache entry because response is not cacheable', {
      cacheName,
      url: entry.url,
      aliases: entry.aliases,
      requestUrl: fetchResult.requestUrl,
      responseUrl: response?.url || '',
      redirected: Boolean(response?.redirected || fetchResult.redirectChain.length),
      redirectChain: fetchResult.redirectChain,
      status: response?.status,
      type: response?.type,
    })
    return null
  }
  const cachedUrls = await putRuntimeCacheEntries(
    cache,
    cacheName,
    [entry.url, ...entry.aliases, response.url],
    response,
  )
  const result = {
    cacheName,
    url: entry.url,
    aliases: entry.aliases,
    requestUrl: fetchResult.requestUrl,
    responseUrl: response.url || '',
    redirected: Boolean(response.redirected || fetchResult.redirectChain.length),
    redirectChain: fetchResult.redirectChain,
    status: response.status,
    contentType: response.headers.get('Content-Type') || '',
    cachedUrls,
  }
  cacheLog('precache entry cached', result)
  return result
}

const fetchPrecacheManifest = async () => {
  const manifestUrl = new URL(precacheManifestPath, self.location.origin)
  manifestUrl.searchParams.set('v', buildHash)
  const response = await fetch(new Request(manifestUrl.href, {
    cache: 'reload',
    credentials: 'same-origin',
    redirect: 'follow',
  }))
  if (!isCacheableResponse(response)) return null
  return response.json()
}

const normalizePrecacheEntry = (entry) => {
  if (typeof entry === 'string') {
    return {
      url: normalizeRuntimeUrl(entry),
      aliases: [],
    }
  }
  if (!entry || typeof entry !== 'object') {
    return {
      url: '',
      aliases: [],
    }
  }
  return {
    url: normalizeRuntimeUrl(entry.url),
    aliases: Array.isArray(entry.aliases)
      ? entry.aliases.map(normalizeRuntimeUrl).filter(Boolean)
      : [],
  }
}

const buildPrecacheStaticUpdatePlan = (previousCachedUrls = [], entries = []) => {
  const targetStaticUrls = uniqueUrls(entries.flatMap((entry) => [entry.url, ...entry.aliases]))
  const previousSet = new Set(previousCachedUrls)
  const targetSet = new Set(targetStaticUrls)
  const addedStaticUrls = targetStaticUrls.filter((url) => !previousSet.has(url))
  const updatedStaticUrls = targetStaticUrls.filter((url) => previousSet.has(url))
  const removedCachedUrls = previousCachedUrls.filter((url) => !targetSet.has(url))

  return {
    previousCachedCount: previousCachedUrls.length,
    targetStaticCount: targetStaticUrls.length,
    addedStaticCount: addedStaticUrls.length,
    updatedStaticCount: updatedStaticUrls.length,
    removedCachedCount: removedCachedUrls.length,
    targetStaticUrls,
    addedStaticUrls,
    updatedStaticUrls,
    removedCachedUrls,
  }
}

const buildPrecacheStateSignature = (manifest) => JSON.stringify({
  version: manifest?.version || 1,
  generatedAt: manifest?.generatedAt || '',
  requiredCachePatterns: manifest?.requiredCachePatterns || [],
  entries: manifest?.entries || [],
})

const readPrecacheStateSignature = async (cache) => {
  const cached = await cache.match(new Request(new URL(precacheStatePath, self.location.origin)))
  if (!cached) return ''
  try {
    return (await cached.json())?.signature || ''
  } catch {
    return ''
  }
}

const writePrecacheStateSignature = async (cache, signature) => {
  await cache.put(
    new Request(new URL(precacheStatePath, self.location.origin)),
    new Response(JSON.stringify({ signature }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }),
  )
}

let precacheFullSitePromise = null

const copyCacheEntries = async (sourceCacheName, targetCacheName) => {
  const sourceCache = await caches.open(sourceCacheName)
  const targetCache = await caches.open(targetCacheName)
  const requests = await sourceCache.keys()
  const copiedUrls = []
  for (const request of requests) {
    const response = await sourceCache.match(request)
    if (!response) continue
    await targetCache.put(request, response.clone())
    copiedUrls.push(request.url)
  }
  cacheLog('copy cache entries', {
    sourceCacheName,
    targetCacheName,
    copiedCount: copiedUrls.length,
    copiedUrls,
  })
  return copiedUrls
}

const deleteCacheEntriesWithLog = async (cacheName, urls = [], reason) => {
  const cache = await caches.open(cacheName)
  const deletedUrls = []
  const missingUrls = []

  for (const url of uniqueUrls(urls)) {
    const deleted = await cache.delete(new Request(url))
    if (deleted) {
      deletedUrls.push(url)
    } else {
      missingUrls.push(url)
    }
  }

  const result = {
    cacheName,
    reason,
    requestedCount: uniqueUrls(urls).length,
    deletedCount: deletedUrls.length,
    missingCount: missingUrls.length,
    deletedUrls,
    missingUrls,
  }
  cacheLog('delete cache entries', result)
  return result
}

const findMissingCachedUrls = async (cacheName, urls = []) => {
  const cache = await caches.open(cacheName)
  const missingUrls = []
  for (const url of uniqueUrls(urls)) {
    const cached = await cache.match(new Request(url))
    if (!cached) missingUrls.push(url)
  }
  return missingUrls
}

const verifyCacheMatchesManifest = async (cacheName, targetUrls = [], requiredPatterns = []) => {
  const cachedUrls = await listCacheRequestUrls(cacheName).catch(() => [])
  const missingCachedUrls = await findMissingCachedUrls(cacheName, targetUrls)
  const requiredPatternMatches = matchInspectionPatterns(cachedUrls, requiredPatterns)
  const missingRequiredPatterns = findMissingInspectionPatterns(cachedUrls, requiredPatterns)

  return {
    cacheName,
    cachedUrls,
    missingCachedUrls,
    missingCachedCount: missingCachedUrls.length,
    requiredPatternMatches,
    missingRequiredPatterns,
  }
}

const runPrecacheFullSite = async ({ force = false, progressPort = null } = {}) => {
  await notifyPrecacheProgress({
    status: 'start',
  }, progressPort)
  const manifest = await fetchPrecacheManifest()
  const entries = Array.isArray(manifest?.entries)
    ? manifest.entries.map(normalizePrecacheEntry).filter((entry) => entry.url)
    : []
  const requiredCachePatterns = normalizeInspectionPatterns(manifest?.requiredCachePatterns || [])
  if (!entries.length) {
    cacheWarn('precache manifest has no entries', {
      precacheManifestPath,
      buildHash,
    })
    await notifyPrecacheProgress({
      status: 'empty',
      reason: 'precache manifest has no entries',
    }, progressPort)
    return {
      status: 'empty',
      reason: 'precache manifest has no entries',
      runtimeCacheName,
      precacheManifestPath,
      buildHash,
    }
  }

  await notifyPrecacheProgress({
    status: 'running',
    completed: 0,
    total: entries.length,
    reason: 'manifest loaded',
  }, progressPort)

  const cache = await caches.open(runtimeCacheName)
  const signature = buildPrecacheStateSignature(manifest)
  const previousCachedUrls = await listCacheRequestUrls(runtimeCacheName).catch(() => [])
  const staticUpdatePlan = buildPrecacheStaticUpdatePlan(previousCachedUrls, entries)
  const signatureUnchanged = signature === await readPrecacheStateSignature(cache)
  if (!force && signatureUnchanged && staticUpdatePlan.addedStaticCount === 0) {
    cacheLog('precache skipped because manifest signature is unchanged', {
      cacheName: runtimeCacheName,
      manifestEntryCount: entries.length,
      requiredCachePatterns,
      buildHash,
      generatedAt: manifest?.generatedAt || '',
      staticUpdatePlan,
    })
    await notifyPrecacheProgress({
      status: 'skipped',
      completed: entries.length,
      total: entries.length,
      reason: 'manifest signature unchanged and static cache entries are complete',
    }, progressPort)
    return {
      status: 'skipped',
      reason: 'manifest signature unchanged and static cache entries are complete',
      runtimeCacheName,
      manifestEntryCount: entries.length,
      requiredCachePatterns,
      staticUpdatePlan,
    }
  }

  cacheLog('precache start', {
    runtimeCacheName,
    precachePendingCacheName,
    manifestEntryCount: entries.length,
    requiredCachePatterns,
    buildHash,
    generatedAt: manifest?.generatedAt || '',
    force,
    signatureUnchanged,
  })

  cacheLog('precache static update plan', {
    runtimeCacheName,
    precachePendingCacheName,
    buildHash,
    ...staticUpdatePlan,
  })

  await deleteCacheWithLog(precachePendingCacheName, 'clear pending precache before caching new manifest')
  const pendingCache = await caches.open(precachePendingCacheName)
  const cachedEntries = []
  const failedEntries = []
  let processedEntryCount = 0

  for (const entry of entries) {
    try {
      const result = await putPrecacheEntry(pendingCache, precachePendingCacheName, entry)
      if (result) {
        cachedEntries.push(result)
      } else {
        failedEntries.push(entry)
      }
    } catch (error) {
      failedEntries.push(entry)
      cacheWarn('precache entry failed', {
        url: entry.url,
        aliases: entry.aliases,
        error: String(error?.message || error),
      })
      // Retry the full manifest on the next registration/message instead of marking it complete.
    }
    processedEntryCount += 1
    await notifyPrecacheProgress({
      status: 'running',
      completed: processedEntryCount,
      total: entries.length,
      url: entry.url,
    }, progressPort)
  }

  await notifyPrecacheProgress({
    status: 'verifying',
    completed: processedEntryCount,
    total: entries.length,
  }, progressPort)

  if (cachedEntries.length !== entries.length) {
    cacheWarn('precache incomplete; active cache was not replaced', {
      runtimeCacheName,
      precachePendingCacheName,
      activeCachePreserved: true,
      deletedCacheName: precachePendingCacheName,
      expectedEntryCount: entries.length,
      cachedEntryCount: cachedEntries.length,
      failedEntryCount: failedEntries.length,
      failedEntries,
      requiredCachePatterns,
      staticUpdatePlan,
    })
    await deleteCacheWithLog(precachePendingCacheName, 'remove incomplete pending precache; active cache preserved')
    await notifyPrecacheProgress({
      status: 'incomplete',
      completed: cachedEntries.length,
      total: entries.length,
      reason: 'one or more precache entries failed',
    }, progressPort)
    return {
      status: 'incomplete',
      runtimeCacheName,
      precachePendingCacheName,
      expectedEntryCount: entries.length,
      cachedEntryCount: cachedEntries.length,
      failedEntryCount: failedEntries.length,
      failedEntries,
      requiredCachePatterns,
      staticUpdatePlan,
    }
  }

  const pendingVerification = await verifyCacheMatchesManifest(
    precachePendingCacheName,
    staticUpdatePlan.targetStaticUrls,
    requiredCachePatterns,
  )
  if (
    pendingVerification.missingCachedUrls.length ||
    pendingVerification.missingRequiredPatterns.length
  ) {
    cacheWarn('precache pending cache verification failed; active cache was not changed', {
      runtimeCacheName,
      precachePendingCacheName,
      expectedCachedCount: staticUpdatePlan.targetStaticUrls.length,
      missingCachedCount: pendingVerification.missingCachedCount,
      missingCachedUrls: pendingVerification.missingCachedUrls,
      requiredCachePatterns,
      requiredPatternMatches: pendingVerification.requiredPatternMatches,
      missingRequiredPatterns: pendingVerification.missingRequiredPatterns,
    })
    await deleteCacheWithLog(precachePendingCacheName, 'remove pending precache after failed pending cache verification')
    await notifyPrecacheProgress({
      status: 'incomplete',
      completed: cachedEntries.length,
      total: entries.length,
      reason: 'pending cache verification failed before active cache replacement',
    }, progressPort)
    return {
      status: 'incomplete',
      reason: 'pending cache verification failed before active cache replacement',
      runtimeCacheName,
      precachePendingCacheName,
      manifestEntryCount: entries.length,
      cachedEntryCount: cachedEntries.length,
      missingCachedCount: pendingVerification.missingCachedCount,
      missingCachedUrls: pendingVerification.missingCachedUrls,
      requiredCachePatterns,
      requiredPatternMatches: pendingVerification.requiredPatternMatches,
      missingRequiredPatterns: pendingVerification.missingRequiredPatterns,
      staticUpdatePlan,
      cachedEntries,
    }
  }

  const copiedUrls = await copyCacheEntries(precachePendingCacheName, runtimeCacheName)
  const activeVerification = await verifyCacheMatchesManifest(
    runtimeCacheName,
    staticUpdatePlan.targetStaticUrls,
    requiredCachePatterns,
  )
  const nextCache = await caches.open(runtimeCacheName)
  const {
    missingCachedUrls,
    missingCachedCount,
    requiredPatternMatches,
    missingRequiredPatterns,
  } = activeVerification
  if (missingCachedUrls.length || missingRequiredPatterns.length) {
    cacheWarn('precache active cache verification failed; previous cache entries were preserved where possible', {
      runtimeCacheName,
      expectedCachedCount: staticUpdatePlan.targetStaticUrls.length,
      missingCachedCount,
      missingCachedUrls,
      requiredCachePatterns,
      requiredPatternMatches,
      missingRequiredPatterns,
      copiedUrlCount: copiedUrls.length,
      copiedUrls,
    })
    await deleteCacheWithLog(precachePendingCacheName, 'remove pending precache after failed active cache verification')
    await notifyPrecacheProgress({
      status: 'incomplete',
      completed: cachedEntries.length,
      total: entries.length,
      reason: 'active cache verification failed after verified precache copy',
    }, progressPort)
    return {
      status: 'incomplete',
      reason: 'active cache verification failed after verified precache copy',
      runtimeCacheName,
      manifestEntryCount: entries.length,
      cachedEntryCount: cachedEntries.length,
      copiedUrlCount: copiedUrls.length,
      missingCachedCount,
      missingCachedUrls,
      requiredCachePatterns,
      requiredPatternMatches,
      missingRequiredPatterns,
      staticUpdatePlan,
      cachedEntries,
      copiedUrls,
    }
  }
  const removedStaleEntries = await deleteCacheEntriesWithLog(
    runtimeCacheName,
    staticUpdatePlan.removedCachedUrls,
    'remove stale runtime cache entries after verified precache replacement',
  )
  await writePrecacheStateSignature(nextCache, signature)
  await deleteCacheWithLog(precachePendingCacheName, 'remove pending precache after active cache replacement')

  cacheLog('precache complete', {
    runtimeCacheName,
    manifestEntryCount: entries.length,
    cachedEntryCount: cachedEntries.length,
    copiedUrlCount: copiedUrls.length,
    verifiedCachedCount: staticUpdatePlan.targetStaticUrls.length,
    missingCachedCount: missingCachedUrls.length,
    missingCachedUrls,
    requiredCachePatterns,
    requiredPatternMatches,
    missingRequiredPatterns,
    staticUpdatePlan,
    removedStaleEntries,
    cachedEntries,
    copiedUrls,
  })
  await notifyPrecacheProgress({
    status: 'complete',
    completed: entries.length,
    total: entries.length,
  }, progressPort)
  return {
    status: 'complete',
    runtimeCacheName,
    manifestEntryCount: entries.length,
    cachedEntryCount: cachedEntries.length,
    copiedUrlCount: copiedUrls.length,
    verifiedCachedCount: staticUpdatePlan.targetStaticUrls.length,
    missingCachedCount: missingCachedUrls.length,
    missingCachedUrls,
    requiredCachePatterns,
    requiredPatternMatches,
    missingRequiredPatterns,
    staticUpdatePlan,
    removedStaleEntries,
    cachedEntries,
    copiedUrls,
  }
}

const precacheFullSite = async (options = {}) => {
  const progressPort = options.progressPort || null
  if (progressPort) {
    progressPort.start?.()
    precacheProgressPorts.add(progressPort)
  }
  const releaseProgressPort = () => {
    if (progressPort) {
      precacheProgressPorts.delete(progressPort)
    }
  }

  if (precacheFullSitePromise && !options.force) {
    return precacheFullSitePromise.finally(releaseProgressPort)
  }
  if (precacheFullSitePromise && options.force) {
    await precacheFullSitePromise
  }
  precacheFullSitePromise = runPrecacheFullSite(options)
    .catch(async (error) => {
      const reason = String(error?.message || error)
      cacheWarn('precache failed', {
        runtimeCacheName,
        precachePendingCacheName,
        buildHash,
        error: reason,
      })
      await notifyPrecacheProgress({
        status: 'failed',
        reason,
      }, options.progressPort)
      return {
        status: 'failed',
        reason,
        runtimeCacheName,
        precachePendingCacheName,
        buildHash,
      }
    })
    .finally(() => {
      precacheFullSitePromise = null
    })
  return precacheFullSitePromise.finally(releaseProgressPort)
}

const shouldUseDocumentFallbackForRequest = (request) => {
  const url = new URL(request.url)
  const normalizedPath = url.pathname.replace(/\/+$/, '') || '/'
  return normalizedPath === '/'
}

const buildCacheMatchRequests = (request) => {
  const url = new URL(request.url)
  const hrefs = new Set([url.href])
  const querylessUrl = new URL(url.href)
  querylessUrl.search = ''
  hrefs.add(querylessUrl.href)

  if (!isFilePath(url.pathname)) {
    const normalizedPath = url.pathname.replace(/\/+$/, '') || '/'
    const pathVariants = normalizedPath === '/'
      ? ['/']
      : [normalizedPath, `${normalizedPath}/`]
    for (const pathname of pathVariants) {
      const withSearch = new URL(url.href)
      withSearch.pathname = pathname
      hrefs.add(withSearch.href)

      const withoutSearch = new URL(withSearch.href)
      withoutSearch.search = ''
      hrefs.add(withoutSearch.href)
    }
  }

  return [...hrefs].map((href) => new Request(href))
}

const matchRuntimeCache = async (request) => {
  const requests = buildCacheMatchRequests(request)
  for (const name of await getRuntimeCacheNamesForLookup()) {
    const cache = await caches.open(name)
    for (const candidate of requests) {
      const cached = await cache.match(candidate)
      if (cached) return cached
    }
  }
  return null
}

const matchRuntimeDocumentFallback = async () => {
  const fallbackRequest = new Request(new URL(runtimeDocumentFallbackPath, self.location.origin))
  for (const name of await getRuntimeCacheNamesForLookup()) {
    const cache = await caches.open(name)
    const cachedFallback = await cache.match(fallbackRequest)
    if (cachedFallback) return cachedFallback
  }

  for (const name of await getRuntimeCacheNamesForLookup()) {
    const cache = await caches.open(name)
    for (const request of await cache.keys()) {
      const cached = await cache.match(request)
      const contentType = String(cached?.headers.get('Content-Type') || '').toLowerCase()
      if (contentType.includes('text/html')) return cached
    }
  }

  return null
}

const cacheRuntimeUrl = async (value) => {
  const href = normalizeRuntimeUrl(value)
  if (!href) return false
  const fetchResult = await fetchFollowingSameOriginRedirects(href, {
    cache: 'reload',
    credentials: 'same-origin',
  })
  const response = fetchResult.response
  if (!isCacheableResponse(response)) return false
  await putRuntimeCache(new Request(href), response)
  const responseUrl = normalizeRuntimeUrl(response.url)
  if (responseUrl && responseUrl !== href) {
    await putRuntimeCache(new Request(responseUrl), response.clone())
  }
  cacheLog('cache runtime url complete', {
    url: href,
    requestUrl: fetchResult.requestUrl,
    responseUrl: response.url || '',
    redirected: Boolean(response.redirected || fetchResult.redirectChain.length),
    redirectChain: fetchResult.redirectChain,
    status: response.status,
  })
  return true
}

const cacheRuntimeUrls = async (urls = []) => {
  const stats = {
    requestedCount: urls.length,
    cached: [],
    failed: [],
  }
  for (const url of urls) {
    try {
      if (await cacheRuntimeUrl(url)) {
        stats.cached.push(url)
      } else {
        stats.failed.push(url)
      }
    } catch (error) {
      stats.failed.push(url)
      cacheWarn('cache runtime url failed', {
        url,
        error: String(error?.message || error),
      })
      // Keep best-effort cache refresh from blocking other URLs.
    }
  }
  cacheLog('cache runtime urls complete', stats)
}

const cacheRuntimeDocument = async ({ url, html }) => {
  const href = normalizeRuntimeUrl(url)
  if (!href || !html) return false
  const cache = await caches.open(runtimeCacheName)
  const response = new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
  await cache.put(new Request(href), response.clone())
  await cache.put(new Request(new URL(runtimeDocumentFallbackPath, self.location.origin)), response.clone())
  cacheLog('cache runtime document', {
    cacheName: runtimeCacheName,
    url: href,
    fallbackPath: runtimeDocumentFallbackPath,
    htmlLength: html.length,
  })
  return true
}

const collectRuntimeCacheUrls = async () => {
  const urls = new Set()
  for (const name of await getRuntimeCacheNames()) {
    const cache = await caches.open(name)
    for (const request of await cache.keys()) {
      const href = normalizeRuntimeUrl(request.url)
      if (href) urls.add(href)
    }
  }
  return [...urls]
}

const copyCachedFallback = async (url) => {
  const cached = await matchRuntimeCache(new Request(url))
  if (!cached) return false
  const cache = await caches.open(runtimeCacheName)
  await cache.put(url, cached.clone())
  return true
}

const refreshRuntimeCache = async (urls = []) => {
  cacheLog('refresh runtime cache start', {
    runtimeCacheName,
    urls,
  })
  await precacheFullSite()

  const allUrls = new Set([
    ...(await collectRuntimeCacheUrls()),
    ...urls,
  ])

  for (const url of allUrls) {
    try {
      if (!(await cacheRuntimeUrl(url))) {
        await copyCachedFallback(url)
      }
    } catch {
      await copyCachedFallback(url)
    }
  }

  await Promise.all(
    (await getRuntimeCacheNames())
      .filter((name) => name !== runtimeCacheName)
      .map((name) => deleteCacheWithLog(name, 'delete stale runtime cache after refresh')),
  )

  cacheLog('refresh runtime cache complete', {
    runtimeCacheName,
    refreshedUrlCount: allUrls.size,
    refreshedUrls: [...allUrls],
  })
}

const respondWithRuntimeCache = async (request, event) => {
  const cached = await matchRuntimeCache(request)
  const documentFallback = isNavigationRequest(request) && shouldUseDocumentFallbackForRequest(request)
    ? await matchRuntimeDocumentFallback()
    : null
  try {
    const response = await fetch(request)
    if (shouldUseCachedFallback(response)) {
      const fallback = cached || documentFallback
      cacheLog('serve cached fallback for upstream error', {
        requestUrl: request.url,
        upstreamStatus: response.status,
        mode: cached ? 'exact' : 'document-fallback',
        hasFallback: Boolean(fallback),
      })
      return fallback
        ? withOfflineCacheMarker(fallback, request, event, cached ? 'exact' : 'document-fallback')
        : response
    }
    await putRuntimeCache(request, response)
    return response
  } catch (error) {
    cacheWarn('serve cached fallback for fetch failure', {
      requestUrl: request.url,
      error: String(error?.message || error),
      mode: cached ? 'exact' : 'document-fallback',
      hasCached: Boolean(cached),
      hasDocumentFallback: Boolean(documentFallback),
    })
    if (cached) return withOfflineCacheMarker(cached, request, event, 'exact')
    if (documentFallback) return withOfflineCacheMarker(documentFallback, request, event, 'document-fallback')
    throw new Error('Network unavailable and no cached response found.')
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('message', (event) => {
  const data = event.data || {}
  if (data.type === 'CACHE_RUNTIME_URLS') {
    event.waitUntil(cacheRuntimeUrls(data.urls || []))
    return
  }
  if (data.type === 'CACHE_RUNTIME_DOCUMENT') {
    event.waitUntil(cacheRuntimeDocument({
      url: data.url,
      html: data.html,
    }))
    return
  }
  if (data.type === 'REFRESH_RUNTIME_CACHE') {
    event.waitUntil(refreshRuntimeCache(data.urls || []))
    return
  }
  if (data.type === 'PRECACHE_FULL_SITE') {
    event.waitUntil((async () => {
      const report = await precacheFullSite({
        progressPort: event.ports?.[0] || null,
      })
      event.ports?.[0]?.postMessage({
        type: 'PRECACHE_FULL_SITE_RESULT',
        report,
      })
    })())
    return
  }
  if (data.type === 'FORCE_CACHE') {
    event.waitUntil((async () => {
      const report = await precacheFullSite({
        force: true,
        progressPort: event.ports?.[0] || null,
      })
      const cacheInspection = await inspectCachesWithLog(data.patterns || [])
      event.ports?.[0]?.postMessage({
        type: 'FORCE_CACHE_RESULT',
        report,
        cacheInspection,
      })
    })())
    return
  }
  if (data.type === 'INSPECT_CACHES') {
    event.waitUntil((async () => {
      const cacheInspection = await inspectCachesWithLog(data.patterns || [])
      event.ports?.[0]?.postMessage({
        type: 'INSPECT_CACHES_RESULT',
        cacheInspection,
      })
    })())
    return
  }
  if (data.type === 'CLEAR_ALL_CACHES') {
    event.waitUntil((async () => {
      const deletedCaches = await clearAllCachesWithLog(data.reason || 'message')
      event.ports?.[0]?.postMessage({
        type: 'CLEAR_ALL_CACHES_RESULT',
        deletedCaches,
      })
    })())
  }
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (!isRuntimeRequest(request)) return
  if (isNavigationRequest(request)) {
    event.respondWith(respondWithRuntimeCache(request, event))
    return
  }
  event.respondWith(respondWithRuntimeCache(request, event))
})
