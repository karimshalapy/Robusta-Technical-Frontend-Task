import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import { FieldValues, useFormContext, UseFormRegister } from 'react-hook-form'
import classes from './FormInput.module.css'

type Props = InputHTMLAttributes<HTMLInputElement> & {
    type: HTMLInputTypeAttribute
    name: string
    registerConfig: Parameters<UseFormRegister<FieldValues>>
}

export const FormInput: FC<Props> = ({ children, registerConfig, ...props }) => {
    const { register, formState: { errors } } = useFormContext()
    const errorMessage = errors[props.name]?.message

    return (
        <label className={classes.FormInput}>
            {children}
            <div className={classes.InputContainer}>
                <input {...props} aria-required={props.required} aria-invalid={!!errorMessage} {...register.apply(this, registerConfig)} />
                <span className={classes.Error} {...!!errorMessage ? { role: "alert" } : {}}>{errorMessage}</span>
            </div>
        </label>
    )
}

export default FormInput
