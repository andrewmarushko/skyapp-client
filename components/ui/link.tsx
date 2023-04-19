"use client"

import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ReactNode, forwardRef } from "react"
import Link, {LinkProps} from 'next/link';
import { useSelectedLayoutSegment } from "next/navigation";

const linkVariants = cva(
  "text-accent-400 rounded-link text-sm leading-14 duration-100 outline-none hover:text-accent dark:text-experimental-gray-800 dark:hover:text-experimental-gray-900",
  {
    variants: {
      variant: {
        default:
          "block duration-200 transition-bg-and-color dark:text-experimental-gray-800 dark:hover:text-experimental-gray-900",
        footer:
          "inline transition-color dark:text-accents-5 dark:hover:text-geist-foreground",
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

export interface CustomLinkProps
  extends LinkProps, VariantProps<typeof linkVariants> {
    className?: string;
    children?: ReactNode;
  }
const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
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
CustomLink.displayName = "Link"

export { CustomLink, linkVariants }