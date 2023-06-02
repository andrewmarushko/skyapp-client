import { FunctionComponent } from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva(
  '',
  {
    variants: {
      size: {
        default: 'text-3xl sm:text-4xl tracking-tight font-bold',
        sm: 'font-medium text-xl leading-5'
      },
      headingStyles: {
        default: '',
      },
    },
    defaultVariants: {
      size: 'default',
      headingStyles: 'default',
    },
  },
);

interface MediumHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const MediumHeading: FunctionComponent<MediumHeadingProps> = ({
  children,
  className,
  size,
  headingStyles,
  ...props
}) => {
  return (
    <h2
      {...props}
      className={cn(headingVariants({ size, headingStyles, className }))}
    >
      {children}
    </h2>
  );
};

export default MediumHeading;
