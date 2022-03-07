import { ButtonHTMLAttributes, FC } from "react"
import Spinner from "../Spinner/Spinner"
import classes from "./Button.module.css"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode?: "ghost" | "primary"
  isLoading?: boolean
}

export const Button: FC<Props> = ({ children, className, isLoading, mode = "primary", ...props }) => {
  const modeToClassNameMap = {
    ghost: "Ghost",
    primary: "Primary",
  }

  return (
    <button className={`${classes.Button} ${classes[modeToClassNameMap[mode]]} ${className || ""}`} {...props}>
      {!isLoading ? children : <Spinner />}
    </button>
  )
}

export default Button
