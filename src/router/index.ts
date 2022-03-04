import { FC } from 'react';
import { Login } from '../views/auth/Login';

interface Route {
  path: string;
  component: FC;
  exact?: boolean;
}

export const publicRoutes: Route[] = [
  { path: '/', component: Login, exact: true },
]

export const privateRoutes: Route[] = [
  // { path: '/', component: '', exact: true },
]