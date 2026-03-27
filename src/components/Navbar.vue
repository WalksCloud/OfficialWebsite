<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { buildNonPrefixedPath, buildPrefixedPath, getSiteConfig } from '@/utils/pageConfig'
import { computed } from 'vue'
const { locale, t, tm } = useI18n()

const navlinks = tm('nav-links')
const activeSection = ref(null)
const route = useRoute()
const router = useRouter()
const site = getSiteConfig()
const localeOptions = site.locales || []
const isNotFound = computed(() => { console.log(route.name); return route.name === 'not-found' })

const setLocale = (event) => {
	const newLocale = event.target.value
	localStorage.setItem("locale", newLocale)
	switchLocale(newLocale)
	isOpen.value = false
}
const setLocaleDirect = (newLocale) => {
	locale.value = newLocale
	setLocale({ target: { value: newLocale } })
}
const switchLocale = (targetLocale) => {
	const pageKey = route.meta.pageKey || 'home'
	const prefixedPath = buildPrefixedPath(pageKey, targetLocale)
	const nonPrefixedPath = buildNonPrefixedPath(pageKey, targetLocale)
	// For default locale, allow non-prefixed URL when navigator matches; otherwise keep prefixed (e.g., en stays /en)
	const matchesNavigator = () => {
		if (typeof navigator === 'undefined') return false
		const langs = navigator.languages || [navigator.language || '']
		return langs.some((lng) => (lng || '').toLowerCase().startsWith(targetLocale.toLowerCase()))
	}
	const useNonPrefix = targetLocale === site.defaultLocale && matchesNavigator()
	const targetPath = useNonPrefix ? nonPrefixedPath : prefixedPath
	router.push(targetPath)
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
const linkHref = (sectionKey) => {
	const currentLocale = route.meta.locale || site.defaultLocale
	const basePath = route.meta.prefixed === false
		? buildNonPrefixedPath('home', currentLocale)
		: buildPrefixedPath('home', currentLocale)
	return `${basePath}#${sectionKey}`
}
</script>

<template>
	<header class="bg-white/85 dark:bg-[#222831]/85 shadow fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
		<nav class="px-3 lg:px-6 py-3 lg:py-4 flex justify-between items-center">
			<div>
				<a :href="route.meta.prefixed === false ? buildNonPrefixedPath('home', route.meta.locale || site.defaultLocale) : buildPrefixedPath('home', route.meta.locale || site.defaultLocale)" aria-label="Home">
					<img class="rounded-[50%] w-[28px] lg:w-[50px] inline-block" src="/logo-gradual.svg">
					<h2 class="text-xl lg:text-2xl ms-2 inline-block align-middle font-barlow font-bold text-primary dark:text-white">{{ $t('brand-name') }}</h2>
				</a>
			</div>

			<button v-if="!isNotFound" class="lg:hidden dark:text-white" @click="isOpen = !isOpen">
				<span v-if="!isOpen" class="material-symbols-outlined">menu</span>
				<span v-else class="material-symbols-outlined">close</span>
			</button>

			<!-- Desktop Menu -->
				<div v-if="!isNotFound" class="space-x-4 hidden lg:flex">
					<a v-bind:key="key" v-for="(name, key) in $tm('nav-links')" :class="{ 'text-primary': activeSection === key, 'dark:text-white': activeSection !== key }" class="hover:text-primary" :href="linkHref(key)">{{ name }}</a>

				<div class="ms-2 locale-changer inline-block">
					<select v-model="$i18n.locale" @change="setLocale($event)" class="text-gray-700 dark:text-white outline-none">
						<option class="dark:bg-[#222831]" v-for="locale in localeOptions" :key="`locale-${locale}`" :value="locale">{{ $t(`locales.${locale}`) }}</option>
					</select>
				</div>
			</div>
		</nav>

		<!-- Mobile Menu -->
			<div v-if="isOpen && !isNotFound" class="lg:hidden bg-white/85 dark:bg-[#222831]/85 py-6 text-center flex flex-col space-y-4">
				<a v-bind:key="key" v-for="(name, key) in $tm('nav-links')" @click="closeMenu" :class="{ 'text-primary': activeSection === key, 'dark:text-white': activeSection !== key }" class="hover:text-primary" :href="linkHref(key)">{{ name }}</a>

				<div class="mt-2 locale-changer">
					<div class="inline-flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
						<button v-for="locale in localeOptions" :key="`locale-${locale}`" :class="[$i18n.locale === locale ? 'bg-primary text-white' : 'bg-white text-gray-700 dark:bg-[#222831]/85 dark:text-white']" @click="setLocaleDirect(locale)" class="px-4 py-2 text-sm">
							{{ $t(`locales.${locale}`) }}
						</button>
					</div>
				</div>
		</div>
	</header>
</template>
