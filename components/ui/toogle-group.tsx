"use client"

import * as React from "react"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleMenuVariants = cva(
  "",
  {
    variants: {
      variant: {
        themesSwitcher: "dark:border-accent-200 bg-none w-max rounded-100 flex items-center relative border border-accent-800 max-w-full h-10 text-sm select-none",
      },
      size: {
        default: "p-1",
      },
    },
    defaultVariants: {
      variant: "themesSwitcher",
      size: "default",
    },
  }
)

const toggleItemVariants = cva(
  "",
  {
    variants: {
      variant: {
        themesSwitcher: `
          bg-none rounded-50 font-medium border-none outline-accent text-accent-500 transition-colors 
          aria-checked:text-accent aria-checked:bg-accent-800
          dark:text-accent-400 dark:aria-checked:text-accent-900 dark:aria-checked:bg-accent-200 
        `,
      },
      size: {
        default: "w-8 h-8",
      },
    },
    defaultVariants: {
      variant: "themesSwitcher",
      size: "default",
    },
  }
)

const ToggleMenu = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Root> &
  VariantProps<typeof toggleMenuVariants>
>(({ className, children, variant, size, ...props }, ref) => (
  <ToggleGroup.Root
    ref={ref}
    className={cn(toggleMenuVariants({variant, size , className }))}
    {...props}
  >
    {children}
  </ToggleGroup.Root>
))

const ToggleItem= React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Item> &
  VariantProps<typeof toggleItemVariants>
>(({ className, children, variant, size, ...props }, ref) => (
  <ToggleGroup.Item
    ref={ref}
    className={cn(toggleItemVariants({variant, size, className }))}
    {...props}
  >
    {children}
  </ToggleGroup.Item>
))

ToggleMenu.displayName = ToggleGroup.Root.displayName
ToggleItem.displayName = ToggleGroup.Item.displayName

export { ToggleMenu, ToggleItem, toggleMenuVariants, toggleItemVariants }