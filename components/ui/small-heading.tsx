import { FunctionComponent } from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva(
  '',
  {
    variants: {
      size: {
        default: '',
      },
      headingStyles: {
        default: 'font-semibold text-2xl tracking-tight',
        uppercase: 'uppercase font-bold'
      },
    },
    defaultVariants: {
      size: 'default',
      headingStyles: 'default',
    },
  },
);

interface SmallHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const SmallHeading: FunctionComponent<SmallHeadingProps> = ({
  children,
  className,
  size,
  headingStyles,
  ...props
}) => {
  return (
    <h3
      {...props}
      className={cn(headingVariants({ size, headingStyles, className }))}
    >
      {children}
    </h3>
  );
};

export default SmallHeading;
