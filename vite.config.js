pimport { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.bhargavjay/config/
export default defineConfig({
  base: '/e-plantShopping/',
  plugins: [react()],
})
