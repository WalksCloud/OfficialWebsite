import siteConfig from '../../config/site.yaml'
import pagesConfig from '../../config/pages.yaml'

const normalizeSlug = (slug = '') => {
  if (!slug) return ''
  const value = typeof slug === 'string' ? slug : String(slug)
  return value.replace(/^\/+/, '').replace(/\/+$/, '')
}

export const getSiteConfig = () => siteConfig

export const getPageConfigs = () => pagesConfig

export const getPageConfig = (pageKey) => pagesConfig.find((page) => page.pageKey === pageKey)

export const getSlugForLocale = (pageKey, locale) => {
  const page = getPageConfig(pageKey)
  if (!page) return ''
  const slug =
    normalizeSlug(page.slugs?.[locale]) ||
    normalizeSlug(page.slugs?.[siteConfig.defaultLocale]) ||
    normalizeSlug(page.slugs?.en)
  return slug
}

export const getContentFilePath = (pageKey, locale) => {
  const slug = getSlugForLocale(pageKey, locale)
  if (!slug) return null
  const segments = slug.split('/')
  const section = segments[0]
  const rest = segments.slice(1).join('/') || 'index'
  if (section === 'services') {
    return `../content/services/${rest}`
  }
  if (section === 'cases') {
    return `../content/cases/${rest}`
  }
  // fallback generic path
  return `../content/${slug}`
}

export const buildPrefixedPath = (pageKey, locale) => {
  const page = getPageConfig(pageKey)
  if (!page) return '/'
  const slug = normalizeSlug(page.slugs?.[locale] ?? '')
  const path = slug ? `/${locale}/${slug}/` : `/${locale}/`
  return path
}

export const buildNonPrefixedPath = (pageKey, locale) => {
  const page = getPageConfig(pageKey)
  if (!page) return '/'
  const slug = normalizeSlug(page.slugs?.[locale] ?? '')
  return slug ? `/${slug}/` : '/'
}

export const buildCanonicalUrl = (pageKey, locale) => {
  const path = buildPrefixedPath(pageKey, locale)
  const baseUrl = siteConfig.baseUrl?.replace(/\/+$/, '') || ''
  return `${baseUrl}${path}`
}

export const resolvePageConfig = (pageKey, locale) => {
  const page = getPageConfig(pageKey)
  if (!page) return null
  return page
}

export const getLocales = () => siteConfig.locales || []
