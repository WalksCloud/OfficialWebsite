const DEFAULT_LOCALE = __WC_DEFAULT_LOCALE__
const LOCALES = __WC_LOCALES__
const REDIRECTS = __WC_REDIRECTS__
const BOT_USER_AGENT_RE = new RegExp(__WC_BOT_USER_AGENT_PATTERN__, 'i')

const htmlVaryHeaders = ['Accept-Language', 'User-Agent']

const isHtmlRequestMethod = (method) => method === 'GET' || method === 'HEAD'

const normalizePath = (pathname) => {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}

const appendVary = (headers, value) => {
  const existing = headers.get('Vary')
  if (!existing) {
    headers.set('Vary', value)
    return
  }
  const values = new Set(existing.split(',').map((item) => item.trim()).filter(Boolean))
  value.split(',').forEach((item) => {
    const trimmed = item.trim()
    if (trimmed) values.add(trimmed)
  })
  headers.set('Vary', [...values].join(', '))
}

const withHtmlVary = (response) => {
  const headers = new Headers(response.headers)
  appendVary(headers, htmlVaryHeaders.join(', '))
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

const isFileRequest = (pathname) => /\/[^/]+\.[^/]+$/.test(pathname)

const isInternalFile = (pathname) =>
  pathname === '/.nginx-redirects.map' || pathname === '/_worker.js'

const selectLocale = (acceptLanguage = '') => {
  const header = String(acceptLanguage || '').toLowerCase()
  if (header.includes('zh-tw') && LOCALES.includes('zh-tw')) return 'zh-tw'
  if (header.includes('zh') && LOCALES.includes('zh-tw')) return 'zh-tw'
  if (header.includes('en') && LOCALES.includes('en')) return 'en'
  return DEFAULT_LOCALE
}

const hasLocalePrefix = (pathname) => {
  const firstSegment = normalizePath(pathname).split('/').filter(Boolean)[0]
  return LOCALES.includes(firstSegment)
}

const stripLocalePrefix = (pathname) => {
  const normalized = normalizePath(pathname)
  const segments = normalized.split('/').filter(Boolean)
  if (!segments.length || !LOCALES.includes(segments[0])) return pathname
  const preserveTrailingSlash = pathname.endsWith('/') && pathname !== '/'
  const stripped = `/${segments.slice(1).join('/')}`
  if (stripped === '/') return '/'
  return preserveTrailingSlash ? `${stripped}/` : stripped
}

const getLocalePrefix = (pathname) => {
  const firstSegment = normalizePath(pathname).split('/').filter(Boolean)[0]
  return LOCALES.includes(firstSegment) ? firstSegment : ''
}

const indexCandidate = (pathname, variant) => {
  const normalized = normalizePath(pathname)
  return normalized === '/' ? `/index.${variant}.html` : `${normalized}/index.${variant}.html`
}

const dedupe = (items) => [...new Set(items.filter(Boolean))]

const buildRootCandidates = (locale, variant) =>
  dedupe([
    indexCandidate(`/${locale}`, variant),
    indexCandidate(`/${locale}`, 'normal'),
  ])

const buildPrefixedCandidates = (pathname, variant) =>
  dedupe([
    pathname,
    indexCandidate(pathname, variant),
    indexCandidate(pathname, 'normal'),
  ])

const buildNonPrefixedCandidates = (pathname, locale, variant) => {
  const normalized = normalizePath(pathname)
  const localizedPath = normalized === '/' ? `/${locale}` : `/${locale}${normalized}`
  return dedupe([
    localizedPath,
    indexCandidate(localizedPath, variant),
    indexCandidate(localizedPath, 'normal'),
  ])
}

const buildNotFoundCandidates = (locale, variant) =>
  dedupe([
    indexCandidate(`/${locale}/404`, variant),
    indexCandidate(`/${locale}/404`, 'normal'),
    ...LOCALES.flatMap((locale) => [
      indexCandidate(`/${locale}/404`, variant),
      indexCandidate(`/${locale}/404`, 'normal'),
    ]),
  ])

const createAssetRequest = (request, pathname) => {
  const url = new URL(request.url)
  url.pathname = pathname
  return new Request(url, {
    method: request.method,
    headers: request.headers,
  })
}

const fetchFirstAsset = async (request, env, candidates) => {
  for (const candidate of candidates) {
    const response = await env.ASSETS.fetch(createAssetRequest(request, candidate))
    if (response.status !== 404) return response
  }
  return null
}

const redirectResponse = (url, targetPath, status = 301) => {
  const headers = new Headers()
  headers.set('Location', `${targetPath}${url.search}`)
  appendVary(headers, 'Accept-Language')
  return new Response(null, {
    status,
    headers,
  })
}

const resolveRedirectTarget = (pathname) =>
  REDIRECTS[pathname] || REDIRECTS[normalizePath(pathname)] || ''

const serveNotFound = async (request, env, locale, variant) => {
  const response = await fetchFirstAsset(request, env, buildNotFoundCandidates(locale, variant))
  if (!response) return new Response('Not found', { status: 404 })
  return withHtmlVary(new Response(response.body, {
    status: 404,
    statusText: 'Not Found',
    headers: response.headers,
  }))
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const pathname = url.pathname

    if (isInternalFile(pathname)) {
      return new Response('Not found', { status: 404 })
    }

    if (!isHtmlRequestMethod(request.method) || isFileRequest(pathname)) {
      return env.ASSETS.fetch(request)
    }

    const redirectTarget = resolveRedirectTarget(pathname)
    if (redirectTarget) {
      return redirectResponse(url, redirectTarget)
    }

    const locale = selectLocale(request.headers.get('Accept-Language'))
    const userAgent = request.headers.get('User-Agent') || ''
    const isBot = BOT_USER_AGENT_RE.test(userAgent)
    const variant = isBot ? 'bot' : 'normal'

    if (pathname === '/') {
      const response = await fetchFirstAsset(request, env, buildRootCandidates(locale, variant))
      return response ? withHtmlVary(response) : serveNotFound(request, env, locale, variant)
    }

    if (hasLocalePrefix(pathname)) {
      const prefix = getLocalePrefix(pathname)
      if (!isBot && prefix === locale) {
        return redirectResponse(url, stripLocalePrefix(pathname), 302)
      }
      const response = await fetchFirstAsset(request, env, buildPrefixedCandidates(pathname, variant))
      return response ? withHtmlVary(response) : serveNotFound(request, env, prefix, variant)
    }

    const response = await fetchFirstAsset(request, env, buildNonPrefixedCandidates(pathname, locale, variant))
    return response ? withHtmlVary(response) : serveNotFound(request, env, locale, variant)
  },
}
