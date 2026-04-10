<script setup>
import { computed } from 'vue'
import UPageCard from '@nuxt/ui/components/PageCard.vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const { t, locale } = useI18n()

const formattedDate = computed(() => {
  const value = props.item?.date
  if (!value) return ''
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.valueOf())) return ''
  const intlLocale = locale.value || undefined
  try {
    return new Intl.DateTimeFormat(intlLocale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date)
  } catch (_err) {
    return date.toISOString().split('T')[0]
  }
})

const lastUpdatedText = computed(() => {
  const dateString = formattedDate.value
  if (!dateString) return ''
  const translated = t('article-preview.last-updated', { date: dateString })
  return typeof translated === 'string' ? translated : dateString
})
</script>

<template>
  <li>
    <UPageCard
      :title="props.item.title"
      :description="props.item.description"
      :to="props.item.path"
      spotlight
      class="wc-glass-card transition-shadow duration-300 hover:shadow-lg"
      :ui="{
        root: 'bg-transparent',
        spotlight: 'bg-transparent'
      }"
    >
      <div class="flex flex-col gap-1 text-xs text-muted">
        <span v-if="lastUpdatedText">{{ lastUpdatedText }}</span>
        <span v-if="props.item.notice" class="italic">{{ props.item.notice }}</span>
      </div>
    </UPageCard>
  </li>
</template>
