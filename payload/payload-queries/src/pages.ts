import type { Page } from '@repo/payload-types';

import { getPayload } from './payload';

export async function getAllPages(): Promise<Page[]> {
  const payload = await getPayload();

  const result = await payload.find({
    collection: 'pages',
  });

  return result.docs as Page[];
}

export async function getPublishedPages(): Promise<Page[]> {
  const payload = await getPayload();
  const result = await payload.find({
    collection: 'pages',
    where: {
      _status: {
        equals: 'published',
      },
    },
  });

  return result.docs as Page[];
}

export async function getPageBySlug(slug: string): Promise<Page> {
  const payload = await getPayload();

  const result = await payload.find({
    collection: 'pages',
    where: {
      _status: {
        equals: 'published',
      },
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs[0] as Page;
}

export async function getPageBreadcrumbs(): Promise<Array<{ slug: string[] | undefined }>> {
  const pages = await getAllPages();

  return pages.map(({ breadcrumbs }) => ({
    slug: breadcrumbs?.[breadcrumbs.length - 1]?.url?.replace(/^\/|\/$/g, '').split('/'),
  }));
}
