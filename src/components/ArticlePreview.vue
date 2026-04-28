<script setup>
import { computed } from 'vue'
import UPageCard from '@nuxt/ui/components/PageCard.vue'
import UBadge from '@nuxt/ui/components/Badge.vue'
import { useI18n } from 'vue-i18n'
import { getArticleCategoryTags } from '@/utils/articleTags'

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
  const translated = t('article.last-updated', { date: dateString })
  return typeof translated === 'string' ? translated : dateString
})

const articleTags = computed(() => {
  const slug = props.item?.slug || ''
  if (!slug) return []
  return getArticleCategoryTags(slug, locale.value)
})
</script>

<template>
  <div>
    <UPageCard
      :title="props.item.title"
      :description="props.item.description"
      :to="props.item.path"
      spotlight
      class="wc-glass-card wc-card-spotlight transition-shadow duration-300 hover:shadow-lg"
      :ui="{
        root: 'bg-transparent',
        spotlight: 'bg-transparent'
      }"
    >
      <div class="flex flex-col gap-2 text-xs text-muted">
        <div v-if="articleTags.length" class="flex flex-wrap gap-1.5">
          <UBadge
            v-for="tag in articleTags"
            :key="tag.id"
            :label="tag.label"
            color="neutral"
            variant="soft"
            class="font-bold rounded-full border border-transparent"
            :style="tag.style"
          />
        </div>
        <span v-if="lastUpdatedText">{{ lastUpdatedText }}</span>
        <span v-if="props.item.notice" class="italic">{{ props.item.notice }}</span>
      </div>
    </UPageCard>
  </div>
</template>
