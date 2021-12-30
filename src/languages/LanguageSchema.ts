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
  questionnaires: string;
  company: string;
  companyData: string;
  myAccount: string;
  additional: string;
  lastName: string;
  firstName: string;
  department: string;
  division: string;
  position: string;
  group: string;
  groups: string;
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
  position2: string;
  edit: string;
  addDepartment: string;
  addDivision: string;
  editDepartment: string;
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
  validation: {
    loginRequired: string;
    emailFormat: string;
    passwordRequired: string;
    passwordFormat: string;
    passwordConfirmFormat: string;
  };
  errorBoundary: {
    message: string;
    button: string;
  };
  noContent: string;
}
