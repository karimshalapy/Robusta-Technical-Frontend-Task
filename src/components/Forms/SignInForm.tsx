import { FC } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import Button from "../Button/Button"
import Form from "../Form/Form"
import FormInput from "../FormInput/FormInput"
import Slate from "../Slate/Slate"

interface Props {
  toggle: () => void
  isLoading: boolean
  onSubmit: SubmitHandler<Inputs>
  result: "success" | "failed" | null
}

type Inputs = {
  email: string
  password: string
}

export const SignInForm: FC<Props> = ({ toggle, isLoading, result, onSubmit }) => {
  const methods = useForm<Inputs>({ mode: "onChange" })
  const {
    handleSubmit,
    formState: { isValid },
  } = methods

  return result == null ? (
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
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your E-mail"
            registerConfig={[
              "email",
              {
                required: "This field is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
                  message: "Please, enter a valid email",
                },
              },
            ]}
            autoComplete="email"
            disabled={isLoading}
            aria-disabled={isLoading}
            required
          >
            Email
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
  ) : (
    <Slate>
      <p>{result === "success" ? "Logged in successfully! 🎉 🎊" : "Something went wrong! 💔"}</p>
    </Slate>
  )
}

export default SignInForm
