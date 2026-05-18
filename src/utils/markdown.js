import MarkdownIt from 'markdown-it'

const DOMAIN_LIKE_LINK_PATTERN = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9-]+)+(?::\d+)?(?:[/?#].*)?$/i

const isExternalLink = (href = '') =>
  /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')

const normalizeHref = (href = '') => {
  const trimmed = href.trim()
  if (!trimmed) return trimmed
  if (isExternalLink(trimmed)) return trimmed
  if (DOMAIN_LIKE_LINK_PATTERN.test(trimmed)) return `https://${trimmed}`
  return trimmed
}

export const createMarkdownRenderer = (options = {}) => {
  const md = new MarkdownIt(options)
  const defaultLinkOpen =
    md.renderer.rules.link_open ||
    ((tokens, idx, _options, _env, self) => self.renderToken(tokens, idx, _options))
  const defaultLinkClose =
    md.renderer.rules.link_close ||
    ((tokens, idx, _options, _env, self) => self.renderToken(tokens, idx, _options))
  md.renderer.rules.link_open = (tokens, idx, renderOptions, env, self) => {
    const token = tokens[idx]
    const rawHref = token.attrGet('href') || ''
    const href = normalizeHref(rawHref)
    if (href && href !== rawHref) {
      token.attrSet('href', href)
    }
    if (!href || isExternalLink(href)) {
      return defaultLinkOpen(tokens, idx, renderOptions, env, self)
    }

    const title = token.attrGet('title')
    const toAttr = href.replace(/"/g, '&quot;')
    const titleAttr = title ? ` title="${title.replace(/"/g, '&quot;')}"` : ''
    return `<RouterLink to="${toAttr}"${titleAttr}>`
  }

  md.renderer.rules.link_close = (tokens, idx, renderOptions, env, self) => {
    const openToken = tokens.slice(0, idx).reverse().find((token) => token.type === 'link_open')
    const href = openToken?.attrGet('href') || ''
    if (!href || isExternalLink(href)) {
      return defaultLinkClose(tokens, idx, renderOptions, env, self)
    }
    return '</RouterLink>'
  }

  md.renderer.rules.fence = (tokens, idx, renderOptions, env, self) => {
    const token = tokens[idx]
    const info = (token.info || '').trim().split(/\s+/)[0]?.toLowerCase() || ''
    if (info !== 'mermaid') {
      const code = (token.content || '').replace(/\n$/, '')
      const encodedCode = encodeURIComponent(code)
      const language = info || 'plain'
      return `<CodeBlock language="${md.utils.escapeHtml(language)}" code="${md.utils.escapeHtml(encodedCode)}"></CodeBlock>\n`
    }

    const diagramSource = md.utils.escapeHtml(token.content || '')
    return `<pre class="mermaid">${diagramSource}</pre>\n`
  }

  return md
}

export const renderMarkdownInlineToText = (source = '', options = {}) => {
  const input = typeof source === 'string' ? source : String(source || '')
  if (!input.trim()) return ''

  const md = new MarkdownIt(options)
  const inlineTokens = md.parseInline(input, {})
  const fragments = []

  const appendTokenText = (token) => {
    if (!token) return
    if (token.type === 'text' || token.type === 'code_inline' || token.type === 'html_inline') {
      if (token.content) fragments.push(token.content)
      return
    }
    if (token.type === 'softbreak' || token.type === 'hardbreak') {
      fragments.push(' ')
      return
    }
    if (token.type === 'image') {
      if (token.content) fragments.push(token.content)
      return
    }
    if (Array.isArray(token.children)) {
      token.children.forEach((child) => appendTokenText(child))
    }
  }

  inlineTokens.forEach((token) => {
    if (Array.isArray(token.children)) {
      token.children.forEach((child) => appendTokenText(child))
    } else {
      appendTokenText(token)
    }
  })

  return fragments
    .join('')
    .replace(/\s+/g, ' ')
    .trim()
}
