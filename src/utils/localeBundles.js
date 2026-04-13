const localeModules = import.meta.glob('../locales/*.yaml', {
  eager: true,
  import: 'default',
})

const normalizeLocale = (locale = '') => String(locale || '').trim().toLowerCase()

const exactLocaleEntries = Object.entries(localeModules)
  .map(([path, module]) => {
    const bundle = module?.default || module
    const filename = path.split('/').pop() || ''
    const locale = normalizeLocale(filename.replace(/\.ya?ml$/i, ''))
    return locale ? { locale, bundle } : null
  })
  .filter(Boolean)

const localeBundles = (() => {
  const map = new Map()
  exactLocaleEntries.forEach(({ locale, bundle }) => {
    const baseLocale = locale.split('-')[0]
    map.set(locale, bundle)
    if (baseLocale && !map.has(baseLocale)) {
      map.set(baseLocale, bundle)
    }
  })
  return map
})()

const findLocaleBundle = (locale) => {
  const normalized = normalizeLocale(locale)
  if (!normalized) return null
  if (localeBundles.has(normalized)) {
    return localeBundles.get(normalized)
  }
  const baseLocale = normalized.split('-')[0]
  if (baseLocale && localeBundles.has(baseLocale)) {
    return localeBundles.get(baseLocale)
  }
  return null
}

const buildLocaleMessages = () => Object.fromEntries(localeBundles.entries())

const buildLocaleFallbackChain = (siteConfig = {}) => {
  const defaultLocale = normalizeLocale(siteConfig.defaultLocale)
  const defaultBaseLocale = defaultLocale.split('-')[0]
  const configuredFallbacks = siteConfig.localeFallbacks || {}
  const fallbackCandidates = [
    defaultLocale,
    ...((configuredFallbacks[defaultLocale] || []).map(normalizeLocale)),
    ...((configuredFallbacks[defaultBaseLocale] || []).map(normalizeLocale)),
    ...exactLocaleEntries.map(({ locale }) => locale),
    ...localeBundles.keys(),
  ]

  return [...new Set(fallbackCandidates.filter(Boolean))]
}

export const getLocaleMessages = () => buildLocaleMessages()

export const getDiscoveredLocales = () => exactLocaleEntries.map(({ locale }) => locale)

export const getLocaleBundle = (locale, defaultLocale = 'zh-tw') => {
  return findLocaleBundle(locale) || findLocaleBundle(defaultLocale) || localeBundles.values().next().value || {}
}

export const getLocaleFallbackChain = (siteConfig = {}) => buildLocaleFallbackChain(siteConfig)
