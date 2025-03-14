import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';

import { env } from '@repo/env/payload';
import { i18n } from '@repo/i18n/cms';
import { slugify } from '@repo/utils/slugify';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildConfig } from 'payload';

import { Pages } from '@repo/payload-collections/pages';
import { Users } from '@repo/payload-collections/users';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  /**
   * @see https://payloadcms.com/docs/configuration/collections
   */
  collections: [Pages, Users],

  /**
   * @see https://payloadcms.com/docs/configuration/overview#typescript
   */
  typescript: {
    outputFile: path.resolve(__dirname, './payload.types.ts'),
  },

  /**
   * @see https://payloadcms.com/docs/plugins/overview
   */
  plugins: [
    /**
     * @see https://payloadcms.com/docs/plugins/redirects
     */
    redirectsPlugin({
      collections: ['pages'],
    }),
    /**
     * @see https://payloadcms.com/docs/plugins/nested-docs
     */
    nestedDocsPlugin({
      collections: ['pages'],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: (docs) => {
        const segments = docs
          .map((doc) => {
            const title = doc?.title;
            if (!title || typeof title !== 'string') return '';
            return slugify(title);
          })
          .filter(Boolean);
        return `/${segments.join('/')}`;
      },
    }),
  ],

  /**
   * @see https://payloadcms.com/docs/configuration/overview#config-options
   */
  secret: env.PAYLOAD_PRIVATE_SECRET,

  /**
   * @see https://payloadcms.com/docs/admin/overview#admin-options
   */
  admin: {
    components: {
      graphics: {
        Icon: '@repo/icons/payload#Icon',
        Logo: '@repo/icons/payload#Logo',
      },
    },

    meta: {
      titleSuffix: ' | Turboverse CMS',
      icons: [
        {
          rel: 'shortcut icon',
          url: '/favicon.ico',
        },
      ],
    },

    autoLogin: {
      email: 'contact@mflisikowski.dev',
      password: '1234',
      prefillOnly: true,
    },

    user: Users.slug,
  },

  routes: {
    /**
     * @see https://payloadcms.com/docs/admin/overview#customizing-root-level-routes
     * You can change the Root-level Routes as needed, such as to mount the Admin Panel at the root of your application.
     */
    admin: '/',
  },

  /**
   * @see https://payloadcms.com/docs/configuration/i18n
   */
  i18n,

  /**
   * @see https://payloadcms.com/docs/database/overview
   */
  db: vercelPostgresAdapter({
    generateSchemaOutputFile: path.resolve(__dirname, './schema.ts'),
    idType: 'uuid',
    pool: {
      connectionString: env.PAYLOAD_PRIVATE_DATABASE_URI,
    },
  }),
});
