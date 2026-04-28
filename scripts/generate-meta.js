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

const buildCanonicalPath = (slug, locale) => {
  const normalizedSlug = (slug || '').replace(/^\/+/, '').replace(/\/+$/, '')
  return normalizedSlug ? `/${locale}/${normalizedSlug}/` : `/${locale}/`
}
const buildNonPrefixedPath = (slug) => {
  const normalizedSlug = (slug || '').replace(/^\/+/, '').replace(/\/+$/, '')
  return normalizedSlug ? `/${normalizedSlug}/` : `/`
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

  const urls = Array.from(urlMap.values())

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
