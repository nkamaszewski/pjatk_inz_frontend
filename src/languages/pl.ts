import { LanguageSchema } from './LanguageSchema';

export const pl: LanguageSchema = {
  auth: {
    _loginError: 'Login lub hasło niepoprawne',
    _registerError: 'Rejestracja nie powiodła się',
  },
  loginPage: {
    _header: {
      title: 'Logowanie',
    },
    _form: {
      email: 'Email',
      password: 'Hasło',
      footer: 'Nie masz konta?',
      footerRemind: 'Zapomniałeś hasła?',
      footerLink: 'Zarejestruj sie',
      footerRemindLink: 'Przypomnij',
      submitBtn: 'Zaloguj się',
    },
  },
  registerPage: {
    _header: {
      title: 'Zarejestruj się',
    },
    _form: {
      firstName: 'Imię',
      lastName: 'Nazwisko',
      email: 'Email',
      phone: 'Telefon',
      TIN: 'Pesel',
      password: 'Hasło',
      footer: 'Masz już konto?',
      footerLink: 'Zaloguj się',
      submitBtn: 'ZAREJESTRUJ',
    },
  },
  remindPage: {
    _header: {
      title: 'Odzyskiwanie hasła',
    },
    _form: {
      email: 'Email',
      footer: 'Masz już konto?',
      footerLink: 'Zaloguj się',
      submitBtn: 'WYŚLIJ',
    },
  },
  userAccountPage: {
    _header: {
      title: 'Moje konto',
    },
    _form: {
      firstName: 'Imię',
      lastName: 'Nazwisko',
      email: 'Email',
      phone: 'Telefon',
      password: 'Hasło',
      switchBtn: 'Tryb edycji',
      submitBtn: 'ZAPISZ',
      submitSuccess: 'zapisano użytkownika',
      submitError: 'Błąd! nie udało się zapisać użytkownika',
    },
  },
  //TODO: refactor the code above
  restorePassword: 'Przywróć hasło',
  password: 'hasło',
  confirmPassword: 'potwierdź hasło',
  confirmAccount: 'Masz już konto?',
  login: 'Zaloguj się',
  submit: 'WYŚLIJ',
  changePassword: 'zmień hasło',
  validation: {
    loginRequired: 'podanie email / login jest wymagane',
    emailFormat: 'niepoprawny format email',
    passwordRequired: 'hasło jest wymagane',
    passwordFormat: 'hasło powinno zawierać co najmniej 5 znaków',
    passwordConfirmFormat: 'hasło i powtórz hasło powinno być takie samo',
  },
};
