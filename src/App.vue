<script setup>
import { nextTick, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Alert from './components/Alert.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const waitForDocumentLoad = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return Promise.resolve()
  }

  if (document.readyState === 'complete') {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    window.addEventListener('load', resolve, { once: true })
  })
}

onMounted(async () => {
  await nextTick()

  if (typeof window === 'undefined') {
    return
  }

  await waitForDocumentLoad()

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event('walkscloud:app-ready'))
    })
  })
})
</script>

<template>
  <Alert />
  <div class="min-h-screen bg-white dark:bg-[#222831]" :class="($i18n.locale === 'en') ? 'font-barlow': ''">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
