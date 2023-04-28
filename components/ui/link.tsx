"use client"

import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ReactNode, forwardRef } from "react"
import Link, {LinkProps} from 'next/link';
import { useSelectedLayoutSegment } from "next/navigation";

const linkVariants = cva(
  "text-sm leading-14 outline-none hover:text-accent no-underline",
  {
    variants: {
      variant: {
        default: 
          'text-inherit',
        headerNav: 
          "block text-accent-400 rounded-full duration-200 transition-bg-and-color dark:text-experimental-gray-dark-800 dark:hover:text-experimental-gray-dark-900",
        footer:
          "inline text-accent-400 rounded-full transition-color dark:text-accents-5 dark:hover:text-geist-foreground",
        white:
          "flex border border-accent-800 rounded font-medium px-geist-gap-half max-w-full justify-center items-center duration-150 ease transition-colors-shadow-transform text-geist-form-font leading-geist-form-line-height h-geist-form-height dark:text-accent-500 dark:border-accent-200 hover:border-accent hover:text-accent hover:dark:border-accent-900 hover:dark:text-accent-900",
        black: 
          "flex border bg-sk-dark dark:bg-sk-light text-accent-900 dark:text-accent border-accent-800 rounded font-medium px-geist-gap-half max-w-full justify-center items-center duration-150 ease transition-colors-shadow-transform leading-geist-form-line-height h-geist-form-height dark:border-accent-200 hover:bg-accent-900 hover:border-accent hover:text-accent hover:dark:bg-accent hover:dark:border-accent-900 hover:dark:text-accent-900",
        skydivingCenter:
          `flex h-full w-full select-none flex-col justify-between rounded-lg bg-experimental-gray 
          hover:bg-experimental-gray-200 no-underline outline-none text-experimental-gray-700 
          transition-background-color ease focus-visible:shadow-sm-gray focus-visible:shadow-experimental-gray-600
          dark:bg-experimental-gray-a-dark dark:hover:bg-experimental-gray-a-dark-200 hover:text-experimental-gray-dark-700`,
        logo: 'flex cursor-pointer items-center gap-1 hover:text-current',
        socialNetwork:
          "text-accent-400 dark:text-accent-500 dark:hover:text-accent-900 transition-all duration-200 ease"
      },
      dataActive: {
        true: ''
      },
      fullWidth: {
        true: 'w-full' 
      },
      size: {
        default: "py-2 px-3",
        sm: "p-0",
        md: "p-3"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NavigationLinkProps
  extends LinkProps, VariantProps<typeof linkVariants> {
    className?: string;
    children?: ReactNode;
    target?: string;
  }
const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ className, variant, size, fullWidth, children, dataActive, target = '', ...props }, ref) => {
    const segment = useSelectedLayoutSegment();
    const isActive = props.href === `/${segment}`;
    const activeLinkClasses = `${isActive && dataActive===true? 'bg-experimental-gray-a-100 text-experimental-gray-a-900 dark:bg-experimental-gray-a-dark-100 dark:text-experimental-gray-a-dark-900' : ''}`
    return <Link
      className={`${cn(linkVariants({ variant, size, fullWidth, className }))} ${activeLinkClasses}`}
      ref={ref}
      target={target}
      aria-label="social"
      {...props}
    >{children}</Link>
  } 
)
NavigationLink.displayName = "Link"

export { NavigationLink, linkVariants }