import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload';

import { timestamp as timestampFn } from '@repo/utils/date';
import { revalidatePath } from 'next/cache';

import type { Page } from '@repo/payload-types';

export const pageRevalidate: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  const timestamp = `?${timestampFn}`;

  const path = doc?.slug === 'home' ? '/' : `${doc?.slug}`;
  payload.logger.info(`Revalidating page at path: ${path}${timestamp}`);
  revalidatePath(path);

  const oldPath = previousDoc?.slug === 'home' ? '/' : `${previousDoc?.slug}`;
  payload.logger.info(`Revalidating old page at path: ${oldPath}${timestamp}`);
  revalidatePath(oldPath);

  revalidatePath('/', 'layout');

  return doc;
};

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req: { payload } }) => {
  const timestamp = `?${timestampFn}`;
  const path = doc?.slug === 'home' ? '/' : `${doc?.slug}`;
  payload.logger.info(`Revalidating deleted page at path: ${path}${timestamp}`);
  revalidatePath(path);

  revalidatePath('/', 'layout');

  return doc;
};
