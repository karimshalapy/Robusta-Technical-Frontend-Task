import { ButtonHTMLAttributes, FC } from 'react'
import classes from './Button.module.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    mode?: "ghost" | "primary"
}

export const Button: FC<Props> = ({ children, className, mode = "primary", ...props }) => {
    const modeToClassNameMap = {
        "ghost": "Ghost",
        "primary": "Primary",
    }

    return (
        <button className={`${classes.Button} ${classes[modeToClassNameMap[mode]]} ${className || ""}`} {...props}>
            {children}
        </button>
    )
}

export default Button
