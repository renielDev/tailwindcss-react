import { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../shared/utils";

const containerVariants = cva("flex", {
  variants: {
    intent: {
      inline: "flex-col",
      row: "flex-row"
    },
  },
  defaultVariants: {
    intent: "inline"
  }
})

const inputVariants = cva("transition-opacity duration-300 hover:opacity-75", {
  variants: {
    intent: {
      inline: "text-green-300",
      row: "text-red-600 mr-2"
    },
  },
  defaultVariants: {
    intent: "inline"
  }
})

type InputProps = VariantProps<typeof inputVariants>

interface InputLabelInterface extends InputHTMLAttributes<HTMLInputElement>, InputProps {
  label?: string;
}


const InputLabel = forwardRef<HTMLInputElement, InputLabelInterface>(({ label, value, onChange, intent, ...rest }, ref) => {
  const _inputClassName = cn(inputVariants({ intent }))
  const _containerClassName = cn(containerVariants({ intent }))

  return <div className={_containerClassName}>
    <label className={_inputClassName}>{label}</label>
    <input value={value} onChange={onChange} ref={ref} {...rest} />
  </div>
})

export default InputLabel;