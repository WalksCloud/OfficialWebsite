import {
  buildCanonicalUrl,
  buildNonPrefixedPath,
  buildPrefixedPath,
  getPageConfigs,
  getSiteConfig,
  getSlugForLocale,
} from './pageConfig'

const site = getSiteConfig()

const normalizeSlug = (slug = '') =>
  String(slug || '')
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')

const prettifySegmentName = (segment = '') =>
  String(segment || '')
    .replace(/[-_]+/g, ' ')
    .trim()

export const resolveLocalizedValue = (localizedMap, locale) => {
  if (!localizedMap || typeof localizedMap !== 'object') return ''
  const currentValue = localizedMap[locale]
  if (typeof currentValue === 'string' && currentValue.trim()) return currentValue
  const defaultValue = localizedMap[site.defaultLocale]
  if (typeof defaultValue === 'string' && defaultValue.trim()) return defaultValue
  const firstAvailable = Object.values(localizedMap).find(
    (value) => typeof value === 'string' && value.trim(),
  )
  return typeof firstAvailable === 'string' ? firstAvailable : ''
}

const resolvePageByLocalizedSlug = (slug, locale) => {
  const normalizedTarget = normalizeSlug(slug)
  const pages = getPageConfigs()
  return (
    pages.find((page) => normalizeSlug(getSlugForLocale(page.pageKey, locale)) === normalizedTarget) ||
    null
  )
}

export const buildBreadcrumbEntries = (pageKey, locale, options = {}) => {
  const localizedSlug = normalizeSlug(getSlugForLocale(pageKey, locale))
  const homeName = options.homeName || site.brandName
  const crumbs = [
    {
      pageKey: 'home',
      name: homeName,
      path: buildPrefixedPath('home', locale),
      nonPrefixedPath: buildNonPrefixedPath('home', locale),
      item: buildCanonicalUrl('home', locale),
    },
  ]

  if (!localizedSlug) return crumbs

  const segments = localizedSlug.split('/').filter(Boolean)
  let accumulated = ''
  segments.forEach((segment) => {
    accumulated = accumulated ? `${accumulated}/${segment}` : segment
    const resolvedPage = resolvePageByLocalizedSlug(accumulated, locale)
    const resolvedName =
      resolveLocalizedValue(resolvedPage?.titles, locale) || prettifySegmentName(segment)
    const path = resolvedPage ? buildPrefixedPath(resolvedPage.pageKey, locale) : `/${locale}/${accumulated}/`
    const nonPrefixedPath = resolvedPage ? buildNonPrefixedPath(resolvedPage.pageKey, locale) : `/${accumulated}/`
    const item = resolvedPage
      ? buildCanonicalUrl(resolvedPage.pageKey, locale)
      : `${site.baseUrl}/${locale}/${accumulated}/`
    crumbs.push({
      pageKey: resolvedPage?.pageKey || accumulated,
      name: resolvedName,
      path,
      nonPrefixedPath,
      item,
    })
  })

  return crumbs
}

export const buildBreadcrumbJsonLdItems = (pageKey, locale, options = {}) =>
  buildBreadcrumbEntries(pageKey, locale, options).map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.item,
  }))

const normalizePath = (path = '') => {
  const value = String(path || '').trim()
  if (!value || value === '/') return '/'
  return `/${value.replace(/^\/+/, '').replace(/\/+$/, '')}/`
}

const buildRelativePath = (targetPath = '', currentPath = '') => {
  const targetSegments = normalizePath(targetPath).split('/').filter(Boolean)
  const currentSegments = normalizePath(currentPath).split('/').filter(Boolean)
  let sharedCount = 0
  while (
    sharedCount < targetSegments.length &&
    sharedCount < currentSegments.length &&
    targetSegments[sharedCount] === currentSegments[sharedCount]
  ) {
    sharedCount += 1
  }

  const upwardSegments = currentSegments.slice(sharedCount).map(() => '..')
  const downwardSegments = targetSegments.slice(sharedCount)
  const relativeSegments = [...upwardSegments, ...downwardSegments]
  if (!relativeSegments.length) return './'
  return `${relativeSegments.join('/')}/`
}

export const buildBreadcrumbUiItems = (pageKey, locale, options = {}) => {
  const currentTitle = typeof options.currentTitle === 'string' ? options.currentTitle.trim() : ''
  const currentPath = options.currentPath || ''
  const usePrefixedPath = options.prefixed === true
  const entries = buildBreadcrumbEntries(pageKey, locale, options)
  return entries.map((crumb, index) => {
    const isLast = index === entries.length - 1
    const isHome = index === 0
    return {
      label: isHome ? '' : isLast && currentTitle ? currentTitle : crumb.name,
      icon: isHome ? 'i-lucide-house' : undefined,
      to: isLast
        ? undefined
        : buildRelativePath(usePrefixedPath ? crumb.path : crumb.nonPrefixedPath, currentPath),
      active: isLast,
      title: isHome ? crumb.name : undefined,
      'aria-label': isHome ? crumb.name : undefined,
      class: isHome ? 'wc-page-breadcrumb__home-link' : undefined,
      ui: isHome
        ? {
            linkLeadingIcon: 'wc-page-breadcrumb__home-icon',
          }
        : undefined,
    }
  })
}
