import { FC, useRef } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Button, Form, FormInput, Slate } from ".."

interface Props {
  toggle: () => void
  isLoading: boolean
  onSubmit: SubmitHandler<Inputs>
  result: "success" | "failed" | null
}

type Inputs = {
  fullName: string
  email: string
  username: string
  password: string
  rePassword: string
}

/** Renders the sign-up form */
export const SignUpForm: FC<Props> = ({ toggle, isLoading, result, onSubmit }) => {
  const methods = useForm<Inputs>({ mode: "onChange" })
  const {
    handleSubmit,
    watch,
    formState: { isValid },
  } = methods
  const password = useRef({})
  password.current = watch("password", "")

  return result == null ? (
    <FormProvider {...methods}>
      <Form aria-labelledby="sign-up" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend id="sign-up">Create an Account</legend>
          <p>
            Already have an account? Log in{" "}
            <Button mode="ghost" type="button" onClick={toggle} disabled={isLoading} aria-disabled={isLoading}>
              here
            </Button>
          </p>

          <FormInput
            type="text"
            name="fullName"
            id="full-name"
            placeholder="Enter Your Full Name"
            registerConfig={[
              "fullName",
              {
                required: "This field is required",
                pattern: {
                  value: /^([^0-9]*)$/g,
                  message: "Full name must not contain any numbers",
                },
              },
            ]}
            autoComplete="name"
            disabled={isLoading}
            aria-disabled={isLoading}
            required
          >
            Full Name
          </FormInput>

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
            type="text"
            name="username"
            id="username"
            placeholder="Enter Your Username"
            registerConfig={[
              "username",
              {
                required: "This field is required",
                pattern: {
                  message: "Username must not contain special characters",
                  value: /^[a-zA-Z0-9]*$/g,
                },
                minLength: {
                  value: 5,
                  message: "Username must be at least 5 characters",
                },
              },
            ]}
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
            registerConfig={[
              "password",
              {
                required: "This field is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g,
                  message:
                    "Password must contain at least one lowercase character, one uppercase character, and one number",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 32,
                  message: "Password can't contain more than 32 characters",
                },
              },
            ]}
            autoComplete="password"
            disabled={isLoading}
            aria-disabled={isLoading}
            required
          >
            Password
          </FormInput>

          <FormInput
            type="password"
            name="rePassword"
            id="re-password"
            placeholder="Re-enter Your Password"
            registerConfig={[
              "rePassword",
              {
                required: "This field is required",
                validate: value => value === password.current || "The passwords don't match",
              },
            ]}
            autoComplete="password"
            disabled={isLoading}
            aria-disabled={isLoading}
            required
          >
            Re-enter Password
          </FormInput>
        </fieldset>
        <Button
          id="submit"
          type="submit"
          aria-disabled={!isValid || isLoading}
          disabled={!isValid || isLoading}
          isLoading={isLoading}
        >
          Submit
        </Button>
      </Form>
    </FormProvider>
  ) : (
    <Slate>
      <p>{result === "success" ? "Account created successfully! 🎉 🎊" : "Something went wrong! 💔"}</p>
    </Slate>
  )
}

export default SignUpForm
