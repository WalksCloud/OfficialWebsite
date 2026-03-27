<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { usePageHead } from '@/utils/usePageHead'
import { getContentFilePath } from '@/utils/pageConfig'

const route = useRoute()
const { locale, t } = useI18n()
usePageHead(route)

const modules = import.meta.glob('../content/**/*.md', { eager: true })

const pageKey = computed(() => route.meta.pageKey || 'home')
const currentLocale = computed(() => route.meta.locale || locale.value)

const markdownComponent = computed(() => {
  const contentPath = getContentFilePath(pageKey.value, currentLocale.value)
  if (!contentPath) return null
  return modules[contentPath]?.default || null
})
</script>

<template>
  <section class="py-12 lg:py-18 w-5/6 lg:w-2/3 mx-auto">
    <component v-if="markdownComponent" :is="markdownComponent" />
    <p v-else class="text-center text-gray-600 dark:text-gray-300">
      {{ t('placeholder.message') }}
    </p>
  </section>
</template>
