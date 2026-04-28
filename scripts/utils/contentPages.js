import fs from 'node:fs'
import path from 'node:path'
import yaml from 'yaml'

const root = process.cwd()

const parseFrontmatter = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8')
  if (!content.startsWith('---')) return null
  const match = content.match(/^---\n([\s\S]+?)\n---/)
  if (!match) return null
  return yaml.parse(match[1] || '')
}

const contentDirs = ['services', 'cases', 'tech']

export const loadContentPages = () => {
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
      if (fm?.deploy !== true) return
      const slug = fm.slug || ''
      const key = `${dir}:${slug}`
      if (!entries.has(key)) {
        entries.set(key, {
          index: fm?.index === undefined ? true : fm.index,
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
