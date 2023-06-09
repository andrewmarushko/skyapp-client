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
  const { navigationLinks, panel } = navigationData;

  return (
    <nav
      className={`${
        isMobileNavOpen ? 'flex' : 'hidden'
      } flex-col gap-2 visible fixed bottom-0 left-0 right-0 top-16 z-50 w-full max-w-full overflow-y-scroll bg-sk-light px-6 py-0 pb-6 dark:bg-sk-dark lg:hidden`}
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
      {panel[0].showPannel &&
        <Accordion type="single" collapsible>
          <AccordionItem className="border-b dark:border-b-accent-200" value="item-1">
            <AccordionTrigger>
              <span className="flex items-center justify-between text-accent dark:text-accent-800">
                {label}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mb-3">
                {links.filter((linkItem: any) => !linkItem.link.hide).map(({ link, id }: any) => (
                  <NavigationLink
                    key={id}
                    size={'noPadding'}
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
      }
      <div className='flex flex-col divide-y divide-accent-700 dark:divide-accent-200'>
        {navigationLinks.filter((linkItem: any) => !linkItem.hide).map(({ href, id, label }: any) => (
          <NavigationLink
            key={id}
            size={'noPadding'}
            href={href}
            onClick={hideMobileNav}
          >
            <List fullWidth>{label}</List>
          </NavigationLink>
        ))}
      </div>

    </nav>
  );
};
