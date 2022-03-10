import { ReactNode } from 'react';
import { Home } from '../views/admin/Home';
import { Login } from '../views/auth/Login';

interface Route {
  path: string;
  element: ReactNode;
  exact?: boolean;
}

export const publicRoutes: Route[] = [
  { path: '/', element: <Login />, exact: true },
]

export const privateRoutes: Route[] = [
  { path: '/', element: <Home />, exact: true },
]