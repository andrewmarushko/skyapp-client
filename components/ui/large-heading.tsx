import { FunctionComponent } from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

//  TODO: Make the same styles as vercel.com or nextjs.org have
const headingVariants = cva(
  'text-black dark:text-white lg:text-left font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-6xl md:text-8xl lg:text-8xl',
        lg: 'text-7xl md:text-8xl lg:text-9xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
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
  ...props
}) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

export default LargeHeading;
