<script setup>
import { compile, computed, defineAsyncComponent, defineComponent, h, markRaw, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ElementTypes, NodeTypes, parse } from '@vue/compiler-dom'
import mediaViewerConfig from '../../config/media-viewer.yaml'

const props = defineProps({
  source: {
    type: String,
    default: '',
  },
  enableMediaViewer: {
    type: Boolean,
    default: false,
  },
})

const emptyComponent = defineComponent({
  name: 'MarkdownRuntimeEmptyContent',
  render: () => null,
})

const MarkdownMediaViewer = defineAsyncComponent(() => import('./MarkdownMediaViewer.vue'))

const LINK_COMPONENT_TAGS = new Set(['NuxtLink', 'RouterLink'])
const MEDIA_DESCRIPTION_MARKER_PATTERN =
  /<!--\s*media-description:for\s+(.+?)\s*-->([\s\S]*?)<!--\s*media-description:end\s*-->/gi

const fallbackComponentCache = new Map()
const compiledComponentCache = new Map()
const containerRef = ref(null)
let mediaItems = []
const mediaItemCount = ref(0)
const mediaViewerOpen = ref(false)
const activeMediaIndex = ref(-1)
const createEmptyActiveMedia = () => ({
  src: '',
  svg: '',
  alt: '',
  title: '',
  description: '',
  kind: 'image',
  index: 0,
  total: 0,
})

const activeMedia = ref(createEmptyActiveMedia())

const cachedObjectUrls = new Set()
let mediaSessionId = 0

let mermaidModulePromise = null
let mermaidInitialized = false
let lastMermaidTheme = null
let rootClassObserver = null
let colorSchemeQuery = null

const canvasConfig = mediaViewerConfig.canvas || {}

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

const normalizeDescriptionWhitespace = (value = '') => String(value || '')
  .replace(/[ \t]+\n/g, '\n')
  .replace(/\n[ \t]+/g, '\n')
  .replace(/\n{3,}/g, '\n\n')
  .replace(/[ \t]{2,}/g, ' ')
  .trim()

