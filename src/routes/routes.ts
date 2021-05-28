import Company from '../pages/company/Company';
import Documents from '../pages/documents/Documents';
import Employees from '../pages/employees/Employees';
import Polls from '../pages/polls/Polls';
import UserAccount from '../pages/userAccount/UserAccount';
import WorkshopsInternal from '../pages/Workshop internal/WorkshopsInternal';
import Workshops from '../pages/workshops/Workshops';

export interface RouteType {
  Component: Function;
  path: string | string[];
}

export const routes: RouteType[] = [
  { Component: Employees, path: '/pracownicy' },
  { Component: Documents, path: '/wnioski' },
  { Component: Workshops, path: '/szkolenia' },
  { Component: WorkshopsInternal, path: '/szkolenia-wewnetrzne' },
  { Component: Polls, path: '/ankiety' },
  { Component: Company, path: '/firma' },
  { Component: UserAccount, path: '/moje-konto' },
];
