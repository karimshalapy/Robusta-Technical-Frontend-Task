import { FC } from "react"
import classes from "./Slate.module.css"

/** A wrapper component that renders a `div` element with the required styles to make a white slate */
export const Slate: FC = ({ children }) => {
  return <div className={classes.Slate}>{children}</div>
}

export default Slate
