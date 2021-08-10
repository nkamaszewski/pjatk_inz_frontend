import CompanyData from '../pages/company/CompanyData';
import CompanyDataDepartments from '../pages/company/CompanyDataDepartments/CompanyDataDepartments';
import CompanyDataPositions from '../pages/company/CompanyDataPositions/CompanyDataPositions';
import DocumentsAdditional from '../pages/documents/DocumentsAdditional';
import DocumentsWorkshop from '../pages/documents/DocumentsWorkshop/DocumentsWorkshop';
import Employment from '../pages/employment/Employment';
import Polls from '../pages/polls/Polls';
import UserAccount from '../pages/userAccount/UserAccount';
import WorkshopsInternalGroups from '../pages/Workshop internal/groups/WorkshopsInternalGroups';
import WorkshopsInternalRoom from '../pages/Workshop internal/rooms/WorkshopsInternalRoom';
import WorkshopsInternalMeeting from '../pages/Workshop internal/meeting/WorkshopsInternalMeeting';
import WorkshopsCoaches from '../pages/workshops/Coaches/WorkshopsCoaches';
import WorkshopsInternalSubcategory from '../pages/workshops/WorkshopsInternalSubcategory';
import WorkshopsOrganizators from '../pages/workshops/WorkshopsOrganizators';
import WorkshopsOthers from '../pages/workshops/WorkshopsOthers';
import WorkshopsStudy from '../pages/workshops/study/WorkshopsStudy';
import WorkshopsTraining from '../pages/workshops/Training/WorkshopsTraining';

export interface RouteType {
  Component: Function;
  path: string | string[];
}

export const routes: RouteType[] = [
  { Component: Employment, path: '/pracownicy' },
  { Component: DocumentsWorkshop, path: '/wnioski/wnioski-szkoleniowe' },
  { Component: DocumentsAdditional, path: '/wnioski/wnioski-dodatkowe' },
  { Component: WorkshopsStudy, path: '/szkolenia/studia' },
  { Component: WorkshopsTraining, path: '/szkolenia/kursy' },
  {
    Component: WorkshopsInternalSubcategory,
    path: '/szkolenia/szkolenia-wewnetrzne',
  },
  { Component: WorkshopsOthers, path: '/szkolenia/inne' },
  { Component: WorkshopsOrganizators, path: '/szkolenia/organizatorzy' },
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
