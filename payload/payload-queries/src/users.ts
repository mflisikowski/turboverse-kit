import type { User } from '@repo/payload-types';

import { cache } from 'react';
import { getPayload } from './payload';

export const getAllUsers = async () => {
  const payload = await getPayload();
  const result = await payload.find({
    collection: 'users',
    depth: 1,
    pagination: false,
  });

  if (result.docs.length === 0) {
    throw new Error('No users found');
  }

  return result.docs as User[];
};

export const getUserByEmail = cache(async (email: string): Promise<User> => {
  const payload = await getPayload();
  const result = await payload.find({
    collection: 'users',
    pagination: false,
    depth: 1,
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (result.docs.length === 0) {
    throw new Error('No user found');
  }

  return result.docs[0] as User;
});
