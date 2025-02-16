import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

interface CreateNextConfigOptions {
  nextConfig?: Partial<NextConfig>;
}

const createNextConfig = (options: CreateNextConfigOptions = {}) => {
  const defaultConfig: NextConfig = {};

  const mergedConfig: NextConfig = {
    ...defaultConfig,
    ...options.nextConfig,
  };

  return withPayload(mergedConfig);
};

export default createNextConfig();
export { createNextConfig };
