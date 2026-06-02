import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import routes, { scrollBehavior } from './router'
import { getSiteConfig, buildPrefixedPath, buildNonPrefixedPath, getPageConfig } from './utils/pageConfig'
import { getLocaleFallbackChain, getLocaleMessages } from './utils/localeBundles'
import { registerGlobalComponents } from './registerGlobalComponents'
import { useAlertStore } from './stores/alert'

import './style.css'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'

const isStaleClientAssetError = (error) => {
  const message = String(error?.message || error || '')
  return [
    'Failed to fetch dynamically imported module',
    'Importing a module script failed',
    'Unable to preload CSS',
    'error loading dynamically imported module',
  ].some((pattern) => message.includes(pattern))
}

const sleep = (durationMs) => new Promise((resolve) => setTimeout(resolve, durationMs))

const normalizePositiveNumber = (value, fallback) => {
  const number = Number(value)
  return Number.isFinite(number) && number > 0 ? number : fallback
}

if (!import.meta.env.SSR && globalThis.window?.__wcBootGate) {
  await globalThis.window.__wcBootGate
}

const site = getSiteConfig()
const messages = getLocaleMessages()
const fallbackLocale = getLocaleFallbackChain(site)
const navigationRecovery = site.clientNavigationRecovery || {}
const navigationRecoveryTargetTimeoutMs = normalizePositiveNumber(
  navigationRecovery.targetTimeoutMs,
  30000,
)
const navigationRecoveryRetryIntervalMs = normalizePositiveNumber(
  navigationRecovery.retryIntervalMs,
  1000,
)

library.add(faSquareFacebook, faLinkedin)

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router, initialState, head }) => {
    const pinia = createPinia()
    const i18n = createI18n({
      legacy: false,
      locale: site.defaultLocale || 'zh-tw',
      fallbackLocale,
      warnHtmlMessage: false,
      messages,
    })

    app.use(head)
    app.provide('wc:ssg-head', head)
    app.use(pinia)
    app.use(i18n)
    app.use(ui)
    registerGlobalComponents(app)
    app.component('font-awesome-icon', FontAwesomeIcon)

    if (!import.meta.env.SSR) {
      const alertStore = useAlertStore()
      let recoveringNavigation = false

      const isTargetRouteAvailable = async (targetUrl) => {
        try {
          const response = await fetch(targetUrl, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'same-origin',
            redirect: 'follow',
          })
          return response.status === 200
        } catch {
          return false
        }
      }

      const waitForTargetRoute = async (targetUrl) => {
        const deadline = Date.now() + navigationRecoveryTargetTimeoutMs
        while (Date.now() <= deadline) {
          if (await isTargetRouteAvailable(targetUrl)) return true
          const remainingMs = deadline - Date.now()
          if (remainingMs <= 0) break
          await sleep(Math.min(navigationRecoveryRetryIntervalMs, remainingMs))
        }
        return false
      }

      const recoverTargetNavigation = async (to) => {
        if (recoveringNavigation || !to?.fullPath) return
        recoveringNavigation = true
        const targetUrl = new URL(to.fullPath, globalThis.window.location.href)

        alertStore.clear()
        alertStore.showLoading()
        const targetAvailable = await waitForTargetRoute(targetUrl)
        alertStore.hideLoading()

        if (targetAvailable) {
          globalThis.window.location.assign(targetUrl.href)
          return
        }

        recoveringNavigation = false
        alertStore.message(
          i18n.global.t('navigation-recovery.unavailable.title'),
          i18n.global.t('navigation-recovery.unavailable.message'),
        )
      }

      router.onError((error, to) => {
        if (isStaleClientAssetError(error)) {
          recoverTargetNavigation(to)
        }
      })
    }

    // Persist locale for client navigation only
    const setLocale = (value) => {
      i18n.global.locale.value = value
      if (!import.meta.env.SSR) {
        localStorage.setItem('locale', value)
      }
    }

    if (!import.meta.env.SSR) {
      const buildScrollKey = () => {
        const { pathname, search } = globalThis.window.location
        return `scroll-position:${pathname}${search}`
      }

      const shouldHandleScroll = () => {
        const routerScrolledRecently =
          globalThis.window !== undefined &&
          typeof globalThis.window.__wcLastRouterScroll === 'number' &&
          Date.now() - globalThis.window.__wcLastRouterScroll < 500
        return !globalThis.window.location.hash && !routerScrolledRecently
      }

      const restoreScrollPosition = () => {
        if (!shouldHandleScroll()) return
        const key = buildScrollKey()
        const stored = sessionStorage.getItem(key)
        if (stored) {
          const raf =
            globalThis.window !== undefined && typeof globalThis.window.requestAnimationFrame === 'function'
              ? globalThis.window.requestAnimationFrame.bind(globalThis.window)
              : (cb) => setTimeout(cb, 0)
          raf(() => {
            globalThis.window.scrollTo({ top: Number(stored) || 0, behavior: 'auto' })
            sessionStorage.removeItem(key)
          })
        }
      }

      const navigationEntries = performance?.getEntriesByType
        ? performance.getEntriesByType('navigation')
        : null
      const navType = navigationEntries?.length
        ? navigationEntries[0].type
        : performance?.navigation?.type

      if (navType === 'reload' || navType === performance?.navigation?.TYPE_RELOAD) {
        restoreScrollPosition()
      }

      globalThis.window.addEventListener('beforeunload', () => {
        if (!shouldHandleScroll()) return
        sessionStorage.setItem(buildScrollKey(), String(globalThis.window.scrollY || 0))
      })
    }

    const normalizePath = (p) => {
      const v = (p || '').replace(/\/+$/, '')
      return v || '/'
    }

    const hasLocaleVersion = (pageKey, locale) => {
      if (!locale) return false
      const page = getPageConfig(pageKey)
      return Object.hasOwn(page?.slugs || {}, locale)
    }

    const storeLocale = (to, initialState, storedLocale) => {
      const pageKey = to.meta.pageKey || 'home'
      const currentPath = normalizePath(to.path)
      const haveLocaleVersion = hasLocaleVersion(pageKey, storedLocale);
      const isDefault = storedLocale === site.defaultLocale;
      const store = (to, initialState, storedLocale) => {
        to.meta.locale = storedLocale
        if (initialState && !initialState.locale) initialState.locale = storedLocale
        setLocale(storedLocale)
      }
      if (haveLocaleVersion) {
        if (isDefault) {
          // Default locale prefers non-prefixed URL
          const nonPrefixedPath = normalizePath(buildNonPrefixedPath(pageKey, storedLocale))
          if (to.meta.prefixed === true && currentPath !== nonPrefixedPath) {
            store(to, initialState, storedLocale)
            return nonPrefixedPath
          }
        } else if (to.meta.prefixed !== true) {
          // Non-default locale prefers prefixed URL
          const prefixedPath = normalizePath(buildPrefixedPath(pageKey, storedLocale))
          if (prefixedPath && currentPath !== prefixedPath) {
            store(to, initialState, storedLocale)
            return prefixedPath
          }
        }
      }
      return ""
    }

    // During build, store locale in initialState for hydration under non-prefix paths
    router.beforeEach((to, from, next) => {
      const storedLocale = import.meta.env.SSR ? null : localStorage.getItem('locale')
      const initialLocale = initialState?.locale
      const targetLocale =
        storedLocale ||
        to.meta.locale ||
        initialLocale ||
        site.defaultLocale ||
        'zh-tw'
      // Align URL with stored locale
      if (!import.meta.env.SSR && storedLocale) {
        const store = storeLocale(to, initialState, storedLocale)
        if (store.length > 0) {
          return next(store)
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
