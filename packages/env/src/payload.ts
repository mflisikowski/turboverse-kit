import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

import { skipValidation } from '@repo/env/helpers/skipValidation';

export const env = createEnv({
  emptyStringAsUndefined: true,

  client: {
    NEXT_PUBLIC_PAYLOAD_URL: z.string(),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_PAYLOAD_URL: process.env.NEXT_PUBLIC_PAYLOAD_URL,
  },

  server: {
    PAYLOAD_PRIVATE_DATABASE_ENGINE: z.enum(['postgres']).default('postgres'),
    PAYLOAD_PRIVATE_REVALIDATION_KEY: z.string(),
    PAYLOAD_PRIVATE_DATABASE_URI: z.string(),
    PAYLOAD_PRIVATE_SECRET: z.string(),
    PAYLOAD_PRIVATE_AUTO_LOGIN_EMAIL: z.string().optional(),
    PAYLOAD_PRIVATE_AUTO_LOGIN_PASSWORD: z.string().optional(),
  },

  skipValidation,
});
