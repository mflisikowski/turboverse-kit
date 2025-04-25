import type { TLabel } from '@repo/i18n/cms/translations';
import type { CollectionConfig } from 'payload';

import { pageGenerateSlug } from '@repo/payload-hooks/page-generate-slug';

import { createBreadcrumbsField } from '@payloadcms/plugin-nested-docs';
import { createParentField } from '@payloadcms/plugin-nested-docs';
import { timestamp } from '@repo/utils/date';
import { slugify } from '@repo/utils/slugify';

const DEFAULT_TITLE = `New Page ${timestamp}`;
const DEFAULT_SLUG = `/${slugify(DEFAULT_TITLE)}`;

/*
 * @see https://payloadcms.com/docs/configuration/collections
 */
export const Pages: CollectionConfig = {
  labels: {
    singular: ({ t }: TLabel) => t('custom:pages-singular'),
    plural: ({ t }: TLabel) => t('custom:pages-plural'),
  },

  versions: {
    /**
     * Enabling drafts causes issues with the 'pageGenerateSlug' hook
     * resulting in "Unhandled Runtime Error (AbortError: Fetch is aborted)"
     * TODO: Keep drafts disabled for now. Need to implement alternative slug generation approach
     * that works with the draft system to resolve the fetch abort errors.
     */
    drafts: {
      schedulePublish: false,
      autosave: false,
    },

    maxPerDoc: 6,
  },

  fields: [
    {
      /** Checkbox field docs: https://payloadcms.com/docs/fields/checkbox */
      defaultValue: false,
      required: false,
      name: 'isHomePage',
      type: 'checkbox',

      label: ({ t }: TLabel) => t('custom:pages-is-home-page'),
      admin: {
        position: 'sidebar',
        description: ({ t }: TLabel) => t('custom:pages-is-home-page-description'),
      },
    },
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
      localized: true,
      required: true,
      unique: true,
      label: ({ t }: TLabel) => t('custom:pages-title'),
      name: 'title',
      type: 'text',

      typescriptSchema: [() => ({ type: 'string' })],
    },
    {
      /** Checkbox field docs: https://payloadcms.com/docs/fields/checkbox */
      name: 'isNavigable',
      type: 'checkbox',
      label: ({ t }: TLabel) => t('custom:pages-is-navigable'),
      admin: {
        hidden: true,
        width: '50%',
        description: ({ t }: TLabel) => t('custom:pages-is-navigable-description'),
      },
    },
    {
      defaultValue: () => DEFAULT_SLUG,
      localized: true,
      unique: true,
      index: true,
      type: 'text',
      name: 'slug',

      label: ({ t }: TLabel) => t('custom:pages-slug'),
      admin: {
        position: 'sidebar',
        readOnly: true,
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

    createParentField('pages', {
      label: ({ t }: TLabel) => t('custom:pages-parent'),
    }),

    createBreadcrumbsField('pages', {
      labels: {
        singular: ({ t }: TLabel) => t('custom:pages-breadcrumbs-singular'),
        plural: ({ t }: TLabel) => t('custom:pages-breadcrumbs-plural'),
      },

      label: ({ t }: TLabel) => t('custom:pages-breadcrumbs'),

      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@repo/payload-components/row-label#BreadcrumbsRowLabel',
        },
      },

      hooks: {
        beforeValidate: [pageGenerateSlug],
      },
    }),
  ],

  hooks: {},

  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },

  slug: 'pages',
};
