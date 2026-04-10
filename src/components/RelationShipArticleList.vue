<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import YAML from 'yaml'
import FaqArticleCard from './FaqArticleCard.vue'
import ArticlePreview from './ArticlePreview.vue'
import mappingRaw from '../../config/case-mapping.yaml?raw'
import { getSiteConfig } from '@/utils/pageConfig'
import { resolveContentInfo, buildLocalizedPath } from '@/utils/contentIndex'
import { useFallbackNotice } from '@/composables/useFallbackNotice'

const siteConfig = getSiteConfig()
const relationDefaultLocale = siteConfig.defaultLocale || 'zh-tw'
const caseMappings = YAML.parse(mappingRaw) || []

const { locale, availableLocales, fallbackLocale } = useI18n()
const supportedLocales = computed(() => availableLocales || [])
const { buildFallbackNotice } = useFallbackNotice()

const toArray = (value) => {
	if (!value) return []
	if (Array.isArray(value)) return value
	if (typeof value === 'string') return [value]
	if (typeof value === 'object') {
		return Object.values(value).flatMap((item) => (Array.isArray(item) ? item : [item]))
	}
	return []
}

const unique = (arr) => [...new Set(arr)]

const buildFaqItem = (slug, localeValue) => {
	const info = resolveContentInfo(slug, localeValue, { fallbackLocales: toArray(fallbackLocale?.value) })
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

const buildArticleItem = (slug, localeValue) => {
	const info = resolveContentInfo(slug, localeValue, { fallbackLocales: toArray(fallbackLocale?.value) })
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
		date: info.date ? new Date(info.date) : null,
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
				<ArticlePreview v-for="item in relatedData.services" :key="item.slug" :item="item" />
			</ul>
		</div>

		<div v-if="relatedData.cases.length">
			<h3 class="text-2xl font-bold mb-4">相關案例</h3>
			<ul class="space-y-3">
				<ArticlePreview v-for="item in relatedData.cases" :key="item.slug" :item="item" />
			</ul>
		</div>

		<div v-if="relatedData.tech.length">
			<h3 class="text-2xl font-bold mb-4">相關技術文章</h3>
			<ul class="space-y-3">
				<ArticlePreview v-for="item in relatedData.tech" :key="item.slug" :item="item" />
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
