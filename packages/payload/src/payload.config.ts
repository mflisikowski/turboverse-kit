import { buildConfig } from 'payload';

import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
import { en } from '@payloadcms/translations/languages/en';
import { pl } from '@payloadcms/translations/languages/pl';

import { env } from '@repo/env/payload';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  typescript: {
    outputFile: path.resolve(dirname, 'payload.types.ts'),
    schema: [],
  },

  secret: env.PAYLOAD_PRIVATE_SECRET,

  i18n: {
    supportedLanguages: { en, pl },
    fallbackLanguage: 'en',
  },

  db: vercelPostgresAdapter({
    idType: 'uuid',
    pool: {
      connectionString: env.PAYLOAD_PRIVATE_DATABASE_URI,
    },
  }),
});
