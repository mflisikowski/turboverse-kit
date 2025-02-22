import { buildConfig } from 'payload';

import { i18n } from '@repo/i18n/cms';

import { db } from './config/database';
import { secret } from './config/secret';
import { typescript } from './config/typescript';

export default buildConfig({
  typescript,
  secret,
  i18n,
  db,
});
