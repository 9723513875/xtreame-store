import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons:  ['react-icons'],
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    hmr: { clientPort: 3000 },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});
