import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    // see https://github.com/gxmari007/vite-plugin-eslint#readme
    eslint(),
    // see https://github.com/qmhc/vite-plugin-dts#readme
    dts({ exclude: 'src/vite-env.d.ts' }),
  ],
  // see https://vitejs.dev/config/build-options.html
  build: {
    lib: {
      entry: resolve(__dirname, 'src/v3-scroll-lock.ts'),
      name: 'V3ScrollLock',
    },
    rollupOptions: {
      external: ['body-scroll-lock'],
    },
    copyPublicDir: false,
  },
});
