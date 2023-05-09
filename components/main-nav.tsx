'use client';
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/ui/navigation-menu';
import { NavigationLink } from '@/ui/link';
import { Icons } from '@/icons';
import { MainNavInterface } from '@/types/nav';

export function MainNav({ mainNavigationData }: any) {
  const { panel, navigationLinks } = mainNavigationData;

  return (
    <NavigationMenu className="hidden flex-1 justify-center lg:flex">
      <NavigationMenuList className="flex items-center gap-2">
        {panel.map((panelItem: any) => {
          return (
            <NavigationMenuItem key={panelItem.id}>
              <NavigationMenuTrigger>{panelItem.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <nav className="w-125 z-0 m-0 flex list-none gap-x-1.5 p-1.5">
                  <div className='basis-1/3'>
                    <NavigationMenuLink asChild>
                      <NavigationLink
                        variant={'featuredNav'}
                        size={'md'}
                        href={panelItem.push.link.href}
                        target={panelItem.push.link.target}
                      >
                        <div className="flex items-stretch justify-between">
                          {/* TODO: Add Start flying title to the server */}
                          <span className="text-accent-500 flex items-center justify-center text-sm font-normal leading-4">
                            Start flying
                          </span>
                          <Icons.arrowUpRight className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="dark:text-accent-900 mb-1.5 flex items-center gap-2 text-base font-medium text-accent">
                            {panelItem.push.link.label}
                          </span>
                          <p className="text-accent-500 text-sm font-normal">
                            {panelItem.push.description}
                          </p>
                        </div>
                      </NavigationLink>
                    </NavigationMenuLink>
                  </div>
                  <div className='grid basis-2/3 grid-cols-2'>
                    {panelItem.links.map(
                      (linkItem: {
                        id: number;
                        description: string;
                        link: {
                          label: string;
                          href: string;
                        };
                      }) => {
                        return (
                          <ListItem
                            key={linkItem.id}
                            href={linkItem.link.href}
                            title={linkItem.link.label}
                          >
                            {linkItem.description}
                          </ListItem>
                        );
                      },
                    )}
                  </div>
                </nav>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
        {navigationLinks.map(
          (navigation: { id: number; href: string; label: string }) => (
            <NavigationMenuItem key={navigation.id}>
              <NavigationLink
                variant={'headerNav'}
                dataActive
                href={navigation.href}
              >
                {navigation.label}
              </NavigationLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  );
}
