import Employees from '../pages/Employees';

export interface RouteType {
  Component: Function;
  path: string | string[];
}

export const routes: RouteType[] = [
  { Component: Employees, path: '/pracownicy' },
];