const decodeHtmlEntities = (value = '') => {
  const input = String(value || '')
  if (!input) return ''
  if (typeof document !== 'undefined') {
    const textarea = document.createElement('textarea')
    textarea.innerHTML = input
    return textarea.value
  }
  return input
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

const textFromHtmlElement = (element, listType = '') => {
  const tagName = element.tagName?.toLowerCase?.() || ''
  const renderChildren = () => Array.from(element.childNodes)
    .map((child) => textFromHtmlNode(child, listType))
    .join('')

  if (tagName === 'br') return '\n'
  if (tagName === 'ul' || tagName === 'ol') {
    return Array.from(element.children)
      .filter((child) => child.tagName?.toLowerCase?.() === 'li')
      .map((child, index) => {
        const prefix = tagName === 'ol' ? `${index + 1}. ` : '- '
        return `${prefix}${normalizeDescriptionWhitespace(textFromHtmlElement(child, tagName))}`
      })
      .filter((line) => line.trim())
      .join('\n')
  }
  if (tagName === 'li') return renderChildren()
  if (['p', 'div', 'section', 'article', 'blockquote', 'pre'].includes(tagName)) {
    return `${normalizeDescriptionWhitespace(renderChildren())}\n\n`
  }
  return renderChildren()
}

const textFromHtmlNode = (node, listType = '') => {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent || ''
  if (node.nodeType !== Node.ELEMENT_NODE) return ''
  return textFromHtmlElement(node, listType)
}

const htmlToDescriptionText = (html = '') => {
  const input = String(html || '')
  if (!input.trim()) return ''
  if (typeof document !== 'undefined') {
    const container = document.createElement('div')
    container.innerHTML = input
    return normalizeDescriptionWhitespace(
      Array.from(container.childNodes)
        .map((node) => textFromHtmlNode(node))
        .join(''),
    )
  }
  return normalizeDescriptionWhitespace(
    decodeHtmlEntities(input)
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<li\b[^>]*>/gi, '\n- ')
      .replace(/<\/(p|div|section|article|blockquote|pre|ul|ol)>/gi, '\n\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<[^>]+>/g, ''),
  )
}

const normalizeMediaTarget = (value = '') => String(value || '')
  .trim()
  .replace(/^['"<]+|[>'"]+$/g, '')

const extractMediaDescriptionMarkers = (source = '') => {
  const descriptions = []
  const html = String(source || '').replace(
    MEDIA_DESCRIPTION_MARKER_PATTERN,
    (_full, target, body) => {
      const normalizedTarget = normalizeMediaTarget(target)
      const description = htmlToDescriptionText(body)
      if (normalizedTarget && description) {
        descriptions.push({ target: normalizedTarget, description })
      }
      return body
    },
  )
  return { html, descriptions }
}

const runtimeContent = computed(() => extractMediaDescriptionMarkers(props.source))
const compiledComponent = computed(() => createCompiledComponent(runtimeContent.value.html))
const mediaDescriptions = computed(() => runtimeContent.value.descriptions)

const mediaViewerTitle = computed(() => activeMedia.value.title || activeMedia.value.alt || '')

const mediaViewerDescription = computed(() => activeMedia.value.description || mediaViewerTitle.value)

const mediaViewerCounter = computed(() => {
  if (mediaItemCount.value < 1 || activeMediaIndex.value < 0) return ''
  return `${activeMediaIndex.value + 1}/${mediaItemCount.value}`
})

const cleanupCachedObjectUrls = () => {
  cachedObjectUrls.forEach((objectUrl) => {
    URL.revokeObjectURL(objectUrl)
  })
  cachedObjectUrls.clear()
}

const resetMediaViewerSession = () => {
  mediaSessionId += 1
  cleanupCachedObjectUrls()
  activeMedia.value = createEmptyActiveMedia()
  activeMediaIndex.value = -1
  mediaItems = []
  mediaItemCount.value = 0
}

const getFigureCaption = (node) => {
  const figure = node.closest?.('figure')
  const caption = figure?.querySelector?.('figcaption')?.textContent?.trim()
  return caption || ''
}

const stripTargetDecorators = (value = '') => normalizeMediaTarget(value).split('#')[0].split('?')[0]

const getTargetPathname = (value = '') => {
  const cleanValue = stripTargetDecorators(value)
  if (!cleanValue || cleanValue.toLowerCase().startsWith('mermaid:')) return cleanValue
  try {
    return new URL(cleanValue, typeof window !== 'undefined' ? window.location.origin : 'https://local.invalid').pathname
  } catch (_error) {
    return cleanValue
  }
}

const getTargetParts = (value = '') => {
  const pathname = decodeURIComponent(getTargetPathname(value)).replace(/\\/g, '/')
  const normalizedPath = pathname.replace(/^\.?\//, '')
  const basename = normalizedPath.split('/').filter(Boolean).pop() || normalizedPath
  const extensionMatch = basename.match(/(\.[^.]+)$/)
  const extension = extensionMatch?.[1]?.toLowerCase() || ''
  const stem = extension ? basename.slice(0, -extension.length) : basename
  return {
    raw: normalizeMediaTarget(value),
    path: normalizedPath,
    basename,
    extension,
    stem,
  }
}

const mediaTargetsMatch = (markerTarget = '', candidateTarget = '') => {
  const marker = normalizeMediaTarget(markerTarget)
  const candidate = normalizeMediaTarget(candidateTarget)
  if (!marker || !candidate) return false
  if (marker.toLowerCase().startsWith('mermaid:') || candidate.toLowerCase().startsWith('mermaid:')) {
    return marker.toLowerCase() === candidate.toLowerCase()
  }

  const markerParts = getTargetParts(marker)
  const candidateParts = getTargetParts(candidate)
  if (markerParts.path === candidateParts.path) return true
  if (markerParts.basename === candidateParts.basename) return true
  if (
    markerParts.extension &&
    markerParts.extension === candidateParts.extension &&
    candidateParts.stem.startsWith(`${markerParts.stem}-`)
  ) {
    return true
  }
  return Boolean(markerParts.path && candidateParts.path.endsWith(`/${markerParts.path}`))
}

const getMediaDescription = (targets = []) => {
  const targetList = targets.filter(Boolean)
  if (!targetList.length) return ''
  const match = mediaDescriptions.value.find((description) =>
    targetList.some((target) => mediaTargetsMatch(description.target, target)),
  )
  return match?.description || ''
}

const getImageTitle = (node) =>
  node.getAttribute('title')?.trim() || node.getAttribute('alt')?.trim() || getFigureCaption(node)

const getDiagramTitle = (node) =>
  node.querySelector('svg title')?.textContent?.trim() ||
  node.getAttribute('aria-label')?.trim() ||
  getFigureCaption(node) ||
  'Diagram'

const getCanvasTitle = (node) =>
  node.getAttribute('title')?.trim() ||
  node.getAttribute('aria-label')?.trim() ||
  getFigureCaption(node) ||
  'Canvas'

const createTrackedObjectUrl = (blob, sessionId) => {
  const objectUrl = URL.createObjectURL(blob)
  if (sessionId !== mediaSessionId) {
    URL.revokeObjectURL(objectUrl)
    return ''
  }
  cachedObjectUrls.add(objectUrl)
  return objectUrl
}

const getCanvasExportPixelRatio = () => {
  const devicePixelRatio = typeof window === 'undefined' ? 1 : Math.max(1, window.devicePixelRatio || 1)
  const maximumPixelRatio = Number(canvasConfig.maximumDevicePixelRatio)
  if (Number.isFinite(maximumPixelRatio) && maximumPixelRatio > 0) {
    return Math.min(devicePixelRatio, maximumPixelRatio)
  }
  return devicePixelRatio
}

const getCanvasBlobType = () => {
  const value = String(canvasConfig.mimeType || '').trim()
  return value || 'image/png'
}

const canvasToBlob = (canvas) => new Promise((resolve, reject) => {
  const blobType = getCanvasBlobType()
  if (typeof canvas.toBlob === 'function') {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob)
        return
      }
      reject(new Error('Canvas export returned an empty blob.'))
    }, blobType)
    return
  }

  try {
    const dataUrl = canvas.toDataURL(blobType)
    fetch(dataUrl)
      .then((response) => response.blob())
      .then(resolve)
      .catch(reject)
  } catch (error) {
    reject(error)
  }
})

