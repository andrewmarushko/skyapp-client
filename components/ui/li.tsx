"use client"

import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ReactNode, forwardRef } from "react"

const liVariants = cva(
  "select-none flex items-center text-base h-geist-gap-x2 transition-background-color duration-200 ease-in-out dark:hover:bg-accent-100 dark:focus:bg-accent-100 dark:focus-visible:border-accent-900",
  {
    variants: {
      variant: {
        firstLevelLink: 
          "text-accent-300 dark:text-accent-600 border-b-accent-800 dark:border-b-accent-200 border-b", 
        secondLevelLink: 
          'text-accent-400 dark:text-accent-500',
      },
      fullWidth: {
        true: 'w-full' 
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "firstLevelLink",
      size: "default",
    },
  }
)

export interface NavigationLinkProps
  extends VariantProps<typeof liVariants> {
    children?: ReactNode;
  }

const Li = forwardRef<HTMLLIElement, NavigationLinkProps>(
  ({ variant, size, fullWidth, children, ...props }, ref) => {
    return <li
      className={`${cn(liVariants({ variant, size, fullWidth }))}`}
      ref={ref}
      {...props}
    >
      {children}
    </li>
  } 
)
Li.displayName = "Li"

export { Li, liVariants }