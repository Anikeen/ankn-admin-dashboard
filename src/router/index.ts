import { FC } from 'react';

interface Route {
  path: string;
  component: string;
  exact?: boolean;
}

export const publicRoutes: Route[] = [
  { path: '/', component: '', exact: true },
]

export const privateRoutes: Route[] = [
  { path: '/', component: '', exact: true },
]