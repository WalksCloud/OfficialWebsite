<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()

const navlinks = tm('nav-links')
const activeSection = ref(null)

const setLocale = (event) => {
  localStorage.setItem("locale", event.target.value)
  isOpen.value = false
}
const handleScroll = () => {
  const buffer = 100

  for (const link in navlinks) {
    const el = document.getElementById(link)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top < buffer && rect.bottom > buffer) {
        activeSection.value = link
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isOpen = ref(false)
const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="bg-white/85 shadow fixed top-0 left-0 w-full z-50">
    <nav class="px-3 lg:px-6 py-3 lg:py-4 flex justify-between items-center">
      <div>
        <img class="rounded-[50%] w-[28px] lg:w-[50px] inline-block" src="/logo-gradual.svg">
        <h2 class="text-xl lg:text-2xl ms-2 inline-block align-middle font-barlow font-bold text-primary">WalksCloud</h2>
      </div>

      <button class="lg:hidden" @click="isOpen = !isOpen">
        <span v-if="!isOpen" class="material-symbols-outlined">menu</span>
        <span v-else class="material-symbols-outlined">close</span>
      </button>

      <!-- Desktop Menu -->
      <div class="space-x-4 hidden lg:flex">
        <a v-for="(name, key) in $tm('nav-links')" :class="{ 'text-primary': activeSection === key }" class="hover:text-primary" :href="`#${key}`">{{ name }}</a>

        <div class="ms-2 locale-changer inline-block text-gray-700">
          <select v-model="$i18n.locale" @change="setLocale($event)">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ $t(`locales.${locale}`) }}</option>
          </select>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="lg:hidden bg-white/85 py-6 text-center flex flex-col space-y-4">
      <a v-for="(name, key) in $tm('nav-links')" @click="closeMenu" :class="{ 'text-primary': activeSection === key }" class="hover:text-primary" :href="`#${key}`">{{ name }}</a>
      <div class="locale-changer inline-block text-gray-700">
        <select v-model="$i18n.locale" @change="setLocale($event)">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ $t(`locales.${locale}`) }}</option>
        </select>
      </div>
    </div>
  </header>
</template>
