import { FC } from "react"
import { CircleArrow } from "../../assets/svgs"
import classes from "./Spinner.module.css"

interface Props {}

/** Renders a loading spinner */
export const Spinner: FC<Props> = props => {
  return (
    <div className={classes.Spinner} aria-label="Loading">
      <CircleArrow />
    </div>
  )
}

export default Spinner
