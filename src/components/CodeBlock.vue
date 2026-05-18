<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { highlightText } from '@speed-highlight/core'

const props = defineProps({
  language: {
    type: String,
    default: 'plain',
  },
  code: {
    type: String,
    default: '',
  },
})

const languageAliasMap = {
  shell: 'bash',
  sh: 'bash',
  zsh: 'bash',
  fish: 'bash',
  javascript: 'js',
  jsx: 'js',
  typescript: 'ts',
  tsx: 'ts',
  yml: 'yaml',
  markdown: 'md',
  text: 'plain',
  plaintext: 'plain',
  dockerfile: 'docker',
  csharp: 'c',
  cpp: 'c',
}

const decodeCode = (value = '') => {
  if (!value) return ''
  try {
    return decodeURIComponent(value)
  } catch (error) {
    return value
  }
}

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const normalizeLanguage = (value = '') => {
  const cleaned = String(value || '')
    .trim()
    .toLowerCase()
  return languageAliasMap[cleaned] || cleaned || 'plain'
}

const codeText = computed(() => decodeCode(props.code).replace(/\r\n/g, '\n'))
const speedHighlightLanguage = computed(() => normalizeLanguage(props.language))
const displayLanguage = computed(() => {
  const normalized = normalizeLanguage(props.language)
  return normalized === 'plain' ? 'text' : normalized
})
const lineNumbers = computed(() => {
  const text = codeText.value
  return text ? text.split('\n').length : 1
})

const highlightedHtml = ref(escapeHtml(codeText.value))
const copied = ref(false)
let renderToken = 0
let copyFeedbackTimer = null

const copyToClipboardFallback = (value = '') => {
  if (typeof document === 'undefined') return false
  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  let copiedByExecCommand = false
  try {
    copiedByExecCommand = document.execCommand('copy')
  } catch (error) {
    copiedByExecCommand = false
  }
  document.body.removeChild(textarea)
  return copiedByExecCommand
}

const showCopyFeedback = () => {
  copied.value = true
  if (copyFeedbackTimer) {
    clearTimeout(copyFeedbackTimer)
  }
  copyFeedbackTimer = setTimeout(() => {
    copied.value = false
    copyFeedbackTimer = null
  }, 1400)
}

const copyCode = async () => {
  const rawCode = codeText.value
  if (!rawCode) return
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(rawCode)
      showCopyFeedback()
      return
    }
    if (copyToClipboardFallback(rawCode)) {
      showCopyFeedback()
    }
  } catch (error) {
    if (copyToClipboardFallback(rawCode)) {
      showCopyFeedback()
    }
  }
}

watch(
  [codeText, speedHighlightLanguage],
  async () => {
    const currentToken = ++renderToken
    highlightedHtml.value = escapeHtml(codeText.value)
    try {
      const html = await highlightText(codeText.value, speedHighlightLanguage.value, false)
      if (currentToken !== renderToken) return
      highlightedHtml.value = html
    } catch (error) {
      if (currentToken !== renderToken) return
      highlightedHtml.value = escapeHtml(codeText.value)
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (copyFeedbackTimer) {
    clearTimeout(copyFeedbackTimer)
    copyFeedbackTimer = null
  }
})
</script>

<template>
  <div class="wc-codeblock-root">
    <div class="wc-codeblock-card">
      <div class="wc-codeblock-topbar">
        <span class="wc-codeblock-dot wc-codeblock-dot-red"></span>
        <span class="wc-codeblock-dot wc-codeblock-dot-yellow"></span>
        <span class="wc-codeblock-dot wc-codeblock-dot-green"></span>
        <div class="wc-codeblock-actions">
          <button type="button" class="wc-codeblock-copy-btn" @click="copyCode">
            {{ copied ? 'Copied' : 'Copy' }}
          </button>
          <span class="wc-codeblock-language">{{ displayLanguage }}</span>
        </div>
      </div>
      <div class="wc-codeblock-body">
        <div class="wc-codeblock-lines" aria-hidden="true">
          <span v-for="line in lineNumbers" :key="line">{{ line }}</span>
        </div>
        <pre class="wc-codeblock-pre"><code class="wc-codeblock-code" v-html="highlightedHtml"></code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wc-codeblock-root {
  margin: 1rem 0;
  background: transparent;
  --wc-codeblock-border: #cfd8e3;
  --wc-codeblock-card-bg: #f8fbff;
  --wc-codeblock-topbar-bg: #eef3f9;
  --wc-codeblock-topbar-border: #dbe4ef;
  --wc-codeblock-lang: #4b5f78;
  --wc-codeblock-line-color: #7f8ea3;
  --wc-codeblock-line-border: #dbe4ef;
  --wc-codeblock-code-bg: #f8fbff;
  --wc-codeblock-code-fg: #1f2937;
  --wc-codeblock-syn-cmnt: #6b7280;
  --wc-codeblock-syn-kwd: #c026d3;
  --wc-codeblock-syn-num: #c2410c;
  --wc-codeblock-syn-str: #15803d;
  --wc-codeblock-syn-type: #0369a1;
  --wc-codeblock-syn-func: #7c3aed;
}

@media (prefers-color-scheme: dark) {
  .wc-codeblock-root {
    --wc-codeblock-border: #263244;
    --wc-codeblock-card-bg: #0d1117;
    --wc-codeblock-topbar-bg: #101722;
    --wc-codeblock-topbar-border: #1f2937;
    --wc-codeblock-lang: #8ea3c0;
    --wc-codeblock-line-color: #5f6f84;
    --wc-codeblock-line-border: #1f2937;
    --wc-codeblock-code-bg: #0d1117;
    --wc-codeblock-code-fg: #d6e1ff;
    --wc-codeblock-syn-cmnt: #6f7f99;
    --wc-codeblock-syn-kwd: #ff7ab8;
    --wc-codeblock-syn-num: #ffbd7a;
    --wc-codeblock-syn-str: #9cd67d;
    --wc-codeblock-syn-type: #6ec8ff;
    --wc-codeblock-syn-func: #caa3ff;
  }
}

:global(html.dark) .wc-codeblock-root {
  --wc-codeblock-border: #263244;
  --wc-codeblock-card-bg: #0d1117;
  --wc-codeblock-topbar-bg: #101722;
  --wc-codeblock-topbar-border: #1f2937;
  --wc-codeblock-lang: #8ea3c0;
  --wc-codeblock-line-color: #5f6f84;
  --wc-codeblock-line-border: #1f2937;
  --wc-codeblock-code-bg: #0d1117;
  --wc-codeblock-code-fg: #d6e1ff;
  --wc-codeblock-syn-cmnt: #6f7f99;
  --wc-codeblock-syn-kwd: #ff7ab8;
  --wc-codeblock-syn-num: #ffbd7a;
  --wc-codeblock-syn-str: #9cd67d;
  --wc-codeblock-syn-type: #6ec8ff;
  --wc-codeblock-syn-func: #caa3ff;
}

:global(html:not(.dark)) .wc-codeblock-root {
  --wc-codeblock-border: #cfd8e3;
  --wc-codeblock-card-bg: #f8fbff;
  --wc-codeblock-topbar-bg: #eef3f9;
  --wc-codeblock-topbar-border: #dbe4ef;
  --wc-codeblock-lang: #4b5f78;
  --wc-codeblock-line-color: #7f8ea3;
  --wc-codeblock-line-border: #dbe4ef;
  --wc-codeblock-code-bg: #f8fbff;
  --wc-codeblock-code-fg: #1f2937;
  --wc-codeblock-syn-cmnt: #6b7280;
  --wc-codeblock-syn-kwd: #c026d3;
  --wc-codeblock-syn-num: #c2410c;
  --wc-codeblock-syn-str: #15803d;
  --wc-codeblock-syn-type: #0369a1;
  --wc-codeblock-syn-func: #7c3aed;
}

.wc-codeblock-card {
  border: 1px solid var(--wc-codeblock-border);
  border-radius: 0.75rem;
  background: var(--wc-codeblock-card-bg);
  overflow: hidden;
}

.wc-codeblock-topbar {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid var(--wc-codeblock-topbar-border);
  background: var(--wc-codeblock-topbar-bg);
}

.wc-codeblock-dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 999px;
  display: inline-block;
}

