import { FC, FormHTMLAttributes } from "react"
import { Slate } from ".."
import classes from "./Form.module.css"

/** Renders a form element with nested styling applied */
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
