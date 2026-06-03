<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import YAML from 'yaml'
import FaqArticleCard from './FaqArticleCard.vue'
import ArticlePreview from './ArticlePreview.vue'
import relationsRaw from '../../config/content-relations.yaml?raw'
import { resolveContentInfo, buildLocalizedPath } from '@/utils/contentIndex'
import { useFallbackNotice } from '@/composables/useFallbackNotice'

const relations = YAML.parse(relationsRaw) || {}

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

const normalizeRelationEntry = (slug, entry = {}) => ({
	slug,
	services: toArray(entry.services),
	faq: toArray(entry.faq),
	tech: toArray(entry.tech),
})

const relationEntries = Object.entries(relations).map(([slug, entry]) => normalizeRelationEntry(slug, entry))

const isCaseSlug = (slug) => slug.startsWith('/cases/')
const isTechSlug = (slug) => slug.startsWith('/tech/')

const findRelationEntry = (slug) => normalizeRelationEntry(slug, relations[slug])

const findRelationEntriesByService = (serviceSlug) =>
	relationEntries.filter((entry) => entry.services.includes(serviceSlug))

const findRelationEntriesByTech = (techSlug) =>
	relationEntries.filter((entry) => entry.tech.includes(techSlug))

const dedupeRelationEntries = (entries) => {
	const seen = new Set()
	return entries.filter((entry) => {
		if (!entry.slug || seen.has(entry.slug)) return false
		seen.add(entry.slug)
		return true
	})
}

const findTechEntriesByServices = (serviceSlugs) =>
	dedupeRelationEntries(
		toArray(serviceSlugs)
			.flatMap((serviceSlug) => findRelationEntriesByService(serviceSlug))
			.filter((entry) => isTechSlug(entry.slug)),
	)

const relatedData = computed(() => {
	const slug = currentSlug.value
	const type = detectPageType(slug)
	const localeValue = locale.value
	//console.log('[RelationShipArticleList] computing relations for', slug, type, localeValue, relations)
	if (!type) return { cases: [], services: [], tech: [], faq: [] }
	let caseSlugs = []
	let serviceSlugs = []
	let techSlugs = []
	let faqSlugs = []
	const relationEntry = findRelationEntry(slug)
	const entriesByService = findRelationEntriesByService(slug)
	const entriesByTech = findRelationEntriesByTech(slug)
	switch (type) {
		case 'service':
			caseSlugs = entriesByService.filter((entry) => isCaseSlug(entry.slug)).map((entry) => entry.slug)
			faqSlugs = entriesByService.flatMap((entry) => entry.faq)
			techSlugs = entriesByService.flatMap((entry) =>
				isTechSlug(entry.slug) ? [entry.slug] : entry.tech,
			)
			break;
		case 'case':
			serviceSlugs = relationEntry.services
			faqSlugs = relationEntry.faq
			techSlugs = relationEntry.tech
			const serviceTechEntries = findTechEntriesByServices(serviceSlugs)
			faqSlugs.push(...serviceTechEntries.flatMap((entry) => entry.faq))
			techSlugs.push(...serviceTechEntries.map((entry) => entry.slug))
			break;
		case 'tech':
			caseSlugs = entriesByTech.filter((entry) => isCaseSlug(entry.slug)).map((entry) => entry.slug)
			serviceSlugs = entriesByTech
				.filter((entry) => isCaseSlug(entry.slug))
				.flatMap((entry) => entry.services)
			faqSlugs = entriesByTech
				.filter((entry) => isCaseSlug(entry.slug))
				.flatMap((entry) => entry.faq)
			serviceSlugs.push(...relationEntry.services)
			faqSlugs.push(...relationEntry.faq)
			techSlugs.push(...relationEntry.tech)
			techSlugs.push(...entriesByTech.filter((entry) => isTechSlug(entry.slug)).map((entry) => entry.slug))
			break;
		default:
			break;
	}

	caseSlugs = unique(caseSlugs).filter(Boolean)
	serviceSlugs = unique(serviceSlugs).filter(Boolean)
	techSlugs = unique(techSlugs).filter(Boolean)
	faqSlugs = unique(faqSlugs).filter(Boolean)

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
		<hr />
		<div v-if="relatedData.services.length">
			<h3 class="text-2xl font-bold mb-4">{{ $t('relationship.sections.services') }}</h3>
			<ul class="space-y-3 list-none p-0">
				<li v-for="item in relatedData.services" :key="item.slug">
					<ArticlePreview :item="item" />
				</li>
			</ul>
		</div>

		<div v-if="relatedData.cases.length">
			<h3 class="text-2xl font-bold mb-4">{{ $t('relationship.sections.cases') }}</h3>
			<ul class="space-y-3 list-none p-0">
				<li v-for="item in relatedData.cases" :key="item.slug">
					<ArticlePreview :item="item" />
				</li>
			</ul>
		</div>

		<div v-if="relatedData.tech.length">
			<h3 class="text-2xl font-bold mb-4">{{ $t('relationship.sections.tech') }}</h3>
			<ul class="space-y-3 list-none p-0">
				<li v-for="item in relatedData.tech" :key="item.slug">
					<ArticlePreview :item="item" />
				</li>
			</ul>
		</div>

		<div v-if="relatedData.faq.length">
			<h3 class="text-2xl font-bold mb-4">{{ $t('relationship.sections.faq') }}</h3>
			<div class="grid lg:grid-cols-2 gap-4">
				<FaqArticleCard v-for="item in relatedData.faq" :key="item.slug" :item="item" />
			</div>
		</div>
		<hr />
	</section>
</template>
