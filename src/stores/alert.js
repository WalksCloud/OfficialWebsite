import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    alert: {
      title: '',
      content: '',
    },
    banner: {
      title: '',
      content: '',
      action: '',
      actionLabel: '',
      color: 'error',
    },
    offlineBanner: {
      title: '',
      content: '',
    },
    topProgress: false,
    loading: false,
  }),
  actions: {
    showLoading() {
      this.loading = true
    },
    hideLoading() {
      this.loading = false
    },
    showTopProgress() {
      this.topProgress = true
    },
    hideTopProgress() {
      this.topProgress = false
    },
    message(title, content, autoClose = false) {
      this.alert.title = title
      this.alert.content = content

      if (autoClose) {
        setTimeout(() => {
          this.clear()
        }, 5000)
      }
    },
    showBanner({ title, content, action = '', actionLabel = '', color = 'error' }) {
      this.banner.title = title
      this.banner.content = content
      this.banner.action = action
      this.banner.actionLabel = actionLabel
      this.banner.color = color
    },
    showOfflineBanner({ title, content }) {
      this.offlineBanner.title = title
      this.offlineBanner.content = content
    },
    clearBanner() {
      this.banner.title = ''
      this.banner.content = ''
      this.banner.action = ''
      this.banner.actionLabel = ''
      this.banner.color = 'error'
    },
    clearOfflineBanner() {
      this.offlineBanner.title = ''
      this.offlineBanner.content = ''
    },
    clear() {
      this.alert.title = ''
      this.alert.content = ''
    },
  },
})
