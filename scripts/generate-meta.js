import fs from 'node:fs'
import path from 'node:path'
import yaml from 'yaml'
import { loadContentPages } from './utils/contentPages.js'
import { collectContentLastmod, normalizeSlugPath } from './utils/contentLastmod.js'

const root = process.cwd()
const distDir = path.resolve(root, 'dist')

const readYaml = (filePath) => yaml.parse(fs.readFileSync(path.resolve(root, filePath), 'utf8'))
const site = readYaml('config/site-info.yaml')

const contentPages = loadContentPages()
const pages = [...readYaml('config/pages.yaml'), ...contentPages]
const slugLastmodMap = collectContentLastmod({ contentPages })

const ensureDist = () => {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }
}

const buildTime = new Date().toISOString()
const baseUrl = (site.baseUrl || '').replace(/\/+$/, '')
const normalizeSlug = (slug = '') => String(slug || '').replace(/^\/+/, '').replace(/\/+$/, '')

const buildCanonicalPath = (slug, locale) => {
  const normalizedSlug = normalizeSlug(slug || '')
  return normalizedSlug ? `/${locale}/${normalizedSlug}/` : `/${locale}/`
}
const buildNonPrefixedPath = (slug) => {
  const normalizedSlug = normalizeSlug(slug || '')
  return normalizedSlug ? `/${normalizedSlug}/` : `/`
}

const hasDescendantSlug = (topLevelSlug) => {
  const targetPrefix = `${topLevelSlug}/`
  return pages.some((page) =>
    Object.values(page.slugs || {}).some((slug) => normalizeSlug(slug).startsWith(targetPrefix))
  )
}

const shouldSkipTopLevelSlug = (slug) => {
  const normalizedSlug = normalizeSlug(slug)
  if (!normalizedSlug || normalizedSlug.includes('/')) return false
  return !hasDescendantSlug(normalizedSlug)
}

const resolveLastmod = (page, slug, locale) => {
  const normalizedSlug = normalizeSlugPath(slug || '')
  const contentLastmod = normalizedSlug ? slugLastmodMap[normalizedSlug] : null
  const finalLastmod =
    contentLastmod ||
    (page.sitemap?.lastmod === 'build' ? buildTime : page.sitemap?.lastmod) ||
    buildTime

  if (!page.lastmodByLocale) page.lastmodByLocale = {}
  page.lastmodByLocale[locale] = finalLastmod

  return finalLastmod
}

const splitUrlPathSegments = (loc) => {
  const pathname = new URL(loc).pathname
  const normalizedPath = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
  return normalizedPath ? normalizedPath.split('/') : []
}

const compareLocAsTree = (aLoc, bLoc) => {
  const aSegments = splitUrlPathSegments(aLoc)
  const bSegments = splitUrlPathSegments(bLoc)
  const minLen = Math.min(aSegments.length, bSegments.length)

  for (let i = 0; i < minLen; i += 1) {
    const segCompare = aSegments[i].localeCompare(bSegments[i], 'en', { numeric: true })
    if (segCompare !== 0) return segCompare
  }

  if (aSegments.length !== bSegments.length) return aSegments.length - bSegments.length
  return aLoc.localeCompare(bLoc, 'en')
}

const buildSitemap = () => {
  const urlMap = new Map()

  const pushUrl = (entry) => {
    if (urlMap.has(entry.loc)) return
    urlMap.set(entry.loc, entry)
  }

  pages.forEach((page) => {
    if (page.index === false) return
    site.locales.forEach((locale) => {
      const slug = page.slugs?.[locale] ?? ''
      const normalizedSlug = normalizeSlug(slug)
      if (normalizedSlug.startsWith('faq/')) return
      if (shouldSkipTopLevelSlug(normalizedSlug)) return
      const path = buildCanonicalPath(slug, locale)
      const lastmod = resolveLastmod(page, slug, locale)
      pushUrl({
        loc: `${baseUrl}${path}`,
        changefreq: page.sitemap?.changefreq || 'weekly',
        priority: page.sitemap?.priority ?? 0.5,
        lastmod,
      })

      const npPath = buildNonPrefixedPath(slug)
      pushUrl({
        loc: `${baseUrl}${npPath}`,
        changefreq: page.sitemap?.changefreq || 'weekly',
        priority: page.sitemap?.priority ?? 0.5,
        lastmod,
      })
    })
  })

  const urls = Array.from(urlMap.values()).sort((a, b) => compareLocAsTree(a.loc, b.loc))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml)
}

const buildRobots = () => {
  const sitemapUrl = `${baseUrl}/sitemap.xml`
  const content = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`
  fs.writeFileSync(path.join(distDir, 'robots.txt'), content)
}

ensureDist()
buildSitemap()
buildRobots()
