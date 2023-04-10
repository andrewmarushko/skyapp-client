import { FunctionComponent } from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

//  TODO: Make the same styles as vercel.com or nextjs.org have
const headingVariants = cva(
  'text-black dark:text-white font-bold leading-tight',
  {
    variants: {
      size: {
        default: 'text-6xl md:text-8xl lg:text-8xl',
        lg: 'text-7xl md:text-8xl lg:text-9xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
        hero: 'text-64 leading-74'
      },
      otherStyles: {
        hero: 'md:max-w-[800px] max-w-full tracking-tightTitle text-center',
        default: 'tracking-tighter'
      }
    },
    defaultVariants: {
      size: 'default',
      otherStyles: 'default'
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
  otherStyles,
  ...props
}) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, otherStyles, className }))}>
      {children}
    </h1>
  );
};

export default LargeHeading;
