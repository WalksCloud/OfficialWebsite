import fs from 'node:fs'
import path from 'node:path'
import yaml from 'yaml'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const siteFile = path.join(root, 'config/site-info.yaml')
const indexBasename = 'index.html'
const normalBasename = 'index.normal.html'
const botBasename = 'index.bot.html'
const site = yaml.parse(fs.readFileSync(siteFile, 'utf8'))
const localeDirs = new Set(Array.isArray(site.locales) ? site.locales.filter(Boolean) : [])

const loaderBlockPattern = /<div id="wc-loader"[\s\S]*?<\/div>\s*/i
const loaderScriptPattern =
  /<script>\s*\(\(\)\s*=>\s*\{[\s\S]*?globalThis\.window\.__wcRemoveLoader = startExit[\s\S]*?\}\)\(\)\s*<\/script>\s*/i
const contactSectionPattern = /<section[^>]*\bid=(['"])contact\1[^>]*>[\s\S]*?<\/section>\s*/i

const collectIndexHtmlFiles = (baseDir) => {
  const stack = [baseDir]
  const files = []

  while (stack.length) {
    const current = stack.pop()
    const entries = fs.readdirSync(current, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name)
      if (entry.isDirectory()) {
        stack.push(fullPath)
        continue
      }
      if (entry.isFile() && entry.name === indexBasename) {
        files.push(fullPath)
      }
    }
  }

  return files
}

const countTransformedIndexHtmlFiles = (baseDir) => {
  const stack = [baseDir]
  let count = 0

  while (stack.length) {
    const current = stack.pop()
    const entries = fs.readdirSync(current, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name)
      if (entry.isDirectory()) {
        stack.push(fullPath)
        continue
      }
      if (
        entry.isFile() &&
        (entry.name === normalBasename || entry.name === botBasename)
      ) {
        count += 1
      }
    }
  }

  return count
}

const isLocaleScopedHtml = (filePath) => {
  const relative = path.relative(distDir, filePath).replace(/\\/g, '/')
  const firstSegment = relative.split('/')[0]
  return localeDirs.has(firstSegment)
}

const pruneEmptyDirectories = (baseDir) => {
  const entries = fs.readdirSync(baseDir, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const fullPath = path.join(baseDir, entry.name)
    pruneEmptyDirectories(fullPath)
    if (fs.readdirSync(fullPath).length === 0) {
      fs.rmdirSync(fullPath)
    }
  }
}

const run = () => {
  if (!fs.existsSync(distDir)) {
    throw new TypeError('dist not found. Run the SSG build before generating bot/normal index files.')
  }
  if (localeDirs.size === 0) {
    throw new TypeError('config/site-info.yaml must define at least one locale.')
  }
  const indexFiles = collectIndexHtmlFiles(distDir)
  if (!indexFiles.length) {
    const transformedCount = countTransformedIndexHtmlFiles(distDir)
    if (transformedCount > 0) {
      console.log(
        `Skipped bot/normal index generation because dist already contains ${transformedCount} transformed HTML files and no original index.html files.`
      )
      return
    }
    throw new TypeError('No index.html files found in dist.')
  }

  let removedNonLocaleHtmlCount = 0

  for (const indexPath of indexFiles) {
    const dir = path.dirname(indexPath)
    const normalPath = path.join(dir, normalBasename)
    const botPath = path.join(dir, botBasename)
    const normalHtml = fs.readFileSync(indexPath, 'utf8')
    let botHtml = normalHtml

    botHtml = botHtml.replace(loaderBlockPattern, '')
    botHtml = botHtml.replace(loaderScriptPattern, '')
    botHtml = botHtml.replace(contactSectionPattern, '')
    botHtml = botHtml.replace(/\n{3,}/g, '\n\n')

    fs.writeFileSync(normalPath, normalHtml, 'utf8')
    fs.writeFileSync(botPath, botHtml, 'utf8')
    fs.unlinkSync(indexPath)

    if (!isLocaleScopedHtml(normalPath)) {
      fs.unlinkSync(normalPath)
      fs.unlinkSync(botPath)
      removedNonLocaleHtmlCount += 2
    }
  }

  pruneEmptyDirectories(distDir)

  console.log(
    `Generated bot/normal index files for ${indexFiles.length} route entries, removed original index.html files, and removed ${removedNonLocaleHtmlCount} non-locale HTML files.`
  )
}

try {
  run()
} catch (err) {
  console.error(err)
  process.exit(1)
}
