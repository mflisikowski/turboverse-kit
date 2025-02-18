import { env } from '@repo/env/payload';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dbCredentials: {
    url: env.PAYLOAD_PRIVATE_DATABASE_URI,
  },
  dialect: 'postgresql',
});
