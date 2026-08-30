import durafoam from './tailwind.preset.mjs';

/** @type {import('tailwindcss').Config} */
export default {
  // Brand tokens come from the Dura-Foam Design System. tailwind.preset.mjs is
  // GENERATED — never edit it; change tokens upstream and run `npm run sync` there.
  presets: [durafoam],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // Repo-local escapes only. Anything here that other properties also need
      // belongs upstream in the design system instead.
      fontFamily: {
        // Legacy aliases — `headline`/`body` are now `display`/`body` in the preset.
        headline: ['"Archivo"', 'sans-serif'],
        label: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
