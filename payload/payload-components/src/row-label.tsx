'use client';

import type { Page } from '@repo/payload-types';

import { useRowLabel } from '@payloadcms/ui';

type BreadcrumbItem = NonNullable<Page['breadcrumbs']>[number];

export const NavigationItemRowLabel = (): string => {
  const { data } = useRowLabel<BreadcrumbItem>();
  const label = data?.label as string;

  return `${label ?? 'Navigation'}`;
};

export const BreadcrumbsRowLabel = (): string => {
  const { data } = useRowLabel<BreadcrumbItem>();
  const label = data?.label as string;

  return `${label ?? 'Breadcrumbs'}`;
};
