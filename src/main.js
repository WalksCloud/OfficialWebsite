import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import routes, { scrollBehavior } from './router'
import { getSiteConfig } from './utils/pageConfig'

import en from './locales/en-US.yaml'
import tw from './locales/zh-TW.yaml'
import './style.css'
import App from './App.vue'

const site = getSiteConfig()
const messages = { en, 'zh-tw': tw, zh: tw }

library.add(faSquareFacebook, faLinkedin)

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router, isClient, initialState, head }) => {
    const pinia = createPinia()
    const i18n = createI18n({
      legacy: false,
      locale: site.defaultLocale || 'zh-tw',
      fallbackLocale: ['zh-tw', 'zh', 'en'],
      warnHtmlMessage: false,
      messages,
    })

    app.use(head)
    app.use(pinia)
    app.use(i18n)
    app.component('font-awesome-icon', FontAwesomeIcon)

    // Persist locale for client navigation only
    const setLocale = (value) => {
      i18n.global.locale.value = value
      if (isClient) {
        localStorage.setItem('locale', value)
      }
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
      to.meta.locale = targetLocale
      if (initialState && !initialState.locale) {
        initialState.locale = targetLocale
      }
      setLocale(targetLocale)
      next()
    })
  }
)
