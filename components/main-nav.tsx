'use client';
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { NavigationLink } from '@/components/ui/link';

// WARN: Add navigation interface
interface MainNavigationProps {
  mainNavigationData: any,
  containerClassnames?: string
}

export function MainNav({ mainNavigationData, containerClassnames = '' }: MainNavigationProps) {
  const { panel, navigationLinks} = mainNavigationData

  return (
    <NavigationMenu className={containerClassnames}>
      <NavigationMenuList className='flex items-center gap-2'>
        {panel.map((panelItem:  {label: string, id: number, push: {
          description: string,
          link: {
            label: string,
            href: string,
            target: string
          },      
        }, 
        links: []
      }) => (
        <NavigationMenuItem key={panelItem.id}>
          <NavigationMenuTrigger>{panelItem.label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="one m-0 grid list-none gap-x-[10px] p-[6px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none 
                      flex-col justify-end rounded-[4px] bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                    href={panelItem.push.link.href}
                    target={panelItem.push.link.target}
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      {panelItem.push.link.label}
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      {panelItem.push.description}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {panelItem.links.map((linkItem: {id: number, description: string, link: {
                label: string,
                href: string
              }}) => (
                <ListItem key={linkItem.id} href={linkItem.link.href} title={linkItem.link.label}>
                  {linkItem.description}
                </ListItem>)
              )}
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
      {/* TODO: Need too make proper styles for borders */}
      {/* <NavigationMenuIndicator /> */}
    </NavigationMenu>
  );
}
