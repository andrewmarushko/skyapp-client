'use client';

import { FunctionComponent, MouseEventHandler } from 'react';

import useOpen from '@/hooks/useOpen';
import { MainNavInterface } from '@/types/nav';
import { Icons } from '@/components/icons';
import { NavigationLink } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import { Li } from '@/components/ui/li';

interface MobileNavInterface {
  navigationData: MainNavInterface;
  isMobileNavOpen: boolean;
  showMobileNav: MouseEventHandler<HTMLAnchorElement>;
  hideMobileNav: MouseEventHandler<HTMLAnchorElement>;
}

export const MobileNav: FunctionComponent<MobileNavInterface> = ({ navigationData, isMobileNavOpen, showMobileNav, hideMobileNav }) => {
  const { label, links } = navigationData.panel[0];
  const { navigationLinks } = navigationData;

  const { isOpen, toggle } = useOpen();

  return (
    <nav className={`${isMobileNavOpen ? 'block' : 'hidden'} lg:hidden visible w-full max-w-100vw px-geist-gap pb-geist-gap py-0 bg-sk-light dark:bg-sk-dark z-2000 fixed top-header-height left-0 right-0 bottom-0 overflow-y-scroll`}>
      <ul>
        <li className='border-none py-geist-gap-quarter'>
          <NavigationLink 
            variant={'white'} 
            href={'/contacts'} 
            onClick={hideMobileNav}
          >
            Contacts
          </NavigationLink>
        </li>
        <li className='border-none py-geist-gap-quarter'>
          <NavigationLink 
            variant={'black'} 
            href={'/feedback'} 
            onClick={hideMobileNav}
          >
            Feedback
          </NavigationLink>
        </li>
      </ul>
      <ul>
        <div className='text-left border-b border-b-accent-800 dark:border-b-accent-200'>
          <h3 className='font-medium text-base -tracking-widest leading-6'>
            <Button fullWidth size={'noPaddings'} variant={'mobileNav'} onClick={toggle}>
              <span className='py-geist-gap-half flex items-center justify-between'>
                {label}
                <span className={`flex transition-transform ease duration-200 ${isOpen && '-rotate-180'}`}>
                  <Icons.chevronDown className="h-6 w-6 text-current" />
                </span>
              </span>
            </Button>
          </h3>
          <div className={`${isOpen ? 'max-h-60vh' : 'max-h-0'} text-base overflow-y-auto transition-max-height ease duration-200`}>
            <div className='overflow-y-hidden'>
              <ul className='mb-3'>
                {links.map(({ link , id }) =>(
                  <NavigationLink key={id} size={'sm'} variant={'headerNav'} href={link.href} onClick={hideMobileNav}>
                    <Li variant={'secondLevelLink'} fullWidth>
                      {link.label}
                    </Li>
                  </NavigationLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {navigationLinks.map(({href, id, label}) => (
          <NavigationLink key={id} variant={'headerNav'} size={'sm'} href={href} onClick={hideMobileNav}>
            <Li variant={'firstLevelLink'} fullWidth>
              {label}
            </Li>
          </NavigationLink>
        ))}
      </ul>
    </nav>
  );
}
