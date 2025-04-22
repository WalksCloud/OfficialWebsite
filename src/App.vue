<script setup>
import Alert from './components/Alert.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Team from './components/Team.vue'
import Partners from './components/Partners.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- <Alert /> -->
  <div class="min-h-screen bg-white" :class="($i18n.locale === 'en') ? 'font-barlow': ''">
    <Navbar />
    <About />
    <Services />
    <Team />
    <Partners />
    <Contact />
    <Footer />
  </div>
</template>