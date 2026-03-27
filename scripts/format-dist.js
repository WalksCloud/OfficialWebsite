import fs from 'fs'
import path from 'path'
import { globby } from 'globby'
import prettier from 'prettier'

const root = process.cwd()
const distDir = path.join(root, 'dist')

const run = async () => {
  if (!fs.existsSync(distDir)) {
    console.log('dist not found, skip format')
    return
  }
  const files = await globby('**/*.html', { cwd: distDir, absolute: true })
  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8')
    const parts = raw.split(/<\/head>/i)
    if (parts.length < 2) {
      continue
    }
    const headStart = parts[0].indexOf('<head>')
    if (headStart === -1) continue
    const headContent = raw.slice(headStart + 6, raw.toLowerCase().indexOf('</head>'))
    const formattedHead = await prettier.format(`<head>${headContent}</head>`, { parser: 'html' })
    const innerHead = formattedHead.replace(/^<head>\s*/i, '').replace(/\s*<\/head>\s*$/i, '').replace(/^/gm, '  ')
    let formatted = raw.replace(headContent, `\n  ${innerHead}\n  `)
    formatted = formatted.replace(
      /^<!DOCTYPE html><html([^>]*)><head>/i,
      (_m, attrs) => `<!DOCTYPE html>\n<html${attrs}>\n  <head>`
    )
    fs.writeFileSync(file, formatted, 'utf8')
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
