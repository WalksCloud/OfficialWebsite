<script setup>
import { compile, computed, defineComponent, h, markRaw } from 'vue'
import { ElementTypes, NodeTypes, parse } from '@vue/compiler-dom'

const props = defineProps({
  source: {
    type: String,
    default: '',
  },
})

const emptyComponent = defineComponent({
  name: 'MarkdownRuntimeEmptyContent',
  render: () => null,
})

const LINK_COMPONENT_TAGS = new Set(['NuxtLink', 'RouterLink'])

const fallbackComponentCache = new Map()
const compiledComponentCache = new Map()

const addEmbeddedComponentMarker = (source = '') => {
  if (!source.trim()) return source

  let ast
  try {
    ast = parse(`<div>${source}</div>`)
  } catch (error) {
    console.error('Failed to parse markdown runtime content for scoped styling.', error)
    return source
  }

  const patches = []

  const collectPatches = (node) => {
    if (node.type !== NodeTypes.ELEMENT) return

    const isComponent = node.tagType === ElementTypes.COMPONENT
    const isLinkComponent = LINK_COMPONENT_TAGS.has(node.tag)

    if (isComponent && !isLinkComponent) {
      patches.push({
        start: node.loc.start.offset + node.tag.length - 4,
        end: node.loc.start.offset + node.tag.length - 4,
        text: ' data-markdown-embedded',
      })
      return
    }

    node.children.forEach((child) => {
      collectPatches(child)
    })
  }

  ast.children.forEach((child) => {
    collectPatches(child)
  })

  if (!patches.length) return source

  let result = source
  patches
    .sort((a, b) => b.start - a.start)
    .forEach(({ start, end, text }) => {
      result = `${result.slice(0, start)}${text}${result.slice(end)}`
    })

  return result
}

const createFallbackComponent = (source = '') => {
  const cached = fallbackComponentCache.get(source)
  if (cached) return cached

  const component = markRaw(
    defineComponent({
      name: 'MarkdownRuntimeFallbackContent',
      render: () => h('div', { innerHTML: source }),
    }),
  )

  fallbackComponentCache.set(source, component)
  return component
}

const createCompiledComponent = (source = '') => {
  const normalizedSource = source.trim()
  if (!normalizedSource) return emptyComponent
  const markedSource = addEmbeddedComponentMarker(normalizedSource)
  const cacheKey = `<div>${markedSource}</div>`
  const cached = compiledComponentCache.get(cacheKey)
  if (cached) return cached

  let component = createFallbackComponent(markedSource)
  try {
    component = markRaw(
      defineComponent({
        name: 'MarkdownRuntimeCompiledContent',
        render: compile(cacheKey),
      }),
    )
  } catch (error) {
    console.error('Failed to compile markdown runtime content.', error)
  }

  compiledComponentCache.set(cacheKey, component)
  return component
}

const compiledComponent = computed(() => createCompiledComponent(props.source))
</script>

<template>
  <component :is="compiledComponent" />
</template>
