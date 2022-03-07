import { FC, useCallback, useState } from "react"
import PageTitle from "../PageTitle/PageTitle"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
import classes from "./Forms.module.css"

export const Forms: FC = props => {
  const [isSignUp, setIsSignUp] = useState(true)
  const toggle = useCallback(() => {
    setIsSignUp(prev => !prev)
  }, [])

  return (
    <main className={classes.Main}>
      <PageTitle>Hello</PageTitle>
      <div>{isSignUp ? <SignUpForm toggle={toggle} /> : <SignInForm toggle={toggle} />}</div>
    </main>
  )
}

export default Forms
