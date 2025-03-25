import type { Navigation, Page } from '@repo/payload-types';
import type { CollectionAfterChangeHook } from 'payload';

type NavigationItems = Navigation['items'];
type NavigationItem = NavigationItems[number];

/**
 * Hook to update navigation when a page is published with isNavigable=true
 * This runs after a page is created or updated
 */
export const pageUpdateNavigation: CollectionAfterChangeHook<Page> = async ({
  doc,
  req,
  operation,
  previousDoc,
}) => {
  const page = doc;
  const { payload } = req;

  try {
    const navigationGlobal = await payload.findGlobal({
      slug: 'navigation',
    });

    if (!navigationGlobal) {
      payload.logger.error('Navigation global not found');
      return doc;
    }

    const pageId = String(page.id);
    const items = navigationGlobal.items || [];

    const existsInNav = items.some((item: NavigationItem) => {
      const itemPageId = typeof item.page === 'string' ? item.page : item.page?.id;
      const hasChildWithPage = item.children?.some((child: NavigationItem) => {
        const childPageId = typeof child.page === 'string' ? child.page : child.page?.id;
        return childPageId === pageId;
      });

      return itemPageId === pageId || hasChildWithPage;
    });

    if (page.isNavigable && !existsInNav) {
      const updatedItems = [
        ...items,
        {
          label: page.title,
          page: { id: pageId },
        },
      ];

      await payload.updateGlobal({
        slug: 'navigation',
        data: {
          items: updatedItems,
        },
      });

      payload.logger.info(`Added page "${page.title}" to navigation`);
    } else if (!page.isNavigable && existsInNav) {
      let updatedItems = items.filter((item: NavigationItem) => {
        const itemPageId = typeof item.page === 'string' ? item.page : item.page?.id;
        return itemPageId !== pageId;
      });

      updatedItems = updatedItems.map((item: NavigationItem) => {
        if (item.children?.length) {
          return {
            ...item,
            children: item.children.filter((child: NavigationItem) => {
              const childPageId = typeof child.page === 'string' ? child.page : child.page?.id;
              return childPageId !== pageId;
            }),
          };
        }
        return item;
      });

      await payload.updateGlobal({
        slug: 'navigation',
        data: {
          items: updatedItems,
        },
      });

      payload.logger.info(`Removed page "${page.title}" from navigation`);
    }
  } catch (error: unknown) {
    payload.logger.error(
      `Error updating navigation: ${error instanceof Error ? error.message : String(error)}`,
    );
  }

  return doc;
};
