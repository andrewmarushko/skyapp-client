import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { FunctionComponent } from 'react';

const contentVariants = cva(
  "my-6 md:my-8",
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

interface ContentPropsInterface
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentVariants> {}

export const Content: FunctionComponent<ContentPropsInterface> = ({children, variant, className}) => {
  return (
    <div className={cn(contentVariants({ variant, className }))}>
      {children}
    </div>
  );
}
