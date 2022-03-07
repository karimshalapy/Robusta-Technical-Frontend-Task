import { FC } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import Button from "../Button/Button"
import Form from "../Form/Form"
import FormInput from "../FormInput/FormInput"

interface Props {
  toggle: () => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

type Inputs = {
  username: string
  password: string
}

export const SignInForm: FC<Props> = ({ toggle, isLoading, setIsLoading }) => {
  const methods = useForm<Inputs>({ mode: "onTouched" })
  const {
    handleSubmit,
    formState: { isValid },
  } = methods
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return (
    <FormProvider {...methods}>
      <Form aria-labelledby="sing-in" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend id="sing-in">Sign in</legend>
          <p>
            Don't have an account? create a new one{" "}
            <Button mode="ghost" type="button" onClick={toggle} disabled={isLoading} aria-disabled={isLoading}>
              here
            </Button>
          </p>

          <FormInput
            type="text"
            name="username"
            id="username"
            placeholder="Enter Your Username"
            registerConfig={["username", { required: "This field is required" }]}
            autoComplete="username"
            disabled={isLoading}
            aria-disabled={isLoading}
            required
          >
            Username
          </FormInput>

          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            registerConfig={["password", { required: "This field is required" }]}
            autoComplete="password"
            disabled={isLoading}
            aria-disabled={isLoading}
            required
          >
            Password
          </FormInput>
        </fieldset>
        <Button id="submit" type="submit" aria-disabled={!isValid || isLoading} disabled={!isValid || isLoading}>
          Submit
        </Button>
      </Form>
    </FormProvider>
  )
}

export default SignInForm
