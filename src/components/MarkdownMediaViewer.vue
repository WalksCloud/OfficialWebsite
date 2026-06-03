<script setup>
import { computed, ref, watch } from 'vue'
import UButton from '@nuxt/ui/components/Button.vue'
import UModal from '@nuxt/ui/components/Modal.vue'
import mediaViewerConfig from '../../config/media-viewer.yaml'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  activeMedia: {
    type: Object,
    default: () => ({
      src: '',
      alt: '',
      title: '',
      description: '',
      kind: 'image',
      index: 0,
      total: 0,
    }),
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  counter: {
    type: String,
    default: '',
  },
  hasMultiple: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:open', 'previous', 'next'])

const zoomConfig = mediaViewerConfig.zoom
const scale = ref(zoomConfig.minimumScale)
const offsetX = ref(0)
const offsetY = ref(0)
const isPointerActive = ref(false)
const activePointers = new Map()

let gestureStartScale = zoomConfig.minimumScale
let gestureStartDistance = 0
let gestureStartCenter = { x: 0, y: 0 }
let gestureStartOffset = { x: 0, y: 0 }

const isOpen = computed({
  get: () => props.open,
  set: (value) => emit('update:open', value),
})

const viewerImageStyle = computed(() => ({
  transform: `translate3d(${offsetX.value}px, ${offsetY.value}px, 0) scale(${scale.value})`,
}))

const viewerDescription = computed(() => props.description || props.title || props.activeMedia.alt || '')

const viewerCounter = computed(() => {
  if (props.counter) return props.counter
  if (!props.activeMedia.index || !props.activeMedia.total) return ''
  return `${props.activeMedia.index}/${props.activeMedia.total}`
})

const canPanImage = computed(() => scale.value > zoomConfig.resetScaleThreshold)

const viewerSurfaceClasses = computed(() => ({
  'markdown-media-viewer--can-pan': canPanImage.value,
  'markdown-media-viewer--is-panning': canPanImage.value && isPointerActive.value,
}))

const clampScale = (value) =>
  Math.min(zoomConfig.maximumScale, Math.max(zoomConfig.minimumScale, value))

const resetScale = () => {
  scale.value = zoomConfig.minimumScale
  offsetX.value = 0
  offsetY.value = 0
}

const resetPointers = () => {
  activePointers.clear()
  isPointerActive.value = false
  gestureStartScale = scale.value
  gestureStartDistance = 0
  gestureStartCenter = { x: 0, y: 0 }
  gestureStartOffset = { x: offsetX.value, y: offsetY.value }
}

const getPointerList = () => Array.from(activePointers.values())

const getPointerCenter = (pointers) => {
  const total = pointers.reduce(
    (result, pointer) => ({
      x: result.x + pointer.x,
      y: result.y + pointer.y,
    }),
    { x: 0, y: 0 },
  )
  return {
    x: total.x / pointers.length,
    y: total.y / pointers.length,
  }
}

const getPointerDistance = ([first, second]) =>
  Math.hypot(second.x - first.x, second.y - first.y)

const setScaleFromPoint = (nextScale, point) => {
  const previousScale = scale.value
  const nextClampedScale = clampScale(nextScale)
  if (nextClampedScale <= zoomConfig.resetScaleThreshold) {
    resetScale()
    return
  }

  scale.value = nextClampedScale
  if (!point || previousScale <= 0) return

  const originX = point.x - window.innerWidth / 2
  const originY = point.y - window.innerHeight / 2
  const ratio = nextClampedScale / previousScale
  offsetX.value = originX - (originX - offsetX.value) * ratio
  offsetY.value = originY - (originY - offsetY.value) * ratio
}

const handleWheel = (event) => {
  event.preventDefault()
  event.stopPropagation()
  const nextScale = scale.value * (1 - event.deltaY * zoomConfig.wheelStep)
  setScaleFromPoint(nextScale, { x: event.clientX, y: event.clientY })
}

const resetGestureFromPointers = () => {
  const pointers = getPointerList()
  gestureStartScale = scale.value
  gestureStartOffset = { x: offsetX.value, y: offsetY.value }
  gestureStartCenter = pointers.length ? getPointerCenter(pointers) : { x: 0, y: 0 }
  gestureStartDistance = pointers.length >= 2 ? getPointerDistance(pointers) : 0
}

const handlePointerDown = (event) => {
  event.preventDefault()
  event.stopPropagation()
  event.currentTarget?.setPointerCapture?.(event.pointerId)
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
  isPointerActive.value = activePointers.size > 0
  resetGestureFromPointers()
}

const handlePointerMove = (event) => {
  if (!activePointers.has(event.pointerId)) return
  event.preventDefault()
  event.stopPropagation()
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY })

  const pointers = getPointerList()
  if (pointers.length >= 2 && gestureStartDistance > 0) {
    const center = getPointerCenter(pointers)
    scale.value = clampScale(gestureStartScale * (getPointerDistance(pointers) / gestureStartDistance))
    offsetX.value = gestureStartOffset.x + center.x - gestureStartCenter.x
    offsetY.value = gestureStartOffset.y + center.y - gestureStartCenter.y
    if (scale.value <= zoomConfig.resetScaleThreshold) {
      resetScale()
    }
    return
  }

  if (pointers.length === 1 && scale.value > zoomConfig.resetScaleThreshold) {
    const [pointer] = pointers
    offsetX.value = gestureStartOffset.x + pointer.x - gestureStartCenter.x
    offsetY.value = gestureStartOffset.y + pointer.y - gestureStartCenter.y
  }
}

