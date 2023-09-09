import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  resolve: {
    alias: {
      src: '/src',
      assets: '/src/assets',
      components: '/src/components',
      layout: '/src/layout',
      pages: '/src/pages',
      providers: '/src/providers',
      store: '/src/store',
      utils: '/src/utils',
    },
  },
})
