import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve:
  {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@codemirror/state': path.resolve(__dirname, 'node_modules/@codemirror/state'),
    }
  }
})
