import { capFL } from 'helpers/capitalizeFirstLetter';

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
  setPassword: string;
  password: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  confirmPassword: string;
  confirmAccount: string;
  login: string;
  submit: string;
  changePassword: string;
  theme: string;
  dark: string;
  light: string;
  employees: string;
  applications: string;
  applicationsTrainingProposals: string;
  training: string;
  trainings: string;
  trainingApplications: string;
  trainingOrganizers: string;
  trainingPropositions: string;
  otherTtrainings: string;
  study: string;
  courses: string;
  others: string;
  organizators: string;
  internalTrainings: string;
  departmentsDivisions: string;
  positions: string;
  rooms: string;
  coaches: string;
  meetings: string;
  meetingsRemoved: string;
  meetingsAdded: string;
  meetingsEdited: string;
  questionnaires: string;
  scores: string;
  company: string;
  companyData: string;
  myAccount: string;
  additional: string;
  lastName: string;
  firstName: string;
  department: string;
  division: string;
  position: string;
  positionRemoved: string;
  positionAdded: string;
  positionEdited: string;
  group: string;
  groups: string;
  groupsRemoved: string;
  groupsAdded: string;
  groupsEdited: string;
  name: string;
  participantsAmount: string;
  topic: string;
  subject: string;
  room: string;
  from: string;
  to: string;
  timetable: string;
  additionalApplications: string;
  dateOfSubmission: string;
  validationTable: string;
  status: string;
  consisting: string;
  fieldsOfStudy: string;
  school: string;
  city: string;
  mode: string;
  level: string;
  price: string;
  organizer: string;
  taxId: string;
  address: string;
  professionalTitle: string;
  surface: string;
  cinematic: string;
  uWithoutATable: string;
  layoutU: string;
  editMode: string;
  number: string;
  street: string;
  postcode: string;
  save: string;
  add: string;
  edit: string;
  addDepartment: string;
  addDivision: string;
  editDivision: string;
  deleteDivision: string;
  editDepartment: string;
  deleteDepartment: string;
  employment: string;
  dateFrom: string;
  dateTo: string;
  person: string;
  filter: string;
  all: string;
  editMeeting: string;
  addMeeting: string;
  author: string;
  typeOfCourse: string;
  remove: string;
  internal: string;
  external: string;
  course: string;
  sendActivationLink: string;
  addAPerson: string;
  addAPersonToTheDatabase: string;
  emailInForm: string;
  phoneInForm: string;
  cancel: string;
  addAnApplication: string;
  theApplicationConcernsStudies: string;
  isItInLineWithTheTermsOfReference: string;
  studies: string;
  application: string;
  trainingApplication: string;
  dateOfRegistration: string;
  participants: string;
  addStudies: string;
  accommodationPrice: string;
  theCostOfTransport: string;
  fieldOfStudy: string;
  modeOfStudy: string;
  degreeOfStudy: string;
  shortName: string;
  addUniversities: string;
  addStudyMode: string;
  addDegreeOfStudy: string;
  addStudyModeToTheDatabase: string;
  addDegreeOfStudyToTheDatabase: string;
  addTheUniversityToTheDatabase: string;
  trainer: string;
  reason: string;
  internalTraining: string;
  addATrainingTopic: string;
  addACompany: string;
  addATrainer: string;
  addTheTrainingTopicToTheDatabase: string;
  subjectForm: string;
  addTheSubjectOfTheTraining: string;
  addTheTrainingTopicToTheDatabaseV2: string;
  addTheCompanyToTheDatabase: string;
  addTheTrainerToTheDatabase: string;
  academicTitle: string;
  addTraining: string;
  editTraining: string;
  companyV2: string;
  addressV2: string;
  town: string;
  roomV2: string;
  areaInM2: string;
  cinemaSetting: string;
  schoolV2: string;
  schoolSetting: string;
  settingUWithoutTable: string;
  uSetting: string;
  type: string;
  addAdditionalApplication: string;
  addGroup: string;
  editGroup: string;
  numberOfPeople: string;
  participation: string;
  onlyActive: string;
  assignAnEmployeeToAGroup: string;
  groupEmployees: string;
  employee: string;
  numberOfPeopleV2: string;
  surfaceV2: string;
  cost: string;
  questionnaire: string;
  questionnaireAdded: string;
  yearOfApplication: string;
  addTheYearOfTheApplicationToTheDatabase: string;
  addTheYearOfTheApplication: string;
  year: string;
  category: string;
  link: string;
  applicationAdded: string;
  applicationEdited: string;
  theApplicationCouldNotBeAdded: string;
  theApplicationHasBeenDeleted: string;
  theRequestCouldNotBeDeleted: string;
  theStudiesHaveBeenEdited: string;
  studiesAdded: string;
  theNameOfTheCertificate: string;
  endDate: string;
  addAParticipant: string;
  employmentAdded: string;
  theOperationWasUnsuccessful: string;
  employmentWasEdited: string;
  employmentRemoved: string;
  groupsToWhichItBelongs: string;
  cardinality: string;
  activationLinkHasBeenSent: string;
  theActivationLinkCouldNotBeSent: string;
  participantAdded: string;
  failedToAddAParticipant: string;
  participantRemoved: string;
  participantEdited: string;
  theParticipantCouldNotBeRemoved: string;
  courseAdded: string;
  editedCourse: string;
  showPassword: string;
  hidePassword: string;
  trainingAdded: string;
  trainingRemoved: string;
  theTrainingHasBeenEdited: string;
  editedTheCompany: string;
  companyAdded: string;
  edited: string;
  added: string;
  trainerV2: string;
  trainerRemoved: string;
  //dateIsRequired: string;
  //dateToCannotBeEarlierThanTheDateFrom: string;
  theApplicationItemHasBeenEdited: string;
  theRequestItemHasBeenAdded: string;
  theRequestHasBeenDeleted: string;
  trainingProposalRemoved: string;
  addARating: string;
  validation: {
    loginRequired: string;
    emailFormat: string;
    passwordRequired: string;
    passwordFormat: string;
    passwordConfirmFormat: string;
    dateRequired: string;
  };
  errorBoundary: {
    message: string;
    button: string;
  };
  noContent: string;
}
