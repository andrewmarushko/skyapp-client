import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import ButtonLoading from '@/ui/button-loading';

const buttonVariants = cva(
  'flex items-center justify-center rounded font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-button-accent-200 border text-accent-900 border-accent-200 hover:bg-accent-400 hover:text-accent-900 hover:border-accent-400',
        ghost: 'bg-transparent hover:bg-accent-800 dark:hover:bg-accent-200',
        action:
          'bg-violet text-accent-900 border border-violet text-sm min-w-164 max-w-164 hover:text-violet hover:bg-sk-light active:select-none active:bg-accent-700 active:dark:bg-accent-100 dark:active:bg-accent-100 dark:hover:text-hightlight-purple dark:hover:border-hightlight-purple dark:hover:bg-sk-dark disabled:bg-accent-100 disabled:text-accent-300 disabled:border-accent-300',
        cta: 'bg-accent border border-accent text-sm text-accent-900 hover:bg-accent-900 hover:text-accent hover:border hover:border-accent',
        burger:
          'w-6 h-10 flex justify-center items-center rounded bg-transparent border-none transition-background-color duration-200 ease select-none',
        mobileNav: 'font-normal inline-block',
        subscribe:
          'bg-sk-light dark:bg-accent-100 text-accent-400 dark:text-accent-400 hover:text-accent dark:hover:text-accent-800 focus-visible:outline-none focus-visible:shadow-focus text-xs rounded-xs absolute right-1 top-1/2 -translate-y-1/2 border border-accent-700 hover:border-accent-200 dark:border-accent-400 dark:hover:border-accent-800',
        reset: 
          `text-accent-400 dark:text-accent-500 transition-colors duration-200 hover:text-accent dark:hover:text-accent-900
          border border-accent-700 hover:border-accent-500 dark:border-accent-400 dark:hover:border-accent-700 lg:border-none
          `
      },
      fullWidth: {
        true: 'w-full',
      },
      loading: {
        true: '',
      },
      size: {
        noPaddings: 'p-0',
        xs: 'py-0.5 px-1.5',
        sm: 'p-2',
        default:'px-3',
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
