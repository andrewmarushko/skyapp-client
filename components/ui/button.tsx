import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import ButtonLoading from "./button-loading"

const buttonVariants = cva(
  "flex items-center justify-center rounded font-medium transition-shadow transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "text-geist-form-large-font bg-button-default-bg border text-button-default-fg border-button-default-border hover:bg-button-default-bg-hover hover:text-button-default-fg-hover hover:border-button-default-border-hover active:select-none active:shadow-none active:bg-button-default-bg-active active:text-button-default-fg-active active:border-button-custom-fg-hover",
        ghost:
          "bg-transparent hover:bg-accent-800 dark:hover:bg-accent-200",
        form:
          "bg-violet text-accent-1000 border border-violet text-sm min-w-164 max-w-164 hover:text-violet hover:bg-sk-light active:select-none active:bg-accent-700 active:dark:bg-accent-100 dark:active:bg-accent-100 dark:hover:text-hightlight-purple dark:hover:border-hightlight-purple dark:hover:bg-sk-dark disabled:bg-accent-100 disabled:text-accent-300 disabled:border-accent-300",
      },
      fullWidth: {
        true: 'w-full' 
      },
      loading: {
        true: ''
      },
      size: {
        default: "h-geist-form-height leading-geist-form-height px-geist-gap-half",
        lg: "h-geist-form-large-height leading-geist-form-large-height px-geist-gap-half",
        sm: "h-geist-form-small-height leading-geist-form-small-height px-geist-gap-half",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, children, ...props }, ref) => {
    console
    return <button
      className={cn(buttonVariants({ variant, size, fullWidth, loading, className }))}
      ref={ref}
      {...props}
    >
      {loading && <ButtonLoading />} {children}
    </button>
  } 
)
Button.displayName = "Button"

export { Button, buttonVariants }