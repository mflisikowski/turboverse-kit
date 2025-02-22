import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
import { env } from '@repo/env/payload';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const db = vercelPostgresAdapter({
  generateSchemaOutputFile: path.resolve(dirname, '../schema.ts'),
  idType: 'uuid',
  pool: {
    connectionString: env.PAYLOAD_PRIVATE_DATABASE_URI,
  },
});
