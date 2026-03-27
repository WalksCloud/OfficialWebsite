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
  <section class="sr-only">
    <h1>{{ t('about-section.title') }}</h1>
  </section>
  <About />
  <Services />
  <Team />
  <Partners />
  <Contact />
</template>
