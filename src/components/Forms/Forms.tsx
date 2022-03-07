import { FC, useCallback, useState } from "react"
import { SubmitHandler } from "react-hook-form"
import { PageTitle } from ".."
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
import classes from "./Forms.module.css"

export const Forms: FC = props => {
  const [isSignUp, setIsSignUp] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<"success" | "failed" | null>(null)
  const toggle = useCallback(() => {
    setIsSignUp(prev => !prev)
  }, [])

  const onSubmitCreator: <T extends {}>(url: string) => SubmitHandler<T> = (url: string) => data => {
    setIsLoading(true)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setIsLoading(false)
        setResult("success")
      })
      .catch(err => {
        console.error(err)
        setIsLoading(false)
        setResult("failed")
      })
  }

  return (
    <main className={classes.Main}>
      <PageTitle>Hello</PageTitle>
      <div aria-live="polite" aria-busy={isLoading}>
        {isSignUp ? (
          <SignUpForm
            isLoading={isLoading}
            result={result}
            onSubmit={onSubmitCreator("https://private-b2e6827-robustatask.apiary-mock.com/auth/register")}
            toggle={toggle}
          />
        ) : (
          <SignInForm
            isLoading={isLoading}
            result={result}
            onSubmit={onSubmitCreator("https://private-b2e6827-robustatask.apiary-mock.com/auth/login")}
            toggle={toggle}
          />
        )}
      </div>
    </main>
  )
}

export default Forms
