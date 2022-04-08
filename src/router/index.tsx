import { ReactNode } from 'react';
import { Home } from '../views/admin/Home';
import { OrderEdit } from '../views/admin/order/OrderEdit';
import { Orders } from '../views/admin/order/Orders';
import { ProductAdd } from '../views/admin/product/ProductAdd';
import { ProductEdit } from '../views/admin/product/ProductEdit';
import { Products } from '../views/admin/product/Products';
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
  { path: '/orders', element: <Orders />, exact: true },
  { path: '/orders/edit/:id', element: <OrderEdit />, exact: true },
  { path: '/products', element: <Products />, exact: true },
  { path: '/products/add', element: <ProductAdd />, exact: true },
  { path: '/products/edit/:id', element: <ProductEdit />, exact: true },

]