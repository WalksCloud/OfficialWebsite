import { createRouter, createWebHistory } from 'vue-router'
import { buildNonPrefixedPath, buildPrefixedPath, getPageConfigs, getSiteConfig } from './utils/pageConfig'

const site = getSiteConfig()
const loadHomePage = () => import('./pages/HomePage.vue')
const loadPlaceholderPage = () => import('./pages/PlaceholderPage.vue')
const loadArticleIndexPage = () => import('./pages/ArticleIndexPage.vue')
const loadMarkdownPage = () => import('./pages/MarkdownPage.vue')
const loadNotFoundPage = () => import('./pages/NotFoundPage.vue')

const resolveComponent = (page) => {
  if (page.pageKey === 'home' || page.type === 'home') return loadHomePage
  if (page.pageKey === 'not-found' || page.type === 'not-found') return loadNotFoundPage
  if (page.type === 'article-index') return loadArticleIndexPage
  if (page.type === 'service' || page.type === 'case' || page.type === 'page' || page.type === 'tech') return loadMarkdownPage
  return loadPlaceholderPage
}

const normalizePath = (path) => {
  if (!path) return '/'
  return path.replace(/\/+$/, '') + '/'
}

const generateRoutes = () => {
  const routes = []
  const pages = getPageConfigs()
  pages.forEach((page) => {
    site.locales.forEach((locale) => {
      const prefixedPath = normalizePath(buildPrefixedPath(page.pageKey, locale))
      const component = resolveComponent(page)
      routes.push({
        path: prefixedPath,
        name: `${page.pageKey}-${locale}-prefixed`,
        component,
        meta: {
          pageKey: page.pageKey,
          locale,
          prefixed: true,
        },
      })

      // Non-prefix route for negotiation (single definition per unique path)
      const nonPrefixedPath = normalizePath(buildNonPrefixedPath(page.pageKey, locale))
      routes.push({
        path: nonPrefixedPath,
        name: `${page.pageKey}-nonprefixed`,
        component,
        meta: {
          pageKey: page.pageKey,
          locale: null, // resolved at runtime (from initialState/header mapping)
          prefixed: false,
          negotiated: true,
        },
      })
    })
  })
  // Deduplicate identical non-prefix route definitions
  const seen = new Set()
  const result = []
  routes.forEach((route) => {
    const key = `${route.path}::${route.meta.prefixed}`
    if (seen.has(key)) return
    seen.add(key)
    result.push(route)
  })
  return result
}

const routes = generateRoutes()
routes.push({
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: loadNotFoundPage,
  meta: {
    pageKey: 'not-found',
    locale: site.defaultLocale,
    prefixed: false,
  },
})

export const createAppRouter = () =>
  createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
  })

export default routes

export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition
  const hashOnlyChanged =
    to.path === from.path &&
    JSON.stringify(to.query || {}) === JSON.stringify(from.query || {}) &&
    to.hash &&
    to.hash !== from.hash

  if (hashOnlyChanged) {
    if (typeof window !== 'undefined') {
      window.__wcLastRouterScroll = Date.now()
    }
    return { el: to.hash, behavior: 'smooth' }
  }

  const localeOnlyChanged =
    to.meta?.pageKey &&
    to.meta?.pageKey === from.meta?.pageKey &&
    to.meta?.locale &&
    from.meta?.locale &&
    to.meta.locale !== from.meta.locale

  if (localeOnlyChanged) {
    return false
  }

  if (typeof window !== 'undefined') {
    window.__wcLastRouterScroll = Date.now()
  }
  return { left: 0, top: 0, behavior: 'auto' }
}
