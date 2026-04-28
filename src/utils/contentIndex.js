import YAML from 'yaml'
import lastmodRaw from 'virtual:content-lastmod.yaml'
import { getSiteConfig } from '@/utils/pageConfig'

const siteConfig = getSiteConfig()
const defaultLocale = siteConfig.defaultLocale || 'zh-tw'
const localeFallbackMap = siteConfig.localeFallbacks || {}

const toStringValue = (value) => {
  if (value == null) return ''
  return typeof value === 'string' ? value : String(value)
}

const normalizeSlug = (slug = '') => {
  const value = toStringValue(slug).replace(/^\/+/, '').replace(/\/+$/, '')
  return value ? `/${value}` : '/'
}

const parseDateValue = (value) => {
  if (!value) return null
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.valueOf())) return null
  return date
}

const buildLastmodIndex = () => {
  const entries = typeof lastmodRaw === 'object' && lastmodRaw ? Object.entries(lastmodRaw) : []
  const map = {}
  entries.forEach(([slug, timestamp]) => {
    const normalizedSlug = normalizeSlug(slug)
    if (!normalizedSlug || !timestamp) return
    const parsed = parseDateValue(timestamp)
    if (parsed) {
      map[normalizedSlug] = parsed
    }
  })
  return map
}

const lastmodIndex = buildLastmodIndex()

const contentModules = import.meta.glob('../content/**/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
})

const slugIndex = new Map()

const parseFrontmatter = (raw = '') => {
  const content = toStringValue(raw)
  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/)
  if (!fmMatch) return { meta: {}, body: content }
  const meta = YAML.parse(fmMatch[1]) || {}
  if (meta.date) {
    const parsed = new Date(meta.date)
    if (!Number.isNaN(parsed.valueOf())) meta.__date = parsed
  } else if (meta.lastmod) {
    const parsed = new Date(meta.lastmod)
    if (!Number.isNaN(parsed.valueOf())) meta.__date = parsed
  }
  const body = content.slice(fmMatch[0].length)
  return { meta, body }
}

const localeFromFilename = (path = '') => {
  const m = path.match(/\.([a-z-]+)\.md$/i)
  return m ? m[1] : defaultLocale
}

const baseFromPath = (path = '') => path.replace(/\.([a-z-]+)\.md$/i, '').replace(/^..\//, '')

const getLastmodDate = (slug) => {
  if (!slug) return null
  const normalizedSlug = normalizeSlug(slug)
  return lastmodIndex[normalizedSlug] || null
}

Object.entries(contentModules).forEach(([path, raw]) => {
  const { meta, body } = parseFrontmatter(raw)
  const locale = localeFromFilename(path)
  const base = baseFromPath(path)
  const inferredSlug = normalizeSlug(
    meta.slug ? String(meta.slug) : base.split('/').slice(1).join('/'),
  )
  const entry = slugIndex.get(inferredSlug) || { locales: {}, type: meta.type || 'page' }
  const lastmodDate = getLastmodDate(inferredSlug)
  entry.locales[locale] = {
    title: meta.title || '',
    description: meta.description || '',
    body,
    deploy: meta.deploy !== false,
    __date: lastmodDate || meta.__date || null,
  }
  entry.type = meta.type || entry.type
  slugIndex.set(inferredSlug, entry)
})

const unique = (arr = []) => [...new Set(arr)]

const normalizeFallbackList = (value) => {
  if (!value) return []
  if (Array.isArray(value)) return value
  return [value]
}

const getFallbackCandidates = (requestedLocale, availableLocales = [], extraFallbacks = []) => {
  const configuredFallbacks = Array.isArray(localeFallbackMap[requestedLocale])
    ? localeFallbackMap[requestedLocale]
    : []
  return unique([
    ...configuredFallbacks,
    ...normalizeFallbackList(extraFallbacks),
    defaultLocale,
    ...availableLocales,
  ]).filter((loc) => loc && loc !== requestedLocale)
}

export const resolveContentInfo = (slug, requestedLocale, options = {}) => {
  const entry = slugIndex.get(slug)
  if (!entry) return null
  const locales = entry.locales || {}
  const availableLocales = Object.keys(locales).filter((loc) => locales[loc]?.deploy !== false)
  if (!availableLocales.length) return null
  const currentData = locales[requestedLocale]
  if (currentData && currentData.deploy !== false) {
    return {
      title: currentData.title || '',
      description: currentData.description || '',
      body: currentData.body || '',
      locale: requestedLocale,
      requestedLocale,
      availableLocales,
      isFallback: false,
      date: currentData.__date || null,
    }
  }
  const fallbackLocales = options.fallbackLocales || []
  const fallbackCandidates = getFallbackCandidates(requestedLocale, availableLocales, fallbackLocales)
  const fallbackLocale = fallbackCandidates.find((loc) => locales[loc]?.deploy !== false)
  if (!fallbackLocale) return null
  const fallbackData = locales[fallbackLocale]
  return {
    title: fallbackData.title || '',
    description: fallbackData.description || '',
    body: fallbackData.body || '',
    locale: fallbackLocale,
    requestedLocale,
    availableLocales,
    isFallback: fallbackLocale !== requestedLocale,
    date: fallbackData.__date || null,
  }
}

export const buildLocalizedPath = (slug, locale) => {
  if (!slug) return '/'
  const hasLeadingSlash = slug.startsWith('/')
  const cleaned = hasLeadingSlash ? slug : `/${slug}`
  const normalized = cleaned.endsWith('/') ? cleaned : `${cleaned}/`
  if (!locale || locale === defaultLocale) {
    return normalized
  }
  return `/${locale}${normalized}`
}

export const listEntriesByPrefix = (prefix = '') => {
  const normalizedPrefix = normalizeSlug(prefix).replace(/\/+$/, '')
  const result = []
  slugIndex.forEach((entry, slug) => {
    if (!slug.startsWith(normalizedPrefix === '/' ? '/' : `${normalizedPrefix}/`) && slug !== normalizedPrefix) {
      return
    }
    result.push({ slug, entry })
  })
  return result
}

export const getSlugIndex = () => slugIndex
