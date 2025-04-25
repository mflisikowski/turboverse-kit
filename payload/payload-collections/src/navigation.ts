import type { TLabel } from '@repo/i18n/cms/translations';
import type { GlobalConfig } from 'payload';

import { UserRoles } from '@repo/payload-collections/users';

/*
 * @see https://payloadcms.com/docs/configuration/globals
 */
export const Navigation: GlobalConfig = {
  label: ({ t }: TLabel) => t('custom:navigation-label'),

  access: {
    update: ({ req: { user } }) => user?.roles?.roles === UserRoles.Admin,
    read: () => true,
  },

  fields: [
    {
      /** Array field docs: https://payloadcms.com/docs/fields/array */
      name: 'items',
      type: 'array',

      fields: [
        {
          /** Text field docs: https://payloadcms.com/docs/fields/text */
          required: true,
          name: 'label',
          type: 'text',
          label: ({ t }: TLabel) => t('custom:navigation-item-label'),
        },
        {
          /** Relationship field docs: https://payloadcms.com/docs/fields/relationship */
          relationTo: 'pages',
          required: true,
          name: 'page',
          type: 'relationship',
          label: ({ t }: TLabel) => t('custom:navigation-item-link'),
          // filterOptions: ({ relationTo }) => {
          //   if (relationTo === 'pages') {
          //     return {
          //       isNavigable: {
          //         equals: true,
          //       },
          //     };
          //   }
          //   return false;
          // },
        },
        {
          /** Array field docs: https://payloadcms.com/docs/fields/array */
          name: 'children',
          type: 'array',

          label: ({ t }: TLabel) => t('custom:navigation-items'),
          admin: {
            components: {
              RowLabel: '@repo/payload-components/row-label',
            },
          },

          fields: [
            {
              /** Text field docs: https://payloadcms.com/docs/fields/text */
              required: true,
              name: 'label',
              type: 'text',
              label: ({ t }: TLabel) => t('custom:navigation-item-label'),
            },
            {
              /** Relationship field docs: https://payloadcms.com/docs/fields/relationship */
              relationTo: 'pages',
              required: true,
              name: 'page',
              type: 'relationship',
              label: ({ t }: TLabel) => t('custom:navigation-item-link'),
              // filterOptions: ({ relationTo }) => {
              //   if (relationTo === 'pages') {
              //     return {
              //       isNavigable: {
              //         equals: true,
              //       },
              //     };
              //   }

              //   return false;
              // },
            },
          ],
        },
      ],
      admin: {
        components: {
          RowLabel: '@repo/payload-components/row-label#NavigationItemRowLabel',
        },
      },
      label: ({ t }: TLabel) => t('custom:navigation-items'),
    },
  ],

  slug: 'navigation',
};
