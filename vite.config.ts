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

  // Caminho base para GitHub Pages: /<nome-do-repo>/
  base: '/NavePlataformaCurricular/',

  // File types to support raw imports. Nunca adicione .css, .tsx ou .ts aqui.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
