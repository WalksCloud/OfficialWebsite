import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import routes, { scrollBehavior } from './router'
import { getSiteConfig, buildPrefixedPath, buildNonPrefixedPath } from './utils/pageConfig'
import { getLocaleFallbackChain, getLocaleMessages } from './utils/localeBundles'
import { registerGlobalComponents } from './registerGlobalComponents'

import './style.css'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'

const site = getSiteConfig()
const messages = getLocaleMessages()
const fallbackLocale = getLocaleFallbackChain(site)

library.add(faSquareFacebook, faLinkedin)

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router, isClient, initialState, head }) => {
    const pinia = createPinia()
    const i18n = createI18n({
      legacy: false,
      locale: site.defaultLocale || 'zh-tw',
      fallbackLocale,
      warnHtmlMessage: false,
      messages,
    })

    app.use(head)
    app.use(pinia)
    app.use(i18n)
    app.use(ui)
    registerGlobalComponents(app)
    app.component('font-awesome-icon', FontAwesomeIcon)

    // Persist locale for client navigation only
    const setLocale = (value) => {
      i18n.global.locale.value = value
      if (isClient) {
        localStorage.setItem('locale', value)
      }
    }

    if (isClient) {
      const buildScrollKey = () => {
        const { pathname, search } = window.location
        return `scroll-position:${pathname}${search}`
      }

      const shouldHandleScroll = () => {
        const routerScrolledRecently =
          typeof window !== 'undefined' &&
          typeof window.__wcLastRouterScroll === 'number' &&
          Date.now() - window.__wcLastRouterScroll < 500
        return !window.location.hash && !routerScrolledRecently
      }

      const restoreScrollPosition = () => {
        if (!shouldHandleScroll()) return
        const key = buildScrollKey()
        const stored = sessionStorage.getItem(key)
        if (stored) {
          const raf =
            typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function'
              ? window.requestAnimationFrame.bind(window)
              : (cb) => setTimeout(cb, 0)
          raf(() => {
            window.scrollTo({ top: Number(stored) || 0, behavior: 'auto' })
            sessionStorage.removeItem(key)
          })
        }
      }

      const navigationEntries = performance?.getEntriesByType
        ? performance.getEntriesByType('navigation')
        : null
      const navType = navigationEntries && navigationEntries.length
        ? navigationEntries[0].type
        : performance?.navigation?.type

      if (navType === 'reload' || navType === performance?.navigation?.TYPE_RELOAD) {
        restoreScrollPosition()
      }

      window.addEventListener('beforeunload', () => {
        if (!shouldHandleScroll()) return
        sessionStorage.setItem(buildScrollKey(), String(window.scrollY || 0))
      })
    }

    const normalizePath = (p) => {
      const v = (p || '').replace(/\/+$/, '')
      return v || '/'
    }

    // During build, store locale in initialState for hydration under non-prefix paths
    router.beforeEach((to, from, next) => {
      const storedLocale = isClient ? localStorage.getItem('locale') : null
      const initialLocale = initialState?.locale
      const targetLocale =
        to.meta.locale ||
        storedLocale ||
        initialLocale ||
        site.defaultLocale ||
        'zh-tw'
      // Align URL with stored locale
      if (isClient && storedLocale) {
        const pageKey = to.meta.pageKey || 'home'
        const currentPath = normalizePath(to.path)

        if (storedLocale === site.defaultLocale) {
          // Default locale prefers non-prefixed URL
          const nonPrefixedPath = normalizePath(buildNonPrefixedPath(pageKey, storedLocale))
          if (to.meta.prefixed === true && currentPath !== nonPrefixedPath) {
            to.meta.locale = storedLocale
            if (initialState && !initialState.locale) initialState.locale = storedLocale
            setLocale(storedLocale)
            return next(nonPrefixedPath)
          }
        } else {
          // Non-default locale prefers prefixed URL
          if (to.meta.prefixed !== true) {
            const prefixedPath = normalizePath(buildPrefixedPath(pageKey, storedLocale))
            if (prefixedPath && currentPath !== prefixedPath) {
              to.meta.locale = storedLocale
              if (initialState && !initialState.locale) initialState.locale = storedLocale
              setLocale(storedLocale)
              return next(prefixedPath)
            }
          }
        }
      }
      to.meta.locale = targetLocale
      if (initialState && !initialState.locale) {
        initialState.locale = targetLocale
      }
      setLocale(targetLocale)
      next()
    })
  }
)
