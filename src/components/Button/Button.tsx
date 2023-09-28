import { ButtonHTMLAttributes, forwardRef } from "react";
import {cva, type VariantProps} from 'class-variance-authority'
import { cn } from "../../shared/utils";

const buttonVariants = cva("transition-opacity duration-300 hover:opacity-75", {
  variants: {
    intent: {
      default: "bg-white",
      primary: "bg-blue-200",
      secondary: "bg-green-200",
      warning: "bg-orange-200",
      danger: "bg-red-200",
    },
    size: {
      default: "px-4 py-3",
      small: "px-2 py-1",
      medium: "px-3 py-2",
      large: "px-6 py-5"
    },
    border: {
      default: "",
      rounded: "rounded-sm",
      "super-rounded": "rounded-full",
    }
  },
  defaultVariants: {
    intent: 'default',
    size: 'default',
    border: 'rounded'
  }
})

type ButtonVariantProps = VariantProps<typeof buttonVariants>

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({intent, size, border, className, ...props}, ref) => {
  console.log(buttonVariants({intent, size, className}))
  const _className = cn(buttonVariants({intent, size, border, className}))
  return (
    <button ref={ref} className={_className} {...props} />
  );
});

export default Button;