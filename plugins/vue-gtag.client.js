import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  const getGDPR = localStorage.getItem('GDPR:accepted')
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-ZBYN9XH3NX',
    },
    params: {
      // this are the config options for `gtag`
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true, // anonymize IP
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
      linker: {
        // domains:['walks.cloud'],
      },
    },
    useDebugger: false,
    appName: 'WalksCloud',
    enabled: getGDPR === 'true',
    pageTrackerScreenviewEnabled: true,
  }, nuxtApp.vueApp.router)
})
