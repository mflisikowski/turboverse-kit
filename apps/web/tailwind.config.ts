import type { Config } from 'tailwindcss';

import baseConfig from '@repo/tailwind-config';

export default {
  ...baseConfig,
  content: [...(baseConfig.content || []), './app/**/*.{js,ts,jsx,tsx,mdx}'],
} satisfies Config;
