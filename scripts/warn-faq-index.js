import fs from 'node:fs'
import path from 'node:path'
import yaml from 'yaml'

const root = process.cwd()
const faqDir = path.resolve(root, 'src/content/faq')

const walkMarkdownFiles = (dirPath) => {
  const files = []
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath))
      continue
    }
    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }
  return files
}

const parseFrontmatter = (content = '') => {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/)
  if (!match) return {}
  return yaml.parse(match[1]) || {}
}

const run = () => {
  if (!fs.existsSync(faqDir)) return
  const files = walkMarkdownFiles(faqDir)
  const warnings = []

  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, 'utf8')
    const fm = parseFrontmatter(raw)
    const slug = String(fm.slug || '')
    const isFaqSlug = slug.startsWith('faq/')
    const isIndexEnabled = fm.index !== false
    if (isFaqSlug && isIndexEnabled) {
      warnings.push({ filePath, slug, index: fm.index })
    }
  }

  if (!warnings.length) return

  console.warn(
    `[warn-faq-index] Found ${warnings.length} FAQ file(s) with index enabled. ` +
      `Set frontmatter index: false if FAQ should stay inline-only.`
  )

  warnings.forEach((item) => {
    const relativePath = path.relative(root, item.filePath)
    const rawIndex = item.index === undefined ? 'undefined(default=true)' : String(item.index)
    console.warn(
      `[warn-faq-index] ${relativePath} slug="${item.slug}" index=${rawIndex} -> suggested: index: false`
    )
  })
}

run()
