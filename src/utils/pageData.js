import YAML from 'yaml'

const contentModules = import.meta.glob('../content/**/*.md', { eager: true, as: 'raw' })
const moduleKeys = Object.keys(contentModules)

const localeFromFilename = (path) => {
  const m = path.match(/\.([a-z-]+)\.md$/i)
  return m ? m[1] : null
}

const baseFromPath = (path) => path.replace(/\.([a-z-]+)\.md$/i, '').replace(/^..\//, '')

const parseFrontmatter = (raw = '') => {
  const content = typeof raw === 'string' ? raw : String(raw || '')
  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/)
  if (!fmMatch) return { meta: {}, body: content }
  const meta = YAML.parse(fmMatch[1]) || {}
  const body = content.slice(fmMatch[0].length)
  return { meta, body }
}

const normalizeSlug = (slug = '') => slug.replace(/^\/+/, '').replace(/\/+$/, '')

export const getAllPageData = () => {
  const pagesMap = new Map()

  moduleKeys.forEach((path) => {
    const raw = contentModules[path]
    const { meta } = parseFrontmatter(raw)
    const locale = localeFromFilename(path) || 'zh-tw'
    const base = baseFromPath(path) // e.g., content/services/proxmox
    const segments = base.split('/').slice(1) // drop "content"
    const inferredSlug = normalizeSlug(segments.join('/'))

    const pageKey = inferredSlug
      ? inferredSlug.replace(/\//g, '-')
      : (meta.pageKey || '')
    const type = meta.type || 'page'
    const slug = normalizeSlug(meta.slug || inferredSlug)
    const title = meta.title || ''
    const description = meta.description || ''
    const ogType = meta.ogType
    const index = meta.index !== false
    const sitemap = meta.sitemap || {}
    const jsonld = meta.jsonld || {}

    const existing = pagesMap.get(pageKey) || {
      pageKey,
      type,
      slugs: {},
      titles: {},
      descriptions: {},
      og: {},
      index,
      sitemap,
      jsonld,
    }

    existing.type = type
    existing.slugs[locale] = slug
    existing.titles[locale] = title
    if (description) existing.descriptions[locale] = description
    if (ogType) existing.og.type = ogType
    existing.index = index
    existing.sitemap = sitemap
    existing.jsonld = jsonld

    pagesMap.set(pageKey, existing)
  })

  return Array.from(pagesMap.values())
}
