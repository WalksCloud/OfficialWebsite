<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ArticleList from '@/components/ArticleList.vue'
import { usePageHead } from '@/utils/usePageHead'
import { getPageConfig } from '@/utils/pageConfig'
import { listEntriesByPrefix } from '@/utils/contentIndex'
import { getServiceGroups } from '@/utils/serviceCategories'
import { getArticleServiceSlugs, getPageKeyForSlug, normalizeSlug } from '@/utils/articleTags'

const route = useRoute()
usePageHead(route)
const { t, locale } = useI18n()

const pageConfig = computed(() => getPageConfig(route.meta.pageKey) || {})
const indexConfig = computed(() => pageConfig.value?.articleIndex || {})

const localizedTitle = computed(() => {
  const translationKey = indexConfig.value.titleKey
  if (translationKey) return t(translationKey)
  const locale = route.meta.locale || 'zh-tw'
  return pageConfig.value?.titles?.[locale] || ''
})

const localizedDescription = computed(() => {
  const translationKey = indexConfig.value.descriptionKey
  if (translationKey) return t(translationKey)
  const locale = route.meta.locale || 'zh-tw'
  return pageConfig.value?.descriptions?.[locale] || ''
})

const baseSlug = computed(() => indexConfig.value.baseSlug || '/')

const availableArticleSlugs = computed(() =>
  listEntriesByPrefix(baseSlug.value).map(({ slug }) => normalizeSlug(slug)),
)

const groupedSections = computed(() => {
  const groupsWithPages = getServiceGroups(locale.value).map((group, index) => ({
    id: `${index}-${group.title}`,
    title: group.title || '',
    description: group.description || '',
    pageKeys: group.pageKeys || [],
    slugs: [],
  }))
  if (!groupsWithPages.length) return []
  const pageKeyToGroupIndex = new Map()
  groupsWithPages.forEach((group, index) => {
    group.pageKeys.forEach((pageKey) => pageKeyToGroupIndex.set(pageKey, index))
  })
  availableArticleSlugs.value.forEach((slug) => {
    const serviceSlugs = getArticleServiceSlugs(slug)
    serviceSlugs.forEach((serviceSlug) => {
      const pageKey = getPageKeyForSlug(serviceSlug)
      if (!pageKey) return
      const groupIndex = pageKeyToGroupIndex.get(pageKey)
      if (groupIndex === undefined) return
      const bucket = groupsWithPages[groupIndex]
      if (!bucket.slugs.includes(slug)) {
        bucket.slugs.push(slug)
      }
    })
  })
  return groupsWithPages.filter((group) => group.slugs.length)
})
</script>

<template>
  <section class="pt-28 lg:pt-32 pb-16">
    <div class="mx-auto space-y-10">
      <header class="text-center space-y-4">
        <h1 class="text-3xl lg:text-5xl font-bold">{{ localizedTitle }}</h1>
        <p v-if="localizedDescription" class="text-muted text-lg">{{ localizedDescription }}</p>
      </header>
      <div v-if="groupedSections.length" class="space-y-12">
        <ArticleList
          v-for="group in groupedSections"
          :key="group.id"
          :title="group.title"
          :description="group.description"
          :base-slug="baseSlug"
          :slugs="group.slugs"
          centered
        />
      </div>
      <div v-else>
        <ArticleList
          :base-slug="baseSlug"
          centered
        />
      </div>
    </div>
  </section>
</template>
