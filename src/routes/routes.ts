import CompanyData from 'pages/company/CompanyData';
import { DepartmentDivisionPage } from 'pages/DepartmentsDivisions/DepartmentDivisionPage';
import { PositionsPage } from 'pages/postions/PositionsPage';
import { AddtionalApplicationsPage } from 'pages/AdditionalApplications/AddtionalApplicationsPage';
import Employment from 'pages/employment/EmploymentPage';
import { TrainingPropositionsPage } from 'pages/trainingPropositions/TrainingPropositionsPage';
import UserAccount from 'pages/userAccount/UserAccountPage';
import WorkshopsInternalGroups from 'pages/groups/GroupsPage';
import { RoomsPage } from 'pages/rooms/RoomsPage';
import { MeetingsSchedulePage } from 'pages/meetingsSchedule/MeetingsSchedulePage';
import WorkshopsCoaches from 'pages/Coaches/WorkshopsCoaches';
import Organizators from 'pages/organizators/Organizators';
import { WorkshopsOthers } from 'pages/workshopsOther/WorkshopsOthers';
import WorkshopsStudy from 'pages/study/WorkshopsStudy';
import WorkshopsTraining from 'pages/courses_training/TrainingsPage';
import LoginPage from 'pages/Login/LoginPage';
import RegisterPage from 'pages/Register/RegisterPage';
import RestorePasswordPage from 'pages/RestorePassword/RestorePasswordPage';
import ChangePasswordPage from 'pages/changePassword/ChangePasswordPage';
import { PATH } from './paths';
import { TrainingApplicationsPage } from 'pages/trainingApplications/TrainingApplicationsPage';
import SetPasswordPage from 'pages/SetPassword/SetPasswordPage';
import { ScoresPage } from 'pages/scores/ScoresPage';

export interface RouteType {
  Component: Function;
  path: string | string[];
}

export const authRoutes = [
  { Component: LoginPage, path: PATH.login },
  { Component: RegisterPage, path: PATH.register },
  { Component: RestorePasswordPage, path: PATH.restorePassword },
  { Component: ChangePasswordPage, path: PATH.changePassword },
  { Component: SetPasswordPage, path: PATH.setPassword },
];

export const routes: RouteType[] = [
  { Component: Employment, path: PATH.employment },
  { Component: TrainingApplicationsPage, path: PATH.applicationsPage },
  { Component: AddtionalApplicationsPage, path: PATH.documentAdditional },
  { Component: WorkshopsStudy, path: PATH.workshopStudy },
  { Component: WorkshopsTraining, path: PATH.workshopTraining },
  { Component: WorkshopsOthers, path: PATH.workshopOthers },
  { Component: Organizators, path: PATH.organizators },
  { Component: WorkshopsCoaches, path: PATH.workshopsCoaches },
  { Component: RoomsPage, path: PATH.workshopsInternalRoom },
  { Component: WorkshopsInternalGroups, path: PATH.workshopsInternalGroups },
  { Component: ScoresPage, path: PATH.scores },
  {
    Component: MeetingsSchedulePage,
    path: PATH.workshopsMeetingsSchedule,
  },
  { Component: TrainingPropositionsPage, path: PATH.trainingsProposition },
  { Component: CompanyData, path: PATH.companyData },
  { Component: DepartmentDivisionPage, path: PATH.companyDataDepartments },
  { Component: PositionsPage, path: PATH.companyDataPositions },
  { Component: UserAccount, path: PATH.userAccount },
];
