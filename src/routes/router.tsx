import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';
import AuthLayout from 'layouts/auth-layout';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import paths, { rootPaths } from './path';

import AuthGuard from 'components/auth/AuthGuard';

/* ---------------- Lazy loads various components ------------------------- */
const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const LoginPage = lazy(() => import('pages/authentication/login'));
const SignUpPage = lazy(() => import('pages/authentication/register'));
const ForgotPasswordPage = lazy(() => import('pages/authentication/forgot-password'));
const Dashboard = lazy(() => import('pages/dashboard/index'));
const ProductsPage = lazy(() => import('pages/products'));
const ProfilePage = lazy(() => import('pages/profile'));
const RegisteredUsers = lazy(() => import('pages/users'));
const TemporaryUsers = lazy(() => import('pages/temporary-users'));
const Modules = lazy(() => import('pages/modules'));

const NotFoundPage = lazy(() => import('pages/not-found'));
/* -------------------------------------------------------------------------- */

/**
 * @Defines the routes for the application using React Router.
 */
export const routes = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.default,
        element: (
          <Suspense fallback={<PageLoader />}>
            <AuthGuard>
              <MainLayout />
            </AuthGuard>
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: paths.registeredUser,
            element: <RegisteredUsers />,
          },
          {
            path: paths.temporaryUser,
            element: <TemporaryUsers />,
          },
          {
            path: paths.modules,
            element: <Modules />,
          },
          {
            path: paths.profile,
            element: <ProfilePage />,
          },
          {
            path: paths.products,
            element: <ProductsPage />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: <AuthLayout />,
        children: [
          {
            path: paths.login,
            element: <LoginPage />,
          },
          {
            path: paths.signup,
            element: <SignUpPage />,
          },
          {
            path: paths.forgotPassword,
            element: <ForgotPasswordPage />,
          },
        ],
      },
      {
        path: rootPaths.errorRoot,
        children: [
          {
            path: paths.notFound,
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to={paths.notFound} replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: '/',
});

export default router;
