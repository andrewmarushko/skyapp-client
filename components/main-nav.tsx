"use client"

import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"

export function MainNav() {
  return (
    <div className="container flex">
      <Link href="/" className="flex items-center gap-1 cursor-pointer">
        <Icons.logo className="h-8" />
        <span className="text-xl font-bold uppercase">
          {siteConfig.name}
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-9">
              Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="">
                <li className="">
                  <Link href="/" passHref legacyBehavior>
                    <NavigationMenuLink
                      className=""
                    >
                      <div className="">
                        {siteConfig.name}
                      </div>
                      <p className="">
                        {siteConfig.description}
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <ListItem href="/dropzone" title="Dropzone">
                  Here you can find everything about dropzone for your jumps.
                </ListItem>
                <ListItem href="/indoor" title="Indoor Skydive">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/" title="Blog">
                  Cool articles cover your topic ...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="md:flex">
            <Link href="/services" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "h-9")}
              >
                Other Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />

        {/* <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center"> */}
        <NavigationMenuViewport className="" />
      {/* </div> */}
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link href={href} passHref legacyBehavior {...props}>
        <NavigationMenuLink
          className={cn(
            "",
            className
          )}
        >
          <div className="">{title}</div>
          <p className="">
            {children}
          </p>
        </NavigationMenuLink>
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"
