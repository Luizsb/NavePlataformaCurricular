import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // "/" na raiz (Netlify). AWS: npm run build:aws usa --base ./
  // GitHub Pages (subpasta): VITE_BASE_PATH=/NavePlataformaCurricular/
  base: process.env.VITE_BASE_PATH || '/',

  // File types to support raw imports. Nunca adicione .css, .tsx ou .ts aqui.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