const getElementSize = (element) => {
  const rect = element.getBoundingClientRect?.()
  const width = rect?.width || Number(element.getAttribute?.('width')) || element.width || 1
  const height = rect?.height || Number(element.getAttribute?.('height')) || element.height || 1
  return {
    width: Math.max(1, width),
    height: Math.max(1, height),
  }
}

const buildCanvasObjectUrl = async (canvasSource, sessionId) => {
  if (!canvasSource) return ''
  if (typeof document === 'undefined') {
    const blob = await canvasToBlob(canvasSource)
    return createTrackedObjectUrl(blob, sessionId)
  }

  const { width, height } = getElementSize(canvasSource)
  const pixelRatio = getCanvasExportPixelRatio()
  const canvas = document.createElement('canvas')
  canvas.width = Math.ceil(width * pixelRatio)
  canvas.height = Math.ceil(height * pixelRatio)

  const context = canvas.getContext('2d')
  if (!context) {
    const blob = await canvasToBlob(canvasSource)
    return createTrackedObjectUrl(blob, sessionId)
  }
  context.scale(pixelRatio, pixelRatio)
  context.drawImage(canvasSource, 0, 0, width, height)

  const blob = await canvasToBlob(canvas)
  return createTrackedObjectUrl(blob, sessionId)
}

