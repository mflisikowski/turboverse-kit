import type { TLabel } from '@repo/i18n/translations/cms';
import type { CollectionConfig } from 'payload';

import { timestamp } from '@repo/utils/date';
import { slugify } from '@repo/utils/slugify';

const DEFAULT_TITLE = `New Page ${timestamp}`;
const DEFAULT_SLUG = `/${slugify(DEFAULT_TITLE)}`;

export const Pages = {
  labels: {
    singular: ({ t }: TLabel) => t('custom:pages-singular'),
    plural: ({ t }: TLabel) => t('custom:pages-plural'),
  },

  fields: [
    {
      /** Date field docs: https://payloadcms.com/docs/fields/date */
      defaultValue: () => new Date(),
      required: true,
      name: 'publishedAt',
      type: 'date',

      label: ({ t }: TLabel) => t('custom:pages-published-at'),
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'dd.MM.yyyy HH:mm',
        },
      },
    },
    {
      /** Text field docs: https://payloadcms.com/docs/fields/text */
      defaultValue: () => DEFAULT_TITLE,
      required: true,
      unique: true,
      name: 'title',
      type: 'text',

      label: ({ t }: TLabel) => t('custom:pages-title'),
    },
    {
      defaultValue: () => DEFAULT_SLUG,
      unique: true,
      index: true,
      type: 'text',
      name: 'slug',

      label: ({ t }: TLabel) => t('custom:pages-slug'),
      admin: {
        position: 'sidebar',
        description: ({ t }: TLabel) => t('custom:pages-slug-description'),
      },
    },
    {
      /** Tabs field docs: https://payloadcms.com/docs/fields/tabs */
      type: 'tabs',
      tabs: [
        {
          fields: [],
          label: ({ t }: TLabel) => t('custom:pages-hero'),
        },
        {
          fields: [],
          label: ({ t }: TLabel) => t('custom:pages-content'),
        },
      ],
    },
  ],

  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },

  slug: 'pages',
} satisfies CollectionConfig;
