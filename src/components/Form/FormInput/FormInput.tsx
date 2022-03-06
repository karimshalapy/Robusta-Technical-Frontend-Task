import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import classes from './FormInput.module.css'

type Props = InputHTMLAttributes<HTMLInputElement> & {
    type: HTMLInputTypeAttribute
}

export const FormInput: FC<Props> = ({ children, required, ...rest }) => {
    return (
        <label className={classes.FormInput}>
            {children}
            <input {...rest} required={required} aria-required={required} />
        </label>
    )
}

export default FormInput
