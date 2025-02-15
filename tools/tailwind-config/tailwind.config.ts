import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: [],
  theme: {},
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
