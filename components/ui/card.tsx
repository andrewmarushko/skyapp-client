import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

const cardVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: 
          `relative pointer ease w-full flex flex-col overflow-hidden rounded bg-sk-light shadow-md transition-box-shadow duration-200 hover:shadow-lg focus:shadow-lg 
          dark:bg-sk-dark dark:shadow-sm dark:shadow-accent-300 dark:focus-within:shadow-accent-900 dark:hover:shadow-accent-900 dark:focus:shadow-accent-900`, 
      },
      fullWidth: {
        true: 'w-full' 
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


interface CardPropsInterface
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardPropsInterface>(({ className, variant, size, fullWidth, children, ...props }, ref) => {
  return (
    <div 
      className={cn(cardVariants({ variant, size, fullWidth, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = "Card"

export { Card, cardVariants }