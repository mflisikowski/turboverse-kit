import { redirectsPlugin as plugin } from '@payloadcms/plugin-redirects';

/**
 * @see https://payloadcms.com/docs/plugins/redirects
 */
export const redirectsPlugin = plugin({
  collections: ['pages'],
});
