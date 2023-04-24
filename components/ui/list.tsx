"use client"

import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ReactNode, forwardRef } from "react"

const listVariants = cva(
  "select-none flex items-center text-base h-geist-gap-x2 transition-background-color duration-200 ease-in-out dark:hover:bg-accent-100 dark:focus:bg-accent-100 dark:focus-visible:border-accent-900",
  {
    variants: {
      variant: {
        menu: 
          "text-accent-300 dark:text-accent-600 border-b-accent-800 dark:border-b-accent-200 border-b", 
        subMenu: 
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
      variant: "menu",
      size: "default",
    },
  }
)

export interface NavigationListProps
  extends VariantProps<typeof listVariants> {
    children?: ReactNode;
  }

const List = forwardRef<HTMLLIElement, NavigationListProps>(
  ({ variant, size, fullWidth, children, ...props }, ref) => {
    return <li
      className={`${cn(listVariants({ variant, size, fullWidth }))}`}
      ref={ref}
      {...props}
    >
      {children}
    </li>
  } 
)
List.displayName = "List"

export { List, listVariants }