.wc-codeblock-dot-red {
  background: #ff5f56;
}

.wc-codeblock-dot-yellow {
  background: #ffbd2e;
}

.wc-codeblock-dot-green {
  background: #27c93f;
}

.wc-codeblock-language {
  color: var(--wc-codeblock-lang);
  font-size: 0.75rem;
  text-transform: lowercase;
  letter-spacing: 0.02em;
}

.wc-codeblock-actions {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.wc-codeblock-copy-btn {
  border: 1px solid var(--wc-codeblock-topbar-border);
  background: transparent;
  color: var(--wc-codeblock-lang);
  border-radius: 0.35rem;
  padding: 0.12rem 0.42rem;
  font-size: 0.72rem;
  line-height: 1.2;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.wc-codeblock-copy-btn:hover {
  background: color-mix(in srgb, var(--wc-codeblock-topbar-bg) 70%, white 30%);
}

.wc-codeblock-copy-btn:active {
  background: color-mix(in srgb, var(--wc-codeblock-topbar-bg) 80%, black 20%);
}

.wc-codeblock-body {
  display: grid;
  grid-template-columns: auto 1fr;
  overflow-x: auto;
}

.wc-codeblock-lines {
  user-select: none;
  color: var(--wc-codeblock-line-color);
  border-right: 1px solid var(--wc-codeblock-line-border);
  padding: 1rem 0.65rem;
  text-align: right;
  min-width: 3rem;
  font-family: "JetBrains Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

.wc-codeblock-lines span {
  display: block;
  height: 1.6em;
}

.wc-codeblock-pre {
  margin: 0;
  padding: 1rem;
  min-width: fit-content;
  background: var(--wc-codeblock-code-bg);
}

.wc-codeblock-code {
  display: block;
  white-space: pre;
  font-family: "JetBrains Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--wc-codeblock-code-fg);
}

:deep(.wc-codeblock-code .shj-syn-cmnt) {
  color: var(--wc-codeblock-syn-cmnt);
  font-style: italic;
}

:deep(.wc-codeblock-code .shj-syn-kwd),
:deep(.wc-codeblock-code .shj-syn-err) {
  color: var(--wc-codeblock-syn-kwd);
}

:deep(.wc-codeblock-code .shj-syn-num),
:deep(.wc-codeblock-code .shj-syn-class) {
  color: var(--wc-codeblock-syn-num);
}

:deep(.wc-codeblock-code .shj-syn-str),
:deep(.wc-codeblock-code .shj-syn-insert) {
  color: var(--wc-codeblock-syn-str);
}

:deep(.wc-codeblock-code .shj-syn-type),
:deep(.wc-codeblock-code .shj-syn-oper),
:deep(.wc-codeblock-code .shj-syn-bool),
:deep(.wc-codeblock-code .shj-syn-var) {
  color: var(--wc-codeblock-syn-type);
}

:deep(.wc-codeblock-code .shj-syn-section),
:deep(.wc-codeblock-code .shj-syn-func) {
  color: var(--wc-codeblock-syn-func);
}
</style>
