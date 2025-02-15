import type { Config } from 'tailwindcss';

import baseConfig from '@repo/tailwind-config';

const baseContent = baseConfig.content || [];

const config = {
  ...baseConfig,
  content: [...baseContent, './src/**/*.{js,ts,jsx,tsx,mdx}'],
} satisfies Config;

export default config;
