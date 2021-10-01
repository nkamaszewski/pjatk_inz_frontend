export interface LanguageSchema {
  auth: {
    _loginError: string;
    _registerError: string;
  };
  loginPage: {
    _header: {
      title: string;
    };
    _form: {
      email: string;
      password: string;
      footer: string;
      footerRemind: string;
      footerLink: string;
      footerRemindLink: string;
      submitBtn: string;
    };
  };
  remindPage: {
    _header: {
      title: string;
    };
    _form: {
      email: string;
      footer: string;
      footerLink: string;
      submitBtn: string;
    };
  };
  registerPage: {
    _header: {
      title: string;
    };
    _form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      TIN: string;
      password: string;
      footer: string;
      footerLink: string;
      submitBtn: string;
    };
  };
  userAccountPage: {
    _header: {
      title: string;
    };
    _form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      password: string;
      switchBtn: string;
      submitBtn: string;
      submitSuccess: string;
      submitError: string;
    };
  };
  //TODO: refactor the code above
  restorePassword: string;
  password: string;
  confirmPassword: string;
  confirmAccount: string;
  login: string;
  submit: string;
  changePassword: string;
  theme: string;
  dark: string;
  light: string;
  employees: string;
  lastName: string;
  firstName: string;
  department: string;
  division: string;
  position: string;
  groups: string;
  name: string;
  participantsAmount: string;
  validation: {
    loginRequired: string;
    emailFormat: string;
    passwordRequired: string;
    passwordFormat: string;
    passwordConfirmFormat: string;
  };
}
