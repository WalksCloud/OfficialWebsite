import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import path from 'path'
import { DateTime } from 'luxon'
import git from 'git-rev-sync'
import YAML from 'yaml'

const walksCloudUiColors = {
  primary: 'blue',
  secondary: 'cyan',
  success: 'emerald',
  info: 'blue',
  warning: 'amber',
  error: 'rose',
  neutral: 'zinc',
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'import.meta.env.buildTime': JSON.stringify(DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss ZZ')),
      'import.meta.env.buildHash': JSON.stringify(git.short(".") + (git.isDirty() ? '-dirty' : '')),
      'import.meta.env.__APP_ENV__': JSON.stringify(env.APP_ENV),
    },
    plugins: [
      vue(),
      ui({
        autoImport: false,
        components: false,
        ui: {
          prefix: 'wc',
          colors: walksCloudUiColors,
        },
      }),
      tailwindcss(),
      {
        name: 'yaml',
        transform(src, id) {
          if (!id.endsWith('.yaml')) return null
          const parsed = YAML.parse(src)
          return {
            code: `export default ${JSON.stringify(parsed)};`,
            map: null,
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
