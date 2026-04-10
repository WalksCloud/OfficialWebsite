<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import UPageColumns from '@nuxt/ui/components/PageColumns.vue'
import { resolveContentInfo, listEntriesByPrefix, buildLocalizedPath } from '@/utils/contentIndex'
import ArticlePreview from './ArticlePreview.vue'
import { useFallbackNotice } from '@/composables/useFallbackNotice'
import { normalizeSlug } from '@/utils/articleTags'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  baseSlug: {
    type: String,
    required: true,
  },
  sectionId: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: '',
  },
  limit: {
    type: Number,
    default: null,
  },
  centered: {
    type: Boolean,
    default: false,
  },
  slugs: {
    type: Array,
    default: null,
  },
  showMoreLink: {
    type: Boolean,
    default: false,
  },
  moreLabelKey: {
    type: String,
    default: 'article.view-all',
  },
})

const { locale, fallbackLocale, t } = useI18n()
const { buildFallbackNotice } = useFallbackNotice()

const toArray = (value) => {
  if (!value) return []
  if (Array.isArray(value)) return value
  return [value]
}

const slugFilterSet = computed(() => {
  if (!props.slugs || !props.slugs.length) return null
  return new Set(props.slugs.map((slug) => normalizeSlug(slug)))
})

const articles = computed(() => {
  const localeValue = locale.value
  const fallbackList = toArray(fallbackLocale?.value)
  const entries = listEntriesByPrefix(props.baseSlug)

  const resolved = entries
    .map(({ slug }) => {
      const info = resolveContentInfo(slug, localeValue, { fallbackLocales: fallbackList })
      if (!info) return null
      const notice = info.isFallback
        ? buildFallbackNotice(info.requestedLocale, info.locale, info.availableLocales)
        : ''
      return {
        slug,
        title: info.title || slug,
        description: info.description || '',
        path: buildLocalizedPath(slug, info.locale),
        notice,
        date: info.date ? new Date(info.date) : null,
      }
    })
    .filter(Boolean)
    .filter((item) => {
      const filterSet = slugFilterSet.value
      if (!filterSet) return true
      return filterSet.has(normalizeSlug(item.slug))
    })
    .sort((a, b) => {
      if (a.date && b.date) return b.date - a.date
      if (a.date && !b.date) return -1
      if (!a.date && b.date) return 1
      return b.slug.localeCompare(a.slug)
    })

  if (props.limit && props.limit > 0) {
    return resolved.slice(0, props.limit)
  }
  return resolved
})

const hasArticles = computed(() => articles.value.length > 0)
const fullListPath = computed(() => buildLocalizedPath(props.baseSlug, locale.value))
const moreLabel = computed(() => {
  const translated = t(props.moreLabelKey)
  return typeof translated === 'string' ? translated : ''
})
</script>

<template>
  <section v-if="hasArticles" :id="sectionId" class="py-12">
    <div class="w-5/6 lg:w-3/4 mx-auto">
      <h2
        v-if="title"
        class="text-2xl lg:text-4xl font-bold mb-6 lg:mb-12"
        :class="[centered ? 'text-center' : 'text-left']"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="text-muted mb-6 lg:mb-8"
        :class="[centered ? 'text-center' : 'text-left']"
      >
        {{ description }}
      </p>
      <UPageColumns class="gap-4 list-none p-0">
        <ArticlePreview v-for="item in articles" :key="item.slug" :item="item" />
      </UPageColumns>
      <div v-if="showMoreLink" class="mt-6 text-center">
        <RouterLink :to="fullListPath" class="inline-flex items-center gap-2 text-primary font-semibold">
          {{ moreLabel }}
          <span aria-hidden="true">↗</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
