
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { forwardRef } from "react"

const inputsVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: 
          'border-0 w-full bg-experimental-gray dark:bg-experimental-gray-dark h-full rounded-md text-sm text-experimental-gray-900 dark:text-experimental-gray-dark-900 px-0 pr-20 pl-3',
      },
      fullWidth: {
        true: 'w-full' 
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, 
    VariantProps<typeof inputsVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <input
        className={cn(inputsVariants({variant, fullWidth, className}))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
