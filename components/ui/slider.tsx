import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

const sliderVariants = cva(
  "snap-mandatory overflow-x-auto",
  {
    variants: {
      variant: {
        default: 
          '',
        feedbacks: 
          'flex p-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4',
        googlePhotos:
          'flex p-2 gap-8',
        promoted:
          '-mt-8 mb-16 flex justify-start py-8 lg:container'
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SliderPropsInterface
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sliderVariants> {}

const Slider = forwardRef<HTMLDivElement, SliderPropsInterface>(({ className, variant, children, ...props }, ref) => {
  return (
    <div 
      className={cn(sliderVariants({ variant, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})

Slider.displayName = "Slider"

export { Slider }
