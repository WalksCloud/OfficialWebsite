<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { buildNonPrefixedPath, buildPrefixedPath, getPageConfig, getSiteConfig } from '@/utils/pageConfig'
const { locale, t, tm } = useI18n()

const navlinks = tm('nav-links')
const activeSection = ref(null)
const route = useRoute()
const router = useRouter()
const site = getSiteConfig()
const localeOptions = site.locales || []
const localeSelectOptions = computed(() =>
	localeOptions.map((localeCode) => ({
		code: localeCode,
		name: t(`locales.${localeCode}`),
	})),
)

const charDisplayWidth = (char) => {
	if (!char) return 0
	const codePoint = char.codePointAt(0) || 0

	// Control and combining characters do not contribute visible width.
	if (
		codePoint <= 0x1f ||
		(codePoint >= 0x7f && codePoint <= 0x9f) ||
		(codePoint >= 0x300 && codePoint <= 0x36f)
	) {
		return 0
	}

	// Treat common full-width and East Asian wide code point ranges as double-width.
	if (
		(codePoint >= 0x1100 && codePoint <= 0x115f) ||
		(codePoint >= 0x2329 && codePoint <= 0x232a) ||
		(codePoint >= 0x2e80 && codePoint <= 0xa4cf) ||
		(codePoint >= 0xac00 && codePoint <= 0xd7a3) ||
		(codePoint >= 0xf900 && codePoint <= 0xfaff) ||
		(codePoint >= 0xfe10 && codePoint <= 0xfe19) ||
		(codePoint >= 0xfe30 && codePoint <= 0xfe6f) ||
		(codePoint >= 0xff00 && codePoint <= 0xff60) ||
		(codePoint >= 0xffe0 && codePoint <= 0xffe6) ||
		(codePoint >= 0x1f300 && codePoint <= 0x1faff) ||
		(codePoint >= 0x20000 && codePoint <= 0x3fffd)
	) {
		return 2
	}

	return 1
}

const stringDisplayWidth = (value) => {
	return Array.from(String(value || '')).reduce((total, char) => total + charDisplayWidth(char), 0)
}

const localeSelectWidth = computed(() => {
	const longestLabelLength = localeSelectOptions.value.reduce((maxLength, option) => {
		return Math.max(maxLength, stringDisplayWidth(option.name))
	}, 0)

	return `${Math.max(longestLabelLength + 6, 10)}ch`
})
const isNotFound = computed(() => route.name.match(/^(not-found|not-found-nonprefixed)$/) !== null)

const setLocale = (event) => {
	const newLocale = event.target.value
	switchLocale(newLocale)
	isOpen.value = false
}
const setLocaleDirect = (newLocale) => {
	setLocale({ target: { value: newLocale } })
}

const handleDesktopLocaleChange = (newLocale) => {
	if (!newLocale || newLocale === currentLocale.value) return
	switchLocale(newLocale)
}

const hasLocaleVersion = (page, localeCode) => Object.prototype.hasOwnProperty.call(page?.slugs || {}, localeCode)

const resolveLocaleTarget = (pageKey, targetLocale) => {
	const page = getPageConfig(pageKey)
	if (!page) {
		return { locale: targetLocale, fallbackFromMissingTarget: false }
	}

	if (hasLocaleVersion(page, targetLocale)) {
		return { locale: targetLocale, fallbackFromMissingTarget: false }
	}

	const currentRouteLocale = route.meta.locale || locale.value || site.defaultLocale
	const fallbackLocale =
		(currentRouteLocale && hasLocaleVersion(page, currentRouteLocale) && currentRouteLocale) ||
		(site.defaultLocale && hasLocaleVersion(page, site.defaultLocale) && site.defaultLocale) ||
		localeOptions.find((localeCode) => hasLocaleVersion(page, localeCode)) ||
		targetLocale

	return {
		locale: fallbackLocale,
		fallbackFromMissingTarget: fallbackLocale !== targetLocale,
	}
}

const switchLocale = (targetLocale) => {
	const pageKey = route.meta.pageKey || 'home'
	const { locale: resolvedLocale, fallbackFromMissingTarget } = resolveLocaleTarget(pageKey, targetLocale)
	const targetPath = fallbackFromMissingTarget
		? route.fullPath
		: (() => {
			const prefixedPath = buildPrefixedPath(pageKey, resolvedLocale)
			const nonPrefixedPath = buildNonPrefixedPath(pageKey, resolvedLocale)
			const matchesNavigator = () => {
				if (typeof navigator === 'undefined') return false
				const langs = navigator.languages || [navigator.language || '']
				return langs.some((lng) => (lng || '').toLowerCase().startsWith(resolvedLocale.toLowerCase()))
			}
			const useNonPrefix = resolvedLocale === site.defaultLocale && matchesNavigator()
			return useNonPrefix ? nonPrefixedPath : prefixedPath
		})()

	locale.value = targetLocale
	localStorage.setItem('locale', targetLocale)

	return router.push(targetPath).catch(() => {})
}
const computeBuffer = () => {
	if (typeof window === 'undefined') return 100
	const rootStyles = getComputedStyle(document.documentElement)
	const offset = parseFloat(rootStyles.getPropertyValue('--header-offset')) || 90
	return offset
}

const handleScroll = () => {
	const buffer = computeBuffer()
	let matched = false

	for (const link in navlinks) {
		const el = document.getElementById(link)
		if (!el) continue
		const rect = el.getBoundingClientRect()
		if (rect.top <= buffer && rect.bottom >= buffer) {
			activeSection.value = link
			matched = true
			break
		}
	}
	if (!matched) activeSection.value = null
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll, { passive: true })
	handleScroll()
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
})

