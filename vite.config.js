import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { DateTime } from "luxon";
import git from 'git-rev-sync'

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
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
