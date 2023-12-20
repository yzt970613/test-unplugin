import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Inspect from 'vite-plugin-inspect';
import Unplugin from 'my-unplugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Inspect(), Unplugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