const runAfterFrame = (cb) => {
	if (typeof window === 'undefined') return
	if (typeof window.requestAnimationFrame === 'function') {
		window.requestAnimationFrame(cb)
		return
	}
	setTimeout(cb, 0)
}

const isOpen = ref(false)
const closeMenu = () => {
	isOpen.value = false
}
const currentLocale = computed(() => locale.value || route.meta.locale || site.defaultLocale)
const localeBanner = computed(() => {
	const pageKey = route.meta.pageKey || 'home'
	const { locale: resolvedLocale, fallbackFromMissingTarget } = resolveLocaleTarget(pageKey, currentLocale.value)

	if (!fallbackFromMissingTarget) {
		return null
	}

	return {
		title: t('locale-switch.unavailable.title'),
		message: t('locale-switch.unavailable.message', {
			requested: t(`locales.${currentLocale.value}`),
			fallback: t(`locales.${resolvedLocale}`),
		}),
	}
})
const baseHomePath = computed(() =>
	route.meta.prefixed === false
		? buildNonPrefixedPath('home', currentLocale.value)
		: buildPrefixedPath('home', currentLocale.value),
)

watch(
	() => route.meta.pageKey,
	(pageKey) => {
		if (pageKey !== 'home') {
			activeSection.value = null
			return
		}
		runAfterFrame(() => handleScroll())
	},
{ immediate: true })

watch(
	() => route.fullPath,
	() => {
		if (route.meta.pageKey !== 'home') return
		runAfterFrame(() => handleScroll())
	},
)

const linkHref = (sectionKey) => `${baseHomePath.value}#${sectionKey}`

const navigate = (target) => {
	if (!target) return Promise.resolve()
	return router.push(target).catch(() => {})
}

const handleHomeClick = (event) => {
	event?.preventDefault()
	activeSection.value = null
	navigate(baseHomePath.value).finally(() => {
		runAfterFrame(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		})
	})
}

const handleSectionClick = (event, key) => {
	event?.preventDefault()
	activeSection.value = key
	closeMenu()
	navigate(linkHref(key))
}
</script>

<template>
	<header class="fixed top-0 left-0 w-full z-50">
		<div class="bg-white/85 dark:bg-[#222831]/85 shadow backdrop-blur-sm">
		<nav class="px-3 lg:px-6 py-3 lg:py-4 flex justify-between items-center">
			<div>
				<a :href="baseHomePath" aria-label="Home" @click.prevent="handleHomeClick">
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
					<a v-bind:key="key" v-for="(name, key) in $tm('nav-links')" :class="{ 'text-primary': activeSection === key, 'dark:text-white': activeSection !== key }" class="hover:text-primary" :href="linkHref(key)" @click.prevent="handleSectionClick($event, key)">{{ name }}</a>

				<div class="ms-2 locale-changer inline-block">
					<ULocaleSelect
						class="wc-locale-select w-auto"
						:model-value="currentLocale"
						:locales="localeSelectOptions"
						size="sm"
						variant="ghost"
						:search-input="false"
						:ui="{
							base: 'w-auto min-w-0 pl-2.5 pr-2.5',
							content: 'z-[70]',
							value: 'truncate-none whitespace-nowrap',
							item: 'wc-locale-item',
							itemLabel: 'whitespace-nowrap pr-0',
						}"
						:style="{ width: localeSelectWidth }"
						@update:model-value="handleDesktopLocaleChange"
					/>
				</div>
			</div>
		</nav>
		</div>

		<UBanner
			v-if="localeBanner"
			color="warning"
			icon="i-lucide-languages"
			:ui="{
				container: 'h-8 min-h-0 py-0.5',
				center: 'min-h-0 gap-1.5',
				title: 'text-sm leading-4 text-gray-600 dark:text-gray-300',
				icon: 'size-3.5 text-gray-600 dark:text-gray-300',
			}"
			class="border-t border-amber-300/60 bg-amber-200/70 shadow-sm backdrop-blur-sm dark:border-amber-400/55 dark:bg-amber-400/30"
		>
			<template #title>
				<span class="font-semibold">{{ localeBanner.title }}</span>
				<span class="ml-2 font-normal">{{ localeBanner.message }}</span>
			</template>
		</UBanner>

		<!-- Mobile Menu -->
			<div v-if="isOpen && !isNotFound" class="lg:hidden bg-white/85 dark:bg-[#222831]/85 py-6 text-center flex flex-col space-y-4">
				<a v-bind:key="key" v-for="(name, key) in $tm('nav-links')" :class="{ 'text-primary': activeSection === key, 'dark:text-white': activeSection !== key }" class="hover:text-primary" :href="linkHref(key)" @click.prevent="handleSectionClick($event, key)">{{ name }}</a>

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

<style scoped>
:deep(.wc-locale-select [data-slot="leading"]),
:deep(.wc-locale-select [data-slot="itemLeading"]) {
	display: none !important;
}

:deep(.wc-locale-select [data-slot="item"] > span:first-child:not([data-slot])) {
	display: none !important;
	width: 0 !important;
	margin: 0 !important;
}

:deep(.wc-locale-select [data-slot="base"]) {
	padding-left: calc(var(--spacing) * 2.5) !important;
}

:deep(.wc-locale-select [data-slot="item"]) {
	padding-left: calc(var(--spacing) * 2.5) !important;
}
</style>
<style>
.wc-locale-item > :not([data-slot]) {
  display: none;
}
</style>
