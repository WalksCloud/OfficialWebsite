<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import UBreadcrumb from '@nuxt/ui/components/Breadcrumb.vue'
import { buildBreadcrumbUiItems } from '@/utils/breadcrumbs'
import { getSiteConfig } from '@/utils/pageConfig'
import breadcrumbConfig from '../../config/breadcrumbs.yaml'

const props = defineProps({
  currentTitle: {
    type: String,
    default: '',
  },
})

const site = getSiteConfig()
const route = useRoute()
const { locale, t } = useI18n()

const pageKey = computed(() => route.meta.pageKey || 'home')
const currentLocale = computed(() => route.meta.locale || locale.value || site.defaultLocale)
const marqueeConfig = breadcrumbConfig.marquee || {}
const currentTitleViewport = ref(null)
const currentTitleText = ref(null)
const isCurrentTitleOverflowing = ref(false)
const currentTitleMarqueeShift = ref('0px')
let resizeObserver
let measurementFrame

const homeBreadcrumbName = computed(() => {
  const translated = t('about-section.title')
  if (typeof translated === 'string' && translated.trim() && translated !== 'about-section.title') {
    return translated
  }
  return site.brandName
})

const appendUiClass = (ui = {}, key, className) => ({
  ...ui,
  [key]: [ui[key], className].filter(Boolean).join(' '),
})

const getOverflowTolerance = () => {
  const tolerance = Number(marqueeConfig.overflowTolerance)
  return Number.isFinite(tolerance) && tolerance >= 0 ? tolerance : 2
}

const getLeftFadeScale = () => {
  return Number(marqueeConfig.leftFadeScale)
}

const scaleCssLength = (value, scale) => {
  const match = String(value || '').trim().match(/^(-?\d*\.?\d+)([a-z%]+)$/i)
  if (!match) return value
  const [, amount, unit] = match
  return `${Number(amount) * scale}${unit}`
}

const items = computed(() =>
  buildBreadcrumbUiItems(pageKey.value, currentLocale.value, {
    currentTitle: props.currentTitle,
    currentPath: route.path,
    prefixed: route.meta.prefixed === true,
    homeName: homeBreadcrumbName.value,
  }).map((item, index, allItems) => {
    const isCurrent = index === allItems.length - 1
    let ui = item.ui || {}
    ui = appendUiClass(ui, 'item', isCurrent
      ? 'wc-page-breadcrumb__current-item'
      : 'wc-page-breadcrumb__parent-item')
    ui = appendUiClass(ui, 'link', isCurrent
      ? 'wc-page-breadcrumb__current-link'
      : 'wc-page-breadcrumb__parent-link')
    ui = appendUiClass(ui, 'linkLabel', isCurrent
      ? 'wc-page-breadcrumb__current-label'
      : 'wc-page-breadcrumb__parent-label')

    return {
      ...item,
      slot: isCurrent ? 'current' : item.slot,
      ui,
    }
  }),
)

const shouldRender = computed(() => items.value.length > 1)
const currentItemLabel = computed(() => items.value.at(-1)?.label || '')

const breadcrumbStyle = computed(() => ({
  '--wc-page-breadcrumb-marquee-duration': marqueeConfig.duration || '12s',
  '--wc-page-breadcrumb-marquee-gap': marqueeConfig.gap || '2rem',
  '--wc-page-breadcrumb-marquee-fade-width': marqueeConfig.fadeWidth || '1.25rem',
  '--wc-page-breadcrumb-marquee-left-fade-width': scaleCssLength(
    marqueeConfig.fadeWidth || '1.25rem',
    getLeftFadeScale(),
  ),
  '--wc-page-breadcrumb-marquee-shift': currentTitleMarqueeShift.value,
}))

const resolveCssLengthInPx = (value, parent) => {
  if (typeof document === 'undefined' || !parent) return 0
  const probe = document.createElement('span')
  probe.style.boxSizing = 'border-box'
  probe.style.display = 'block'
  probe.style.height = '0'
  probe.style.overflow = 'hidden'
  probe.style.pointerEvents = 'none'
  probe.style.position = 'absolute'
  probe.style.visibility = 'hidden'
  probe.style.width = value
  parent.appendChild(probe)
  const width = probe.getBoundingClientRect().width
  probe.remove()
  return Number.isFinite(width) ? width : 0
}

