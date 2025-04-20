import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
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
  messages: {
    en: en,
    tw: tw
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')