import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path-browserify';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('/src'),
      '@assets': path.resolve('/public/assets'),
      '@svg': path.resolve('/public/assets/svg'),
      '@png': path.resolve('/public/assets/png'),
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
      '@mixins': path.resolve('/src/styles/mixins.scss'),
    },
  },
  plugins: [react()],
});
