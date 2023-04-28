import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

const cardVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: 
          "pointer ease flex h-full w-full max-w-xs flex-col overflow-hidden rounded bg-sk-light text-inherit no-underline shadow-geist-shadow-sm transition-box-shadow duration-200 focus-within:shadow-geist-border-shadow-white hover:shadow-geist-border-shadow-white focus:shadow-geist-border-shadow-white dark:bg-sk-dark dark:shadow-geist-shadow-sm-dark dark:focus-within:shadow-geist-border-shadow-white-dark dark:hover:shadow-geist-border-shadow-white-dark dark:focus:shadow-geist-border-shadow-white-dark", 
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