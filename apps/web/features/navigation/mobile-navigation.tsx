'use client';

import type { Navigation as NavigationType, Page } from '@repo/payload-types';

import { Button } from '@repo/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/ui/components/dropdown-menu';
import { cn } from '@repo/utils/cn';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const MobileNavigation = ({
  className,
  items,
}: {
  className?: string;
  items: NavigationType['items'];
}) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <nav className={cn('md:hidden', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Menu className="h-6 w-6 mx-auto" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white w-[300px] p-4" align="end">
          <div className="flex flex-col space-y-4">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col">
                {item.children?.length ? (
                  <div className="flex flex-col">
                    <Button
                      variant="ghost"
                      className="flex items-center justify-between w-full px-2"
                      onClick={() => setOpenItem(openItem === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform',
                          openItem === item.label && 'rotate-180',
                        )}
                      />
                    </Button>
                    {openItem === item.label && (
                      <div className="flex flex-col space-y-2 mt-2">
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.label} asChild>
                            <Link
                              href={`${(child.page as Page).slug}`}
                              className="text-sm py-2 px-4 hover:text-primary transition-colors"
                            >
                              {child.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link
                      href={`${(item.page as Page).slug}`}
                      className="text-sm py-2 px-4 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                )}
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
