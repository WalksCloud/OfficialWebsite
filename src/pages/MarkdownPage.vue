<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import YAML from 'yaml'
import UBadge from '@nuxt/ui/components/Badge.vue'
import { usePageHead } from '@/utils/usePageHead'
import { getContentFilePath, getSiteConfig, getSlugForLocale } from '@/utils/pageConfig'
import { resolveContentInfo } from '@/utils/contentIndex'
import { getArticleCategoryTags } from '@/utils/articleTags'
import MarkdownRuntimeContent from '@/components/MarkdownRuntimeContent.vue'
import RelationShipArticleList from '@/components/RelationShipArticleList.vue'
import Contact from '@/components/Contact.vue'
import { createMarkdownRenderer } from '@/utils/markdown'

const md = createMarkdownRenderer({ html: true, linkify: true, breaks: true })
const site = getSiteConfig()

const route = useRoute()
const { locale, t } = useI18n()
const contentTitle = ref('')
const contentLocale = ref(locale.value)
usePageHead(route, { overrideTitle: contentTitle })

const modules = import.meta.glob('../content/**/*.md', {
  as: 'raw',
  query: '?raw',
  eager: true,
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

const parseSingleLocaleMd = (raw, filenameLocale) => {
  const content = typeof raw === 'string' ? raw : String(raw || '')
  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  const meta = fmMatch ? YAML.parse(fmMatch[1]) || {} : {}
  const body = fmMatch ? fmMatch[2] : content
  const lang = filenameLocale || site.defaultLocale
  return { meta: { ...meta, lang }, body }
}

const renderBlock = (block) => {
  const titleText = typeof block.meta?.title === 'string' ? block.meta.title : ''
  const descriptionText = typeof block.meta?.description === 'string' ? block.meta.description : ''
  const content = (block.body || '').trim()
  return {
    title: titleText,
    description: descriptionText,
    html: md.render(content),
  }
}

const rendered = ref(null)

const resolveRaw = (entry) => {
  if (typeof entry === 'string') return entry
  if (entry && typeof entry.default === 'string') return entry.default
  return ''
}

const resolveContent = () => {
  const basePath = getContentFilePath(pageKey.value, currentLocale.value)
  if (!basePath) return null
  const contentPath = findContentPath(basePath, currentLocale.value)
  if (!contentPath) return null
  const raw = resolveRaw(modules[contentPath])
  if (!raw) return null
  const filenameLocale = contentPath.match(/\.([a-z-]+)\.md$/i)?.[1]
  const block = parseSingleLocaleMd(raw, filenameLocale)
  contentLocale.value = block.meta?.lang || currentLocale.value
  return renderBlock(block)
}

const loadContent = () => {
  const block = resolveContent()
  if (block?.title) {
    contentTitle.value = block.title
  }
  rendered.value = block
}

loadContent()

watch(
  () => [pageKey.value, currentLocale.value],
  () => {
    loadContent()
  },
)
const normalizedSlug = computed(() => {
  const slug = getSlugForLocale(pageKey.value, currentLocale.value)
  if (!slug) return '/'
  return `/${slug.replace(/^\/+/, '')}`
})

const contentInfo = computed(() => {
  const slug = normalizedSlug.value
  if (!slug) return null
  return resolveContentInfo(slug, contentLocale.value || currentLocale.value)
})

const lastUpdatedDate = computed(() => contentInfo.value?.date ?? null)

const lastUpdatedLabel = computed(() => {
  const dateValue = lastUpdatedDate.value
  if (!dateValue) return ''
  const date = dateValue instanceof Date ? dateValue : new Date(dateValue)
  if (Number.isNaN(date.valueOf())) return ''
  const intlLocale = contentLocale.value || locale.value
  let formatted
  try {
    formatted = new Intl.DateTimeFormat(intlLocale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date)
  } catch (err) {
    formatted = date.toISOString().split('T')[0]
  }
  const translation = t('article.last-updated', { date: formatted })
  return typeof translation === 'string' ? translation : formatted
})

const articleTags = computed(() => {
  const slug = normalizedSlug.value
  if (!slug) return []
  const localeValue = contentLocale.value || currentLocale.value
  return getArticleCategoryTags(slug, localeValue)
})
</script>

<template>
  <section class="pt-30 pb-12 lg:pb-18 w-5/6 lg:w-2/3 mx-auto space-y-10">
    <div v-if="rendered" class="markdown-content space-y-2">
      <h1>
        <div class="flex flex-wrap gap-2 pt-4">
          <div>{{ rendered.title }}</div>
          <div class="flex-end">
            <UBadge
              v-for="tag in articleTags"
              :key="tag.id"
              :label="tag.label"
              color="neutral"
              variant="soft"
              class="font-bold rounded-full border border-transparent h-6"
              :style="tag.style"
            />
          </div>
          <div v-if="lastUpdatedLabel" class="markdown-last-updated flex-end ml-auto">
            {{ lastUpdatedLabel }}
          </div>
        </div>
      </h1>
      <p v-if="rendered.description">{{ rendered.description }}</p>
      <MarkdownRuntimeContent :source="rendered.html" />
    </div>
    <p v-else class="text-center text-gray-600 dark:text-gray-300">
      {{ t('placeholder.message') }}
    </p>
    <RelationShipArticleList />
  </section>
  <Contact />
</template>

<style scoped>
.markdown-content {
  color: inherit;
  line-height: 1.6;
}
:deep(.markdown-content [data-markdown-embedded]) {
  padding: 1rem 0 1rem;
}
:deep(.markdown-content h1:not([data-markdown-embedded] *)) {
  font-size: 2rem;
  font-weight: 700;
  margin: 1.25rem 0 0.75rem;
}
:deep(.markdown-content h2:not([data-markdown-embedded] *)) {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 1rem 0 0.6rem;
}
:deep(.markdown-content h3:not([data-markdown-embedded] *)) {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0.85rem 0 0.5rem;
}
:deep(.markdown-content h4:not([data-markdown-embedded] *)) {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0.75rem 0 0.4rem;
}
:deep(.markdown-content p:not([data-markdown-embedded] *)) {
  margin: 0.5rem 0 0.75rem;
}
:deep(.markdown-content ul:not([data-markdown-embedded] *)),
:deep(.markdown-content ol:not([data-markdown-embedded] *)) {
  margin: 0.5rem 0 0.75rem 1.5rem;
  padding: 0;
}
:deep(.markdown-content ul:not([data-markdown-embedded] *)) {
  list-style-type: disc;
}
:deep(.markdown-content ol:not([data-markdown-embedded] *)) {
  list-style-type: decimal;
}
:deep(.markdown-content li:not([data-markdown-embedded] *) + li:not([data-markdown-embedded] *)) {
  margin-top: 0.25rem;
}
:deep(.markdown-content strong:not([data-markdown-embedded] *)) {
  font-weight: 700;
}
:deep(.markdown-content em:not([data-markdown-embedded] *)) {
  font-style: italic;
}
:deep(.markdown-content a:not([data-markdown-embedded] *)) {
  color: var(--color-primary, #1e90ff);
  text-decoration: underline;
}
.markdown-last-updated {
  font-size: 0.85rem;
  color: #6b7280;
  font-style: italic;
}
.flex-end {
  align-content: flex-end;
}
:deep(hr) {
  margin: calc(var(--spacing) * 12) 0 calc(var(--spacing) * 12);
}
</style>
