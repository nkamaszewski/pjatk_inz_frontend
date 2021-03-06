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
  applications: 'applications',
  training: 'training',
  trainings: 'trainings',
  otherTtrainings: 'other trainings',
  trainingApplications: 'TRAINING APPLICATIONS',
  trainingOrganizers: 'training organizers',
  trainingPropositions: 'propositions',
  additional: 'additional',
  study: 'study',
  courses: 'courses',
  others: 'others',
  organizators: 'organizators',
  internalTrainings: 'internal Trainings',
  departmentsDivisions: 'departments - Divisions',
  positions: 'positions',
  rooms: 'rooms',
  roomRemoved: 'room removed',
  roomAdded: 'room added',
  roomEdited: 'room edited',
  coaches: 'coaches',
  meetings: 'meetings',
  meetingsRemoved: 'meeting removed',
  meetingsAdded: 'meeting added',
  meetingsEdited: 'meeting updated',
  questionnaires: 'questionnaires',
  scores: 'scores',
  company: 'company',
  companyData: 'company Data',
  myAccount: 'my Account',
  lastName: 'Last name',
  firstName: 'First name',
  department: 'Department',
  deleteDepartment: 'department deleted',
  deleteDivision: 'division deleted',
  division: 'Division',
  position: 'position',
  positionRemoved: 'position removed',
  positionAdded: 'position added',
  positionEdited: 'position edited',
  group: 'group',
  groups: 'groups',
  groupsRemoved: 'group removed',
  groupsAdded: 'group added',
  groupsEdited: 'group updated',
  name: 'Name',
  participantsAmount: 'Participants amount',
  topic: 'Topic',
  subject: 'Subject',
  room: 'Room',
  from: 'From',
  to: 'To',
  timetable: 'timetable',
  professionalTitle: 'Professional title',
  applicationsTrainingProposals: 'applications training proposals',
  validationTable: 'Validation',
  status: 'Status',
  consisting: 'Consisting',
  dateOfSubmission: 'Date of submission',
  fieldsOfStudy: 'Fields of study',
  school: 'University',
  city: 'City',
  mode: 'Mode',
  level: 'Level',
  price: 'Price',
  organizer: 'Organizer',
  taxId: 'Tax ID',
  address: 'Address',
  surface: 'Surface',
  cinematic: 'Cinematic',
  uWithoutATable: '"U" without a table',
  layoutU: '"U"',
  editMode: 'Edit mode',
  number: 'Number',
  street: 'Street',
  postcode: 'Postcode',
  save: 'SAVE',
  add: 'Add',
  edit: 'edit',
  addDepartment: 'ADD DEPARTMENT',
  addDivision: 'ADD DIVISION',
  editDivision: 'division edited',
  additionalApplications: 'ADDITIONAL APPLICATIONS',
  editDepartment: 'Edit department',
  employment: 'employment',
  dateFrom: 'Date from',
  dateTo: 'Date to',
  person: 'Person',
  filter: 'Filter:',
  all: 'All',
  editMeeting: 'Edit meeting',
  addMeeting: 'Add meeting',
  author: 'Author',
  typeOfCourse: 'Type of course',
  remove: 'remove',
  internal: 'Internal',
  external: 'External',
  course: 'course',
  sendActivationLink: 'send activation link',
  addAPerson: 'add a person',
  addAPersonToTheDatabase: 'Add a person to the database',
  emailInForm: 'Email',
  phoneInForm: 'Phone',
  cancel: 'cancel',
  addAnApplication: 'Add an application',
  theApplicationConcernsStudies: 'The application concers studies?',
  isItInLineWithTheTermsOfReference:
    'Is it in line with the terms of reference?',
  studies: 'studies',
  application: 'application',
  trainingApplication: 'Training application',
  dateOfRegistration: 'Date of registration',
  participants: 'participants',
  addStudies: 'Add studies',
  accommodationPrice: 'Accommodation price',
  theCostOfTransport: 'The cost of transport',
  fieldOfStudy: 'Field of study',
  modeOfStudy: 'Mode of study',
  degreeOfStudy: 'Degree of study',
  shortName: 'Short name',
  addUniversities: 'add universities',
  addStudyMode: 'add study mode',
  addDegreeOfStudy: 'add degree of study',
  addStudyModeToTheDatabase: 'Add study mode to the database',
  addDegreeOfStudyToTheDatabase: 'Add degree of study to the database',
  addTheUniversityToTheDatabase: 'Add the university to the database',
  trainer: 'Trainer',
  reason: 'Reason',
  internalTraining: 'Internal training:',
  addATrainingTopic: 'add a training topic',
  addACompany: 'add a company',
  addATrainer: 'add a trainer',
  addTheTrainingTopicToTheDatabase: 'Add the training topic to the database',
  subjectForm: 'Subject',
  addTheSubjectOfTheTraining: 'add the subject of the training',
  addTheTrainingTopicToTheDatabaseV2: 'Add the training topic to the database',
  addTheCompanyToTheDatabase: 'Add the company to the database',
  addTheTrainerToTheDatabase: 'Add the trainer to the database',
  academicTitle: 'Academic title',
  addTraining: 'Add training',
  editTraining: 'Edit training',
  companyV2: 'company',
  addressV2: 'Address:',
  town: 'Town',
  roomV2: 'room',
  areaInM2: 'Area in m2',
  cinemaSetting: 'Cinema setting',
  schoolV2: 'School',
  schoolSetting: 'School setting',
  settingUWithoutTable: '"U" setting without table',
  uSetting: '"U" setting',
  type: 'Type',
  addAdditionalApplication: 'add additional Application',
  addGroup: 'Add group',
  editGroup: 'Edit group',
  numberOfPeople: 'Number of people',
  participation: 'participation',
  onlyActive: 'Only active',
  assignAnEmployeeToAGroup: 'Assign an employee to a group',
  groupEmployees: 'Group employees',
  employee: 'Employee',
  numberOfPeopleV2: ', number of people:',
  surfaceV2: ', surface:',
  cost: 'Cost',
  questionnaire: 'questionnaire',
  questionnaireAdded: 'questionnaire added',
  yearOfApplication: 'Year of application',
  addTheYearOfTheApplicationToTheDatabase:
    'Add the year of the application to the database',
  addTheYearOfTheApplication: 'add the year of the application',
  year: 'Year',
  category: 'Category',
  link: 'Link',
  applicationAdded: 'Application added',
  applicationEdited: 'Application edited',
  theApplicationCouldNotBeAdded: 'The application could not be added',
  theApplicationHasBeenDeleted: 'The application has been deleted',
  theRequestCouldNotBeDeleted: 'The request could not be deleted!',
  theStudiesHaveBeenEdited: 'The studies have been edited',
  studiesAdded: 'Studies added',
  theNameOfTheCertificate: 'The name of the cetificate',
  endDate: 'End date',
  addAParticipant: 'Add a participant',
  employmentAdded: 'Employment added',
  theOperationWasUnsuccessful: 'The operation was unsuccessful',
  employmentWasEdited: 'Employment was edited',
  employmentRemoved: 'Employment removed',
  groupsToWhichItBelongs: 'Groups to which it belongs',
  cardinality: 'Cardinality',
  activationLinkHasBeenSent: 'Activation link has been sent',
  theActivationLinkCouldNotBeSent: 'The activation link could not be sent!',
  participantAdded: 'Participant added',
  failedToAddAParticipant: 'Failed to add participant!',
  participantRemoved: 'Participant removed',
  participantEdited: 'Participant edited',
  theParticipantCouldNotBeRemoved: 'The participant could not be removed!',
  courseAdded: 'Course added',
  editedCourse: 'Edited course',
  showPassword: 'show password',
  hidePassword: 'hide password',
  trainingAdded: 'Training added!',
  trainingRemoved: 'Training removed!',
  theTrainingHasBeenEdited: 'The training has been edited',
  editedTheCompany: 'Edited the company',
  companyAdded: 'Company added',
  edited: 'Edited',
  added: 'Added',
  trainerV2: 'trainer',
  trainerRemoved: 'Trainer removed',
  //dateIsRequired: 'date is required',
  //dateToCannotBeEarlierThanTheDateFrom: 'date to cannot be earlier than the date from',
  theApplicationItemHasBeenEdited: 'The application item has been edited',
  theRequestItemHasBeenAdded: 'The request item has been added',
  theRequestHasBeenDeleted: 'The request has been deleted!',
  trainingProposalRemoved: 'Training proposal removed!',
  addARating: 'Add a rating',
  validation: {
    loginRequired: 'email / login is required',
    emailFormat: 'incorrect email format',
    passwordRequired: 'password is required',
    passwordFormat: 'password should contain min 5 chars',
    passwordConfirmFormat: 'password and confirm password are NOT the same',
    dateRequired: 'date is required',
  },
  errorBoundary: {
    message: 'Something gone wrong... Relax and return to the app',
    button: 'Retry!',
  },
  noContent: 'No data to display...',
};
