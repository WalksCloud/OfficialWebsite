<script setup>
import { compile, computed, defineComponent, h, markRaw, nextTick, onBeforeUnmount, onMounted, onUpdated, ref } from 'vue'
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
const containerRef = ref(null)

let mermaidModulePromise = null
let mermaidInitialized = false
let lastMermaidTheme = null
let rootClassObserver = null
let colorSchemeQuery = null

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

const getMermaid = async () => {
  if (mermaidModulePromise) return mermaidModulePromise
  mermaidModulePromise = import('mermaid').then((module) => module.default || module)
  return mermaidModulePromise
}

const getMermaidThemeConfig = () => {
  const rootClassList = document.documentElement.classList
  const isDarkExplicit = rootClassList.contains('dark')
  const isLightExplicit = rootClassList.contains('light')
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches === true
  const isDark = isDarkExplicit || (!isLightExplicit && prefersDark)
  return isDark
    ? {
        theme: 'base',
        themeVariables: {
          background: '#0f172a',
          primaryColor: '#111827',
          secondaryColor: '#111827',
          tertiaryColor: '#111827',
          primaryTextColor: '#e5e7eb',
          lineColor: '#cbd5e1',
          primaryBorderColor: '#cbd5e1',
          secondaryBorderColor: '#94a3b8',
          clusterBkg: '#111827',
          clusterBorder: '#94a3b8',
        },
      }
    : {
        theme: 'base',
        themeVariables: {
          background: '#ffffff',
          primaryColor: '#ffffff',
          secondaryColor: '#ffffff',
          tertiaryColor: '#f8fafc',
          primaryTextColor: '#0f172a',
          lineColor: '#334155',
          primaryBorderColor: '#334155',
          secondaryBorderColor: '#64748b',
          clusterBkg: '#f8fafc',
          clusterBorder: '#94a3b8',
        },
      }
}

const resetMermaidNodesForRerender = (nodes = []) => {
  nodes.forEach((node) => {
    if (!node.dataset.mermaidSource) {
      node.dataset.mermaidSource = node.textContent || ''
    }
    node.removeAttribute('data-processed')
    node.removeAttribute('aria-busy')
    node.innerHTML = node.dataset.mermaidSource
  })
}

const renderMermaidDiagrams = async () => {
  if (typeof window === 'undefined') return
  const container = containerRef.value
  if (!container) return

  const diagramNodes = Array.from(container.querySelectorAll('pre.mermaid'))
  if (!diagramNodes.length) return

  try {
    const mermaid = await getMermaid()
    const themeConfig = getMermaidThemeConfig()
    const themeSignature = JSON.stringify(themeConfig)
    const shouldReinitialize = !mermaidInitialized || lastMermaidTheme !== themeSignature
    if (shouldReinitialize) {
      resetMermaidNodesForRerender(diagramNodes)
    }
    if (shouldReinitialize) {
      mermaid.initialize({ startOnLoad: false, ...themeConfig })
      mermaidInitialized = true
      lastMermaidTheme = themeSignature
    }
    await mermaid.run({ nodes: diagramNodes, suppressErrors: false })
  } catch (error) {
    console.error('Failed to render Mermaid diagrams.', error)
  }
}

const renderMermaidAfterUpdate = () => {
  void nextTick(async () => {
    await renderMermaidDiagrams()
  })
}

const rerenderMermaidForThemeChange = () => {
  if (typeof window === 'undefined') return
  lastMermaidTheme = null
  renderMermaidAfterUpdate()
}

const setupThemeObservers = () => {
  if (typeof window === 'undefined') return
  if (!window.MutationObserver) return

  const root = document.documentElement
  rootClassObserver = new MutationObserver((mutationList) => {
    if (mutationList.some((mutation) => mutation.type === 'attributes' && mutation.attributeName === 'class')) {
      rerenderMermaidForThemeChange()
    }
  })
  rootClassObserver.observe(root, { attributes: true, attributeFilter: ['class'] })

  colorSchemeQuery = window.matchMedia?.('(prefers-color-scheme: dark)') || null
  if (colorSchemeQuery?.addEventListener) {
    colorSchemeQuery.addEventListener('change', rerenderMermaidForThemeChange)
  } else if (colorSchemeQuery?.addListener) {
    colorSchemeQuery.addListener(rerenderMermaidForThemeChange)
  }
}

const cleanupThemeObservers = () => {
  if (rootClassObserver) {
    rootClassObserver.disconnect()
    rootClassObserver = null
  }
  if (colorSchemeQuery?.removeEventListener) {
    colorSchemeQuery.removeEventListener('change', rerenderMermaidForThemeChange)
  } else if (colorSchemeQuery?.removeListener) {
    colorSchemeQuery.removeListener(rerenderMermaidForThemeChange)
  }
  colorSchemeQuery = null
}

onMounted(() => {
  setupThemeObservers()
  renderMermaidAfterUpdate()
})

onUpdated(() => {
  renderMermaidAfterUpdate()
})

onBeforeUnmount(() => {
  cleanupThemeObservers()
})
</script>

<template>
  <div ref="containerRef">
    <component :is="compiledComponent" />
  </div>
</template>
