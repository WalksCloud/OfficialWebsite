<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import UPageCard from '@nuxt/ui/components/PageCard.vue'
import UChatTool from '@nuxt/ui/components/ChatTool.vue'

const { t, tm, locale } = useI18n()
const chatToolUi = {
  label: 'text-lg text-left whitespace-normal overflow-visible text-pretty',
  root: 'rounded-md ring ring-default overflow-hidden border border-gray-400/70 dark:border-white/30',
  leading: 'size-16',
  leadingIcon: 'size-16',
  body: 'text-lg text-dimmed whitespace-pre-wrap text-white border-t p-2 max-h-[200px] overflow-y-auto border-gray-400/70 dark:border-white/30',
}

const items = ref([])
const hydrateItems = () => {
  const rows = tm('about-section.questions-block.items') || []
  items.value = rows.map((row) => ({ ...row }))
}

hydrateItems()
watch(locale, hydrateItems)
</script>

<template>
  <section id="about" class="section-anchor pt-13.25 lg:pt-20.5">
    <div class="home-bg h-[85vh] lg:h-screen relative">
      <div class="w-full absolute bottom-25 lg:bottom-5">
        <div class="w-5/6 lg:w-3/4 mx-auto text-center text-white shadow-dark">
          <h2 class="text-4xl mb-2 lg:text-5xl lg:mb-3 font-bold">{{ $t('about') }}</h2>
          <p class="text-xl lg:text-3xl">{{ $t('about-section.title') }} </p>
          <div class="my-4 mb-4 lg:my-6 lg:mb-10">
            <p v-bind:key="row" v-for="row in $tm('about-section.intro')">{{ row }}</p>
          </div>
          <!-- desktop -->
          <div class="hidden lg:grid grid-cols-3 gap-6 text-shadow-none">
            <UPageCard v-for="(row, index) in $tm('about-section.about-items')" :key="`about-desktop-${index}`" class="wc-glass-card wc-card-spotlight text-black dark:text-gray-200 shadow-md p-6"
              :ui="{ root: 'bg-transparent', spotlight: 'bg-transparent' }" spotlight>
              <template #default>
                <h3 class="text-xl font-bold mb-2">{{ row.title }}</h3>
                <p>{{ row.content }}</p>
              </template>
            </UPageCard>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div class="lg:hidden w-5/6 mx-auto grid gap-4 relative -mt-15">
      <UPageCard v-for="(row, index) in $tm('about-section.about-items')" :key="`about-mobile-${index}`" class="wc-glass-card wc-card-spotlight shadow p-4 text-gray-800 dark:text-gray-100"
        :ui="{ root: 'bg-transparent', spotlight: 'bg-transparent' }" spotlight>
        <template #default>
          <h3 class="font-bold mb-1">{{ row.title }}</h3>
          <p class="text-sm">{{ row.content }}</p>
        </template>
      </UPageCard>
    </div>

    <div class="py-8 lg:py-18">
      <div class="w-5/6 lg:w-3/4 mx-auto text-center">
        <p class="text-2xl lg:text-3xl font-bold">{{ $t('about-section.questions-block.title') }}</p>
        <p class="mt-2 mb-8">{{ $t('about-section.questions-block.intro') }}</p>
        <div class="grid lg:grid-cols-2 gap-4 lg:gap-6">
          <div class="text-left" v-bind:key="index" v-for="(item, index) in items">
            <UChatTool streaming :text="item.title" :icon="item.icon" variant="card" chevron="trailing" :ui="chatToolUi">
              {{ item.content }}
            </UChatTool>
          </div>
        </div>

        <h2 class="lg:hidden text-2xl my-6 font-bold" v-html="t('about-section.services-block.mobile-title')"></h2>
        <h2 class="hidden lg:block text-4xl my-12 font-bold">{{ $t('about-section.services-block.desktop-title') }}</h2>
        <div class="mt-6 text-gray-600 dark:text-gray-400">
          <p v-bind:key="row" v-for="row in $tm('about-section.services-block.intro')">{{ row }}</p>
          <p class="mt-4 lg:mt-6 font-bold">{{ $t('about-section.services-block.message') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
