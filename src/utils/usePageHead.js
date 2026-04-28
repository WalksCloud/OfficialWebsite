import { computed, inject, onScopeDispose, watchEffect } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import {
  buildCanonicalUrl,
  getLocales,
  getPageConfig,
  getSiteConfig,
} from './pageConfig'

const site = getSiteConfig()

const buildBreadcrumbs = (pageKey, locale) => {
  const page = getPageConfig(pageKey)
  if (!page) return []
  const rawSlug = page.slugs?.[locale] ?? ''
  const slugStr = typeof rawSlug === 'string' ? rawSlug : String(rawSlug || '')
  const segments = slugStr ? slugStr.split('/') : []
  const crumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: site.brandName,
      item: buildCanonicalUrl('home', locale),
    },
  ]
  if (!segments.length) return crumbs
  let pathAcc = ''
  segments.forEach((segment, idx) => {
    pathAcc += `${segment}/`
    crumbs.push({
      '@type': 'ListItem',
      position: idx + 2,
      name: segment,
      item: `${site.baseUrl}/${locale}/${pathAcc}`,
    })
  })
  return crumbs
}

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

const buildJsonLd = (pageKey, locale, title, description, canonicalUrl) => {
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
      itemListElement: buildBreadcrumbs(pageKey, locale),
    },
  }

  const graph = [org, website, webpage]

  if (page?.jsonld?.kind === 'Service') {
    graph.push({
      '@type': 'Service',
      serviceType: page.jsonld.serviceType || title,
      provider: { '@id': `${base}/#organization` },
      name: title,
      description,
      url: canonicalUrl,
    })
  }

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
  const { locale } = useI18n()
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
  const description = computed(() => resolveLocalizedValue(page.value?.descriptions, currentLocale.value))
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

  const jsonLd = computed(() =>
    buildJsonLd(pageKey.value, currentLocale.value, title.value, description.value, canonicalUrl.value)
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
