import { postgresAdapter } from '@payloadcms/db-postgres';
import { resendAdapter } from '@payloadcms/email-resend';

import { env as emailEnv } from '@repo/env/email';
import { env as payloadEnv } from '@repo/env/payload';

import { i18n } from '@repo/i18n/cms';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildConfig } from 'payload';

import { Navigation } from '@repo/payload-collections/navigation';
import { Pages } from '@repo/payload-collections/pages';
import { Users } from '@repo/payload-collections/users';

import { nestedDocsPlugin } from '@repo/payload-plugins/nested-document';
import { redirectsPlugin } from '@repo/payload-plugins/redirect';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  PAYLOAD_PRIVATE_AUTO_LOGIN_PASSWORD,
  PAYLOAD_PRIVATE_AUTO_LOGIN_EMAIL,
  PAYLOAD_PRIVATE_DATABASE_URI,
  PAYLOAD_PRIVATE_SECRET,
} = payloadEnv;

const { RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_FROM_NAME } = emailEnv;

export default buildConfig({
  /**
   * @see https://payloadcms.com/docs/configuration/collections
   */
  collections: [Pages, Users],

  /**
   * @see https://payloadcms.com/docs/configuration/globals
   */
  globals: [Navigation],

  /**
   * @see https://payloadcms.com/docs/configuration/overview#typescript
   */
  typescript: {
    outputFile: path.resolve(__dirname, '../../payload-types/payload.types.ts'),
  },

  /**
   * @see https://payloadcms.com/docs/plugins/overview
   */
  plugins: [nestedDocsPlugin, redirectsPlugin],

  /**
   * @see https://payloadcms.com/docs/configuration/overview#config-options
   */
  secret: PAYLOAD_PRIVATE_SECRET,

  email: resendAdapter({
    defaultFromAddress: RESEND_FROM_EMAIL ?? '',
    defaultFromName: RESEND_FROM_NAME ?? '',
    apiKey: RESEND_API_KEY || '',
  }),

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

    importMap: {
      importMapFile: path.resolve(__dirname, '../../payload-importmap/importMap.js'),
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
      password: PAYLOAD_PRIVATE_AUTO_LOGIN_PASSWORD,
      email: PAYLOAD_PRIVATE_AUTO_LOGIN_EMAIL,
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
  db: postgresAdapter({
    generateSchemaOutputFile: path.resolve(__dirname, './schema.ts'),
    idType: 'uuid',
    pool: {
      connectionString: PAYLOAD_PRIVATE_DATABASE_URI,
    },
  }),
});
