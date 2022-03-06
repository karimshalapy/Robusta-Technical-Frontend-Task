import { FC } from 'react';
import classes from './Form.module.css';
import FormInput from './FormInput/FormInput';

export const Form: FC = () => {
  return (
    <form className={classes.Form} aria-labelledby="signup">
      <fieldset>
        <legend id="signup">Sign-up</legend>
        <FormInput type="text" name="fullName" id="full-name" required>
          Full Name
        </FormInput>
        <FormInput type="email" name="email" id="email" required>
          Email
        </FormInput>
        <FormInput type="text" name="username" id="username" required>
          Username
        </FormInput>
        <FormInput type="password" name="password" id="password" required>
          Password
        </FormInput>
        <FormInput type="password" name="rePassword" id="re-password" required>
          Re-enter Password
        </FormInput>
      </fieldset>
      <button id="submit" type="submit">Submit</button>
    </form>
  );
}

export default Form;
