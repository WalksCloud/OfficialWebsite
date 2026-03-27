<script setup>
import { RouterView } from 'vue-router'
import Alert from './components/Alert.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Alert />
  <div class="min-h-screen bg-white dark:bg-[#222831]" :class="($i18n.locale === 'en') ? 'font-barlow': ''">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
