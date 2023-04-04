import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import * as React from "react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))

// INFO: this is main menu container
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "center shadow-blackA7 m-0 flex list-none rounded-[6px] p-1",
      className
    )}
    {...props}
  />
))




const navigationMenuTriggerStyle = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-slate-100 dark:focus:bg-accent-2  disabled:opacity-50 dark:focus:bg-accent-2 disabled:pointer-events-none bg-transparent hover:bg-slate-100 dark:hover:bg-accent-2 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-accent-2 data-[active]:bg-accent-2 dark:data-[active]:bg-accent-2 h-10 py-2 px-4 group w-max"
)

// INFO: menu items styles
const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden
    />
  </NavigationMenuPrimitive.Trigger>
))

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight top-0 left-0 w-full sm:w-auto relative",
      className
    )}
    {...props}
  />
))
 
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className="perspective-[2000px] absolute top-full left-0 flex justify-center">
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-foreground opacity-[0.6] dark:bg-background transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)] border border-accent-7 dark:border-accent-2",
        className
      )}
      ref={ref}
      {...props}
    />
</div>
))

 
const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-0 flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]",
      className
    )}
    {...props}
  >
    <div className="relative top-[70%] h-[10px] w-[10px] z-50 rotate-[45deg] rounded-tl-[2px] bg-foreground border border-accent-2 dark:border-accent-2 dark:bg-background " />
  </NavigationMenuPrimitive.Indicator>
))


  const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

const NavigationMenuItem = NavigationMenuPrimitive.Item
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
const NavigationMenuLink = NavigationMenuPrimitive.Link
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName
ListItem.displayName = "ListItem"


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
  ListItem
}
