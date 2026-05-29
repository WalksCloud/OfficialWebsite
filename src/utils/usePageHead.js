import { computed, inject, onScopeDispose, watchEffect } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import {
  buildCanonicalUrl,
  getLocales,
  getPageConfig,
  getPageConfigs,
  getSiteConfig,
  getSlugForLocale,
} from './pageConfig'
import { renderMarkdownInlineToText } from './markdown'

const site = getSiteConfig()

const toAbsolute = (path) => {
  if (!path) return undefined
  const base = site.baseUrl?.replace(/\/+$/, '') || ''
  return path.startsWith('http') ? path : `${base}${path}`
}

const toBcpLocale = (locale) => {
  const map = site.og?.localeMap || {}
  const val = map[locale] || locale
  return val.replace('_', '-')
}

const resolveLocalizedValue = (localizedMap, locale) => {
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

const normalizeInlineText = (value = '') =>
  String(value || '')
    .replace(/\r\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim()

const normalizeSlug = (slug = '') =>
  String(slug || '')
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')

const prettifySegmentName = (segment = '') =>
  String(segment || '')
    .replace(/[-_]+/g, ' ')
    .trim()

const resolvePageByLocalizedSlug = (slug, locale) => {
  const normalizedTarget = normalizeSlug(slug)
  const pages = getPageConfigs()
  return (
    pages.find((page) => normalizeSlug(getSlugForLocale(page.pageKey, locale)) === normalizedTarget) ||
    null
  )
}

const buildBreadcrumbs = (pageKey, locale, options = {}) => {
  const localizedSlug = normalizeSlug(getSlugForLocale(pageKey, locale))
  const homeName = options.homeName || site.brandName
  const crumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: homeName,
      item: buildCanonicalUrl('home', locale),
    },
  ]

  if (!localizedSlug) return crumbs

  const segments = localizedSlug.split('/').filter(Boolean)
  let accumulated = ''
  segments.forEach((segment, idx) => {
    accumulated = accumulated ? `${accumulated}/${segment}` : segment
    const resolvedPage = resolvePageByLocalizedSlug(accumulated, locale)
    const resolvedName =
      resolveLocalizedValue(resolvedPage?.titles, locale) || prettifySegmentName(segment)
    const resolvedItem = resolvedPage
      ? buildCanonicalUrl(resolvedPage.pageKey, locale)
      : `${site.baseUrl}/${locale}/${accumulated}/`
    crumbs.push({
      '@type': 'ListItem',
      position: idx + 2,
      name: resolvedName,
      item: resolvedItem,
    })
  })

  return crumbs
}

const resolveJsonLdKind = (page = {}) => {
  const explicitKind = typeof page?.jsonld?.kind === 'string' ? page.jsonld.kind.trim() : ''
  if (explicitKind) return explicitKind
  if (page?.type === 'tech') return 'TechArticle'
  if (page?.type === 'case') return 'CaseStudy'
  return ''
}

const buildContentJsonLdNode = ({ page, kind, title, description, canonicalUrl, lang, base }) => {
  if (!kind) return null
  const common = {
    name: title,
    description,
    url: canonicalUrl,
    inLanguage: lang,
    isPartOf: { '@id': `${canonicalUrl}#webpage` },
  }

  if (kind === 'Service') {
    return {
      '@type': 'Service',
      serviceType: page?.jsonld?.serviceType || title,
      provider: { '@id': `${base}/#organization` },
      ...common,
    }
  }

  if (kind === 'CaseStudy') {
    return {
      '@type': 'Article',
      headline: title,
      genre: 'Case Study',
      author: { '@id': `${base}/#organization` },
      publisher: { '@id': `${base}/#organization` },
      ...common,
    }
  }

  if (kind === 'TechArticle') {
    return {
      '@type': 'TechArticle',
      headline: title,
      author: { '@id': `${base}/#organization` },
      publisher: { '@id': `${base}/#organization` },
      ...common,
    }
  }

  return {
    '@type': 'Article',
    headline: title,
    author: { '@id': `${base}/#organization` },
    publisher: { '@id': `${base}/#organization` },
    ...common,
  }
}

