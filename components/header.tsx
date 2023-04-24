"use client"

import Link from 'next/link';

import useStickyElement from '@/hooks/useStickyElement';
import useOpen from '@/hooks/useOpen';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { BurgerMenu } from '@/components/ui/burger-menu';
import { NavigationLink } from '@/components/ui/link';
import { MobileNav } from '@/components/mobile-nav';
import { NavDataInterface } from '@/types/nav';

interface HeaderProps {
  logoData: any;
  navigationData: NavDataInterface;
}

const onScrollHeaderClasses = `before:w-full before:h-full before:absolute before:content-[''] before:-z-1 before:backdrop-saturate-180 before:backdrop-blur-sm before:-top-1px shadow-header-border-bottom dark:shadow-header-border-bottom-dark`

export function Header({ logoData, navigationData }: HeaderProps) {
  const { logo } = logoData;
  const { mainNavigation } = navigationData;
  const { elementRef, isSticky } = useStickyElement();
  const { isOpen, toggle, show, hide } = useOpen();

  return (
    <header
      ref={elementRef}
      className={`flex min-h-header-height justify-center bg-transparent sticky top-0 z-40 w-full max-w-full transition-background-color-and-box-shadow ease duration-200 dark:border-b-stone-700 ${isSticky ? `${onScrollHeaderClasses}` : ''}`}>
      <div className="container flex items-center justify-between">
        <div className='flex justify-between flex-1'>
          <Link
            href={logo.href}
            className="flex cursor-pointer items-center gap-1"
          >
            <Icons.logo className="h-8" />
            <span className="text-xl font-bold uppercase">
              {logo.companyName}
            </span>
          </Link>
          <BurgerMenu isOpen={isOpen} toggleBurgerMenu={toggle} />
        </div>
        <MainNav mainNavigationData={mainNavigation} containerClassnames='hidden lg:flex flex-1' />
        <div className='hidden lg:flex gap-2 flex-1 justify-end'>
          {/* TODO: creat side menu api */}
          <NavigationLink variant={'white'} href={'/contacts'}>Contacts</NavigationLink>
          <NavigationLink variant={'black'} href={'/feedback'}>Feedback</NavigationLink>
        </div>
        <MobileNav 
          navigationData={mainNavigation} 
          isMobileNavOpen={isOpen} 
          hideMobileNav={hide} 
        />
      </div>
    </header>
  );
}
