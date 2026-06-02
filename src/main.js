import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { nextTick } from 'vue'
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
const navigationRecoveryBackgroundNoticeDurationMs = normalizePositiveNumber(
  navigationRecovery.backgroundNoticeDurationMs,
  5000,
)
const navigationRecoveryServiceWorkerPath = navigationRecovery.serviceWorkerPath || '/wc-sw.js'
const navigationRecoveryRuntimeCachePrefix = navigationRecovery.runtimeCachePrefix || 'walkscloud-runtime-'
const navigationRecoveryRuntimeDocumentFallbackPath = (
  navigationRecovery.runtimeDocumentFallbackPath || '/__wc-runtime-document-fallback__'
)
const navigationRecoveryVersionCheckTimeoutMs = normalizePositiveNumber(
  navigationRecovery.versionCheckTimeoutMs,
  3000,
)

const extractBuildHashFromHtml = (html = '') => {
  const metaMatch = String(html).match(/<meta\b[^>]*\bname=(["'])wc-build-hash\1[^>]*>/i)
  if (!metaMatch) return ''
  const contentMatch = metaMatch[0].match(/\bcontent=(["'])([^"']+)\1/i)
  return contentMatch?.[2] || ''
}

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

    let prepareNewerTargetVersion = async () => false
    let showNewVersionBanner = () => {}

    if (!import.meta.env.SSR) {
      const alertStore = useAlertStore()
      let recoveringNavigation = false
      let backgroundRecoveringNavigation = false
      let pendingRecoveryTargetUrl = null
      let pendingNewVersionTargetUrl = null
      let runtimeCacheRegistrationPromise = null
      let runtimeCacheRegistrationBuildHash = ''

      const getLoadedBuildHash = () => String(import.meta.env.buildHash || '').trim()

      const normalizeBuildHash = (value) => String(value || '').trim() || 'dev'

      const canUseRuntimeCacheServiceWorker = () => (
        'serviceWorker' in navigator &&
        (globalThis.window.location.protocol === 'https:' ||
          globalThis.window.location.hostname === 'localhost' ||
          globalThis.window.location.hostname === '127.0.0.1')
      )

      const buildRuntimeCacheServiceWorkerUrl = (buildHash = getLoadedBuildHash()) => {
        const url = new URL(navigationRecoveryServiceWorkerPath, globalThis.window.location.origin)
        url.searchParams.set('v', normalizeBuildHash(buildHash))
        url.searchParams.set('cachePrefix', navigationRecoveryRuntimeCachePrefix)
        url.searchParams.set('fallbackPath', navigationRecoveryRuntimeDocumentFallbackPath)
        return url.href
      }

      const buildRuntimeCacheName = (buildHash = getLoadedBuildHash()) => (
        `${navigationRecoveryRuntimeCachePrefix}${normalizeBuildHash(buildHash)}`
      )

      const waitForServiceWorkerState = (worker, state) => {
        if (!worker || worker.state === state) return Promise.resolve(worker)
        if (worker.state === 'redundant') return Promise.resolve(null)
        return new Promise((resolve) => {
          worker.addEventListener('statechange', () => {
            if (worker.state === state) resolve(worker)
            if (worker.state === 'redundant') resolve(null)
          })
        })
      }

      const resolveActiveServiceWorker = async (registration) => {
        if (!registration) return null
        if (registration.active) return registration.active
        if (registration.waiting) return waitForServiceWorkerState(registration.waiting, 'activated')
        if (registration.installing) return waitForServiceWorkerState(registration.installing, 'activated')
        return null
      }

      const resolveServiceWorkerForBuild = async (registration, scriptUrl) => {
        if (!registration) return null
        const workers = [
          registration.installing,
          registration.waiting,
          registration.active,
        ].filter(Boolean)
        const matchingWorker = workers.find((worker) => worker.scriptURL === scriptUrl)
        if (matchingWorker) {
          return waitForServiceWorkerState(matchingWorker, 'activated')
        }
        return resolveActiveServiceWorker(registration)
      }

      const registerRuntimeCacheServiceWorker = async (buildHash = getLoadedBuildHash()) => {
        if (!canUseRuntimeCacheServiceWorker()) return null
        const normalizedBuildHash = normalizeBuildHash(buildHash)
        if (
          runtimeCacheRegistrationPromise &&
          runtimeCacheRegistrationBuildHash === normalizedBuildHash
        ) {
          return runtimeCacheRegistrationPromise
        }

        runtimeCacheRegistrationBuildHash = normalizedBuildHash
        const serviceWorkerUrl = buildRuntimeCacheServiceWorkerUrl(normalizedBuildHash)
        runtimeCacheRegistrationPromise = navigator.serviceWorker.register(
          serviceWorkerUrl,
          {
            scope: '/',
            updateViaCache: 'none',
          },
        ).then(async (registration) => {
          await registration.update()
          await resolveServiceWorkerForBuild(registration, serviceWorkerUrl)
          return registration
        }).catch(() => null)

        return runtimeCacheRegistrationPromise
      }

      const postRuntimeCacheMessage = async (message, buildHash = getLoadedBuildHash()) => {
        const serviceWorkerUrl = buildRuntimeCacheServiceWorkerUrl(buildHash)
        const registration = await registerRuntimeCacheServiceWorker(buildHash)
        const worker = await resolveServiceWorkerForBuild(registration, serviceWorkerUrl)
        if (!worker) return
        worker.postMessage(message)
      }

      const isSameOriginUrl = (value) => {
        try {
          return new URL(value, globalThis.window.location.href).origin === globalThis.window.location.origin
        } catch {
          return false
        }
      }

      const collectCurrentRuntimeCacheUrls = (routePath = globalThis.window.location.href) => {
        const urls = new Set([
          new URL(routePath, globalThis.window.location.href).href,
          globalThis.window.location.href,
        ])

        if (performance?.getEntriesByType) {
          performance.getEntriesByType('resource').forEach((entry) => {
            if (entry?.name && isSameOriginUrl(entry.name)) {
              urls.add(new URL(entry.name, globalThis.window.location.href).href)
            }
          })
        }

        return [...urls]
      }

      const cacheRuntimeUrls = (urls, buildHash = getLoadedBuildHash()) => {
        void postRuntimeCacheMessage({
          type: 'CACHE_RUNTIME_URLS',
          urls,
        }, buildHash)
      }

      const refreshRuntimeCacheForVersion = (urls, buildHash) => {
        void postRuntimeCacheMessage({
          type: 'REFRESH_RUNTIME_CACHE',
          urls,
        }, buildHash)
      }

      const serializeCurrentDocument = () => {
        const doctype = document.doctype
        const serializedDoctype = doctype
          ? `<!doctype ${doctype.name}>`
          : '<!doctype html>'
        return `${serializedDoctype}\n${document.documentElement.outerHTML}`
      }

      const cacheCurrentRuntimeDocument = (routePath = globalThis.window.location.href, buildHash = getLoadedBuildHash()) => {
        const href = new URL(routePath, globalThis.window.location.href).href
        const html = serializeCurrentDocument()
        if ('caches' in globalThis) {
          void caches.open(buildRuntimeCacheName(buildHash)).then(async (cache) => {
            const response = new Response(html, {
              status: 200,
              headers: {
                'Content-Type': 'text/html; charset=utf-8',
              },
            })
            await cache.put(new Request(href), response.clone())
            await cache.put(
              new Request(new URL(navigationRecoveryRuntimeDocumentFallbackPath, globalThis.window.location.origin)),
              response.clone(),
            )
          }).catch(() => {})
        }
        void postRuntimeCacheMessage({
          type: 'CACHE_RUNTIME_DOCUMENT',
          url: href,
          html,
        }, buildHash)
      }

      const cacheCurrentRuntimeState = (routePath = globalThis.window.location.href) => {
        void nextTick().then(() => {
          cacheCurrentRuntimeDocument(routePath)
          cacheRuntimeUrls(collectCurrentRuntimeCacheUrls(routePath))
        })
      }

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

      const fetchTargetRouteDocument = async (targetUrl) => {
        const controller = new AbortController()
        const timeout = setTimeout(() => {
          controller.abort()
        }, navigationRecoveryVersionCheckTimeoutMs)

        try {
          const response = await fetch(targetUrl, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'same-origin',
            redirect: 'follow',
            signal: controller.signal,
          })
          if (response.status !== 200) return null
          return await response.text()
        } catch {
          return null
        } finally {
          clearTimeout(timeout)
        }
      }

      const resolveTargetBuildHash = async (to) => {
        if (!to?.fullPath) return ''
        const targetUrl = new URL(to.fullPath, globalThis.window.location.href)
        const html = await fetchTargetRouteDocument(targetUrl)
        return extractBuildHashFromHtml(html)
      }

      prepareNewerTargetVersion = async (to) => {
        const targetBuildHash = await resolveTargetBuildHash(to)
        const loadedBuildHash = getLoadedBuildHash()
        const hasNewerVersion = Boolean(targetBuildHash && loadedBuildHash && targetBuildHash !== loadedBuildHash)
        if (hasNewerVersion) {
          refreshRuntimeCacheForVersion(
            collectCurrentRuntimeCacheUrls(new URL(to.fullPath, globalThis.window.location.href).href),
            targetBuildHash,
          )
        }
        return hasNewerVersion
      }

      showNewVersionBanner = (to) => {
        pendingNewVersionTargetUrl = to?.fullPath
          ? new URL(to.fullPath, globalThis.window.location.href)
          : null
        alertStore.showBanner({
          title: i18n.global.t('navigation-recovery.version.title'),
          content: i18n.global.t('navigation-recovery.version.message'),
          action: 'continue-new-version',
          actionLabel: i18n.global.t('navigation-recovery.version.action'),
          color: 'warning',
        })
      }

      const showUnavailableBanner = ({ passive = false } = {}) => {
        alertStore.showBanner({
          title: i18n.global.t('navigation-recovery.unavailable.title'),
          content: i18n.global.t('navigation-recovery.unavailable.message'),
          action: passive ? 'retry-navigation-notice' : 'retry-navigation',
          actionLabel: passive ? '' : i18n.global.t('navigation-recovery.unavailable.action'),
        })
      }

      const waitForTargetRoute = async (targetUrl, shouldContinue = () => true) => {
        const deadline = Date.now() + navigationRecoveryTargetTimeoutMs
        while (shouldContinue() && Date.now() <= deadline) {
          if (await isTargetRouteAvailable(targetUrl)) return shouldContinue()
          const remainingMs = deadline - Date.now()
          if (remainingMs <= 0) break
          await sleep(Math.min(navigationRecoveryRetryIntervalMs, remainingMs))
        }
        return false
      }

      const isPendingRecoveryTarget = (targetUrl) => (
        pendingRecoveryTargetUrl?.href === targetUrl.href
      )

      const waitForBackgroundNotice = async (targetUrl) => {
        const deadline = Date.now() + navigationRecoveryBackgroundNoticeDurationMs
        while (isPendingRecoveryTarget(targetUrl) && Date.now() <= deadline) {
          const remainingMs = deadline - Date.now()
          if (remainingMs <= 0) break
          await sleep(Math.min(navigationRecoveryRetryIntervalMs, remainingMs))
        }
        return isPendingRecoveryTarget(targetUrl)
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
        pendingRecoveryTargetUrl = targetUrl
        showUnavailableBanner()
      }

      const retryPendingNavigationInBackground = async () => {
        if (backgroundRecoveringNavigation || !pendingRecoveryTargetUrl) return
        backgroundRecoveringNavigation = true
        const targetUrl = pendingRecoveryTargetUrl

        alertStore.clearBanner()
        try {
          while (isPendingRecoveryTarget(targetUrl)) {
            alertStore.clearBanner()
            alertStore.showTopProgress()

            const targetAvailable = await waitForTargetRoute(
              targetUrl,
              () => isPendingRecoveryTarget(targetUrl),
            )

            if (!isPendingRecoveryTarget(targetUrl)) break

            if (targetAvailable) {
              pendingRecoveryTargetUrl = null
              alertStore.hideTopProgress()
              globalThis.window.location.assign(targetUrl.href)
              return
            }

            alertStore.hideTopProgress()
            showUnavailableBanner({ passive: true })

            if (await waitForBackgroundNotice(targetUrl)) {
              alertStore.clearBanner()
            }
          }
        } finally {
          backgroundRecoveringNavigation = false
          alertStore.hideTopProgress()
        }
      }

      const cancelPendingNavigation = () => {
        pendingRecoveryTargetUrl = null
        backgroundRecoveringNavigation = false
        alertStore.clearBanner()
        alertStore.hideTopProgress()
      }

      const continueToNewVersion = () => {
        if (!pendingNewVersionTargetUrl) return
        globalThis.window.location.assign(pendingNewVersionTargetUrl.href)
      }

      router.onError((error, to) => {
        if (isStaleClientAssetError(error)) {
          recoverTargetNavigation(to)
        }
      })

      globalThis.window.addEventListener('walkscloud:banner-action', (event) => {
        const action = event.detail?.action
        if (action === 'continue-new-version') {
          continueToNewVersion()
          return
        }
        if (action === 'retry-navigation') {
          retryPendingNavigationInBackground()
        }
      })

      globalThis.window.addEventListener('walkscloud:banner-dismiss', (event) => {
        if (event.detail?.action === 'continue-new-version') {
          pendingNewVersionTargetUrl = null
        }
        if (['retry-navigation', 'retry-navigation-notice'].includes(event.detail?.action)) {
          cancelPendingNavigation()
        }
      })

      router.afterEach((to) => {
        if (backgroundRecoveringNavigation) {
          cancelPendingNavigation()
        }
        cacheCurrentRuntimeState(to.fullPath)
      })

      void nextTick().then(() => {
        cacheCurrentRuntimeDocument()
      })

      void registerRuntimeCacheServiceWorker().then(() => {
        cacheCurrentRuntimeState()
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
    router.beforeEach(async (to, from, next) => {
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

      const isClientRouteNavigation = Array.isArray(from.matched) && from.matched.length > 0
      if (!import.meta.env.SSR && isClientRouteNavigation && to.fullPath !== from.fullPath) {
        if (await prepareNewerTargetVersion(to)) {
          showNewVersionBanner(to)
          return next(false)
        }
      }

      next()
    })
  }
)
