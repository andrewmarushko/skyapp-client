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
} from '@/components/ui/navigation-menu';
import { NavigationLink } from '@/components/ui/link';
import { Icons } from '@/components/icons';
import { MainNavInterface } from '@/types/nav';

interface MainNavigationProps {
  mainNavigationData: MainNavInterface;
}

export function MainNav({ mainNavigationData }: MainNavigationProps) {
  const { panel, navigationLinks } = mainNavigationData;

  console.log('mainnavigation', mainNavigationData.panel);
  return (
    <NavigationMenu className="hidden flex-1 justify-center lg:flex">
      <NavigationMenuList className="flex items-center gap-2">
        {panel.map((panelItem) => {
          console.log('panelItem', panelItem.links);
          return (
            <NavigationMenuItem key={panelItem.id}>
              <NavigationMenuTrigger>{panelItem.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="z-0 m-0 grid w-125 list-none grid-cols-1-3 gap-x-1.5 p-1.5">
                  <li>
                    <NavigationMenuLink asChild>
                      <NavigationLink
                        variant={'skydivingCenter'}
                        size={'md'}
                        href={panelItem.push.link.href}
                        target={panelItem.push.link.target}
                      >
                        <div className="flex items-stretch justify-between">
                          {/* TODO: Add the field for this span on the server */}
                          <span className="flex items-center justify-center text-sm font-normal leading-4 text-experimental-gray-dark-700">
                            Start flying
                          </span>
                          <Icons.arrowUpRight className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="mb-1.5 flex items-center gap-2 text-base font-medium text-accent dark:text-experimental-gray-dark-900">
                            {panelItem.push.link.label}
                          </span>
                          <p className="text-sm font-normal text-experimental-gray-800 dark:text-experimental-gray-dark-800">
                            {panelItem.push.description}
                          </p>
                        </div>
                      </NavigationLink>
                    </NavigationMenuLink>
                  </li>
                  <li className="grid grid-cols-2">
                    {panelItem.links.map(
                      (linkItem: {
                        id: number;
                        description: string;
                        link: {
                          label: string;
                          href: string;
                        };
                      }) => {
                        console.log('link Item', linkItem);
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
                  </li>
                </ul>
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
