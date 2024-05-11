import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

export const LoginPage = lazy(() => import('../modules/Login'));

export default function Router() {
  const routes = useRoutes([
    {
      path: 'login',
      element: <LoginPage />,
    },
  ]);

  return routes;
}
