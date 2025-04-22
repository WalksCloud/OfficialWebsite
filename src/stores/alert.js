import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
	state: () => ({
		alert: {
            title: '',
            content: ''
		},
        loading: false
	}),
	actions: {
		showLoading() {
            this.loading = true
        },
        hideLoading() {
            this.loading = false
        },
        message(title, content) {
            this.alert.title = title
            this.alert.content = content
        },
        clear() {
            this.alert.title = ''
            this.alert.content = ''
        }
    }
});