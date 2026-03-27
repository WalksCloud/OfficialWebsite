<script setup>
import { useI18n } from 'vue-i18n'
import { usePageHead } from '@/utils/usePageHead'
import { useRoute, useRouter } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
usePageHead(route)

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <section class="pt-[120px] pb-16 w-5/6 lg:w-2/3 mx-auto text-center">
    <h1 class="text-4xl lg:text-5xl font-bold mb-4">404</h1>
    <p class="text-xl lg:text-2xl font-semibold mb-4">{{ t('not-found.title') }}</p>
    <p class="text-gray-600 dark:text-gray-300 mb-8">{{ t('not-found.description') }}</p>
    <button
      class="text-white bg-primary border-1 hover:border-primary hover:bg-white hover:text-primary dark:border-transparent dark:hover:bg-[#222831] rounded-lg text-sm px-4 py-2"
      @click="goHome"
    >
      {{ t('not-found.back-home') }}
    </button>
  </section>
</template>
