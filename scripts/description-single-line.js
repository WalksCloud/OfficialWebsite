import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import yaml from 'yaml'

const root = process.cwd()
const contentDir = path.resolve(root, 'src/content')
const shouldFix = process.argv.includes('--fix')
const shouldFail = process.env.WC_CONTENT_DESCRIPTION_FAIL_ON_MULTILINE !== '0'

const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?/
const topLevelKeyRegex = /^[A-Za-z0-9_-]+:\s*/
const targetFields = ['title', 'description']

const walkMarkdownFiles = (dirPath) => {
  const files = []
  if (!fs.existsSync(dirPath)) return files
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath))
      continue
    }
    if (entry.isFile() && fullPath.endsWith('.md')) {
      files.push(fullPath)
    }
  }
  return files
}

const normalizeBlockValue = (value) => {
  const normalized = String(value ?? '').replace(/\r\n/g, '\n').trim()
  if (!normalized) return ['  ']
  return normalized.split('\n').map((line) => `  ${line}`)
}

const getFieldRange = (lines, fieldName) => {
  const start = lines.findIndex((line) => new RegExp(`^${fieldName}:\\s*`).test(line))
  if (start < 0) return null
  let end = start + 1
  while (end < lines.length && !topLevelKeyRegex.test(lines[end])) {
    end += 1
  }
  return { start, end }
}

const replaceFieldBlock = (frontmatter = '', fieldName, replacementLines = []) => {
  const lines = frontmatter.split('\n')
  const range = getFieldRange(lines, fieldName)
  if (!range) return { changed: false, frontmatter }

  const current = lines.slice(range.start, range.end).join('\n')
  const next = replacementLines.join('\n')
  if (current === next) return { changed: false, frontmatter }

  const merged = [
    ...lines.slice(0, range.start),
    ...replacementLines,
    ...lines.slice(range.end),
  ]
  return { changed: true, frontmatter: merged.join('\n') }
}

const hasBlockStyle = (line = '') => /^\s*[A-Za-z0-9_-]+:\s*\|[-+]?\s*$/.test(line)

const files = walkMarkdownFiles(contentDir)
const violations = []
let updatedCount = 0

for (const filePath of files) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const match = raw.match(frontmatterRegex)
  if (!match) continue

  let frontmatter = match[1]
  let meta = {}
  try {
    meta = yaml.parse(frontmatter) || {}
  } catch (error) {
    violations.push({ filePath, reason: `failed to parse frontmatter: ${error.message}` })
    continue
  }

  let fileChanged = false

  for (const fieldName of targetFields) {
    if (!Object.hasOwn(meta, fieldName)) continue

    const lines = frontmatter.split('\n')
    const range = getFieldRange(lines, fieldName)
    if (!range) continue

    const headerLine = lines[range.start] || ''
    const valid = hasBlockStyle(headerLine)
    if (!valid) {
      violations.push({ filePath, reason: `${fieldName} must use block style (|)` })
      if (shouldFix) {
        const replacement = [`${fieldName}: |`, ...normalizeBlockValue(meta[fieldName])]
        const rewritten = replaceFieldBlock(frontmatter, fieldName, replacement)
        if (rewritten.changed) {
          frontmatter = rewritten.frontmatter
          fileChanged = true
        }
      }
    }
  }

  if (fileChanged) {
    const updated = raw.replace(frontmatterRegex, `---\n${frontmatter}\n---\n`)
    fs.writeFileSync(filePath, updated, 'utf8')
    updatedCount += 1
  }
}

if (shouldFix) {
  console.log(`[description-single-line] normalized ${updatedCount} file(s).`)
}

if (!violations.length) {
  console.log('[description-single-line] ok')
  process.exit(0)
}

console.warn(`[description-single-line] found ${violations.length} field style violation(s).`)
for (const item of violations) {
  const rel = path.relative(root, item.filePath)
  console.warn(`[description-single-line] ${rel}: ${item.reason}`)
}

if (shouldFail && !shouldFix) {
  console.error(
    '[description-single-line] failed. Run `bun scripts/description-single-line.js --fix` or set WC_CONTENT_DESCRIPTION_FAIL_ON_MULTILINE=0 to bypass.',
  )
  process.exit(1)
}

process.exit(0)
