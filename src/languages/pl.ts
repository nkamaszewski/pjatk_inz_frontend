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
  trainingPropositions: 'propozycje szkoleń',
  additional: 'dodatkowe',
  otherTtrainings: 'szkolenia inne',
  study: 'studia',
  courses: 'kursy',
  others: 'inne',
  organizators: 'organizatorzy',
  internalTrainings: 'szkolenia wewnętrzne',
  departmentsDivisions: 'wydziały  - piony',
  positions: 'stanowiska',
  rooms: 'sale',
  coaches: 'szkoleniowcy',
  meetings: 'harmonogram',
  meetingsRemoved: 'usunięto spotkanie',
  meetingsAdded: 'dodano spotkanie',
  meetingsEdited: 'zaktualizaowano spotkanie',
  questionnaires: 'ankiety',
  scores: 'ankiety',
  company: 'firma',
  companyData: 'dane Firmy',
  myAccount: 'moje konto',
  lastName: 'Nazwisko',
  firstName: 'Imię',
  department: 'Wydział',
  deleteDepartment: 'Wydział usunięty',
  deleteDivision: 'Pion usunięty',
  division: 'Pion',
  position: 'stanowisko',
  positionRemoved: 'usunięto stanowisko',
  positionAdded: 'dodano stanowisko',
  positionEdited: 'zaktualizowano stanowisko',
  edit: 'edytuj',
  group: 'grupa',
  groups: 'grupy',
  groupsRemoved: 'usunięto grupę',
  groupsAdded: 'dodano grupę',
  groupsEdited: 'zaktualizowano grupę',
  name: 'Nazwa',
  participantsAmount: 'Ilość uczestników',
  topic: 'Temat',
  subject: 'Tematyka',
  room: 'Sala',
  from: 'Od',
  to: 'Do',
  timetable: 'harmonogram',
  applicationsTrainingProposals: 'wnioski propozycje szkoleń',
  validationTable: 'Zgodność',
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
  addDepartment: 'DODAJ WYDZIAŁ',
  addDivision: 'DODAJ PION',
  editDivision: 'Edytuj pion',
  editDepartment: 'Edytuj wydział',
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
  addAnApplication: 'Dodaj wniosek',
  theApplicationConcernsStudies: 'Wniosek dotyczy studiów?',
  isItInLineWithTheTermsOfReference: 'Czy zgodny z zakresem obowiązków?',
  studies: 'studia',
  application: 'wniosek',
  trainingApplication: 'Wniosek szkoleniowy',
  dateOfRegistration: 'Data rejestracji',
  participants: 'uczestnicy',
  addStudies: 'Dodaj studia',
  accommodationPrice: 'Cena zakwaterowania',
  theCostOfTransport: 'Koszt transportu',
  fieldOfStudy: 'Kierunek studiów',
  modeOfStudy: 'Tryb studiów',
  degreeOfStudy: 'Stopień studiów',
  shortName: 'Skrócona nazwa',
  addUniversities: 'dodaj uczelnię',
  addStudyMode: 'dodaj tryb studiów',
  addDegreeOfStudy: 'dodaj stopień studiów',
  addStudyModeToTheDatabase: 'Dodaj tryb studiów do bazy danych',
  addDegreeOfStudyToTheDatabase: 'Dodaj stopień studiów do bazy danych',
  addTheUniversityToTheDatabase: 'Dodaj uczelnię do bazy danych',
  trainer: 'Szkoleniowiec',
  reason: 'Powód',
  internalTraining: 'Szkolenie wewnętrzne:',
  addATrainingTopic: 'dodaj temat szkolenia',
  addACompany: 'dodaj firmę',
  addATrainer: 'dodaj szkoleniowca',
  addTheTrainingTopicToTheDatabase: 'Dodaj temat szkolenia do bazy danych',
  subjectForm: 'Tematyka',
  addTheSubjectOfTheTraining: 'dodaj tematykę szkolenia',
  addTheTrainingTopicToTheDatabaseV2: 'Dodaj tematykę szkolenia do bazy danych',
  addTheCompanyToTheDatabase: 'Dodaj firmę do bazy danych',
  addTheTrainerToTheDatabase: 'Dodaj szkoleniowca do bazy danych',
  academicTitle: 'Tytuł naukowy',
  addTraining: 'Dodaj szkolenie',
  editTraining: 'Edytuj szkolenie',
  companyV2: 'firmę',
  addressV2: 'Adres:',
  town: 'Miejscowość',
  roomV2: 'salę',
  areaInM2: 'Powierzchnia w m2',
  cinemaSetting: 'Ustawienie kinowe',
  schoolV2: 'Szkolne',
  schoolSetting: 'Ustawienie szkolne',
  settingUWithoutTable: 'Ustawienie "U" bez stołu',
  uSetting: 'Ustawienie "U"',
  type: 'Rodzaj',
  addGroup: 'Dodaj grupę',
  editGroup: 'Edytuj grupę',
  numberOfPeople: 'Liczba osób',
  participation: 'uczstnictwo',
  onlyActive: 'Tylko aktywne',
  assignAnEmployeeToAGroup: 'Przypisz pracownika do grupy',
  groupEmployees: 'Pracownicy grupy',
  employee: 'Pracownik',
  numberOfPeopleV2: ', liczba osób:',
  surfaceV2: ', powierzchnia:',
  cost: 'Koszt',
  questionnaire: 'ankietę',
  questionnaireAdded: 'dodano ankietę',
  yearOfApplication: 'Rok wniosku',
  addTheYearOfTheApplicationToTheDatabase: 'Dodaj rok wniosku do bazy danych',
  addTheYearOfTheApplication: 'dodaj rok wniosku',
  year: 'Rok',
  category: 'Propozycja tematu',
  link: 'Link',
  applicationAdded: 'Dodano wniosek',
  theApplicationCouldNotBeAdded: 'Nie udało się dodać wniosku',
  theApplicationHasBeenDeleted: 'Usunięto wniosek',
  theRequestCouldNotBeDeleted: 'Nie udało się usunąć wniosku!',
  theStudiesHaveBeenEdited: 'Studia zostały wyedytowane',
  studiesAdded: 'Dodano studia',
  theNameOfTheCertificate: 'Nazwa certyfikatu',
  endDate: 'Data zakończenia',
  addAParticipant: 'Dodaj uczestnika',
  employmentAdded: 'Dodano zatrudnienie',
  theOperationWasUnsuccessful: 'Operacja nie udała się',
  employmentWasEdited: 'Edytowano zatrudnienie',
  employmentRemoved: 'Usunięto zatrudnienie',
  groupsToWhichItBelongs: 'Grupy do których należy',
  cardinality: 'Liczność',
  activationLinkHasBeenSent: 'Wysłano link aktywacyjny',
  theActivationLinkCouldNotBeSent: 'Nie udało się wysłać linku aktywacyjnego!',
  participantAdded: 'Dodano uczestnika',
  failedToAddAParticipant: 'Nie udało się dodać uczestnika!',
  participantRemoved: 'Usunięto uczestnika',
  participantEdited: 'Edytowano uczestnika',
  theParticipantCouldNotBeRemoved: 'Nie udało się usunąć uczestnika!',
  courseAdded: 'Dodano kurs',
  editedCourse: 'Edytowano kurs',
  showPassword: 'pokaż hasło',
  hidePassword: 'ukryj hasło',
  trainingAdded: 'Dodano szkolenie!',
  trainingRemoved: 'Usunięto szkolenie!',
  theTrainingHasBeenEdited: 'Szkolenie zostało wyedytowane',
  editedTheCompany: 'Edytowano firmę',
  companyAdded: 'Dodano firmę',
  edited: 'Edytowano',
  added: 'Dodano',
  trainerV2: 'szkoleniowca',
  trainerRemoved: 'Usunięto szkoleniowca',
  //dateIsRequired: 'data jest wymagana',
  //dateToCannotBeEarlierThanTheDateFrom: 'data do nie może być wcześniejsza od daty od',
  theApplicationItemHasBeenEdited: 'Pozycja wniosku została wyedytowana',
  theRequestItemHasBeenAdded: 'Pozycja wniosku została dodana',
  theRequestHasBeenDeleted: 'Usunięto wniosek!',
  trainingProposalRemoved: 'Usunięto propozycję szkolenia!',
  addARating: 'Dodaj ocenę',
  validation: {
    loginRequired: 'podanie email / login jest wymagane',
    emailFormat: 'niepoprawny format email',
    passwordRequired: 'hasło jest wymagane',
    passwordFormat: 'hasło powinno zawierać co najmniej 5 znaków',
    passwordConfirmFormat: 'hasło i powtórz hasło powinno być takie samo',
    dateRequired: 'data jest wymagana',
  },
  errorBoundary: {
    message: 'Coś poszło nie tak... Spokojnie, możesz powrócić do aplikacji.',
    button: 'Wróć!',
  },
  noContent: 'Niestety, nic nie znaleźliśmy...',
};
