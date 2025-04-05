import { defineNuxtConfig } from 'nuxt/config'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import colors from 'vuetify/lib/util/colors'
import moment from 'moment'
import git from 'git-rev-sync'

const wcurl = 'https://walks.cloud'
const title = 'WalksCloud'
const desc =
  "We makes your Cloud Works Great\n\nWe're creating a enterprise ready of Cloud application, the goal is provide users with everything that is needed to build rich and engaging management applications using ours products."
const previewImage = {
  url: 'icon_512.png',
  type: 'image/png',
  width: 420,
  height: 420,
}
const fbMeta = {
  app_id: '',
  pages_id: '',
}

export default defineNuxtConfig({
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  app: {
    head: {
      titleTemplate: '%s - Makes Your Cloud Works Great',
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index,follow' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: previewImage.url },
        { hid: 'fb:app_id', property: 'fb:app_id', content: fbMeta.app_id },
        { hid: 'fb:pages', property: 'fb:pages', content: fbMeta.pages_id },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:url', property: 'og:url', content: wcurl },
        { hid: 'og:image', property: 'og:image', content: previewImage.url },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: previewImage.type,
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: previewImage.width,
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: previewImage.height,
        },
        { hid: 'og:site_name', property: 'og:site_name', content: title },
        { hid: 'og:locale', property: 'og:locale', content: 'en-US' },
        { hid: 'og:description', property: 'og:description', content: desc },
        { hid: 'description', name: 'description', content: desc },
        { hid: 'author', name: 'author', content: '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'plugins/vuetify.js',
    'plugins/i18n.js',
    'plugins/vue-gtag.client.js',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', { defaultAssets: false }],
    '@nuxtjs/moment',
  ],

  moment: {
    defaultTimezone: 'Asia/Taipei',
    timezone: true,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://github.com/vite-pwa/nuxt
    '@vite-pwa/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://v8.i18n.nuxtjs.org/getting-started/setup
    '@nuxtjs/i18n',
  ],

  pwa: {
    icon: {
      source: 'icon_512.png',
    },
    manifest: {
      name: 'WalksCloud',
      useWebmanifestExtension: true,
    },
    workbox: {
      //workboxURL: 'https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js',
    },
  },

  i18n: {
    langDir: 'lang/',
    legacy: false,
    bundle: {
      optimizeTranslationDirective: false,
    },
    globalInjection: true,
    globalSFCScope: true,
    forceStringify: false,
    defaultSFCLang: 'yaml',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en-US.yaml' },
      { code: 'zh', iso: 'zh-TW', name: '繁體中文', file: 'zh-TW.yaml' },
    ],
    fallbackFormat: true,
    formatFallbackMessages: true,
    fallbackWarn: false,
    missingWarn: false,
    fallbackLocale: {
      'zh-Hans': ['zh-Hant'],
      'zh-Hant': ['zh-TW'],
      default: ['en'],
    },
    esm: true,
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    lazy: true,
    strategy: 'no_prefix',
  },

  router: {
    base: process.env.NODE_ENV !== 'production' ? '' : '',
    trailingSlash: true,
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vuetify'],
//    babel: {
//      plugins: [
//        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
//      ],
//    },
  },

  experimental: {
    payloadExtraction: false,
  },

  vite: {
    plugins: [
      VueI18nPlugin.vite({
        //include: [resolve(dirname(fileURLToPath(import.meta.url)), './lang/*')],
      }),
    ],
    define: {
      'process.env.DEBUG': false,
    },
  },

  runtimeConfig: {
    public: {
      buildTime: moment().format('YYYY-MM-DD HH:mm:ss Z'),
      buildHash: git.short(".") + (git.isDirty() ? '-dirty' : ''),
    },
  },
})
