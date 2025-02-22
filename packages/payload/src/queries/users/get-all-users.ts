import type { User } from '@repo/payload/types';

import { getPayload } from '../index';

const getAllUsers = async () => {
  const payload = await getPayload();

  const result = await payload.find({
    collection: 'users',
    depth: 0,
    pagination: false,
  });

  return result.docs as User[];
};

export default getAllUsers;
