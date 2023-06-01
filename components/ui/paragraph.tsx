import { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const paragraphVariants = cva(
  '',
  {
    variants: {
      size: {
        default: '',
        sm: 'text-sm sm:text-base',
        lg: 'text-xl md:text-2xl',
      },
      paragraphStyles: {
        subtitle: 'tracking-tight-subtitle text-accent-400 text-center',
        description: 'text-accent-400 dark:text-accent-700 leading-7 text-justify',
        default: '',
      },
    },
    defaultVariants: {
      size: 'default',
      paragraphStyles: 'default',
    },
  },
);

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, paragraphStyles, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, paragraphStyles, className }))}
      >
        {children}
      </p>
    );
  },
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
