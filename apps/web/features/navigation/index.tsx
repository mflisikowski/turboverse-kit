'use client';

import type { Navigation as NavigationType } from '@repo/payload-types';

import { DesktopNavigation } from '@/features/navigation/desktop-navigation';
import { MobileNavigation } from '@/features/navigation/mobile-navigation';
import Link from 'next/link';

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
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Logo</span>
        </Link>
      </div>

      <DesktopNavigation className="hidden md:flex" items={items} />
      <MobileNavigation className="md:hidden" items={items} />
    </header>
  );
};
