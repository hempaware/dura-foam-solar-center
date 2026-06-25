import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://solarcenterca.com',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  output: 'static',
  trailingSlash: 'never',
});
