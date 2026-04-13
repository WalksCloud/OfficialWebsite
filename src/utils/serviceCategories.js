import siteConfig from '../../config/site-info.yaml'
import { getLocaleBundle } from './localeBundles'

export const getServiceGroups = (locale = 'zh-tw') => {
  const bundle = getLocaleBundle(locale, siteConfig.defaultLocale)
  const services = bundle?.['services-section']?.services || []
  return services.map((group, index) => ({
    id: group.title || `group-${index}`,
    title: group.title || '',
    description: group.description || '',
    pageKeys: Array.isArray(group.items) ? group.items.map((item) => item?.pageKey).filter(Boolean) : [],
  }))
}
