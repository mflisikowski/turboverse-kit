'use client';

import type { Navigation as NavigationType } from '@repo/payload-types';

import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';

export const Navigation = ({
  className,
  items,
}: {
  className?: string;
  items: NavigationType['items'];
}) => {
  return (
    <header className="w-full flex items-center justify-between px-4 z-50">
      <div className="mr-4 flex">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Your Logo</span>
        </a>
      </div>

      <DesktopNavigation className="hidden md:flex" items={items} />
      <MobileNavigation className="md:hidden" items={items} />
    </header>
  );
};
