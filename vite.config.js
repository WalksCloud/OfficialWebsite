import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import path from 'path'
import { DateTime } from "luxon";
import git from 'git-rev-sync'
import ViteYaml from '@modyfi/vite-plugin-yaml';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'import.meta.env.buildTime': JSON.stringify(DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss ZZ')),
      'import.meta.env.buildHash': JSON.stringify(git.short(".") + (git.isDirty() ? '-dirty' : '')),
      'import.meta.env.__APP_ENV__': JSON.stringify(env.APP_ENV),
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      Markdown(),
      tailwindcss(),
      ViteYaml(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
