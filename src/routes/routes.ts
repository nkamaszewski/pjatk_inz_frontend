import Employees from '../pages/employees/Employees';

export interface RouteType {
  Component: Function;
  path: string | string[];
}

export const routes: RouteType[] = [
  { Component: Employees, path: '/pracownicy' },
];
