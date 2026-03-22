import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to match your GitHub Pages URL path.
// For a repo named "Coder-Dojo" it should be '/Coder-Dojo/'.
// For a custom domain or root deployment, use '/'.
const BASE = '/Coder-Dojo/'

export default defineConfig({
  plugins: [react()],
  base: BASE,
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
