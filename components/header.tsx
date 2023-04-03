import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { CommandMenu } from '@/components/command-menu';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-transparent-white dark:bg-transparent-dark sticky top-0 z-40 w-full  border-b border-b-stone-200 backdrop-blur-[4px] dark:border-b-stone-700">
      <div className="container flex h-16 items-center justify-between">
        <MainNav />

        {/* <MobileNav /> */}

        <div className="flex flex-1 items-center  space-x-2 sm:space-x-4 md:justify-end">
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          <nav className="m-right flex items-center space-x-1">
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'text-stone-700 dark:text-stone-400',
                })}
              >
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
