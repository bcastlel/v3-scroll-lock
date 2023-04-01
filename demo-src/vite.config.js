import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    vue(),
    eslint(),
    svgLoader({ svgo: false }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/vars.scss";',
      },
    },
  },
  base: './',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
});
