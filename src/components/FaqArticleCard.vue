<script setup>
import { computed } from 'vue'
import UChatTool from '@nuxt/ui/components/ChatTool.vue'
import MarkdownRuntimeContent from '@/components/MarkdownRuntimeContent.vue'
import { createMarkdownRenderer } from '@/utils/markdown'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const chatToolUi = {
  label: 'text-lg text-left whitespace-normal overflow-visible text-pretty',
  root: 'rounded-md ring ring-default overflow-hidden border border-gray-400/70 dark:border-white/30',
  leading: 'size-16',
  leadingIcon: 'size-16',
  body: 'text-lg text-dimmed whitespace-pre-wrap text-white border-t p-2 max-h-[200px] overflow-y-auto border-gray-400/70 dark:border-white/30',
}

const defaultIcon = 'i-heroicons-question-mark-circle'
const md = createMarkdownRenderer({ html: false, breaks: true, linkify: true })

const renderedHtml = computed(() => {
  const source = typeof props.item.content === 'string' ? props.item.content : ''
  const trimmed = source.trim()
  if (!trimmed) return ''
  return md.render(trimmed)
})
</script>

<template>
  <UChatTool
    streaming
    :text="item.title"
    :icon="item.icon || defaultIcon"
    variant="card"
    chevron="trailing"
    :ui="chatToolUi"
  >
    <MarkdownRuntimeContent :source="renderedHtml" />
    <p v-if="item.notice" class="mt-2 text-sm text-muted italic">{{ item.notice }}</p>
  </UChatTool>
</template>