const measureCurrentTitleOverflow = () => {
  const viewport = currentTitleViewport.value
  const title = currentTitleText.value
  if (!viewport || !title) {
    isCurrentTitleOverflowing.value = false
    currentTitleMarqueeShift.value = '0px'
    return
  }

  const viewportWidth = viewport.parentElement?.clientWidth || viewport.clientWidth
  const titleWidth = title.getBoundingClientRect().width
  const gapWidth = resolveCssLengthInPx(marqueeConfig.gap || '2rem', viewport)
  currentTitleMarqueeShift.value = `${-(titleWidth + gapWidth)}px`
  isCurrentTitleOverflowing.value = titleWidth - viewportWidth > getOverflowTolerance()
}

const scheduleOverflowMeasurement = () => {
  if (typeof window === 'undefined') {
    return
  }
  if (measurementFrame) {
    window.cancelAnimationFrame(measurementFrame)
  }
  measurementFrame = window.requestAnimationFrame(() => {
    measurementFrame = undefined
    measureCurrentTitleOverflow()
  })
}

const refreshResizeObserver = () => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = undefined
  }
  if (typeof ResizeObserver === 'undefined' || !currentTitleViewport.value) {
    return
  }
  resizeObserver = new ResizeObserver(scheduleOverflowMeasurement)
  resizeObserver.observe(currentTitleViewport.value)
}

onMounted(async () => {
  window.addEventListener('resize', scheduleOverflowMeasurement)
  await nextTick()
  refreshResizeObserver()
  scheduleOverflowMeasurement()
})

watch(currentItemLabel, async () => {
  await nextTick()
  refreshResizeObserver()
  scheduleOverflowMeasurement()
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', scheduleOverflowMeasurement)
    if (measurementFrame) {
      window.cancelAnimationFrame(measurementFrame)
    }
  }
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<template>
  <UBreadcrumb
    v-if="shouldRender"
    :items="items"
    class="wc-page-breadcrumb"
    :style="breadcrumbStyle"
    :ui="{
      list: 'flex-nowrap min-w-0 overflow-hidden',
      link: 'transition-colors',
      linkLabel: 'min-w-0',
      separator: 'text-muted',
    }"
  >
    <template #current-label="{ item }">
      <span
        ref="currentTitleViewport"
        class="wc-page-breadcrumb__current-title-viewport"
        :class="{ 'wc-page-breadcrumb__current-title-viewport--marquee': isCurrentTitleOverflowing }"
        :title="item.label"
      >
        <span class="wc-page-breadcrumb__current-title-track">
          <span
            ref="currentTitleText"
            class="wc-page-breadcrumb__current-title"
          >{{ item.label }}</span>
          <span
            v-if="isCurrentTitleOverflowing"
            class="wc-page-breadcrumb__current-title"
            aria-hidden="true"
          >{{ item.label }}</span>
        </span>
      </span>
    </template>
    <template #separator>
      <span class="mx-2 text-muted">/</span>
    </template>
  </UBreadcrumb>
</template>

<style scoped>
.wc-page-breadcrumb {
  color: rgba(15, 23, 42, 0.62);
  font-size: 0.875rem;
  line-height: 1.25;
  max-width: 100%;
  overflow: hidden;
}

.wc-page-breadcrumb :deep([data-slot="link"]) {
  color: rgba(15, 23, 42, 0.62) !important;
  font-weight: 600;
  white-space: nowrap;
}

.wc-page-breadcrumb :deep([data-slot="list"]) {
  width: 100%;
}

.wc-page-breadcrumb :deep([data-slot="separator"]),
.wc-page-breadcrumb :deep(.wc-page-breadcrumb__parent-item),
.wc-page-breadcrumb :deep(.wc-page-breadcrumb__parent-link),
.wc-page-breadcrumb :deep(.wc-page-breadcrumb__parent-label) {
  flex: 0 0 auto;
  max-width: none;
  min-width: max-content;
  overflow: visible;
  text-overflow: clip;
  white-space: nowrap;
}

