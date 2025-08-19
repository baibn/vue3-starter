import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: {
      overlay: true, // 让报错浮层更明显
    },
  },
})
