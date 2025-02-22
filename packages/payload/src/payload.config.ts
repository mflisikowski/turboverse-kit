import { buildConfig } from 'payload';

import { i18n } from '@repo/i18n/cms';

import { admin } from './config/admin';
import { collections } from './config/collections';
import { db } from './config/database';
import { secret } from './config/secret';
import { typescript } from './config/typescript';

export default buildConfig({
  collections,
  typescript,
  secret,
  admin,
  i18n,
  db,
});
