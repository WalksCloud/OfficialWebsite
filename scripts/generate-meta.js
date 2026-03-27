import fs from 'fs'
import path from 'path'
import yaml from 'yaml'

const root = process.cwd()
const distDir = path.resolve(root, 'dist')

const readYaml = (filePath) => yaml.parse(fs.readFileSync(path.resolve(root, filePath), 'utf8'))
const site = readYaml('config/site.yaml')
const pages = readYaml('config/pages.yaml')

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

const buildSitemap = () => {
  const urls = []
  pages.forEach((page) => {
    if (page.index === false) return
    site.locales.forEach((locale) => {
      const slug = page.slugs?.[locale] ?? ''
      const path = buildCanonicalPath(slug, locale)
      urls.push({
        loc: `${baseUrl}${path}`,
        changefreq: page.sitemap?.changefreq || 'weekly',
        priority: page.sitemap?.priority ?? 0.5,
        lastmod:
          page.sitemap?.lastmod === 'build'
            ? buildTime
            : page.sitemap?.lastmod || buildTime,
      })

      // non-prefix entry (duplicate acceptable)
      const npPath = buildNonPrefixedPath(slug)
      urls.push({
        loc: `${baseUrl}${npPath}`,
        changefreq: page.sitemap?.changefreq || 'weekly',
        priority: page.sitemap?.priority ?? 0.5,
        lastmod:
          page.sitemap?.lastmod === 'build'
            ? buildTime
            : page.sitemap?.lastmod || buildTime,
      })
    })
  })

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
