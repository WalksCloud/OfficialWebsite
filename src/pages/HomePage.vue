<script setup>
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Team from '@/components/Team.vue'
import Partners from '@/components/Partners.vue'
import Contact from '@/components/Contact.vue'
import { usePageHead } from '@/utils/usePageHead'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
usePageHead(route)
const { t } = useI18n()
</script>

<template>
  <main class="wc-homepage">
    <div class="sr-only">
      <h1>{{ t('about-section.title') }}</h1>
    </div>
    <About />
    <Services />
    <Team />
    <Partners />
    <Contact />
  </main>
</template>
