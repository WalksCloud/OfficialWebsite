import siteConfig from '../../config/site-info.yaml'
import basePagesConfig from '../../config/pages.yaml'
import { getAllPageData } from './pageData'

const normalizeSlug = (slug = '') => {
  if (!slug) return ''
  const value = typeof slug === 'string' ? slug : String(slug)
  return value.replace(/^\/+/, '').replace(/\/+$/, '')
}

const mergedPages = (() => {
  const dynamicPages = getAllPageData()
  const merged = new Map()
  ;[...basePagesConfig, ...dynamicPages].forEach((page) => {
    merged.set(page.pageKey, page)
  })
  return Array.from(merged.values())
})()

export const getSiteConfig = () => siteConfig

export const getPageConfigs = () => mergedPages

export const getPageConfig = (pageKey) => mergedPages.find((page) => page.pageKey === pageKey)

const resolveSlugForLocale = (page, locale) => {
  if (!page) return ''
  const slug =
    normalizeSlug(page.slugs?.[locale]) ||
    normalizeSlug(page.slugs?.[siteConfig.defaultLocale]) ||
    Object.values(page.slugs || {}).map((value) => normalizeSlug(value)).find(Boolean) ||
    ''
  return slug
}

export const getSlugForLocale = (pageKey, locale) => {
  const page = getPageConfig(pageKey)
  return resolveSlugForLocale(page, locale)
}

export const getContentFilePath = (pageKey, locale) => {
  const slug = getSlugForLocale(pageKey, locale)
  if (!slug) return null
  const segments = slug.split('/')
  const section = segments[0]
  const rest = segments.slice(1).join('/') || 'index'
  switch (section) {
    case 'services'||'cases'||'tech':
      return `../content/${section}/${rest}`
    default:
      // fallback generic path
      return `../content/${slug}`
  }
}

export const buildPrefixedPath = (pageKey, locale) => {
  const page = getPageConfig(pageKey)
  if (!page) return '/'
  const slug = resolveSlugForLocale(page, locale)
  const path = slug ? `/${locale}/${slug}/` : `/${locale}/`
  return path
}

export const buildNonPrefixedPath = (pageKey, locale) => {
  const page = getPageConfig(pageKey)
  if (!page) return '/'
  const slug = resolveSlugForLocale(page, locale)
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
