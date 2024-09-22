import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',  // Ensure this matches your output directory
    chunkSizeWarningLimit: 500,  // Adjust this if you're seeing chunk size warnings
  },
  plugins: [react()],
})
