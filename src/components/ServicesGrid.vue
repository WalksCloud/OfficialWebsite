<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { buildNonPrefixedPath, buildPrefixedPath, getPageConfig } from '@/utils/pageConfig'

const route = useRoute()
const { locale, tm } = useI18n()

const useNonPrefixed = computed(() => route.meta.prefixed === false)
const currentLocale = computed(() => route.meta.locale || locale.value)

const buildHref = (pageKey) => {
  if (!pageKey) return null
  const pageConfig = getPageConfig(pageKey)
  if (!pageConfig || pageConfig.deploy !== true) return null
  const builder = useNonPrefixed.value ? buildNonPrefixedPath : buildPrefixedPath
  return builder(pageKey, currentLocale.value)
}

const serviceGroups = computed(() => {
  const rows = tm('services-section.services') || []
  return rows.map((row) => ({
    ...row,
    items: (row.items || []).map((item) => ({ ...item, href: buildHref(item.pageKey) })),
  }))
})
</script>

<template>
  <div class="grid lg:grid-cols-3 gap-6 lg:gap-12">
    <div v-bind:key="row.title" v-for="row in serviceGroups" class="text-left">
      <h3 class="text-xl lg:font-bold mb-2 lg:mb-4 block-title">{{ row.title }}</h3>
      <div v-bind:key="item.title" v-for="item in row.items" class="mb-2 lg:mb-4">
        <p class="font-bold">
          <a
            v-if="item.href"
            :href="item.href"
            class="group inline-flex items-center gap-2 text-slate-900 dark:text-white hover:text-primary transition-colors"
          >
            <span aria-hidden="true" class="material-symbols-outlined text-base transition duration-200 group-hover:text-primary chevron-wiggle">
              chevron_right
            </span>
            <span class="text-base transition duration-200 group-hover:text-primary">{{ item.title }}</span>
            <span
              aria-hidden="true"
              class="material-symbols-outlined text-base opacity-0 -translate-x-1 transition duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary"
            >
              arrow_forward
            </span>
          </a>
          <span v-else>{{ item.title }}</span>
        </p>
        <p class="text-gray-600 dark:text-gray-300">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes chevron-wiggle {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
  100% {
    transform: translateX(0);
  }
}

.chevron-wiggle {
  animation: chevron-wiggle 1s ease-in-out infinite;
}

@media (min-width: 1024px) {
  .chevron-wiggle {
    animation: none;
  }
}
</style>
