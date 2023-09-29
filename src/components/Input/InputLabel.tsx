import { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../shared/utils";
import './InputLabel.scss'

const containerVariants = cva("flex group", {
  variants: {
    intent: {
      float: "pt-5 relative",
      inline: "flex-row items-center",
      top: "flex-col"
    },
  },
  defaultVariants: {
    intent: "inline"
  }
})

const inputLabelVariants = cva("dark:text-gray-300", {
  variants: {
    intent: {
      float: "floating-label",
      inline: "mr-2",
      top: ""
    },
  },
  defaultVariants: {
    intent: "inline"
  }
})

const inputVariants = cva("placeholder-transparent peer outline-none px-2 py-1 rounded-sm")

type InputProps = VariantProps<typeof inputLabelVariants>

interface InputLabelInterface extends InputHTMLAttributes<HTMLInputElement>, InputProps {
  label?: string;
}

const InputLabel = forwardRef<HTMLInputElement, InputLabelInterface>(({ label, value, onChange, intent, ...rest }, ref) => {
  const _inputLabelClassName = cn(inputLabelVariants({ intent }))
  const _containerClassName = cn(containerVariants({ intent }))
  const _inputClassName = cn(inputVariants());

  return <div className={_containerClassName}>
    {intent !== 'float' && <label className={_inputLabelClassName}>{label}</label>}
    <input className={_inputClassName} placeholder={label} value={value} onChange={onChange} ref={ref} {...rest} />
    {intent === 'float' && <label className={_inputLabelClassName}>{label}</label>}
  </div>
})

export default InputLabel;