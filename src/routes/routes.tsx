import CompanyData from '../pages/company/CompanyData';
import CompanyDataDepartments from '../pages/company/CompanyDataDepartments';
import CompanyDataProffesions from '../pages/company/CompanyDataProffesions';
import DocumentsAdditional from '../pages/documents/DocumentsAdditional';
import DocumentsWorkshop from '../pages/documents/DocumentsWorkshop';
import Employees from '../pages/employees/Employees';
import Polls from '../pages/polls/Polls';
import UserAccount from '../pages/userAccount/UserAccount';
import WorkshopsInternalGroups from '../pages/Workshop internal/WorkshopsInternalGroups';
import WorkshopsInternalRoom from '../pages/Workshop internal/WorkshopsInternalRoom';
import WorkshopsInternalSchedule from '../pages/Workshop internal/WorkshopsInternalSchedule';
import WorkshopsCourses from '../pages/workshops/WorkshopsCourses';
import WorkshopsInternalSubcategory from '../pages/workshops/WorkshopsInternalSubcategory';
import WorkshopsOrganizators from '../pages/workshops/WorkshopsOrganizators';
import WorkshopsOthers from '../pages/workshops/WorkshopsOthers';
import WorkshopsStudy from '../pages/workshops/WorkshopsStudy';
import WorkshopsTrainers from '../pages/workshops/WorkshopsTrainers';

export interface RouteType {
  Component: Function;
  path: string | string[];
}

export const routes: RouteType[] = [
  { Component: Employees, path: '/pracownicy' },
  { Component: DocumentsWorkshop, path: '/wnioski/wnioski-szkoleniowe' },
  { Component: DocumentsAdditional, path: '/wnioski/wnioski-dodatkowe' },
  { Component: WorkshopsStudy, path: '/szkolenia/studia' },
  { Component: WorkshopsCourses, path: '/szkolenia/kursy' },
  {
    Component: WorkshopsInternalSubcategory,
    path: '/szkolenia/szkolenia-wewnetrzne',
  },
  { Component: WorkshopsOthers, path: '/szkolenia/inne' },
  { Component: WorkshopsOrganizators, path: '/szkolenia/organizatorzy' },
  { Component: WorkshopsTrainers, path: '/szkolenia/szkoleniowcy' },
  { Component: WorkshopsInternalRoom, path: '/szkolenia-wewnetrzne/sale' },
  { Component: WorkshopsInternalGroups, path: '/szkolenia-wewnetrzne/grupy' },
  {
    Component: WorkshopsInternalSchedule,
    path: '/szkolenia-wewnetrzne/harmonogram',
  },
  { Component: Polls, path: '/ankiety' },
  { Component: CompanyData, path: '/firma/dane-firmy' },
  { Component: CompanyDataDepartments, path: '/firma/piony-wydzialy' },
  { Component: CompanyDataProffesions, path: '/firma/stanowiska' },
  { Component: UserAccount, path: '/moje-konto' },
];