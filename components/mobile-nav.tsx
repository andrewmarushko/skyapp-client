'use client';

import { FunctionComponent, MouseEventHandler } from 'react';

import { MainNavInterface } from '@/types/nav';
import { NavigationLink } from '@/ui/link';
import { List } from '@/ui/list';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';

interface MobileNavInterface {
  navigationData: MainNavInterface;
  isMobileNavOpen: boolean;
  hideMobileNav: MouseEventHandler<HTMLAnchorElement>;
}

export const MobileNav: FunctionComponent<any> = ({
  navigationData,
  isMobileNavOpen,
  hideMobileNav,
}) => {
  const { label, links } = navigationData.panel[0];
  const { navigationLinks } = navigationData;

  return (
    <nav
      className={`${
        isMobileNavOpen ? 'block' : 'hidden'
      } top-header-height z-2000 max-w-100vw px-geist-gap pb-geist-gap visible fixed bottom-0 left-0 right-0 w-full overflow-y-scroll bg-sk-light py-0 dark:bg-sk-dark lg:hidden`}
    >
      <NavigationLink
        variant={'white'}
        href={'/contacts'}
        className="py-geist-gap-quarter border-none"
        onClick={hideMobileNav}
      >
        Contacts
      </NavigationLink>
      <NavigationLink
        variant={'black'}
        href={'/feedback'}
        className="py-geist-gap-quarter border-none"
        onClick={hideMobileNav}
      >
        Feedback
      </NavigationLink>
      <Accordion type="single" collapsible>
        <AccordionItem className="dark:border-b-accent-200" value="item-1">
          <AccordionTrigger>
            <span className="py-geist-gap-half flex items-center justify-between font-normal text-accent dark:text-accent-900">
              {label}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className={`max-h-60vh overflow-y-auto text-base`}>
              <div className="overflow-y-hidden">
                <ul className="mb-3">
                  {links.map(({ link, id }: any) => (
                    <NavigationLink
                      key={id}
                      size={'sm'}
                      variant={'headerNav'}
                      href={link.href}
                      onClick={hideMobileNav}
                    >
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
      {navigationLinks.map(({ href, id, label }: any) => (
        <NavigationLink
          key={id}
          variant={'headerNav'}
          size={'sm'}
          href={href}
          onClick={hideMobileNav}
        >
          <List fullWidth>{label}</List>
        </NavigationLink>
      ))}
    </nav>
  );
};
