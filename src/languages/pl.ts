import { LanguageSchema } from './LanguageSchema';

export const pl: LanguageSchema = {
  loginPage: {
    _header: {
      title: 'Logowanie',
    },
    _form: {
      email: 'Email',
      password: 'Hasło',
      footer: 'Nie masz konta?',
      footerLink: 'Zarejestruj sie',
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
};
