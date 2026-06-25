import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://solarcenterca.com',
  integrations: [
    tailwind(),
  ],
  output: 'static',
  trailingSlash: 'never',
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
