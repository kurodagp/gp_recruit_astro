// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kurodagp.github.io',
  base: '/blog',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        }
      }
    }
  }
});
