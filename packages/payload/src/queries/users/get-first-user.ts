import type { User } from '@repo/payload/types';

import { getPayload } from '../index';

import { cache } from 'react';

const getFirstUser = cache(async (): Promise<User> => {
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

export default getFirstUser;
