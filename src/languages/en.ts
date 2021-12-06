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
      footerRemind: 'Forgot password?',
      footerLink: 'Register',
      footerRemindLink: 'Remind me!',
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
  remindPage: {
    _header: {
      title: 'Reset password',
    },
    _form: {
      email: 'Email',
      footer: "You've already registered?",
      footerLink: 'Sing in',
      submitBtn: 'SEND',
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
      submitSuccess: 'User saved',
      submitError: 'Error! user not saved',
    },
  },
  //TODO: refactor the code above
  restorePassword: 'Restore password',
  setPassword: 'Set your password',
  password: 'password',
  currentPassword: 'current password',
  newPassword: 'new password',
  confirmNewPassword: 'confirm new password',
  confirmPassword: 'confirm password',
  confirmAccount: "You've already registered?",
  login: 'Sing in',
  submit: 'SEND',
  changePassword: 'change password',
  theme: 'theme',
  dark: 'dark',
  light: 'light',
  employees: 'employees',
  lastName: 'last name',
  firstName: 'first name',
  department: 'department',
  division: 'division',
  position: 'position',
  groups: 'groups',
  name: 'name',
  participantsAmount: 'participants amount',
  validation: {
    loginRequired: 'email / login is required',
    emailFormat: 'incorrect email format',
    passwordRequired: 'password is required',
    passwordFormat: 'password should contain min 5 chars',
    passwordConfirmFormat: 'password and confirm password are NOT the same',
  },
  errorBoundary: {
    message: 'Something gone wrong... Relax and return to the app',
    button: 'Retry!',
  },
  noContent: 'No data to display...',
};
