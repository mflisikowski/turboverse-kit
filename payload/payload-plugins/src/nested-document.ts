import { nestedDocsPlugin as plugin } from '@payloadcms/plugin-nested-docs';
import { slugify } from '@repo/utils/slugify';

/**
 * @see https://payloadcms.com/docs/plugins/nested-docs
 */
export const nestedDocsPlugin = plugin({
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
});
