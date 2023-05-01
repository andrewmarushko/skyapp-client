import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import ButtonLoading from '@/components/ui/button-loading';

const buttonVariants = cva(
  'flex items-center justify-center rounded font-medium transition-shadow transition-colors disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'text-geist-action-large-font bg-button-default-bg border text-button-default-fg border-button-default-border hover:bg-button-default-bg-hover hover:text-button-default-fg-hover hover:border-button-default-border-hover active:select-none active:shadow-none active:bg-button-default-bg-active active:text-button-default-fg-active active:border-button-custom-fg-hover',
        ghost: 'bg-transparent hover:bg-accent-800 dark:hover:bg-accent-200',
        action:
          'bg-violet text-accent-900 border border-violet text-sm min-w-164 max-w-164 hover:text-violet hover:bg-sk-light active:select-none active:bg-accent-700 active:dark:bg-accent-100 dark:active:bg-accent-100 dark:hover:text-hightlight-purple dark:hover:border-hightlight-purple dark:hover:bg-sk-dark disabled:bg-accent-100 disabled:text-accent-300 disabled:border-accent-300',
        cta: 'bg-accent border border-accent text-sm text-accent-900 hover:bg-accent-900 hover:text-accent hover:border hover:border-accent',
        burger:
          'w-6 h-10 flex justify-center items-center rounded bg-transparent border-none transition-background-color duration-200 ease select-none',
        mobileNav: 'font-normal inline-block',
        subscribe:
          'bg-sk-light dark:bg-sk-dark text-accent-400 dark:text-accent-800 hover:text-accent dark:hover:text-accent-400 focus-visible:outline-none focus-visible:shadow-focus-shadow text-xs rounded-xs absolute right-1 top-1/2 -translate-y-1/2 border border-experimental-gray-a-200',
      },
      fullWidth: {
        true: 'w-full',
      },
      loading: {
        true: '',
      },
      size: {
        default:
          'h-geist-action-height leading-geist-action-height px-geist-gap-half',
        lg: 'h-geist-action-large-height leading-geist-action-large-height px-geist-gap-half',
        sm: 'h-geist-action-small-height leading-geist-action-small-height px-geist-gap-half',
        xs: 'py-0.5 px-1.5',
        noPaddings: 'p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, fullWidth, loading, children, ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, fullWidth, loading, className }),
        )}
        ref={ref}
        {...props}
      >
        {loading && <ButtonLoading />} {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
