import type { FieldAccess, TypeWithID } from 'payload';

import { UserRoles } from '.';
import type { User } from '../../payload.types';

export const AdminAccess: FieldAccess<TypeWithID, User> = ({ req: { user } }) =>
  user?.roles.roles === UserRoles.Admin;
