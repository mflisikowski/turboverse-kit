import type { Config } from 'tailwindcss';

import baseConfig from '@repo/tailwind-config';

import fluid, { extract } from 'fluid-tailwind';
import animate from 'tailwindcss-animate';

const baseContent = baseConfig.content || [];

const config = {
  ...baseConfig,
  content: [...baseContent, './src/**/*.{js,ts,jsx,tsx,mdx}', extract],
  plugins: [fluid, animate],
} satisfies Config;

export default config;
