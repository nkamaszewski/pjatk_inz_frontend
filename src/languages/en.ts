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
  additional: 'additional',
  study: 'study',
  courses: 'courses',
  others: 'others',
  organizators: 'organizators',
  internalTrainings: 'internal Trainings',
  departmentsDivisions: 'departments - Divisions',
  positions: 'positions',
  position2: 'position',
  rooms: 'rooms',
  coaches: 'coaches',
  meetings: 'meetings',
  questionnaires: 'questionnaires',
  company: 'company',
  companyData: 'company Data',
  myAccount: 'my Account',
  lastName: 'Last name',
  firstName: 'First name',
  department: 'Department',
  division: 'Division',
  position: 'Position',
  group: 'Group',
  groups: 'groups',
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
  school: 'School',
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
  edit: 'Edit',
  addDepartment: 'ADD DEPARTMENT',
  addDivision: 'ADD DIVISION',
  additionalApplications: 'ADDITIONAL APPLICATIONS',
  editDepartment: 'Edit department',
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
