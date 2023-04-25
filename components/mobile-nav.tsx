'use client';

import { FunctionComponent, MouseEventHandler } from 'react';

import { MainNavInterface } from '@/types/nav';
import { NavigationLink } from '@/components/ui/link';
import { List } from '@/components/ui/list';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface MobileNavInterface {
  navigationData: MainNavInterface;
  isMobileNavOpen: boolean;
  hideMobileNav: MouseEventHandler<HTMLAnchorElement>;
}

export const MobileNav: FunctionComponent<MobileNavInterface> = ({ navigationData, isMobileNavOpen, hideMobileNav }) => {
  const { label, links } = navigationData.panel[0];
  const { navigationLinks } = navigationData;

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
        <Accordion type="single" collapsible>
          <AccordionItem className='dark:border-b-accent-200' value="item-1">
            <AccordionTrigger>
              <span className='py-geist-gap-half flex items-center justify-between font-normal text-accent dark:text-accent-900'>
                {label}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className={`max-h-60vh text-base overflow-y-auto`}>
                <div className='overflow-y-hidden'>
                  <ul className='mb-3'>
                    {links.map(({ link , id }) =>(
                      <NavigationLink key={id} size={'sm'} variant={'headerNav'} href={link.href} onClick={hideMobileNav}>
                        <List variant={'subMenu'} fullWidth>
                          {link.label}
                        </List>
                      </NavigationLink>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {navigationLinks.map(({href, id, label}) => (
          <NavigationLink key={id} variant={'headerNav'} size={'sm'} href={href} onClick={hideMobileNav}>
            <List fullWidth>
              {label}
            </List>
          </NavigationLink>
        ))}
      </ul>
    </nav>
  );
}
