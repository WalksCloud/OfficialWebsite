import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import PlaceholderPage from './pages/PlaceholderPage.vue'
import MarkdownPage from './pages/MarkdownPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import { buildNonPrefixedPath, buildPrefixedPath, getPageConfigs, getSiteConfig } from './utils/pageConfig'

const site = getSiteConfig()

const resolveComponent = (page) => {
  if (page.pageKey === 'home' || page.type === 'home') return HomePage
  if (page.pageKey === 'not-found' || page.type === 'not-found') return NotFoundPage
  if (page.type === 'service' || page.type === 'case' || page.type === 'page') return MarkdownPage
  return PlaceholderPage
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
  component: NotFoundPage,
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
  if (to.hash) {
    if (typeof window !== 'undefined') {
      window.__wcLastRouterScroll = Date.now()
    }
    return { el: to.hash, behavior: 'smooth' }
  }
  if (typeof window !== 'undefined') {
    window.__wcLastRouterScroll = Date.now()
  }
  return false
}
