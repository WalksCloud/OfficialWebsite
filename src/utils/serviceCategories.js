const localeModules = import.meta.glob('../locales/*.yaml', {
  eager: true,
  import: 'default',
})

const localeBundles = (() => {
  const map = new Map()
  Object.entries(localeModules).forEach(([path, module]) => {
    const bundle = module?.default || module
    const filename = path.split('/').pop() || ''
    const localeName = filename.replace(/\.ya?ml$/i, '').toLowerCase()
    const baseLocale = localeName.split('-')[0]
    if (localeName) {
      map.set(localeName, bundle)
    }
    if (baseLocale && !map.has(baseLocale)) {
      map.set(baseLocale, bundle)
    }
  })
  return map
})()

const pickLocaleBundle = (locale = 'zh-tw') => {
  const normalized = (locale || 'zh-tw').toLowerCase()
  if (localeBundles.has(normalized)) {
    return localeBundles.get(normalized)
  }
  const baseLocale = normalized.split('-')[0]
  if (baseLocale && localeBundles.has(baseLocale)) {
    return localeBundles.get(baseLocale)
  }
  return localeBundles.get('zh-tw') || localeBundles.values().next().value || {}
}

export const getServiceGroups = (locale = 'zh-tw') => {
  const bundle = pickLocaleBundle(locale)
  const services = bundle?.['services-section']?.services || []
  return services.map((group, index) => ({
    id: group.title || `group-${index}`,
    title: group.title || '',
    description: group.description || '',
    pageKeys: Array.isArray(group.items) ? group.items.map((item) => item?.pageKey).filter(Boolean) : [],
  }))
}
