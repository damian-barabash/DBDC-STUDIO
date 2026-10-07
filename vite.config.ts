import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Сайт живёт в корне домена dbdcstudio.pl (public/CNAME), поэтому base = '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})
