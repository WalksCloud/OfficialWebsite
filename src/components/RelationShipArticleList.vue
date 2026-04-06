<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import YAML from 'yaml'
import FaqArticleCard from './FaqArticleCard.vue'
import mappingRaw from '../../config/case-mapping.yaml?raw'
import { getSiteConfig } from '@/utils/pageConfig'

const NuxtLink = RouterLink
const siteConfig = getSiteConfig()
const localeFallbackMap = siteConfig.localeFallbacks || {}
const relationDefaultLocale = siteConfig.defaultLocale || 'zh-tw'
const caseMappings = YAML.parse(mappingRaw) || []

const contentModules = import.meta.glob('../content/**/*.md', {
	eager: true,
	import: 'default',
	query: '?raw',
})

const { locale, availableLocales, t, fallbackLocale } = useI18n()
const supportedLocales = computed(() => availableLocales || [])

const toArray = (value) => {
	if (!value) return []
	if (Array.isArray(value)) return value
	if (typeof value === 'string') return [value]
	if (typeof value === 'object') {
		return Object.values(value).flatMap((item) => (Array.isArray(item) ? item : [item]))
	}
	return []
}

const translateRelationMessage = (key, params = {}) => {
	const translationKey = `relationship.messages.${key}`
	const result = t(translationKey, params)
	return typeof result === 'string' ? result : ''
}

const translateLocaleLabel = (localeCode) => {
	if (!localeCode) return ''
	const translationKey = `locales.${localeCode}`
	const translated = t(translationKey)
	return typeof translated === 'string' && translated !== translationKey ? translated : localeCode
}

const localeFromFilename = (path = '') => {
	const m = path.match(/\.([a-z-]+)\.md$/i)
	return m ? m[1] : 'zh-tw'
}

const normalizeSlug = (slug = '') => {
	const value = slug.replace(/^\/+/, '').replace(/\/+$/, '')
	return value ? `/${value}` : '/'
}

const baseFromPath = (path = '') => path.replace(/\.([a-z-]+)\.md$/i, '').replace(/^..\//, '')

const parseFrontmatter = (raw = '') => {
	const content = typeof raw === 'string' ? raw : String(raw || '')
	const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/)
	if (!fmMatch) return { meta: {}, body: content }
	const meta = YAML.parse(fmMatch[1]) || {}
	const body = content.slice(fmMatch[0].length)
	return { meta, body }
}

const slugIndex = new Map()
Object.entries(contentModules).forEach(([path, raw]) => {
	const { meta, body } = parseFrontmatter(raw)
	const locale = localeFromFilename(path)
	const base = baseFromPath(path)
	const inferredSlug = normalizeSlug(
		meta.slug ? String(meta.slug) : base.split('/').slice(1).join('/'),
	)
	const entry = slugIndex.get(inferredSlug) || { locales: {}, type: meta.type || 'page' }
	entry.locales[locale] = {
		title: meta.title || '',
		description: meta.description || '',
		body,
	}
	entry.type = meta.type || entry.type
	slugIndex.set(inferredSlug, entry)
})

const unique = (arr) => [...new Set(arr)]

const getFallbackCandidates = (requestedLocale, availableLocalesList) => {
	const configuredFallbacks = Array.isArray(localeFallbackMap[requestedLocale])
		? localeFallbackMap[requestedLocale]
		: []
	const i18nFallbacks = toArray(fallbackLocale?.value)
	return unique([
		...configuredFallbacks,
		...i18nFallbacks,
		relationDefaultLocale,
		...availableLocalesList,
	]).filter((loc) => loc && loc !== requestedLocale)
}

const formatLocalesList = (list = []) =>
	list
		.map((code) => translateLocaleLabel(code))
		.filter(Boolean)
		.join(', ')

const buildFallbackNotice = (requestedLocale, fallbackLocaleCode, availableLocalesList = []) => {
	if (!fallbackLocaleCode) return ''
	const parts = []
	const noRelation = translateRelationMessage('noRelation')
	if (noRelation) {
		parts.push(noRelation)
	}
	const localesList = formatLocalesList(availableLocalesList)
	if (localesList) {
		const availableNotice = translateRelationMessage('availableLocalesNotice', { locales: localesList })
		if (availableNotice) {
			parts.push(availableNotice)
		}
	}
	const fallbackLocaleName = translateLocaleLabel(fallbackLocaleCode)
	const fallbackNotice = translateRelationMessage('fallbackNotice', { locale: fallbackLocaleName })
	if (fallbackNotice) {
		parts.push(fallbackNotice)
	}
	return parts.join(' ')
}

