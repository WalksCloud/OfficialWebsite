import UBadge from '@nuxt/ui/components/Badge.vue'
import UChatTool from '@nuxt/ui/components/ChatTool.vue'
import UPageCard from '@nuxt/ui/components/PageCard.vue'
import UPageColumns from '@nuxt/ui/components/PageColumns.vue'

const localComponentModules = import.meta.glob('./components/**/*.vue', {
  eager: true,
  import: 'default',
})

const nuxtUiComponents = {
  UBadge,
  UChatTool,
  UPageCard,
  UPageColumns,
}

const getComponentNameFromPath = (filePath = '') =>
  filePath.split('/').pop()?.replace(/\.vue$/i, '') || ''

export const registerGlobalComponents = (app) => {
  Object.entries(nuxtUiComponents).forEach(([name, component]) => {
    if (!app.component(name)) {
      app.component(name, component)
    }
  })

  Object.entries(localComponentModules).forEach(([filePath, component]) => {
    const name = getComponentNameFromPath(filePath)
    if (!name || app.component(name)) return
    app.component(name, component)
  })
}
