import { FC, FormHTMLAttributes } from "react"
import Slate from "../Slate/Slate"
import classes from "./Form.module.css"

export const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({ children, ...props }) => {
  return (
    <Slate>
      <form className={classes.Form} {...props}>
        {children}
      </form>
    </Slate>
  )
}

export default Form
