import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: ['**/*.{ts,tsx}'],
  theme: {},
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
