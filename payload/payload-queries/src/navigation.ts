import type { Config } from '@repo/payload-types';
import type { Page } from '@repo/payload-types';

import { getPayload } from './payload';

/**
 * Fetches the navigation global with populated page references
 */
export const getNavigation = async () => {
  const payload = await getPayload();
  const navigation = await payload.findGlobal({
    slug: 'navigation',
    depth: 1,
  });

  return navigation;
};

/**
 * Fetches the navigation global with populated page references and specific locale
 */
export const getNavigationByLocale = async (locale: 'all' | null | undefined) => {
  const payload = await getPayload();
  const navigation = await payload.findGlobal({
    slug: 'navigation',
    depth: 1,
    locale,
  });

  return navigation;
};

/**
 * Fetches the navigation global with specific fields selection
 */
export const getNavigationWithSelect = async (select?: Config['globalsSelect']['navigation']) => {
  const payload = await getPayload();
  const navigation = await payload.findGlobal({
    slug: 'navigation',
    locale: 'all',
    depth: 1,
    select,
  });

  return navigation;
};

/**
 * Type for the flattened navigation item
 */
export type FlatNavigationItem = {
  label: string;
  page: string | Page;
  level: number;
  parentLabel?: string;
};

/**
 * Flattens the nested navigation structure into a single array
 */
export const flattenNavigation = (
  items: Config['globals']['navigation']['items'],
  level = 0,
  parentLabel?: string,
): FlatNavigationItem[] => {
  return items.reduce<FlatNavigationItem[]>((acc, item) => {
    const flatItem: FlatNavigationItem = {
      label: item.label,
      page: item.page,
      level,
      ...(parentLabel && { parentLabel }),
    };

    acc.push(flatItem);

    if (item.children?.length) {
      acc.push(...flattenNavigation(item.children, level + 1, item.label));
    }

    return acc;
  }, []);
};

/**
 * Fetches and flattens the navigation structure
 */
export const getFlatNavigation = async () => {
  const navigation = await getNavigation();
  return flattenNavigation(navigation.items);
};
