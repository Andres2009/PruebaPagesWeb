import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/apirest': {
        target: 'http://credimovil.7-24.co', // Usa http en vez de https
        changeOrigin: true,
        secure: false, // Permite certificados no válidos
      },
    },
  },
});
