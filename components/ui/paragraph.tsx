import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const paragraphVariants = cva(
  "max-w-prose text-stone-700 dark:text-stone-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
      otherStyles: {
        hero: "text-2xl tracking-tightSubtitle text-accent-4",
        default: "",
      }
    },
    defaultVariants: {
      size: "default",
      otherStyles: "default"
    },
  }
);

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof paragraphVariants> { }

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, otherStyles, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, otherStyles, className }))}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
