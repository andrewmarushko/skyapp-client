'use client';

import useStickyElement from '@/hooks/useStickyElement';
import useOpen from '@/hooks/useOpen';
import { MainNav } from '@/components/main-nav';
import { BurgerMenu } from '@/ui/burger-menu';
import { NavigationLink } from '@/ui/link';
import { MobileNav } from '@/components/mobile-nav';
import { NavDataInterface } from '@/types/nav';
import { Logo } from '@/components/logo';
import { LogoInterface } from '@/types/logo';

interface HeaderProps {
  logoData: any;
  navigationData: NavDataInterface;
}

const onScrollHeaderClasses = `before:w-full before:h-full before:absolute before:content-[''] before:-z-1 before:backdrop-saturate-180 before:backdrop-blur-md before:-top-1px shadow-scroll dark:shadow-scroll-dark`;

export function Header({ logoData, navigationData }: HeaderProps) {
  const { href, companyName } = logoData;
  const { elementRef, isSticky } = useStickyElement();
  const { isOpen, toggle, hide } = useOpen();

  return (
    <header
      ref={elementRef}
      className={`ease sticky h-16 top-0 z-40 flex w-full max-w-full justify-center bg-transparent transition-background-color-and-box-shadow duration-200 dark:border-b-accent-500 ${
        isSticky ? `${onScrollHeaderClasses}` : ''
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex flex-1 items-center justify-between">
          <Logo className="z-50" href={href} companyName={companyName} />
          <BurgerMenu isOpen={isOpen} toggleBurgerMenu={toggle} />
        </div>
        <MainNav mainNavigationData={navigationData} />
        <div className="z-50 hidden flex-1 justify-end gap-2 lg:flex">
          {/* TODO: create side menu api */}
          <NavigationLink variant={'white'} href={'/contacts'}>
            Contacts
          </NavigationLink>
          <NavigationLink variant={'black'} href={'/feedback'}>
            Feedback
          </NavigationLink>
        </div>
        <MobileNav
          navigationData={navigationData}
          isMobileNavOpen={isOpen}
          hideMobileNav={hide}
        />
      </div>
    </header>
  );
}
