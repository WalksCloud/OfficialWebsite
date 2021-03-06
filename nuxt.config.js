import colors from 'vuetify/es5/util/colors'
import moment from 'moment'
import git from 'git-rev-sync'

const wcurl = 'https://walks.cloud'
const title = 'WalksCloud'
const desc = 'We makes your Cloud Works Great\n\nWe\'re creating a enterprise ready of Cloud application, the goal is provide users with everything that is needed to build rich and engaging management applications using ours products.'
const preview_image = {
  url: 'icon_512.png',
  type: 'image/png',
  width: 420,
  height: 420,
}
const fb_meta = {
  app_id: '',
  pages_id: '',
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Makes Your Cloud Works Great',
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index,follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: preview_image.url },
      { hid: 'fb:app_id', property: 'fb:app_id', content: fb_meta.app_id },
      { hid: 'fb:pages', property: 'fb:pages', content: fb_meta.pages_id },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:url', property: 'og:url', content: wcurl },
      { hid: 'og:image', property: 'og:image', content: preview_image.url },
      { hid: 'og:image:type', property: 'og:image:type', content: preview_image.type },
      { hid: 'og:image:width', property: 'og:image:width', content: preview_image.width },
      { hid: 'og:image:height', property: 'og:image:height', content: preview_image.height },
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

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/i18n.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],

  moment: {
    defaultTimezone: 'Asia/Taipei',
    timezone: true,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
  ],

  pwa: {
    icon: {
      source: 'static/icon.png',
    },
    manifest: {
      name: 'WalksCloud',
      useWebmanifestExtension: true,
    },
  },

  i18n: {
    langDir: 'lang/',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en-US.js' },
      // { code: 'zh', iso: 'zh-TW', name: '繁體中文', file: 'zh-TW.js' },
    ],
    seo: true,
    detectBrowserLanguage: {
      useCookie: false,
    },
    lazy: true,
    vueI18nLoader: true,
    strategy: 'no_prefix',
  },

  router: {
    base: process.env.NODE_ENV !== 'production' ? '' : '',
    trailingSlash: true,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

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
  build: {},

  publicRuntimeConfig: {
    buildTime: moment().format('YYYY-MM-DD HH:mm:ss Z'),
    buildHash: git.short() + (git.isDirty() ? "-dirty" : ""),
  },
}
