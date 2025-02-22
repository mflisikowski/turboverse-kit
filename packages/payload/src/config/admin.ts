import { Users } from '../collections/Users';

export const admin = {
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

  user: Users.slug,
};
