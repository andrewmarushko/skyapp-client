
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

const pageVariants = cva(
  "flex w-full flex-col",
  {
    variants: {
      variant: {
        default: 
          "container",
        fluid:
          ""
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface PagePropsInterface
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageVariants> {}

const Page = forwardRef<HTMLDivElement, PagePropsInterface>(({ className, variant, children, ...props }, ref) => {
  return (
    <div
      className={cn(pageVariants({ variant, className }))}
      ref={ref}
      {...props}
      >
        {children}
    </div>
  );
});

Page.displayName = "Page"

export { Page, pageVariants }