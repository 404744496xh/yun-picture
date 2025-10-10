import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:8123'
  //   }
  // },
  plugins: [
    vue(),
    // vueDevTools(), // 暂时禁用（间接会启用 vite-plugin-inspect）。如需恢复，取消此行与上方 import 的注释。
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
