<script setup>
import { computed, defineComponent, h } from 'vue'
import { RouterLink } from 'vue-router'
import MarkdownIt from 'markdown-it'
import UChatTool from '@nuxt/ui/components/ChatTool.vue'

const NuxtLink = RouterLink

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
const md = new MarkdownIt({ html: false, breaks: true, linkify: true })

const isExternalLink = (href = '') => /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')

const getTokenAttrs = (token) => {
	const attrs = {}
	;(token.attrs || []).forEach(([key, value]) => {
		attrs[key] = value
	})
	return attrs
}

const createNodeFromToken = (token) => {
	const node = {
		tag: token.tag || 'div',
		attrs: getTokenAttrs(token),
		children: [],
	}
	if (token.type === 'ordered_list_open') {
		const start = token.attrGet?.('start')
		if (start) node.attrs.start = start
	}
	return node
}

const processInlineTokens = (inlineTokens = [], parentChildren) => {
	const stack = [parentChildren]
	const pushNode = (tag, attrs = {}) => {
		const node = { tag, attrs, children: [] }
		stack[stack.length - 1].push(node)
		stack.push(node.children)
		return node
	}
	const popNode = () => {
		if (stack.length > 1) stack.pop()
	}

	inlineTokens.forEach((token) => {
		switch (token.type) {
			case 'text':
				stack[stack.length - 1].push(token.content)
				break
			case 'softbreak':
				stack[stack.length - 1].push(' ')
				break
			case 'hardbreak':
				stack[stack.length - 1].push({ tag: 'br', attrs: {}, children: [] })
				break
			case 'code_inline':
				pushNode('code').children.push(token.content)
				stack.pop()
				break
			case 'em_open':
			case 'strong_open':
			case 's_open':
				pushNode(token.tag || 'span')
				break
			case 'em_close':
			case 'strong_close':
			case 's_close':
				popNode()
				break
			case 'link_open': {
				const href = token.attrGet?.('href') || ''
				const title = token.attrGet?.('title')
				const attrs = {}
				if (title) attrs.title = title
				if (!href) {
					pushNode('span', attrs)
					break
				}
				if (isExternalLink(href)) {
					pushNode('a', {
						...attrs,
						href,
						target: '_blank',
						rel: 'noopener noreferrer',
					})
				} else {
					pushNode('NuxtLink', {
						...attrs,
						to: href,
					})
				}
				break
			}
			case 'link_close':
				popNode()
				break
			case 'image': {
				const src = token.attrGet?.('src') || ''
				const title = token.attrGet?.('title')
				const alt = token.content || ''
				stack[stack.length - 1].push({
					tag: 'img',
					attrs: {
						src,
						alt,
						title: title || undefined,
					},
					children: [],
				})
				break
			}
			case 'html_inline':
				stack[stack.length - 1].push(token.content || '')
				break
			default:
				break
		}
	})
}

const buildAstFromMarkdown = (source = '') => {
	const tokens = md.parse(source, {})
	const root = { tag: null, attrs: {}, children: [] }
	const stack = [root]

	tokens.forEach((token) => {
		if (token.type === 'inline') {
			processInlineTokens(token.children, stack[stack.length - 1].children)
			return
		}
		if (token.type.endsWith('_open')) {
			const node = createNodeFromToken(token)
			stack[stack.length - 1].children.push(node)
			stack.push(node)
			return
		}
		if (token.type.endsWith('_close')) {
			if (stack.length > 1) stack.pop()
			return
		}
		if (token.type === 'fence' || token.type === 'code_block') {
			const codeNode = {
				tag: 'pre',
				attrs: {},
				children: [
					{
						tag: 'code',
						attrs: {},
						children: [token.content],
					},
				],
			}
			stack[stack.length - 1].children.push(codeNode)
			return
		}
		if (token.type === 'hr') {
			stack[stack.length - 1].children.push({ tag: 'hr', attrs: {}, children: [] })
			return
		}
		if (token.type === 'html_block') {
			stack[stack.length - 1].children.push(token.content || '')
		}
	})

	return root.children
}

const renderNodes = (nodes, keyPrefix = '') =>
	nodes.map((node, index) => {
		const key = `${keyPrefix}${index}`
		if (typeof node === 'string') {
			return node
		}
		const children = node.children?.length ? renderNodes(node.children, `${key}-`) : []
		if (node.tag === 'NuxtLink') {
			const { to, ...rest } = node.attrs || {}
			return h(
				NuxtLink,
				{
					key,
					to: to || '/',
					...rest,
				},
				children,
			)
		}
		return h(
			node.tag || 'span',
			{
				key,
				...(node.attrs || {}),
			},
			children.length ? children : undefined,
		)
	})

const MarkdownContent = defineComponent({
	name: 'FaqMarkdownContent',
	props: {
		nodes: {
			type: Array,
			default: () => [],
		},
	},
	setup(props) {
		return () => renderNodes(props.nodes)
	},
})

const renderedNodes = computed(() => {
	const source = typeof props.item.content === 'string' ? props.item.content : ''
	const trimmed = source.trim()
	if (!trimmed) return []
	return buildAstFromMarkdown(trimmed)
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
		<MarkdownContent :nodes="renderedNodes" />
		<p v-if="item.notice" class="mt-2 text-sm text-muted italic">{{ item.notice }}</p>
	</UChatTool>
</template>
