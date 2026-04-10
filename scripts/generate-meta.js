import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import yaml from 'yaml'

const root = process.cwd()
const distDir = path.resolve(root, 'dist')

const readYaml = (filePath) => yaml.parse(fs.readFileSync(path.resolve(root, filePath), 'utf8'))
const site = readYaml('config/site.yaml')

const parseFrontmatter = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8')
  if (!content.startsWith('---')) return null
  const match = content.match(/^---\n([\s\S]+?)\n---/)
  if (!match) return null
  return yaml.parse(match[1] || '')
}

const loadContentPages = () => {
  const contentDirs = ['services', 'cases', 'tech']
  const entries = new Map()
  contentDirs.forEach((dir) => {
    const dirPath = path.resolve(root, 'src/content', dir)
    if (!fs.existsSync(dirPath)) return
    fs.readdirSync(dirPath).forEach((file) => {
      if (!file.endsWith('.md')) return
      const localeMatch = file.match(/\.([a-z-]+)\.md$/i)
      if (!localeMatch) return
      const locale = localeMatch[1]
      const filePath = path.join(dirPath, file)
      const fm = parseFrontmatter(filePath)
      if (!fm || fm.deploy !== true) return
      const slug = fm.slug || ''
      const key = `${dir}:${slug}`
      if (!entries.has(key)) {
        entries.set(key, {
          index: fm.index !== undefined ? fm.index : true,
          sitemap: fm.sitemap || {},
          slugs: {},
          contentFiles: {},
        })
      }
      const entry = entries.get(key)
      entry.slugs[locale] = slug
      entry.contentFiles[locale] = filePath
      if (!entry.sitemap && fm.sitemap) entry.sitemap = fm.sitemap
    })
  })
  return Array.from(entries.values())
}

const pages = [...readYaml('config/pages.yaml'), ...loadContentPages()]

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

const getContentFilePath = (slug, locale) => {
  const normalizedSlug = (slug || '').replace(/^\/+/, '').replace(/\/+$/, '')
  const candidates = []
  if (!normalizedSlug) {
    candidates.push(`index.${locale}.md`)
  } else {
    candidates.push(`${normalizedSlug}.${locale}.md`)
    candidates.push(path.join(normalizedSlug, `index.${locale}.md`))
    const segments = normalizedSlug.split('/')
    const last = segments[segments.length - 1]
    candidates.push(path.join(normalizedSlug, `${last}.${locale}.md`))
  }
  for (const candidate of candidates) {
    const absolute = path.resolve(root, 'src/content', candidate)
    if (fs.existsSync(absolute)) return absolute
  }
  return null
}

const getGitLastmod = (filePath) => {
  if (!filePath) return null
  try {
    const result = execSync(`git log -1 --format=%cI -- "${filePath}"`, { cwd: root })
      .toString()
      .trim()
    return result || null
  } catch (err) {
    return null
  }
}

const resolveLastmod = (page, slug, locale) => {
  const contentPath = page.contentFiles?.[locale] || getContentFilePath(slug, locale)
  const contentLastmod = getGitLastmod(contentPath)
  if (contentLastmod) return contentLastmod
  if (page.sitemap?.lastmod === 'build') return buildTime
  if (page.sitemap?.lastmod) return page.sitemap.lastmod
  return buildTime
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
