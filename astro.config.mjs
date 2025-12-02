// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kurodagp.github.io',
  base: '/gp_recruit_astro',
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
