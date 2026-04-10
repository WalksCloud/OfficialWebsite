<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { usePageHead } from '@/utils/usePageHead'
import { getContentFilePath, getSiteConfig } from '@/utils/pageConfig'
import MarkdownIt from 'markdown-it'
import YAML from 'yaml'
import { ref } from 'vue'
import Contact from '@/components/Contact.vue'

const md = new MarkdownIt({ html: true, linkify: true, breaks: true })
const site = getSiteConfig()

const route = useRoute()
const { locale, t } = useI18n()
const contentTitle = ref('')
usePageHead(route, { overrideTitle: contentTitle })

const modules = import.meta.glob('../content/**/*.md', {
  eager: true,
  as: 'raw',
  query: '?raw',
})
const moduleKeys = Object.keys(modules)

const pageKey = computed(() => route.meta.pageKey || 'home')
const currentLocale = computed(() => route.meta.locale || locale.value)

const findContentPath = (basePath, targetLocale) => {
  const candidates = [
    `${basePath}.${targetLocale}.md`,
    `${basePath}.${site.defaultLocale}.md`,
    `${basePath}.en.md`,
    `${basePath}.md`,
  ]
  return candidates.find((p) => moduleKeys.includes(p)) || null
}

const parseSingleLocaleMd = (raw = '', filenameLocale) => {
  const content = typeof raw === 'string' ? raw : String(raw || '')
  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  const meta = fmMatch ? YAML.parse(fmMatch[1]) || {} : {}
  const body = fmMatch ? fmMatch[2] : content
  const lang = filenameLocale || site.defaultLocale
  return { meta: { ...meta, lang }, body }
}

const renderBlock = (block, targetLocale) => {
  const titleText = typeof block.meta?.title === 'string' ? block.meta.title : ''
  const descriptionText = typeof block.meta?.description === 'string' ? block.meta.description : ''
  const content = (block.body || '').trim()
  const hasH1 = /^#\s+/m.test(content)
  const source = hasH1 ? content : `# ${titleText || ''}\n\n${descriptionText}\n\n${content}`
  return {
    title: titleText,
    description: descriptionText,
    html: md.render(source),
  }
}

const rendered = computed(() => {
  const basePath = getContentFilePath(pageKey.value, currentLocale.value)
  if (!basePath) return null
  const contentPath = findContentPath(basePath, currentLocale.value)
  if (!contentPath) return null
  const mod = modules[contentPath]
  const raw =
    typeof mod === 'string'
      ? mod
      : typeof mod?.default === 'string'
        ? mod.default
        : ''
  if (!raw) return null
  const filenameLocale = contentPath.match(/\.([a-z-]+)\.md$/i)?.[1]
  const block = parseSingleLocaleMd(raw, filenameLocale)
  const renderedBlock = renderBlock(block, currentLocale.value)
  if (renderedBlock?.title) {
    contentTitle.value = renderedBlock.title
  }
  return renderedBlock
})
</script>

<template>
  <section class="pt-[120px] pb-12 lg:pb-18 w-5/6 lg:w-2/3 mx-auto">
    <div v-if="rendered" class="markdown-content" v-html="rendered.html"></div>
    <p v-else class="text-center text-gray-600 dark:text-gray-300">
      {{ t('placeholder.message') }}
    </p>
  </section>
  <Contact />
</template>

<style scoped>
.markdown-content {
  color: inherit;
  line-height: 1.6;
}
:deep(.markdown-content h1) {
  font-size: 2rem;
  font-weight: 700;
  margin: 1.25rem 0 0.75rem;
}
:deep(.markdown-content h2) {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 1rem 0 0.6rem;
}
:deep(.markdown-content h3) {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0.85rem 0 0.5rem;
}
:deep(.markdown-content h4) {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0.75rem 0 0.4rem;
}
:deep(.markdown-content p) {
  margin: 0.5rem 0 0.75rem;
}
:deep(.markdown-content ul),
:deep(.markdown-content ol) {
  margin: 0.5rem 0 0.75rem 1.5rem;
  padding: 0;
}
:deep(.markdown-content ul) {
  list-style-type: disc;
}
:deep(.markdown-content ol) {
  list-style-type: decimal;
}
:deep(.markdown-content li + li) {
  margin-top: 0.25rem;
}
:deep(.markdown-content strong) {
  font-weight: 700;
}
:deep(.markdown-content em) {
  font-style: italic;
}
:deep(.markdown-content a) {
  color: var(--color-primary, #1e90ff);
  text-decoration: underline;
}
</style>
