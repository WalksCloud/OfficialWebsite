<script setup>
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import ArticleList from '@/components/ArticleList.vue'
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
    <section class="section-anchor-bottom pt-8 lg:pt-18 pb-20 lg:pb-36" id="cases">
      <div class="mx-auto">
        <ArticleList
          section-id="cases"
          :title="$t('about-section.case-section-title')"
          :description="$t('article.index.cases-description')"
          base-slug="/cases"
          :limit="3"
          show-more-link
          centered
        />
      </div>
    </section>
    <section class="section-anchor-bottom pt-8 lg:pt-18 pb-20 lg:pb-36" id="tech">
      <div class="mx-auto">
        <ArticleList
          section-id="tech"
          :title="$t('about-section.tech-section-title')"
          :description="$t('article.index.tech-description')"
          base-slug="/tech"
          :limit="3"
          show-more-link
          centered
        />
      </div>
    </section>
    <Team />
    <Partners />
    <Contact />
  </main>
</template>
