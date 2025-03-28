'use client';

import type { Navigation as NavigationType, Page } from '@repo/payload-types';

import { Button } from '@repo/ui/components/button';
import { DropdownMenuContent } from '@repo/ui/components/dropdown-menu';
import { DropdownMenuTrigger } from '@repo/ui/components/dropdown-menu';
import { DropdownMenuItem } from '@repo/ui/components/dropdown-menu';
import { DropdownMenu } from '@repo/ui/components/dropdown-menu';
import { cn } from '@repo/utils/cn';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const DesktopNavigation = ({
  className,
  items,
}: {
  className?: string;
  items: NavigationType['items'];
}) => {
  return (
    <nav className={cn('flex items-center justify-center', className)}>
      <ul className="flex items-center gap-6 min-h-16">
        {items.map((item) => (
          <li key={item.label} className="flex items-center">
            {item.children?.length ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white px-4 py-2 space-y-2">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.label}>
                      <Link href={`${(child.page as Page).slug}`}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                className="text-sm hover:text-primary transition-colors"
                href={`${(item.page as Page).slug}`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
