import { LanguageSchema } from './LanguageSchema';

export const en: LanguageSchema = {
  auth: {
    _loginError: 'login or password are incorrect',
    _registerError: 'Registration failed',
  },
  loginPage: {
    _header: {
      title: 'Sign in',
    },
    _form: {
      email: 'Email',
      password: 'Password',
      footer: "Haven't account yet?",
      footerLink: 'Register',
      submitBtn: 'SIGN IN',
    },
  },
  registerPage: {
    _header: {
      title: 'Sing up',
    },
    _form: {
      firstName: 'Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'PHONE',
      TIN: 'Tax identify number',
      password: 'Password',
      footer: "You've already registered?",
      footerLink: 'Sing in',
      submitBtn: 'SIGN UP',
    },
  },
  userAccountPage: {
    _header: {
      title: 'My account',
    },
    _form: {
      firstName: 'FirstName',
      lastName: 'LastName',
      email: 'Email',
      phone: 'PHONE',
      password: 'Password',
      switchBtn: 'Edit mode',
      submitBtn: 'SAVE',
    },
  },
};
