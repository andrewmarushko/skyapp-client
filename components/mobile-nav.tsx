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
      } visible fixed bottom-0 left-0 right-0 top-16 z-50 w-full max-w-full overflow-y-scroll bg-sk-light px-6 py-0 pb-6 dark:bg-sk-dark lg:hidden`}
    >
      <div className="flex flex-col gap-2">
        <NavigationLink
          variant={'white'}
          href={'/contacts'}
          className="justify-center border-accent-700"
          onClick={hideMobileNav}
        >
          Contacts
        </NavigationLink>
        <NavigationLink
          variant={'black'}
          href={'/feedback'}
          className="justify-center"
          onClick={hideMobileNav}
        >
          Feedback
        </NavigationLink>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem className="dark:border-b-accent-200" value="item-1">
          <AccordionTrigger>
            <span className="flex items-center justify-between py-3 text-accent dark:text-accent-800">
              {label}
            </span>
          </AccordionTrigger>
          <AccordionContent>
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