const buildJsonLd = (pageKey, locale, title, description, canonicalUrl, breadcrumbItems = []) => {
  const page = getPageConfig(pageKey)
  const base = site.baseUrl
  const lang = toBcpLocale(locale)
  const org = {
    '@type': 'Organization',
    '@id': `${base}/#organization`,
    name: site.companyNameEn,
    url: base,
    logo: toAbsolute(site.org?.logo),
    sameAs: site.org?.sameAs || [],
  }
  const website = {
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    url: base,
    name: site.brandName,
    publisher: { '@id': `${base}/#organization` },
    inLanguage: lang,
  }
  const webpage = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    isPartOf: { '@id': `${base}/#website` },
    inLanguage: lang,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    },
  }

  const graph = [org, website, webpage]
  const kind = resolveJsonLdKind(page)
  const contentNode = buildContentJsonLdNode({
    page,
    kind,
    title,
    description,
    canonicalUrl,
    lang,
    base,
  })
  if (contentNode) graph.push(contentNode)

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export const usePageHead = (route, options = {}) => {
  const overrideTitle = options.overrideTitle
  const minify = options.minify === true
  const resolvedHead = inject('wc:ssg-head', null)
  const formatJson = (obj) => (minify ? JSON.stringify(obj) : `\n${JSON.stringify(obj, null, 2)}\n`)
  const { locale, t } = useI18n()
  const pageKey = computed(() => route.meta.pageKey || 'home')
  const currentLocale = computed(() => route.meta.locale || locale.value || site.defaultLocale)
  const page = computed(() => getPageConfig(pageKey.value))
  const ogLocale = computed(() => {
    const map = site.og?.localeMap || {}
    return map[currentLocale.value] || currentLocale.value.replace('-', '_')
  })
  const ogAlternateLocales = computed(() => {
    const map = site.og?.localeMap || {}
    return getLocales()
      .filter((lng) => lng !== currentLocale.value)
      .map((lng) => map[lng] || lng.replace('-', '_'))
  })

  const canonicalUrl = computed(() => buildCanonicalUrl(pageKey.value, currentLocale.value))
  const baseTitle = computed(
    () =>
      (overrideTitle?.value) ||
      route.meta?.contentTitle ||
      resolveLocalizedValue(page.value?.titles, currentLocale.value) ||
      site.brandName
  )
  const title = computed(() => {
    const base = baseTitle.value || ''
    const suffix = ` | ${site.brandName}`
    if (!base) return site.brandName
    return base.includes(site.brandName) ? base : `${base}${suffix}`
  })
  const structuredDataTitle = computed(() => baseTitle.value || site.brandName)
  const description = computed(() => {
    const raw = resolveLocalizedValue(page.value?.descriptions, currentLocale.value)
    const rendered = renderMarkdownInlineToText(raw, { html: false, linkify: true, breaks: true })
    return normalizeInlineText(rendered)
  })
  const robots = computed(() =>
    page.value?.index === false ? 'noindex,nofollow' : site.robots?.policy || 'index,follow'
  )
  const ogType = computed(() => page.value?.og?.type || 'website')
  const ogImage = computed(() => {
    const src = page.value?.og?.image || site.socialImage
    const base = site.baseUrl?.replace(/\/+$/, '') || ''
    return src?.startsWith('http') ? src : `${base}${src}`
  })
  const ogSiteName = computed(() => site.og?.siteName || site.companyNameEn || site.brandName)
  const hreflangs = computed(() => {
    const links = getLocales().map((lng) => ({
      rel: 'alternate',
      hreflang: lng.toLowerCase(),
      href: buildCanonicalUrl(pageKey.value, lng),
    }))
    links.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: buildCanonicalUrl(pageKey.value, site.defaultLocale),
    })
    return links
  })
  const homeBreadcrumbName = computed(() => {
    const translated = t('about-section.title')
    if (typeof translated === 'string' && translated.trim() && translated !== 'about-section.title') {
      return translated
    }
    return site.brandName
  })
  const breadcrumbItems = computed(() =>
    buildBreadcrumbs(pageKey.value, currentLocale.value, { homeName: homeBreadcrumbName.value }),
  )

  const jsonLd = computed(() =>
    buildJsonLd(
      pageKey.value,
      currentLocale.value,
      structuredDataTitle.value,
      description.value,
      canonicalUrl.value,
      breadcrumbItems.value,
    )
  )
  const jsonLdScripts = computed(() => {
    if (!jsonLd?.value['@graph']) {
      return []
    }
    return jsonLd.value['@graph'].map((entry) => ({
      type: 'application/ld+json',
      innerHTML: formatJson({ '@context': 'https://schema.org', ...entry }),
    }))
  })
  const createHeadPayload = () => ({
    htmlAttrs: {
      lang: currentLocale.value,
    },
    title: title.value,
    meta: [
      { name: 'description', content: description.value },
      { name: 'robots', content: robots.value },
      { property: 'og:title', content: title.value },
      { property: 'og:description', content: description.value },
      { property: 'og:type', content: ogType.value },
      { property: 'og:url', content: canonicalUrl.value },
      { property: 'og:image', content: ogImage.value },
      { property: 'og:image:type', content: site.og?.imageType || undefined },
      { property: 'og:image:width', content: site.og?.imageWidth || undefined },
      { property: 'og:image:height', content: site.og?.imageHeight || undefined },
      { property: 'og:site_name', content: ogSiteName.value },
      { property: 'og:locale', content: ogLocale.value },
      ...ogAlternateLocales.value.map((lng) => ({
        property: 'og:locale:alternate',
        content: lng,
      })),
      { property: 'fb:app_id', content: site.social?.fbAppId || undefined },
      { property: 'fb:pages', content: site.social?.fbPages || undefined },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: ogImage.value },
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl.value },
      ...hreflangs.value,
    ],
    script: jsonLdScripts.value,
  })

  if (resolvedHead && typeof resolvedHead.push === 'function') {
    let entry
    watchEffect(() => {
      const payload = createHeadPayload()
      if (entry) {
        entry.patch(payload)
      } else {
        entry = resolvedHead.push(payload)
      }
    })
    onScopeDispose(() => {
      entry?.dispose?.()
    })
    return
  }

  useHead(createHeadPayload())
}
