import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import en from './locales/en.json'
import tw from './locales/tw.json'
import './style.css'
import App from './App.vue'

//lang 
let locale = localStorage.getItem("locale")
const i18n = createI18n({
  legacy: false,
  locale: (locale != null) ? locale : 'tw',
  fallbackLocale: 'en',
  warnHtmlMessage: false,
  messages: {
    en: en,
    tw: tw
  }
})

library.add(faSquareFacebook, faLinkedin)

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')