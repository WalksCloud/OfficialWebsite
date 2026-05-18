import MarkdownIt from 'markdown-it'

const isExternalLink = (href = '') =>
  /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')

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
    const href = token.attrGet('href') || ''
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