const handlePointerEnd = (event) => {
  if (!activePointers.has(event.pointerId)) return
  event.stopPropagation()
  event.currentTarget?.releasePointerCapture?.(event.pointerId)
  activePointers.delete(event.pointerId)
  isPointerActive.value = activePointers.size > 0
  if (scale.value <= zoomConfig.resetScaleThreshold) {
    resetScale()
  }
  resetGestureFromPointers()
}

watch(
  () => props.activeMedia.src,
  () => {
    resetScale()
    resetPointers()
  },
)

watch(
  () => props.open,
  (isOpenNow) => {
    if (!isOpenNow) {
      resetScale()
      resetPointers()
    }
  },
)
</script>

<template>
  <UModal
    v-model:open="isOpen"
    :title="title"
    fullscreen
    :overlay="true"
    :close="false"
    :dismissible="false"
    class="text-white"
    :ui="{
      overlay: '!bg-slate-950/70 backdrop-blur-md',
      content: '!bg-transparent !divide-y-0 !shadow-none !ring-0',
      header: 'hidden',
      title: 'text-white',
      body: 'min-h-0 flex-1 !p-0 !overflow-hidden',
    }"
  >
    <template #body="{ close }">
      <div
        class="markdown-media-viewer"
        :class="viewerSurfaceClasses"
        @wheel="handleWheel"
        @pointerdown="handlePointerDown"
        @pointermove="handlePointerMove"
        @pointerup="handlePointerEnd"
        @pointercancel="handlePointerEnd"
        @click.self="close"
      >
        <figure
          class="markdown-media-viewer__figure"
          @click.stop
        >
          <img
            v-if="activeMedia.src"
            :src="activeMedia.src"
            :alt="activeMedia.alt"
            class="markdown-media-viewer__image"
            :style="viewerImageStyle"
            draggable="false"
          >
        </figure>
        <div
          class="markdown-media-viewer__controls"
          @pointerdown.stop
          @pointermove.stop
          @pointerup.stop
          @pointercancel.stop
          @mousedown.stop
          @wheel.stop
          @click.stop
        >
          <UButton
            v-if="hasMultiple"
            color="neutral"
            variant="soft"
            size="lg"
            class="markdown-media-viewer__nav markdown-media-viewer__nav--previous"
            aria-label="Previous media"
            @click.stop="emit('previous')"
          >
            ‹
          </UButton>
          <span
            v-if="viewerCounter"
            class="markdown-media-viewer__counter"
            aria-label="Current media index"
          >
            {{ viewerCounter }}
          </span>
          <p
            v-if="viewerDescription"
            class="markdown-media-viewer__caption"
          >
            {{ viewerDescription }}
          </p>
          <span v-else class="markdown-media-viewer__caption markdown-media-viewer__caption--empty" aria-hidden="true" />
          <UButton
            v-if="hasMultiple"
            color="neutral"
            variant="soft"
            size="lg"
            class="markdown-media-viewer__nav markdown-media-viewer__nav--next"
            aria-label="Next media"
            @click.stop="emit('next')"
          >
            ›
          </UButton>
          <UButton
            color="neutral"
            variant="soft"
            size="lg"
            class="markdown-media-viewer__close"
            aria-label="Close media viewer"
            @click.stop="close"
          >
            Close
          </UButton>
        </div>
      </div>
    </template>
  </UModal>
</template>

<style scoped>
.markdown-media-viewer {
  position: relative;
  display: flex;
  min-height: 100dvh;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  isolation: isolate;
  overflow: hidden;
  padding: 4.25rem 1rem 8.5rem;
  cursor: default;
  touch-action: none;
  user-select: none;
}

.markdown-media-viewer--can-pan {
  cursor: grab;
}

.markdown-media-viewer--is-panning {
  cursor: grabbing;
}

.markdown-media-viewer__figure {
  position: relative;
  z-index: 1;
  display: flex;
  min-width: 0;
  max-width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  overflow: visible;
}

.markdown-media-viewer__image {
  max-width: 100%;
  max-height: calc(100dvh - 13rem);
  object-fit: contain;
  border-radius: 0.75rem;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
  transform-origin: center center;
  transition: transform 120ms ease-out;
  user-select: none;
  will-change: transform;
}

.markdown-media-viewer__controls {
  position: absolute;
  z-index: 5;
  right: 1rem;
  bottom: max(1rem, env(safe-area-inset-bottom));
  left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.78);
  padding: 0.65rem;
  cursor: default;
  backdrop-filter: blur(0.9rem);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
}

.markdown-media-viewer__caption {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  flex: 1 1 auto;
  overflow: visible;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.9rem;
  line-height: 1.35;
  margin: 0;
  text-align: center;
  white-space: pre-line;
}

.markdown-media-viewer__caption--empty {
  min-height: 1.25rem;
}

.markdown-media-viewer__counter {
  display: inline-flex;
  min-width: 3.4rem;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.88);
  padding: 0.45rem 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  line-height: 1;
  backdrop-filter: blur(0.75rem);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.24);
}

.markdown-media-viewer__nav {
  width: 2.5rem;
  min-height: 2.5rem;
  flex: 0 0 auto;
  font-size: 1.25rem;
  line-height: 1;
}

.markdown-media-viewer__close {
  min-height: 2.5rem;
  flex: 0 0 auto;
}

@media (max-width: 640px) {
  .markdown-media-viewer {
    gap: 0.5rem;
    padding: 4rem 0.75rem 9rem;
  }

  .markdown-media-viewer__image {
    max-height: calc(100dvh - 13.5rem);
  }

  .markdown-media-viewer__controls {
    right: 0.75rem;
    bottom: max(0.75rem, env(safe-area-inset-bottom));
    left: 0.75rem;
    gap: 0.5rem;
    padding: 0.55rem;
  }

  .markdown-media-viewer__caption {
    font-size: 0.82rem;
  }
}
</style>
