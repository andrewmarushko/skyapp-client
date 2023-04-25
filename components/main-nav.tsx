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
  mainNavigationData: MainNavInterface,
}

export function MainNav({ mainNavigationData }: MainNavigationProps) {
  const { panel, navigationLinks} = mainNavigationData

  return (
    <NavigationMenu className='hidden lg:flex flex-1'>
      <NavigationMenuList className='flex items-center gap-2'>
        {panel.map((panelItem) => (
        <NavigationMenuItem key={panelItem.id}>
          <NavigationMenuTrigger>{panelItem.label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="m-0 z-0 grid grid-cols-1-3 list-none gap-x-1.5 p-1.5 w-125">
              <li>
                <NavigationMenuLink asChild>
                  <NavigationLink
                    variant={"skydivingCenter"}
                    size={"md"}
                    href={panelItem.push.link.href}
                    target={panelItem.push.link.target}
                  >
                    <div className="flex items-stretch justify-between">
                      {/* TODO: Add the field for this span on the server */}
                      <span className='flex items-center justify-center text-sm leading-4 text-experimental-gray-dark-700 font-normal'>Start flying</span>
                      <Icons.arrowUpRight className="h-4 w-4" />
                    </div>
                    <div>
                      <span className='flex items-center gap-2 mb-1.5 text-accent dark:text-experimental-gray-dark-900 text-base font-medium'>
                        {panelItem.push.link.label}
                      </span>
                      <p className='text-experimental-gray-800 dark:text-experimental-gray-dark-800 text-sm font-normal'>
                        {panelItem.push.description}
                      </p>
                    </div>
                  </NavigationLink>
                </NavigationMenuLink>
              </li>
              <li className="grid grid-cols-2">
                {panelItem.links.map((linkItem: {id: number, description: string, link: {
                  label: string,
                  href: string
                }}) => (
                  <ListItem key={linkItem.id} href={linkItem.link.href} title={linkItem.link.label}>
                    {linkItem.description}
                  </ListItem>)
                )}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        ))}
          {navigationLinks.map((navigation: { id: number, href: string, label: string })  => (
            <NavigationMenuItem key={navigation.id}>
              <NavigationLink variant={'headerNav'} dataActive href={navigation.href} >
                {navigation.label}
              </NavigationLink>
            </NavigationMenuItem>
          )
          )}
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  );
}
