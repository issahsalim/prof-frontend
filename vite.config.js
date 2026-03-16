import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { target: 'https://profelvisasarebediako.onrender.com/', changeOrigin: true },
      '/media': { target: 'https://profelvisasarebediako.onrender.com/', changeOrigin: true },
    },
  },
}) 

