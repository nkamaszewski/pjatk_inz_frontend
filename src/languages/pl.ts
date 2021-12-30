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
  setPassword: 'Utwórz hasło',
  password: 'hasło',
  currentPassword: 'obecne hasło',
  newPassword: 'nowe hasło',
  confirmNewPassword: 'potwierdź nowe hasło',
  confirmPassword: 'potwierdź hasło',
  confirmAccount: 'Masz już konto?',
  login: 'Zaloguj się',
  submit: 'WYŚLIJ',
  changePassword: 'zmień hasło',
  theme: 'motyw',
  dark: 'ciemny',
  light: 'jasny',
  employees: 'pracownicy',
  applications: 'wnioski',
  training: 'szkoleniowe',
  trainings: 'szkolenia',
  trainingApplications: 'WNIOSKI O SZKOLENIA',
  trainingOrganizers: 'organizatorzy szkoleń',
  additional: 'dodatkowe',
  otherTtrainings: 'szkolenia inne',
  study: 'studia',
  courses: 'kursy',
  others: 'inne',
  organizators: 'organizatorzy',
  internalTrainings: 'szkolenia wewnętrzne',
  departmentsDivisions: 'piony - wydziały',
  positions: 'stanowiska',
  rooms: 'sale',
  coaches: 'szkoleniowcy',
  meetings: 'harmonogram',
  questionnaires: 'ankiety',
  company: 'firma',
  companyData: 'dane Firmy',
  myAccount: 'moje konto',
  lastName: 'Nazwisko',
  firstName: 'Imię',
  department: 'Pion',
  division: 'Wydział',
  position: 'stanowisko',
  edit: 'edytuj',
  group: 'grupa',
  groups: 'grupy',
  name: 'Nazwa',
  participantsAmount: 'Ilość uczestników',
  topic: 'Temat',
  subject: 'Kategoria',
  room: 'Sala',
  from: 'Od',
  to: 'Do',
  timetable: 'harmonogram',
  applicationsTrainingProposals: 'wnioski propozycje szkoleń',
  validationTable: 'Walidacja',
  status: 'Status',
  consisting: 'Składający',
  dateOfSubmission: 'Data złożenia',
  fieldsOfStudy: 'Kierunek',
  school: 'Uczelnia',
  city: 'Miasto',
  mode: 'Tryb',
  level: 'Poziom',
  price: 'Cena',
  organizer: 'Organizator',
  taxId: 'NIP',
  address: 'Adres',
  professionalTitle: 'Tytuł zawodowy',
  additionalApplications: 'WNIOSKI DODATKOWE',
  surface: 'Powierzchnia',
  cinematic: 'Kinowe',
  uWithoutATable: '"U" bez stołu',
  layoutU: '"U"',
  editMode: 'Tryb edycji',
  number: 'Numer',
  street: 'Ulica',
  postcode: 'Kod pocztowy',
  save: 'ZAPISZ',
  add: 'Dodaj',
  addDepartment: 'DODAJ PION',
  addDivision: 'DODAJ WYDZIAŁ',
  editDepartment: 'Edytuj pion',
  employment: 'zatrudnienie',
  dateFrom: 'Data od',
  dateTo: 'Data do',
  person: 'Osoba',
  filter: 'Filtruj:',
  all: 'Wszystkie',
  editMeeting: 'Edytuj spotkanie',
  addMeeting: 'Dodaj spotkanie',
  author: 'Autor',
  typeOfCourse: 'Rodzaj kursu',
  remove: 'usuń',
  internal: 'Wewnętrzne',
  external: 'Zewnętrzne',
  course: 'kurs',
  sendActivationLink: 'wyślij link aktywacyjny',
  addAPerson: 'dodaj osobę',
  addAPersonToTheDatabase: 'Dodaj osobę do bazy danych',
  emailInForm: 'Email',
  phoneInForm: 'Telefon',
  cancel: 'anuluj',
  validation: {
    loginRequired: 'podanie email / login jest wymagane',
    emailFormat: 'niepoprawny format email',
    passwordRequired: 'hasło jest wymagane',
    passwordFormat: 'hasło powinno zawierać co najmniej 5 znaków',
    passwordConfirmFormat: 'hasło i powtórz hasło powinno być takie samo',
  },
  errorBoundary: {
    message: 'Coś poszło nie tak... Spokojnie, możesz powrócić do aplikacji.',
    button: 'Wróć!',
  },
  noContent: 'Niestety, nic nie znaleźliśmy...',
};
