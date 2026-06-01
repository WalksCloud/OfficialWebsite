import fs from 'node:fs'
import path from 'node:path'
import yaml from 'yaml'

const root = process.cwd()
const distDir = path.resolve(root, 'dist')
const siteFile = path.resolve(root, 'config/site-info.yaml')
const redirectsFile = path.resolve(root, 'config/redirects.yaml')
const nginxConfFile = path.resolve(root, 'deploy/nginx.conf')
const workerTemplateFile = path.resolve(root, 'deploy/cloudflare-pages-worker.js')
const workerOutputFile = path.resolve(distDir, '_worker.js')

const readYaml = (filePath) => yaml.parse(fs.readFileSync(filePath, 'utf8'))

const site = readYaml(siteFile)
const locales = Array.isArray(site.locales) ? site.locales.filter(Boolean) : []
const defaultLocale = site.defaultLocale || locales[0]

const normalizePath = (value, fieldName, options = {}) => {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`Redirect ${fieldName} must be a non-empty string.`)
  }
  const trimmed = value.trim()
  if (!trimmed.startsWith('/')) {
    throw new Error(`Redirect ${fieldName} must start with "/": ${trimmed}`)
  }
  if (/^https?:\/\//i.test(trimmed)) {
    throw new Error(`Redirect ${fieldName} must be a site-relative path: ${trimmed}`)
  }
  if (options.preserveTrailingSlash) {
    return trimmed === '/' ? '/' : trimmed.replace(/\/{2,}$/g, '/')
  }
  return trimmed.replace(/\/+$/, '') || '/'
}

const splitPath = (value) => normalizePath(value, 'path').replace(/^\/+/, '').split('/')

const hasLocalePrefix = (value) => {
  const firstSegment = splitPath(value)[0]
  return locales.includes(firstSegment)
}

const addLocalePrefix = (value, locale, options = {}) => {
  const normalized = normalizePath(value, 'path', options)
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`
}

const mapPaths = ({ from, to }) => {
  const source = normalizePath(from, 'from')
  const sourceWithSlash = source === '/' ? source : `${source}/`
  const target = normalizePath(to, 'to', { preserveTrailingSlash: true })
  return sourceWithSlash === source
    ? [[source, target]]
    : [
        [source, target],
        [sourceWithSlash, target],
      ]
}

const loadBaseRedirects = () => {
  if (!fs.existsSync(redirectsFile)) return []
  const parsed = readYaml(redirectsFile)
  const entries = Array.isArray(parsed) ? parsed : parsed?.redirects
  if (!Array.isArray(entries)) {
    throw new TypeError('config/redirects.yaml must contain a redirect array.')
  }

  return entries.map((entry, index) => {
    if (!entry || typeof entry !== 'object') {
      throw new TypeError(`config/redirects.yaml entry ${index + 1} must be an object.`)
    }
    const from = normalizePath(entry.from, 'from')
    const to = normalizePath(entry.to, 'to', { preserveTrailingSlash: true })
    if (hasLocalePrefix(from) || hasLocalePrefix(to)) {
      throw new TypeError('config/redirects.yaml should only contain non-locale redirects; locale-prefixed redirects are generated automatically.')
    }
    return { from, to }
  })
}

const expandLocaleRedirects = (redirects) =>
  redirects.flatMap((redirect) => [
    redirect,
    ...locales.map((locale) => ({
      ...redirect,
      from: addLocalePrefix(redirect.from, locale),
      to: addLocalePrefix(redirect.to, locale, { preserveTrailingSlash: true }),
    })),
  ])

const buildRedirectMap = () => {
  const redirectMap = {}
  for (const redirect of expandLocaleRedirects(loadBaseRedirects())) {
    for (const [from, to] of mapPaths(redirect)) {
      if (redirectMap[from]) {
        throw new TypeError(`Duplicate generated redirect from ${from}.`)
      }
      redirectMap[from] = to
    }
  }
  return redirectMap
}

const extractBotUserAgentPattern = () => {
  const nginxConf = fs.readFileSync(nginxConfFile, 'utf8')
  const match = nginxConf.match(/~\*\(([^)]+)\)\s+bot;/)
  if (!match) {
    throw new TypeError('Cannot find nginx bot user-agent pattern in deploy/nginx.conf.')
  }
  return match[1]
}

const replaceToken = (content, token, value) => content.replace(token, value)

const run = () => {
  if (!fs.existsSync(distDir)) {
    throw new TypeError('dist not found. Run the SSG build before generating the Cloudflare Pages worker.')
  }
  if (!defaultLocale || !locales.includes(defaultLocale)) {
    throw new TypeError('config/site-info.yaml must define defaultLocale and include it in locales.')
  }

  let worker = fs.readFileSync(workerTemplateFile, 'utf8')
  worker = replaceToken(worker, '__WC_DEFAULT_LOCALE__', JSON.stringify(defaultLocale))
  worker = replaceToken(worker, '__WC_LOCALES__', JSON.stringify(locales))
  worker = replaceToken(worker, '__WC_REDIRECTS__', JSON.stringify(buildRedirectMap(), null, 2))
  worker = replaceToken(worker, '__WC_BOT_USER_AGENT_PATTERN__', JSON.stringify(extractBotUserAgentPattern()))

  fs.writeFileSync(workerOutputFile, worker, 'utf8')
  console.log('Generated Cloudflare Pages _worker.js.')
}

try {
  run()
} catch (err) {
  console.error(err)
  process.exit(1)
}
