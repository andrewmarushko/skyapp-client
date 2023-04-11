import { FunctionComponent } from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva(
  'text-black dark:text-white font-bold leading-tight',
  {
    variants: {
      size: {
        default: 'text-6xl md:text-8xl lg:text-8xl',
        lg: 'text-7xl md:text-8xl lg:text-9xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
        title: 'text-4xl md:text-64 md:leading-74'
      },
      headingStyles: {
        title: 'max-w-full md:max-w-[800px] tracking-tightTitle text-center',
        default: 'tracking-tighter'
      }
    },
    defaultVariants: {
      size: 'default',
      headingStyles: 'default'
    },
  },
);

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FunctionComponent<LargeHeadingProps> = ({
  children,
  className,
  size,
  headingStyles,
  ...props
}) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, headingStyles, className }))}>
      {children}
    </h1>
  );
};

export default LargeHeading;
