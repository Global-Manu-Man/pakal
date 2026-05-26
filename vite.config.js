import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Configuración de Vite.
 * - Plugin oficial de React (Fast Refresh + JSX automático).
 * - `manualChunks` separa el vendor de React/Router para mejorar el cacheo
 *   en producción y reforzar el code splitting más allá del lazy loading
 *   por ruta que aplicamos en App.jsx.
 */
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});