const resolvePageInfo = (slug, requestedLocaleInput) => {
	const entry = slugIndex.get(slug)
	if (!entry) return null
	const locales = entry.locales || {}
	const availableLocales = Object.keys(locales)
	if (!availableLocales.length) return null
	const requestedLocale = requestedLocaleInput || relationDefaultLocale
	const currentData = locales[requestedLocale]
	if (currentData) {
		return {
			title: currentData.title || '',
			description: currentData.description || '',
			body: currentData.body || '',
			type: entry.type,
			locale: requestedLocale,
			requestedLocale,
			availableLocales,
			isFallback: false,
		}
	}
	const fallbackCandidates = getFallbackCandidates(requestedLocale, availableLocales)
	const fallbackLocaleCode = fallbackCandidates.find((localeValue) => locales[localeValue])
	if (!fallbackLocaleCode) return null
	const fallbackData = locales[fallbackLocaleCode]
	return {
		title: fallbackData.title || '',
		description: fallbackData.description || '',
		body: fallbackData.body || '',
		type: entry.type,
		locale: fallbackLocaleCode,
		requestedLocale,
		availableLocales,
		isFallback: fallbackLocaleCode !== requestedLocale,
	}
}

const buildFaqItem = (slug, localeValue) => {
	const info = resolvePageInfo(slug, localeValue)
	if (!info) return null
	const content = (info.body || '').replace(/^#\s+[^\n]+\n+/i, '').trim()
	const notice = info.isFallback
		? buildFallbackNotice(info.requestedLocale, info.locale, info.availableLocales)
		: ''
	return {
		slug,
		title: info.title || slug,
		content: content || info.description || '',
		path: buildLocalizedPath(slug, info.locale),
		notice,
	}
}

const buildLocalizedPath = (slug = '', localeValue) => {
	if (!slug) return '/'
	const hasLeadingSlash = slug.startsWith('/')
	const cleaned = hasLeadingSlash ? slug : `/${slug}`
	const normalized = cleaned.endsWith('/') ? cleaned : `${cleaned}/`
	if (!localeValue || localeValue === relationDefaultLocale) {
		return normalized
	}
	return `/${localeValue}${normalized}`
}

const buildArticleItem = (slug, localeValue) => {
	const info = resolvePageInfo(slug, localeValue)
	if (!info) return null
	const notice = info.isFallback
		? buildFallbackNotice(info.requestedLocale, info.locale, info.availableLocales)
		: ''
	return {
		slug,
		title: info.title || slug,
		description: info.description || '',
		path: buildLocalizedPath(slug, info.locale),
		notice,
	}
}

const route = useRoute()

const normalizeRouteSlug = (path = '') => {
	const cleaned = path.replace(/\/+$/, '') || '/'
	const segments = cleaned.split('/').filter(Boolean)
	if (segments.length && supportedLocales.value.includes(segments[0])) {
		segments.shift()
	}
	return `/${segments.join('/')}`
}

const currentSlug = computed(() => normalizeRouteSlug(route.path))

const detectPageType = (slug) => {
	if (slug.startsWith('/services/')) return 'service'
	if (slug.startsWith('/cases/')) return 'case'
	if (slug.startsWith('/tech/')) return 'tech'
	return null
}

const findCaseEntry = (slug) => caseMappings.find((entry) => entry.case === slug)

const findCasesByService = (serviceSlug) =>
	caseMappings.filter((entry) => entry.services?.includes(serviceSlug))

const findCasesByTech = (techSlug) =>
	caseMappings.filter((entry) => entry.tech?.includes(techSlug))

const relatedData = computed(() => {
	const slug = currentSlug.value
	const type = detectPageType(slug)
	const localeValue = locale.value
	//console.log('[RelationShipArticleList] computing relations for', slug, type, localeValue, caseMappings)
	if (!type) return { cases: [], services: [], tech: [], faq: [] }
	let caseSlugs = []
	let serviceSlugs = []
	let techSlugs = []
	let faqSlugs = []

	if (type === 'service') {
		const cases = findCasesByService(slug)
		caseSlugs = cases.map((entry) => entry.case)
		faqSlugs = cases.flatMap((entry) => entry.faq || [])
		techSlugs = cases.flatMap((entry) => entry.tech || [])
	} else if (type === 'case') {
		const entry = findCaseEntry(slug)
		if (entry) {
			serviceSlugs = entry.services || []
			faqSlugs = entry.faq || []
			techSlugs = entry.tech || []
		}
	} else if (type === 'tech') {
		const cases = findCasesByTech(slug)
		caseSlugs = cases.map((entry) => entry.case)
		serviceSlugs = cases.flatMap((entry) => entry.services || [])
		faqSlugs = cases.flatMap((entry) => entry.faq || [])
	}

	caseSlugs = unique(caseSlugs)
	serviceSlugs = unique(serviceSlugs)
	techSlugs = unique(techSlugs)
	faqSlugs = unique(faqSlugs)

	//console.log('[RelationShipArticleList] unique relations for', slug, type, localeValue, caseSlugs, serviceSlugs, techSlugs, faqSlugs)

	const cases = caseSlugs
		.filter((slugItem) => slugItem !== slug)
		.map((slugItem) => buildArticleItem(slugItem, localeValue))
		.filter(Boolean)

	const services = serviceSlugs
		.filter((slugItem) => slugItem !== slug)
		.map((slugItem) => buildArticleItem(slugItem, localeValue))
		.filter(Boolean)

	const tech = techSlugs
		.filter((slugItem) => slugItem !== slug)
		.map((slugItem) => buildArticleItem(slugItem, localeValue))
		.filter(Boolean)

	const faq = faqSlugs.map((slugItem) => buildFaqItem(slugItem, localeValue)).filter(Boolean)

	//console.log('[RelationShipArticleList] result for', slug, type, localeValue, cases, services, tech, faq)

	return { cases, services, tech, faq }
})

const hasRelations = computed(
	() =>
		relatedData.value.cases.length ||
		relatedData.value.services.length ||
		relatedData.value.tech.length ||
		relatedData.value.faq.length,
)
</script>

<template>
	<section v-if="hasRelations" class="my-10 space-y-10">
		<div v-if="relatedData.services.length">
			<h3 class="text-2xl font-bold mb-4">相關服務</h3>
			<ul class="space-y-3">
				<li v-for="item in relatedData.services" :key="item.slug" class="border rounded-md p-4">
					<NuxtLink :to="item.path" class="font-semibold text-primary hover:underline">{{
						item.title
					}}</NuxtLink>
					<p v-if="item.description" class="text-sm text-muted mt-1">{{ item.description }}</p>
					<p v-if="item.notice" class="text-xs text-muted mt-2 italic">{{ item.notice }}</p>
				</li>
			</ul>
		</div>

		<div v-if="relatedData.cases.length">
			<h3 class="text-2xl font-bold mb-4">相關案例</h3>
			<ul class="space-y-3">
				<li v-for="item in relatedData.cases" :key="item.slug" class="border rounded-md p-4">
					<NuxtLink :to="item.path" class="font-semibold text-primary hover:underline">{{
						item.title
					}}</NuxtLink>
					<p v-if="item.description" class="text-sm text-muted mt-1">{{ item.description }}</p>
					<p v-if="item.notice" class="text-xs text-muted mt-2 italic">{{ item.notice }}</p>
				</li>
			</ul>
		</div>

		<div v-if="relatedData.tech.length">
			<h3 class="text-2xl font-bold mb-4">相關技術文章</h3>
			<ul class="space-y-3">
				<li v-for="item in relatedData.tech" :key="item.slug" class="border rounded-md p-4">
					<NuxtLink :to="item.path" class="font-semibold text-primary hover:underline">{{
						item.title
					}}</NuxtLink>
					<p v-if="item.description" class="text-sm text-muted mt-1">{{ item.description }}</p>
					<p v-if="item.notice" class="text-xs text-muted mt-2 italic">{{ item.notice }}</p>
				</li>
			</ul>
		</div>

		<div v-if="relatedData.faq.length">
			<h3 class="text-2xl font-bold mb-4">相關 FAQ</h3>
			<div class="grid lg:grid-cols-2 gap-4">
				<FaqArticleCard v-for="item in relatedData.faq" :key="item.slug" :item="item" />
			</div>
		</div>
	</section>
</template>
