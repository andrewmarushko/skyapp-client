"use client"

import Link from 'next/link';
import { useEffect } from 'react';

import useStickyHeader from '@/hooks/useStickyElement';
import useOpen from '@/hooks/useOpen';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { BurgerMenu } from '@/components/ui/burger-menu';
import { NavigationLink } from '@/components/ui/link';

interface HeaderProps {
  logoData: any;
  navigationData: any;
}

const onScrollHeaderClasses = `before:w-full before:h-full before:absolute before:content-[''] before:-z-1 before:backdrop-saturate-180 before:backdrop-blur-sm before:-top-1px shadow-header-border-bottom dark:shadow-header-border-bottom-dark`
const lgBreakpoint = 950;

export function Header({ logoData, navigationData }: HeaderProps) {
  const { logo } = logoData;
  const { mainNavigation } = navigationData;
  const { elementRef, isSticky } = useStickyHeader();
  const { isOpen, setIsOpen, toggleBurgerMenu } = useOpen();

  //Here is the code that checks the current width and in case it is less than lg  - isOpen becomes false.
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= lgBreakpoint && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

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
          <BurgerMenu isOpen={isOpen} toggleBurgerMenu={toggleBurgerMenu} />
        </div>
        <MainNav mainNavigationData={mainNavigation} containerClassnames='hidden lg:flex flex-1' />
        <div className='hidden lg:flex gap-2 flex-1 justify-end'>
          {/* TODO: creat side menu api */}
          <NavigationLink variant={'white'} href={'/contacts'}>Contacts</NavigationLink>
          <NavigationLink variant={'black'} href={'/feedback'}>Feedback</NavigationLink>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:hidden visible w-full max-w-100vw px-geist-gap pb-geist-gap py-0 bg-sk-light dark:bg-sk-dark z-2000 fixed top-header-height left-0 right-0 bottom-0 overflow-y-scroll`}>
          <ul className='flex flex-col gap-4 list-none m-0 p-0'>
            <li className='border-none px-geist-gap-quarter'>
              <NavigationLink 
                variant={'white'} 
                href={'/contacts'} 
                onClick={(state) => setIsOpen(!state)}
              >
                Contacts
              </NavigationLink>
            </li>
            <li className='border-none px-geist-gap-quarter'>
              <NavigationLink 
                variant={'black'} 
                href={'/feedback'} 
                onClick={(state) => setIsOpen(!state)}
              >
                Feedback
              </NavigationLink>
            </li>
          </ul>
          <ul></ul>
        </nav>
      </div>
    </header>
  );
}
