import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.bhargavjay/config/
export default defineConfig({
  base: "/shoppingreact",
  plugins: [react()],
})
