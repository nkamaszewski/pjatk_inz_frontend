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
    };
  };
}
