<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale, t, tm } = useI18n()

const navlinks = tm('nav-links')
const activeSection = ref(null)

const setLocale = (event) => {
	localStorage.setItem("locale", event.target.value)
	isOpen.value = false
}
const setLocaleDirect = (newLocale) => {
	locale.value = newLocale
	setLocale({ target: { value: newLocale } })
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
	<header class="bg-white/85 dark:bg-[#222831]/85 shadow fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
		<nav class="px-3 lg:px-6 py-3 lg:py-4 flex justify-between items-center">
			<div>
				<img class="rounded-[50%] w-[28px] lg:w-[50px] inline-block" src="/logo-gradual.svg">
				<h2 class="text-xl lg:text-2xl ms-2 inline-block align-middle font-barlow font-bold text-primary dark:text-white">{{ $t('brand-name') }}</h2>
			</div>

			<button class="lg:hidden dark:text-white" @click="isOpen = !isOpen">
				<span v-if="!isOpen" class="material-symbols-outlined">menu</span>
				<span v-else class="material-symbols-outlined">close</span>
			</button>

			<!-- Desktop Menu -->
			<div class="space-x-4 hidden lg:flex">
				<a v-bind:key="key" v-for="(name, key) in $tm('nav-links')" :class="{ 'text-primary': activeSection === key }" class="hover:text-primary dark:text-white" :href="`#${key}`">{{ name }}</a>

				<div class="ms-2 locale-changer inline-block">
					<select v-model="$i18n.locale" @change="setLocale($event)" class=" text-gray-700 dark:bg-[#222831] dark:text-white">
						<option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ $t(`locales.${locale}`) }}</option>
					</select>
				</div>
			</div>
		</nav>

		<!-- Mobile Menu -->
		<div v-if="isOpen" class="lg:hidden bg-white/85 dark:bg-[#222831]/85 py-6 text-center flex flex-col space-y-4">
			<a v-bind:key="key" v-for="(name, key) in $tm('nav-links')" @click="closeMenu" :class="{ 'text-primary': activeSection === key }" class="hover:text-primary dark:text-white" :href="`#${key}`">{{ name }}</a>

			<div class="mt-2 locale-changer">
				<div class="inline-flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
					<button v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :class="[$i18n.locale === locale ? 'bg-primary text-white' : 'bg-white text-gray-700 dark:bg-[#222831]/85 dark:text-white']" @click="setLocaleDirect(locale)" class="px-4 py-2 text-sm">
						{{ $t(`locales.${locale}`) }}
					</button>
				</div>
			</div>
		</div>
	</header>
</template>
