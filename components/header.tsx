"use client"

import Link from 'next/link';

import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import useStickyHeader from '@/hooks/useStickyElement';
import { useState } from 'react';
import { BurgerMenu } from './ui/burger-menu';
import { CustomLink } from './ui/link';

interface HeaderProps {
  logoData: any;
  navigationData: any;
}

const onScrollHeaderClasses = `before:w-full before:h-full before:absolute before:content-[''] before:-z-1 before:backdrop-saturate-180 before:backdrop-blur-sm before:-top-1px shadow-header-border-bottom dark:shadow-header-border-bottom-dark`

export function Header({ logoData, navigationData }: HeaderProps) {
  const { logo } = logoData;
  const { mainNavigation } = navigationData;
  const { elementRef, isSticky } = useStickyHeader();
  const [ isOpen, setIsOpen ] = useState(false);

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
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <MainNav mainNavigationData={mainNavigation} containerClassnames='hidden lg:flex flex-1' />
        <div className='hidden lg:flex gap-2 flex-1 justify-end'>
          <CustomLink variant={'white'} href={'/contacts'}>Contacts</CustomLink>
          <CustomLink variant={'black'} href={'/feedback'}>Feedback</CustomLink>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:hidden visible w-full max-w-100vw px-geist-gap pb-geist-gap py-0 bg-sk-light dark:bg-sk-dark z-2000 fixed top-header-height left-0 right-0 bottom-0 overflow-y-scroll`}>
          <ul className='flex flex-col gap-4 list-none m-0 p-0'>
            <li className='border-none px-geist-gap-quarter'>
              <CustomLink 
                variant={'white'} 
                href={'/contacts'} 
                onClick={(state) => setIsOpen(!state)}
              >
                Contacts
              </CustomLink>
            </li>
            <li className='border-none px-geist-gap-quarter'>
              <CustomLink 
                variant={'black'} 
                href={'/feedback'} 
                onClick={(state) => setIsOpen(!state)}
              >
                Feedback
              </CustomLink>
            </li>
          </ul>
          <ul></ul>
        </nav>
      </div>
    </header>
  );
}
