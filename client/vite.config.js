import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path-browserify';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('/src'),
      '@assets': path.resolve('/src/assets'),
      '@svg': path.resolve('/src/assets/svg'),
      '@png': path.resolve('/src/assets/png'),
      '@components': path.resolve('/src/components'),
      '@UI': path.resolve('src/components/UI'),
      '@config': path.resolve('/src/config'),
      '@features': path.resolve('/src/features'),
      '@hooks': path.resolve('/src/hooks'),
      '@pages': path.resolve('/src/pages'),
      '@router': path.resolve('/src/router'),
      '@services': path.resolve('/src/services'),
      '@styles': path.resolve('/src/styles'),
      '@utils': path.resolve('/src/utils'),
      '@validations': path.resolve('/src/validations'),
      '@mixins': path.resolve('/src/styles/mixins.scss'),
      '@redux': path.resolve('/src/redux'),
    },
  },
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    outDir: 'dist',
  },
});
