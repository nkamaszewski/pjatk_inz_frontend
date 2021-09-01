import CompanyData from '../pages/company/CompanyData';
import CompanyDataDepartments from '../pages/CompanyDataDepartments/CompanyDataDepartments';
import CompanyDataPositions from '../pages/CompanyDataPositions/CompanyDataPositions';
import DocumentsAdditional from '../pages/documents/DocumentsAdditional';
import DocumentsWorkshop from '../pages/DocumentsWorkshop/DocumentsWorkshop';
import Employment from '../pages/employment/Employment';
import Polls from '../pages/polls/Polls';
import UserAccount from '../pages/userAccount/UserAccount';
import WorkshopsInternalGroups from '../pages/groups/WorkshopsInternalGroups';
import WorkshopsInternalRoom from '../pages/rooms/WorkshopsInternalRoom';
import WorkshopsInternalMeeting from '../pages/meeting/WorkshopsInternalMeeting';
import WorkshopsCoaches from '../pages/Coaches/WorkshopsCoaches';
import Organizators from '../pages/organizators/Organizators';
import WorkshopsOthers from '../pages/workshops/WorkshopsOthers';
import WorkshopsStudy from '../pages/study/WorkshopsStudy';
import WorkshopsTraining from '../pages/Training/WorkshopsTraining';
import LoginPage from '../pages/Login/LoginPage';

export interface RouteType {
  Component: Function;
  path: string | string[];
}

export const authRoutes = [{ Component: LoginPage, path: '/logowanie' }];

export const routes: RouteType[] = [
  { Component: Employment, path: '/pracownicy' },
  { Component: DocumentsWorkshop, path: '/wnioski/wnioski-szkoleniowe' },
  { Component: DocumentsAdditional, path: '/wnioski/wnioski-dodatkowe' },
  { Component: WorkshopsStudy, path: '/szkolenia/studia' },
  { Component: WorkshopsTraining, path: '/szkolenia/kursy' },
  { Component: WorkshopsOthers, path: '/szkolenia/inne' },
  { Component: Organizators, path: '/szkolenia/organizatorzy' },
  { Component: WorkshopsCoaches, path: '/szkolenia/szkoleniowcy' },
  { Component: WorkshopsInternalRoom, path: '/szkolenia-wewnetrzne/sale' },
  { Component: WorkshopsInternalGroups, path: '/szkolenia-wewnetrzne/grupy' },
  {
    Component: WorkshopsInternalMeeting,
    path: '/szkolenia-wewnetrzne/harmonogram',
  },
  { Component: Polls, path: '/ankiety' },
  { Component: CompanyData, path: '/firma/dane-firmy' },
  { Component: CompanyDataDepartments, path: '/firma/piony-wydzialy' },
  { Component: CompanyDataPositions, path: '/firma/stanowiska' },
  { Component: UserAccount, path: '/moje-konto' },
];
