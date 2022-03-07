import { FC, useCallback, useState } from "react"
import PageTitle from "../PageTitle/PageTitle"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
import classes from "./Forms.module.css"

export const Forms: FC = props => {
  const [isSignUp, setIsSignUp] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const toggle = useCallback(() => {
    setIsSignUp(prev => !prev)
  }, [])

  return (
    <main className={classes.Main}>
      <PageTitle>Hello</PageTitle>
      <div aria-live="polite" aria-busy={isLoading}>
        {isSignUp ? (
          <SignUpForm isLoading={isLoading} setIsLoading={setIsLoading} toggle={toggle} />
        ) : (
          <SignInForm isLoading={isLoading} setIsLoading={setIsLoading} toggle={toggle} />
        )}
      </div>
    </main>
  )
}

export default Forms
