'use client';

import { useRowLabel } from '@payloadcms/ui';
import type { Page } from '@repo/payload-types';

type BreadcrumbItem = NonNullable<Page['breadcrumbs']>[number];

export default function RowLabel(): string {
  const { data } = useRowLabel<BreadcrumbItem>();

  return data?.url || '';
}
