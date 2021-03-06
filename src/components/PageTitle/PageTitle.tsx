import { FC } from "react"
import classes from "./PageTitle.module.css"

interface Props {}

/** Renders a heading `h1` with the required styling */
export const PageTitle: FC<Props> = ({ children }) => {
  return <h1 className={classes.PageTitle}>{children}</h1>
}

export default PageTitle