.wc-page-breadcrumb :deep(.wc-page-breadcrumb__current-item) {
  flex: 1 1 auto;
  min-width: 0;
}

.wc-page-breadcrumb :deep(.wc-page-breadcrumb__current-link),
.wc-page-breadcrumb :deep(.wc-page-breadcrumb__current-label) {
  max-width: 100%;
  min-width: 0;
  overflow: visible;
}

.wc-page-breadcrumb :deep([data-slot="link"]:hover),
.wc-page-breadcrumb :deep([data-slot="link"]:focus-visible),
.wc-page-breadcrumb :deep(.wc-page-breadcrumb__home-link),
.wc-page-breadcrumb :deep(.wc-page-breadcrumb__home-icon) {
  color: var(--color-primary) !important;
}

.wc-page-breadcrumb :deep([data-slot="link"][aria-current="page"]) {
  color: var(--color-primary) !important;
  cursor: default !important;
  pointer-events: none;
}

.wc-page-breadcrumb :deep([data-slot="linkLeadingIcon"]) {
  color: currentcolor !important;
}

.wc-page-breadcrumb__current-title-viewport {
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.wc-page-breadcrumb__current-title-viewport--marquee {
  margin-left: calc(-1 * var(--wc-page-breadcrumb-marquee-left-fade-width));
  max-width: calc(100% + var(--wc-page-breadcrumb-marquee-left-fade-width));
  padding-left: var(--wc-page-breadcrumb-marquee-left-fade-width);
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 var(--wc-page-breadcrumb-marquee-left-fade-width),
    #000 calc(100% - var(--wc-page-breadcrumb-marquee-fade-width)),
    transparent 100%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0,
    #000 var(--wc-page-breadcrumb-marquee-left-fade-width),
    #000 calc(100% - var(--wc-page-breadcrumb-marquee-fade-width)),
    transparent 100%
  );
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  width: calc(100% + var(--wc-page-breadcrumb-marquee-left-fade-width));
}

.wc-page-breadcrumb__current-title-track {
  display: inline-flex;
  width: max-content;
}

.wc-page-breadcrumb__current-title-viewport--marquee .wc-page-breadcrumb__current-title-track {
  gap: var(--wc-page-breadcrumb-marquee-gap);
  animation: wc-page-breadcrumb-marquee var(--wc-page-breadcrumb-marquee-duration) linear infinite;
}

.wc-page-breadcrumb__current-title {
  flex: 0 0 auto;
}

@keyframes wc-page-breadcrumb-marquee {
  0%,
  18% {
    transform: translateX(0);
  }

  82%,
  100% {
    transform: translateX(var(--wc-page-breadcrumb-marquee-shift));
  }
}

:is(.dark .wc-page-breadcrumb) {
  color: rgba(226, 232, 240, 0.62);
}

:is(.dark .wc-page-breadcrumb) :deep([data-slot="link"]) {
  color: rgba(226, 232, 240, 0.68) !important;
}

:is(.dark .wc-page-breadcrumb) :deep([data-slot="link"]:hover),
:is(.dark .wc-page-breadcrumb) :deep([data-slot="link"]:focus-visible),
:is(.dark .wc-page-breadcrumb) :deep(.wc-page-breadcrumb__home-link),
:is(.dark .wc-page-breadcrumb) :deep(.wc-page-breadcrumb__home-icon),
:is(.dark .wc-page-breadcrumb) :deep([data-slot="link"][aria-current="page"]) {
  color: var(--color-primary) !important;
}

@media (max-width: 640px) {
  .wc-page-breadcrumb {
    font-size: 0.8125rem;
    line-height: 1.1;
  }

  .wc-page-breadcrumb :deep([data-slot="link"]) {
    padding-block: 0.125rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wc-page-breadcrumb__current-title-viewport--marquee {
    text-overflow: ellipsis;
  }

  .wc-page-breadcrumb__current-title-viewport--marquee .wc-page-breadcrumb__current-title-track {
    display: block;
    animation: none;
  }

  .wc-page-breadcrumb__current-title-viewport--marquee .wc-page-breadcrumb__current-title[aria-hidden="true"] {
    display: none;
  }
}
</style>
