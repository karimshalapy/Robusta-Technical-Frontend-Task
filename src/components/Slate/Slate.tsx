import { FC } from "react"
import classes from "./Slate.module.css"

export const Slate: FC = ({ children }) => {
  return <div className={classes.Slate}>{children}</div>
}

export default Slate
