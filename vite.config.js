// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-T7XQ0FMF6G',
      },
    })    
  ],
  server: {
    port: 3001,
  },
  base: '/',
})
