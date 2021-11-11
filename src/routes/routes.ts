import CompanyData from '../pages/company/CompanyData';
import CompanyDataDepartments from '../pages/CompanyDataDepartments/CompanyDataDepartments';
import CompanyDataPositions from '../pages/CompanyDataPositions/CompanyDataPositions';
import DocumentsAdditional from '../pages/documents/DocumentsAdditional';
import Employment from '../pages/employment/Employment';
import Polls from '../pages/polls/Polls';
import UserAccount from '../pages/userAccount/UserAccountPage';
import WorkshopsInternalGroups from '../pages/groups/GroupsPage';
import WorkshopsInternalRoom from '../pages/rooms/WorkshopsInternalRoom';
import WorkshopsInternalMeeting from '../pages/meeting/WorkshopsInternalMeeting';
import WorkshopsCoaches from '../pages/Coaches/WorkshopsCoaches';
import Organizators from '../pages/organizators/Organizators';
import WorkshopsOthers from '../pages/workshops/WorkshopsOthers';
import WorkshopsStudy from '../pages/study/WorkshopsStudy';
import WorkshopsTraining from '../pages/Training/TrainingsPage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import RestorePasswordPage from 'pages/RestorePassword/RestorePasswordPage';
import ChangePasswordPage from 'pages/changePassword/ChangePasswordPage';
import { PATH } from './paths';
import { ApplicationsPage } from 'pages/Applications/ApplicationsPage';

export interface RouteType {
  Component: Function;
  path: string | string[];
}

export const authRoutes = [
  { Component: LoginPage, path: PATH.login },
  { Component: RegisterPage, path: PATH.register },
  { Component: RestorePasswordPage, path: PATH.restorePassword },
  { Component: ChangePasswordPage, path: PATH.changePassword },
];

export const routes: RouteType[] = [
  { Component: Employment, path: PATH.employment },
  { Component: ApplicationsPage, path: PATH.applicationsPage },
  { Component: DocumentsAdditional, path: PATH.documentAdditional },
  { Component: WorkshopsStudy, path: PATH.workshopStudy },
  { Component: WorkshopsTraining, path: PATH.workshopTraining },
  { Component: WorkshopsOthers, path: PATH.workshopOthers },
  { Component: Organizators, path: PATH.organizators },
  { Component: WorkshopsCoaches, path: PATH.workshopsCoaches },
  { Component: WorkshopsInternalRoom, path: PATH.workshopsInternalRoom },
  { Component: WorkshopsInternalGroups, path: PATH.workshopsInternalGroups },
  {
    Component: WorkshopsInternalMeeting,
    path: PATH.workshopsInternalMeeting,
  },
  { Component: Polls, path: PATH.polls },
  { Component: CompanyData, path: PATH.companyData },
  { Component: CompanyDataDepartments, path: PATH.companyDataDepartments },
  { Component: CompanyDataPositions, path: PATH.companyDataPositions },
  { Component: UserAccount, path: PATH.userAccount },
];
