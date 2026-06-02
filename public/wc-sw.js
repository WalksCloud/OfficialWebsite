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
const runtimeCacheName = `${runtimeCachePrefix}${buildHash}`

const isRuntimeCacheName = (name = '') => name.startsWith(runtimeCachePrefix)

const isSameOriginUrl = (value) => {
  try {
    return new URL(value, self.location.origin).origin === self.location.origin
  } catch {
    return false
  }
}

const isIgnoredPath = (pathname = '') => (
  pathname === '/wc-sw.js' ||
  pathname === '/_worker.js' ||
  pathname === runtimeDocumentFallbackPath
)

const normalizeRuntimeUrl = (value) => {
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

const shouldUseCachedFallback = (response) => (
  response &&
  (response.status === 404 || response.status >= 500)
)

const isNavigationRequest = (request) => (
  request.mode === 'navigate' ||
  String(request.headers.get('Accept') || '').includes('text/html')
)

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
  await cache.put(request, response.clone())
  if (response.url && isSameOriginUrl(response.url) && response.url !== request.url) {
    await cache.put(response.url, response.clone())
  }
}

const matchRuntimeCache = async (request) => {
  for (const name of await getRuntimeCacheNamesForLookup()) {
    const cache = await caches.open(name)
    const cached = await cache.match(request)
    if (cached) return cached
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
  const request = new Request(href, {
    cache: 'reload',
    credentials: 'same-origin',
  })
  const response = await fetch(request)
  if (!isCacheableResponse(response)) return false
  await putRuntimeCache(request, response)
  return true
}

const cacheRuntimeUrls = async (urls = []) => {
  for (const url of urls) {
    try {
      await cacheRuntimeUrl(url)
    } catch {
      // Keep best-effort cache refresh from blocking other URLs.
    }
  }
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
      .map((name) => caches.delete(name)),
  )
}

const respondWithRuntimeCache = async (request) => {
  const cached = await matchRuntimeCache(request)
  const documentFallback = isNavigationRequest(request)
    ? await matchRuntimeDocumentFallback()
    : null
  try {
    const response = await fetch(request)
    if (shouldUseCachedFallback(response)) {
      return cached || documentFallback || response
    }
    await putRuntimeCache(request, response)
    return response
  } catch {
    if (cached) return cached
    if (documentFallback) return documentFallback
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
  }
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (!isRuntimeRequest(request)) return
  if (isNavigationRequest(request)) {
    event.respondWith(respondWithRuntimeCache(request))
    return
  }
  event.respondWith(respondWithRuntimeCache(request))
})
