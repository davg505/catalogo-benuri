import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite
export default defineConfig({
  plugins: [react()],
  base: '/catalogo-benuri/',  // A base do projeto no GitHub Pages
});