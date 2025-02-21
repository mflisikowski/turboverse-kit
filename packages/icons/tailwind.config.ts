import type { Config } from 'tailwindcss';

import baseConfig from '@repo/tailwind-config';

export default {
  ...baseConfig,
  content: [...(baseConfig.content || []), './src/**/*.{ts,tsx}'],
} satisfies Config;
