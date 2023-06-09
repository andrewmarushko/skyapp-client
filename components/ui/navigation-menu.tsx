import { cn } from '@/lib/utils';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { forwardRef } from 'react';
import { Icons } from '@/icons';

const NavigationMenu = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative z-10 flex', className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));

// INFO: this is main menu container
const NavigationMenuList = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'center m-0 flex list-none rounded-[6px] p-1 shadow-blackA7',
      className,
    )}
    {...props}
  />
));

const navigationMenuTriggerStyle = cva(
  `flex py-2 px-3 items-center text-sm leading-14px text-accent-400 rounded-full duration-200 transition-bg-and-color
  data-[state=open]:bg-accent-700 data-[state=open]:text-accent
  dark:text-accent-500 dark:data-[state=open]:bg-accent-200 dark:data-[state=open]:text-accent-900`,
);

// INFO: menu items styles
const NavigationMenuTrigger = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden
    />
  </NavigationMenuPrimitive.Trigger>
));

const NavigationMenuContent = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn('ease left-0 top-0 w-full duration-200', className)}
    {...props}
  />
));

const NavigationMenuViewport = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className="absolute left-0 top-full flex justify-center">
    <NavigationMenuPrimitive.Viewport
      className={cn(
        `relative mt-5 w-full origin-top-center overflow-hidden rounded-xl border border-accent-700 bg-sk-light shadow-3xl dark:shadow-none
        transition-width-height duration-300 data-[state=closed]:animate-navigation-menu-scale-out data-[state=open]:animate-navigation-menu-scale-in
        dark:border-accent-300 dark:bg-sk-dark/60 backdrop-blur-2xl`,
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));

const NavigationMenuIndicator = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      `ease absolute left-0 top-[118%] z-10 flex h-7 translate-x-0
      justify-center overflow-hidden transition-width-transform 
      duration-200 data-[state=closed]:animate-fade-out data-[state=visible]:animate-fade-in`,
      className,
    )}
    {...props}
  >
    <Icons.navIndicator className="absolute -top-3 z-10 h-10 w-10 rotate-180 fill-sk-light dark:fill-sk-dark" />
  </NavigationMenuPrimitive.Indicator>
));

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          `ease block select-none space-y-1 rounded-lg p-3 text-sm leading-none no-underline outline-none transition-colors
          focus-within:shadow-focus focus-within:shadow-accent-500 hover:bg-accent-700/60 dark:hover:bg-accent-200/40`,
          className,
        )}
        {...props}
      >
        <div className="mb-2 flex whitespace-nowrap text-sm font-medium leading-none text-accent-100 dark:text-accent-700">
          {/* TODO:add icon near the title */}
          {title}
        </div>
        <p className="text-sm text-accent-400 dark:text-accent-600">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  );
});

const NavigationMenuItem = NavigationMenuPrimitive.Item;
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;
ListItem.displayName = 'ListItem';

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  ListItem,
};
