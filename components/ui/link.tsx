"use client"

import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ReactNode, forwardRef } from "react"
import Link, {LinkProps} from 'next/link';
import { useSelectedLayoutSegment } from "next/navigation";

const linkVariants = cva(
  "text-sm leading-14 outline-none hover:text-accent",
  {
    variants: {
      variant: {
        default:
          "block text-accent-400 rounded-full duration-200 transition-bg-and-color dark:text-experimental-gray-800 dark:hover:text-experimental-gray-900",
        footer:
          "inline text-accent-400 rounded-full transition-color dark:text-accents-5 dark:hover:text-geist-foreground",
        white:
          "flex border border-accent-800 rounded font-medium px-geist-gap-half max-w-full justify-center items-center duration-150 ease transition-colors-shadow-transform text-geist-form-font leading-geist-form-line-height h-geist-form-height dark:text-accent-500 dark:border-accent-200 hover:border-accent hover:text-accent hover:dark:border-accent-900 hover:dark:text-accent-900",
        black: 
          "flex border bg-sk-dark dark:bg-sk-light text-accent-900 dark:text-accent border-accent-800 rounded font-medium px-geist-gap-half max-w-full justify-center items-center duration-150 ease transition-colors-shadow-transform leading-geist-form-line-height h-geist-form-height dark:border-accent-200 hover:bg-accent-900 hover:border-accent hover:text-accent hover:dark:bg-accent hover:dark:border-accent-900 hover:dark:text-accent-900"
      },
      dataActive: {
        true: ''
      },
      fullWidth: {
        true: 'w-full' 
      },
      size: {
        default: "py-2 px-3",
        sm: "",
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
  }
const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ className, variant, size, fullWidth, children, dataActive, ...props }, ref) => {
    const segment = useSelectedLayoutSegment();
    const isActive = props.href === `/${segment}`;
    const activeLinkClasses = `${isActive && dataActive===true? 'bg-experimental-gray-a-100 text-experimental-gray-a-900 dark:bg-experimental-gray-a-dark-100 dark:text-experimental-gray-a-dark-900' : ''}`
    return <Link
      className={`${cn(linkVariants({ variant, size, fullWidth, className }))} ${activeLinkClasses}`}
      ref={ref}
      {...props}
    >{children}</Link>
  } 
)
NavigationLink.displayName = "Link"

export { NavigationLink, linkVariants }