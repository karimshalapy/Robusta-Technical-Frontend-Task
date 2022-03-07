import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"
import { FieldValues, useFormContext, UseFormRegister } from "react-hook-form"
import classes from "./FormInput.module.css"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type: HTMLInputTypeAttribute
  name: string
  registerConfig: Parameters<UseFormRegister<FieldValues>>
}

/** Renders an input element with all the corresponding label and error elements */
export const FormInput: FC<Props> = ({ children, registerConfig, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const errorMessage = errors[props.name]?.message
  const labelId = props.id + "-label"
  const errorId = props.id + "-error"

  return (
    <div className={classes.FormInput}>
      <label id={labelId} htmlFor={props.id}>
        {children}
      </label>
      <div className={classes.InputContainer}>
        <input
          {...props}
          aria-required={props.required}
          aria-invalid={!!errorMessage}
          aria-labelledby={`${labelId} ${errorId}`}
          {...register.apply(this, registerConfig)}
        />
        <p className={classes.Error} id={errorId} role="alert">
          {errorMessage}
        </p>
      </div>
    </div>
  )
}

export default FormInput
