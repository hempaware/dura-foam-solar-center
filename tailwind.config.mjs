/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'solar-amber': '#F8A623',
        'sunrise-orange': '#EC6B2D',
        midnight: '#0C2230',
        'clean-sky': '#2BA9C4',
        'solar-navy': '#00345C',
        'energy-green': '#6BA630',
        'warm-sand': '#F6F1E7',
        ink: '#14222E',
        slate: '#65737F',
        'logo-gold': '#DB9833',
      },
      fontFamily: {
        headline: ['"Archivo"', 'sans-serif'],
        body: ['"Public Sans"', 'sans-serif'],
        label: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
