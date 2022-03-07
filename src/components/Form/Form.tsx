import { FC, useRef } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import classes from './Form.module.css';
import FormInput from './FormInput/FormInput';

type Inputs = {
  fullName: string,
  email: string,
  username: string,
  password: string,
  rePassword: string,
};

export const Form: FC = () => {
  const methods = useForm<Inputs>({ mode: "onTouched" });
  const { handleSubmit, watch, formState: { isValid } } = methods
  const password = useRef({})
  password.current = watch("password", "")
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)



  return (
    <FormProvider {...methods}>
      <form className={classes.Form} aria-labelledby="signup" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend id="signup">Create an Account</legend>
          <p className={classes.Switch}>Already have an account? Log in <button>here</button></p>

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
                  message: "Full name must not contain any numbers"
                }
              }
            ]}
            autoComplete="name"
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
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
                  message: "Please, enter a valid email"
                }
              }
            ]}
            autoComplete="email"
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
                  value: /^[a-zA-Z0-9]*$/g
                },
                minLength: {
                  value: 5,
                  message: "Username must be at least 5 characters"
                }
              }
            ]}
            autoComplete="username"
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
                  message: "Password must contain at least one lowercase character, one uppercase character, and one number"
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                },
                maxLength: {
                  value: 32,
                  message: "Password can't contain more than 32 characters"
                }
              }
            ]}
            autoComplete="password"
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
                validate: value => value === password.current || "The passwords don't match"
              }
            ]}
            autoComplete="password"
            required
          >
            Re-enter Password
          </FormInput>
        </fieldset>
        <button id="submit" type="submit" aria-disabled={!isValid} disabled={!isValid}>Submit</button>
      </form>
    </FormProvider>
  );
}

export default Form;
