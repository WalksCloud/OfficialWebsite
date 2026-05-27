import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const indexBasename = 'index.html'
const normalBasename = 'index.normal.html'
const botBasename = 'index.bot.html'

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

const run = () => {
  if (!fs.existsSync(distDir)) {
    throw new TypeError('dist not found. Run the SSG build before generating bot/normal index files.')
  }
  const indexFiles = collectIndexHtmlFiles(distDir)
  if (!indexFiles.length) {
    throw new TypeError('No index.html files found in dist.')
  }

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
  }

  console.log(`Generated bot/normal index files for ${indexFiles.length} route entries and removed original index.html files.`)
}

try {
  run()
} catch (err) {
  console.error(err)
  process.exit(1)
}
