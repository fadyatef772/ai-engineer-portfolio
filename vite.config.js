import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Deployed as a GitHub Pages project site; keep this base to preserve existing deploy path.
  base: '/ai-engineer-portfolio/',

  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          framer: ['framer-motion'],
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
