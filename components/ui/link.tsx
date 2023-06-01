'use client';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { ReactNode, forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';

const linkVariants = cva(
  'leading-4 outline-none hover:text-accent dark:hover:text-accent-900 no-underline',
  {
    variants: {
      variant: {
        default: '',
        headerNav:
          'block text-accent-400 rounded-full duration-200 transition-bg-and-color dark:text-accent-600 dark:hover:text-accent-700',
        footer:
          'inline text-accent-400 rounded-full transition-color dark:text-accent-500 dark:hover:text-accent-900',
        white:
          'flex border border-accent-800 rounded font-medium px-3 duration-150 ease transition-colors-shadow-transform text-sm dark:text-accent-500 dark:border-accent-200 hover:border-accent hover:text-accent hover:dark:border-accent-900 hover:dark:text-accent-900',
        black:
          'flex border bg-sk-dark dark:bg-sk-light text-accent-900 dark:text-accent border-accent-800 rounded font-medium px-3 duration-150 ease transition-colors-shadow-transform text-sm dark:border-accent-200 hover:bg-accent-900 hover:border-accent hover:text-accent hover:dark:bg-sk-dark hover:dark:border-accent-900 hover:dark:text-accent-900',
        featuredNav: `flex h-full w-full select-none flex-col justify-between rounded-lg bg-accent-700/60 hover:bg-accent-700 
          no-underline outline-none text-accent-500 
          transition-background-color ease focus-visible:shadow-focus focus-visible:shadow-accent-500
          dark:bg-accent-200/50 dark:hover:bg-accent-200/40 hover:text-accent-500`,
        logo: 'flex cursor-pointer items-center gap-1 hover:text-current',
        socialNetwork:
          'text-accent-400 dark:text-accent-500 dark:hover:text-accent-900 transition-all duration-200 ease',
        ghostWhite:
          'flex items-center justify-center h-12 border leading-6 bg-sk-light text-accent border-accent-900 rounded font-medium px-geist-gap-half duration-150 ease transition-colors-shadow-transform leading-geist-form-line-height hover:bg-accent hover:border-accent-900 hover:text-accent-900',
        underline:
          'hover:underline transition-all duration-300"'
      },
      dataActive: {
        true: '',
      },
      fullWidth: {
        true: 'w-full',
      },
      textSize: {
        default: 'text-sm',
        md: 'text-base',
      },
      size: {
        default: 'py-2 px-3',
        noPadding: 'p-0',
        md: 'py-2',
        lg: 'p-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      textSize: 'default',
    },
  },
);

export interface NavigationLinkProps
  extends LinkProps,
    VariantProps<typeof linkVariants> {
  className?: string;
  children?: ReactNode;
  isActive?: boolean;
  target?: string;
}
const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      textSize,
      children,
      dataActive,
      isActive = false,
      target = '',
      ...props
    },
    ref,
  ) => {
    const activeLinkClasses = `${
      isActive
        ? 'text-accent-100 bg-accent-700 dark:bg-accent-100 dark:text-accent-800'
        : ''
    }`;

    return (
      <Link
        className={`${cn(
          linkVariants({ variant, size, textSize, fullWidth, className }),
        )} ${activeLinkClasses}`}
        ref={ref}
        target={target}
        aria-label="social"
        {...props}
      >
        {children}
      </Link>
    );
  },
);
NavigationLink.displayName = 'Link';

export { NavigationLink, linkVariants };
