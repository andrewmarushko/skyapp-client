"use client"

import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import useStickyHeader from '@/hooks/useStickyElement';
import { useState } from 'react';
import { BurgerMenu } from './ui/burger-menu';

interface HeaderProps {
  logoData: any;
  navigationData: any;
}

const onScrollHeaderClasses = `before:w-full before:h-full before:absolute before:content-[''] before:-z-1 before:backdrop-saturate-180 before:backdrop-blur-sm before:-top-1px shadow-header-border-bottom dark:shadow-header-border-bottom-dark`

export function Header({ logoData, navigationData }: HeaderProps) {
  const { logo } = logoData;
  const { mainNavigation } = navigationData;
  const { elementRef, isSticky } = useStickyHeader();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      ref={elementRef}
      className={`flex min-h-header-height justify-center bg-transparent sticky top-0 z-40 w-full max-w-full transition-background-color-and-box-shadow ease duration-200 dark:border-b-stone-700 ${isSticky ? `${onScrollHeaderClasses}` : ''}`}>
      <div className="container flex items-center justify-between">
        <Link
          href={logo.href}
          className="flex cursor-pointer items-center gap-1"
        >
          <Icons.logo className="h-8" />
          <span className="text-xl font-bold uppercase">
            {logo.companyName}
          </span>
        </Link>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:hidden visible w-full max-w-100vw px-geist-gap pb-geist-gap py-0 bg-sk-light dark:bg-sk-dark z-2000 fixed top-header-height left-0 right-0 bottom-0 overflow-y-scroll`}>
          <ul>
            <li>
              <a className='' href="/">Contacts</a>
            </li>
            <li>
              <a href="/">Feedback</a>
            </li>
          </ul>
          <ul></ul>
        </nav>
        <MainNav mainNavigationData={mainNavigation} containerClassnames='hidden lg:flex' />
        <div className="hidden lg:flex w-max items-center space-x-2 sm:space-x-4 md:justify-end">
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
