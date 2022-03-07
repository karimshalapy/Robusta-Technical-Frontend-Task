import { FC, FormHTMLAttributes } from 'react'
import classes from './Form.module.css'


export const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({ children, ...props }) => {
    return (
        <form
            className={classes.Form}
            {...props}
        >
            {children}
        </form>
    )
}

export default Form
