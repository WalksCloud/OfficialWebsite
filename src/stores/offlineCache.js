import { defineStore } from 'pinia'

const readyReportStatuses = new Set(['complete', 'skipped'])

export const useOfflineCacheStore = defineStore('offlineCache', {
  state: () => ({
    caching: false,
    ready: false,
    progressPercent: 0,
    progressCompleted: 0,
    progressTotal: 0,
    lastReportStatus: '',
    lastUpdatedAt: 0,
  }),
  getters: {
    isCaching: (state) => state.caching,
    isReady: (state) => state.ready,
    progressStyle: (state) => ({
      '--wc-offline-cache-progress': `${Math.min(Math.max(state.progressPercent, 0), 100)}%`,
    }),
  },
  actions: {
    start() {
      this.caching = true
      this.progressPercent = 0
      this.progressCompleted = 0
      this.progressTotal = 0
      this.lastReportStatus = 'running'
      this.lastUpdatedAt = Date.now()
    },
    markReady(reportStatus = 'complete') {
      this.caching = false
      this.ready = true
      this.progressPercent = 100
      this.lastReportStatus = reportStatus
      this.lastUpdatedAt = Date.now()
    },
    markUnavailable(reportStatus = 'unavailable') {
      this.caching = false
      this.lastReportStatus = reportStatus
      this.lastUpdatedAt = Date.now()
    },
    applyPrecacheProgress(progress) {
      const reportStatus = String(progress?.status || '').trim() || 'running'
      const total = Math.max(0, Number(progress?.total) || 0)
      const completed = Math.min(Math.max(0, Number(progress?.completed) || 0), total)
      const percent = Number.isFinite(Number(progress?.percent))
        ? Number(progress.percent)
        : total > 0
          ? Math.round((completed / total) * 100)
          : 0

      if (readyReportStatuses.has(reportStatus)) {
        this.markReady(reportStatus)
        return reportStatus
      }

      if (['empty', 'incomplete', 'failed'].includes(reportStatus)) {
        this.progressPercent = Math.min(Math.max(percent, 0), 100)
        this.progressCompleted = completed
        this.progressTotal = total
        this.markUnavailable(reportStatus)
        return reportStatus
      }

      this.caching = true
      this.ready = false
      this.progressPercent = Math.min(Math.max(percent, 0), 100)
      this.progressCompleted = completed
      this.progressTotal = total
      this.lastReportStatus = reportStatus
      this.lastUpdatedAt = Date.now()
      return reportStatus
    },
    applyPrecacheReport(report) {
      const reportStatus = String(report?.status || '').trim() || 'missing-report'
      if (readyReportStatuses.has(reportStatus)) {
        this.markReady(reportStatus)
      } else {
        this.markUnavailable(reportStatus)
      }
      return reportStatus
    },
    reset() {
      this.caching = false
      this.ready = false
      this.progressPercent = 0
      this.progressCompleted = 0
      this.progressTotal = 0
      this.lastReportStatus = ''
      this.lastUpdatedAt = Date.now()
    },
  },
})
