<script setup>
import { useOfflineCacheStore } from '@/stores/offlineCache'
import { storeToRefs } from 'pinia'

const offlineCache = useOfflineCacheStore()
const { isCaching, progressPercent, progressStyle } = storeToRefs(offlineCache)
</script>

<template>
  <Transition name="wc-offline-cache-indicator">
    <div
      v-if="isCaching"
      class="wc-offline-cache-progress"
      :style="progressStyle"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="Math.round(progressPercent)"
      :aria-label="$t('navigation-recovery.offline-cache.caching')"
      :title="$t('navigation-recovery.offline-cache.caching')"
    >
      <span class="sr-only">{{ $t('navigation-recovery.offline-cache.caching') }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.wc-offline-cache-progress {
  position: fixed;
  left: 0.75rem;
  bottom: 0.75rem;
  z-index: 180;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  overflow: visible;
  pointer-events: none;
}

.wc-offline-cache-progress::before {
  content: '';
  position: absolute;
  inset: 0.25rem;
  border-radius: inherit;
  background: var(--color-tint);
  box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-tint) 45%, transparent);
  animation: wc-offline-cache-pulse 1.2s ease-out infinite;
}

.wc-offline-cache-progress::after {
  content: '';
  position: absolute;
  inset: -0.125rem;
  border-radius: inherit;
  background: conic-gradient(
    var(--color-tint) 0 var(--wc-offline-cache-progress, 0%),
    color-mix(in srgb, var(--color-tint) 18%, transparent) var(--wc-offline-cache-progress, 0%) 100%
  );
  mask: radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px));
}

.wc-offline-cache-indicator-enter-active,
.wc-offline-cache-indicator-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.wc-offline-cache-indicator-enter-from,
.wc-offline-cache-indicator-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

@keyframes wc-offline-cache-pulse {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-tint) 45%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0.375rem transparent;
  }
}
</style>
