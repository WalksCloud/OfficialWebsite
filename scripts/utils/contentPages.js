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

const walkMarkdownFiles = (dirPath) => {
  const files = []
  fs.readdirSync(dirPath, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath))
      return
    }
    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  })
  return files
}

export const loadContentPages = () => {
  const entries = new Map()
  contentDirs.forEach((dir) => {
    const dirPath = path.resolve(root, 'src/content', dir)
    if (!fs.existsSync(dirPath)) return
    walkMarkdownFiles(dirPath).forEach((filePath) => {
      const file = path.basename(filePath)
      const localeMatch = file.match(/\.([a-z-]+)\.md$/i)
      if (!localeMatch) return
      const locale = localeMatch[1]
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
