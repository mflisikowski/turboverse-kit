import type { Config } from 'tailwindcss';

import baseConfig from '@repo/tailwind-config';

export default {
  ...baseConfig,
  content: ['./features/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
} satisfies Config;
