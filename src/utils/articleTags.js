import YAML from 'yaml'
import mappingRaw from '../../config/case-mapping.yaml?raw'
import { getPageConfigs } from './pageConfig'
import { getServiceGroups } from './serviceCategories'

const normalizeSlugValue = (value = '') => {
  const raw = typeof value === 'string' ? value : String(value || '')
  const trimmed = raw.trim()
  if (!trimmed) return '/'
  const cleaned = trimmed.replace(/^\/+/, '').replace(/\/+$/, '')
  return cleaned ? `/${cleaned}` : '/'
}

const pageKeyBySlug = (() => {
  const map = new Map()
  const configs = getPageConfigs()
  configs.forEach((page) => {
    Object.values(page.slugs || {}).forEach((slug) => {
      const normalized = normalizeSlugValue(slug)
      if (normalized) map.set(normalized, page.pageKey)
    })
  })
  return map
})()

const mappingEntries = YAML.parse(mappingRaw) || []

const articleServiceMap = new Map()

const attachServices = (slug, services) => {
  const normalizedSlug = normalizeSlugValue(slug)
  if (!articleServiceMap.has(normalizedSlug)) {
    articleServiceMap.set(normalizedSlug, new Set())
  }
  const target = articleServiceMap.get(normalizedSlug)
  services.forEach((serviceSlug) => target.add(serviceSlug))
}

mappingEntries.forEach((entry) => {
  const services = new Set((entry.services || []).map((serviceSlug) => normalizeSlugValue(serviceSlug)))
  if (entry.case) {
    attachServices(entry.case, services)
  }
  ;(entry.tech || []).forEach((techSlug) => {
    attachServices(techSlug, services)
  })
})

export const normalizeSlug = normalizeSlugValue

export const getPageKeyForSlug = (slug) => pageKeyBySlug.get(normalizeSlugValue(slug)) || null

export const getArticleServiceSlugs = (slug) => {
  const normalizedSlug = normalizeSlugValue(slug)
  const services = articleServiceMap.get(normalizedSlug)
  if (!services) return []
  return Array.from(services)
}

const serviceGroupCache = new Map()

const hashString = (value = '') => {
  const input = typeof value === 'string' ? value : String(value || '')
  let hash = 0
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 33 + input.charCodeAt(i)) & 0xfffffff
  }
  return hash
}

const buildBadgeColors = (seed = '') => {
  const hash = hashString(seed)
  const hue = Math.abs(hash) % 360
  return {
    background: `hsla(${hue}, 70%, 90%, 1)`,
    foreground: `hsl(${hue}, 65%, 32%)`,
    border: `hsla(${hue}, 60%, 45%, 0.35)`,
    shadow: `hsla(${hue}, 65%, 35%, 0.2)`,
  }
}

const buildServiceGroupMap = (locale = 'zh-tw') => {
  const groups = getServiceGroups(locale)
  const map = new Map()
  groups.forEach((group, index) => {
    const identifier = group?.id || group?.title || `group-${index}`
    const label = group?.title || identifier
    const pageKeys = Array.isArray(group.pageKeys) ? group.pageKeys : []
    pageKeys.forEach((pageKey) => {
      if (!pageKey || map.has(pageKey)) return
      map.set(pageKey, { id: identifier || pageKey, title: label || pageKey })
    })
  })
  return map
}

const getServiceGroupMap = (locale = 'zh-tw') => {
  const key = (locale || 'zh-tw').toLowerCase()
  if (!serviceGroupCache.has(key)) {
    serviceGroupCache.set(key, buildServiceGroupMap(locale))
  }
  return serviceGroupCache.get(key)
}

export const getArticleCategoryTags = (slug, locale = 'zh-tw') => {
  const normalizedSlug = normalizeSlugValue(slug)
  if (!normalizedSlug || normalizedSlug === '/') return []
  const mappedServiceSlugs = getArticleServiceSlugs(normalizedSlug)
  const serviceSlugs = [...mappedServiceSlugs]
  if (normalizedSlug.startsWith('/services/')) {
    serviceSlugs.push(normalizedSlug)
  }
  const uniqueServiceSlugs = Array.from(new Set(serviceSlugs))
  if (!uniqueServiceSlugs.length) return []
  const localeKey = (locale || 'zh-tw').toLowerCase()
  const groupMap = getServiceGroupMap(localeKey)
  if (!groupMap) return []
  const seen = new Map()
  uniqueServiceSlugs.forEach((serviceSlug) => {
    const pageKey = getPageKeyForSlug(serviceSlug)
    if (!pageKey) return
    const group = groupMap.get(pageKey)
    if (!group) return
    const tagId = group.id || pageKey
    if (seen.has(tagId)) return
    const label = group.title || tagId
    const palette = buildBadgeColors(label || tagId)
    seen.set(tagId, {
      id: tagId,
      label,
      style: {
        backgroundColor: palette.background,
        color: palette.foreground,
        borderColor: palette.border,
        boxShadow: `0 0 0 1px ${palette.border} inset, 0 1px 2px ${palette.shadow}`,
      },
    })
  })
  return Array.from(seen.values())
}