const getSvgExportSize = (svg) => {
  const viewBox = svg?.viewBox?.baseVal
  const rect = svg?.getBoundingClientRect?.()
  const width = viewBox?.width || rect?.width || Number(svg?.getAttribute?.('width')) || 1
  const height = viewBox?.height || rect?.height || Number(svg?.getAttribute?.('height')) || 1
  return {
    width: Math.max(1, width),
    height: Math.max(1, height),
  }
}

const buildSvgSource = (svg) => {
  if (!svg) return ''
  const { width, height } = getSvgExportSize(svg)
  const svgClone = svg.cloneNode(true)
  svgClone.setAttribute('width', String(width))
  svgClone.setAttribute('height', String(height))
  svgClone.setAttribute('preserveAspectRatio', svgClone.getAttribute('preserveAspectRatio') || 'xMidYMid meet')
  if (!svgClone.getAttribute('viewBox')) {
    svgClone.setAttribute('viewBox', `0 0 ${width} ${height}`)
  }

  const serializer = new XMLSerializer()
  let source = serializer.serializeToString(svgClone)
  if (!/\sxmlns=/.test(source)) {
    source = source.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')
  }
  return source
}

const buildDiagramPayload = (svg) => {
  const svgSource = buildSvgSource(svg)
  return svgSource ? { src: '', svg: svgSource } : { src: '', svg: '' }
}

const fetchImageObjectUrl = async (item, sessionId) => {
  try {
    const response = await fetch(item.src)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const blob = await response.blob()
    return createTrackedObjectUrl(blob, sessionId) || item.src
  } catch (error) {
    console.error('Failed to create image blob for media viewer.', error)
    return item.src
  }
}

const getMediaViewerPayload = (item, sessionId) => {
  if (item.viewerPayload) return Promise.resolve(item.viewerPayload)
  if (item.viewerPayloadPromise) return item.viewerPayloadPromise

  item.viewerPayloadPromise = (async () => {
    let viewerPayload = { src: '', svg: '' }
    try {
      if (item.kind === 'diagram') {
        viewerPayload = buildDiagramPayload(item.element.querySelector('svg'))
      } else if (item.kind === 'canvas') {
        viewerPayload = { src: await buildCanvasObjectUrl(item.element, sessionId), svg: '' }
      } else {
        viewerPayload = { src: await fetchImageObjectUrl(item, sessionId), svg: '' }
      }
    } catch (error) {
      console.error('Failed to create media blob for media viewer.', error)
      viewerPayload = { src: item.src || '', svg: '' }
    }
    item.viewerPayload = viewerPayload
    return viewerPayload
  })()

  return item.viewerPayloadPromise
}

const collectMediaItems = () => {
  if (!props.enableMediaViewer || typeof window === 'undefined') {
    return []
  }
  const container = containerRef.value
  if (!container) return []

  let diagramIndex = 0
  return Array.from(container.querySelectorAll('img, pre.mermaid, canvas'))
    .map((node) => {
      if (node.matches('img')) {
        const src = node.currentSrc || node.getAttribute('src') || ''
        if (!src) return null
        const rawSrc = node.getAttribute('src') || ''
        return {
          element: markRaw(node),
          kind: 'image',
          src,
          alt: node.getAttribute('alt')?.trim() || '',
          title: getImageTitle(node),
          description: getMediaDescription([rawSrc, src]),
        }
      }

      if (node.matches('canvas')) {
        const canvasTarget = node.getAttribute('data-media-target') || node.getAttribute('id') || ''
        return {
          element: markRaw(node),
          kind: 'canvas',
          src: '',
          alt: getCanvasTitle(node),
          title: getCanvasTitle(node),
          description: getMediaDescription([canvasTarget]),
        }
      }

      const svg = node.querySelector('svg')
      if (!svg) return null
      diagramIndex += 1
      const diagramTarget = `mermaid:${diagramIndex}`
      return {
        element: markRaw(node),
        kind: 'diagram',
        alt: getDiagramTitle(node),
        title: getDiagramTitle(node),
        description: getMediaDescription([diagramTarget]),
      }
    })
    .filter(Boolean)
}

