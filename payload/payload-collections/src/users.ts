import type { TLabel } from '@repo/i18n/cms/translations';
import type { CollectionConfig } from 'payload';

export const UserRoles = {
  Public: 'public',
  Admin: 'admin',
} as const;

/*
 * @see https://payloadcms.com/docs/configuration/collections
 */
export const Users: CollectionConfig = {
  labels: {
    singular: ({ t }: TLabel) => t('custom:users-singular'),
    plural: ({ t }: TLabel) => t('custom:users-plural'),
  },

  admin: {
    useAsTitle: 'email',
  },

  fields: [
    {
      /** Group field docs: https://payloadcms.com/docs/fields/group */
      label: ({ t }: TLabel) => t('custom:users-personal-info'),
      name: 'personal-info',
      type: 'group',

      // https://payloadcms.com/docs/fields/overview#admin-options
      admin: {
        disableListColumn: true,
      },

      fields: [
        {
          /** Row field docs: https://payloadcms.com/docs/fields/row */
          type: 'row',
          fields: [
            {
              /** Text field docs: https://payloadcms.com/docs/fields/text */
              required: true,
              label: ({ t }: TLabel) => t('custom:users-personal-info-first-name'),
              name: 'first-name',
              type: 'text',
            },
            {
              /** Text field docs: https://payloadcms.com/docs/fields/text */
              required: true,
              label: ({ t }: TLabel) => t('custom:users-personal-info-last-name'),
              name: 'last-name',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      /** Group field docs: https://payloadcms.com/docs/fields/group */
      label: ({ t }: TLabel) => t('custom:user-roles'),
      name: 'roles',
      type: 'group',

      // https://payloadcms.com/docs/fields/overview#admin-options
      admin: {
        disableListColumn: true,
      },

      fields: [
        {
          /** Select field docs: https://payloadcms.com/docs/fields/select */
          options: [
            {
              label: ({ t }: TLabel) => t('custom:user-roles-admin'),
              value: UserRoles.Admin,
            },
            {
              label: ({ t }: TLabel) => t('custom:user-roles-public'),
              value: UserRoles.Public,
            },
          ],
          required: true,
          label: ({ t }: TLabel) => t('custom:user-roles'),
          name: 'roles',
          type: 'select',
        },
      ],
    },
  ],

  auth: true,
  slug: 'users',
};
