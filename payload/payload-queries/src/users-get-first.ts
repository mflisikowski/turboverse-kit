import type { User } from '@repo/payload-types';

import { cache } from 'react';
import { getPayload } from './payload';

export const getFirstUser = cache(async (): Promise<User> => {
  const payload = await getPayload();

  const result = await payload.find({
    collection: 'users',
    pagination: false,
    select: {
      email: true,
    },
    limit: 1,
    depth: 0,
  });

  if (result.docs.length === 0) {
    throw new Error('No user found');
  }

  return result.docs[0] as User;
});