const openMediaViewerAt = async (index) => {
  const item = mediaItems[index]
  if (!item) return

  const sessionId = mediaSessionId
  const payload = await getMediaViewerPayload(item, sessionId)
  if (sessionId !== mediaSessionId || mediaItems[index] !== item) return

  activeMediaIndex.value = index
  activeMedia.value = {
    kind: item.kind,
    src: payload.src || '',
    svg: payload.svg || '',
    alt: item.alt || item.title || '',
    title: item.title || item.alt || '',
    description: item.description || item.title || item.alt || '',
    index: index + 1,
    total: mediaItems.length,
  }
  mediaViewerOpen.value = Boolean(activeMedia.value.src || activeMedia.value.svg)
}

const openAdjacentMedia = (offset) => {
  if (!mediaItems.length) return
  const nextIndex = (activeMediaIndex.value + offset + mediaItems.length) % mediaItems.length
  void openMediaViewerAt(nextIndex)
}

const handleMediaClick = (event) => {
  if (!props.enableMediaViewer) return
  const container = containerRef.value
  const target = event.target
  if (!container || !(target instanceof Element) || !container.contains(target)) return

  const image = target.closest('img')
  const diagram = target.closest('pre.mermaid')
  const canvas = target.closest('canvas')
  const mediaNode = image && container.contains(image)
    ? image
    : diagram && container.contains(diagram)
      ? diagram
      : canvas
  if (!mediaNode || !container.contains(mediaNode)) return

  if (!mediaViewerOpen.value) {
    resetMediaViewerSession()
  }
  mediaItems = collectMediaItems()
  mediaItemCount.value = mediaItems.length
  const index = mediaItems.findIndex((item) => item.element === mediaNode)
  if (index < 0) return
  event.preventDefault()
  void openMediaViewerAt(index)
}

const handleViewerKeydown = (event) => {
  if (!mediaViewerOpen.value || mediaItems.length <= 1) return
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    openAdjacentMedia(-1)
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    openAdjacentMedia(1)
  }
}

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
  containerRef.value?.addEventListener('click', handleMediaClick)
  window.addEventListener('keydown', handleViewerKeydown)
  renderMermaidAfterUpdate()
})

onBeforeUnmount(() => {
  containerRef.value?.removeEventListener('click', handleMediaClick)
  window.removeEventListener('keydown', handleViewerKeydown)
  cleanupThemeObservers()
  resetMediaViewerSession()
})

watch(mediaViewerOpen, (isOpen) => {
  if (!isOpen) {
    resetMediaViewerSession()
  }
})

watch(
  () => props.source,
  () => {
    mediaViewerOpen.value = false
    resetMediaViewerSession()
    renderMermaidAfterUpdate()
  },
)
</script>

<template>
  <div
    ref="containerRef"
    class="markdown-runtime-content"
    :class="{ 'markdown-runtime-content--media-viewer': enableMediaViewer }"
  >
    <component :is="compiledComponent" />
  </div>
  <MarkdownMediaViewer
    v-if="enableMediaViewer && mediaViewerOpen"
    v-model:open="mediaViewerOpen"
    :active-media="activeMedia"
    :title="mediaViewerTitle"
    :description="mediaViewerDescription"
    :counter="mediaViewerCounter"
    :has-multiple="mediaItemCount > 1"
    @previous="openAdjacentMedia(-1)"
    @next="openAdjacentMedia(1)"
  />
</template>

<style scoped>
.markdown-runtime-content--media-viewer :deep(img),
.markdown-runtime-content--media-viewer :deep(pre.mermaid svg),
.markdown-runtime-content--media-viewer :deep(canvas) {
  cursor: zoom-in;
}

.markdown-runtime-content--media-viewer :deep(img:hover),
.markdown-runtime-content--media-viewer :deep(pre.mermaid:hover svg),
.markdown-runtime-content--media-viewer :deep(canvas:hover) {
  filter: saturate(1.05);
}

</style>
