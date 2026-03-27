<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { resolvePageConfig } from '@/utils/pageConfig'
import { usePageHead } from '@/utils/usePageHead'

const route = useRoute()
usePageHead(route)

const { t, locale } = useI18n()
const pageConfig = computed(() => resolvePageConfig(route.meta.pageKey, locale.value))
const title = computed(() => pageConfig.value?.titles?.[locale.value] || pageConfig.value?.titles?.[route.meta.locale] || '')
const description = computed(() => pageConfig.value?.descriptions?.[locale.value] || pageConfig.value?.descriptions?.[route.meta.locale] || '')
const displayName = computed(() => title.value || route.meta.pageKey)
</script>

<template>
  <section class="py-12 lg:py-18 w-5/6 lg:w-2/3 mx-auto text-center">
    <h1 class="text-3xl lg:text-4xl font-bold mb-4">{{ displayName }}</h1>
    <p class="text-gray-600 dark:text-gray-300 mb-6" v-if="description">{{ description }}</p>
    <p class="text-gray-500 dark:text-gray-400">{{ t('placeholder.message') }}</p>
  </section>
</template>
