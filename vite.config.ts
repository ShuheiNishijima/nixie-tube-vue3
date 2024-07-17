import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/foundation/mixins/font-family";
          @import "@/assets/styles/foundation/variables/colors";
          @import "@/assets/styles/foundation/variables/fonts";
        `,
      },
    },
  },
})
