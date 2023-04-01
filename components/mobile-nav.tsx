'use client';

import * as React from 'react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="-ml-4 text-base hover:bg-transparent focus:ring-0  focus:ring-offset-0 md:hidden"
        >
          <Icons.logo className="mr-2 h-4 w-4" />{' '}
          <span className="font-bold">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={24}
        alignOffset={4}
        className="w-[300px] overflow-scroll"
      >
        <DropdownMenuItem asChild>
          <Link href="/" className="flex items-center">
            <Icons.logo className="mr-2 h-4 w-4" /> {siteConfig.name}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
