import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';
import AuthLayout from 'layouts/auth-layout';
import { lazy, Suspense, useEffect, useState } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import paths, { rootPaths } from './path';
import { RouterProvider } from 'react-router-dom';

import AuthGuard from 'components/auth/AuthGuard';
import { useAuth } from 'providers/useAuth';

/* ---------------- Lazy loads various components ------------------------- */
const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const LoginPage = lazy(() => import('pages/authentication/login'));
const LoginByCodePage = lazy(() => import('pages/authentication/loginbycode'));
const ForgotPasswordPage = lazy(() => import('pages/authentication/forgot-password'));
const Dashboard = lazy(() => import('pages/dashboard/index'));
const ProductsPage = lazy(() => import('pages/products'));
const ProfilePage = lazy(() => import('pages/profile'));
const RegisteredUsers = lazy(() => import('pages/users'));
const TemporaryUsers = lazy(() => import('pages/temporary-users'));
const Modules = lazy(() => import('pages/modules'));

const NotFoundPage = lazy(() => import('pages/not-found'));
/* -------------------------------------------------------------------------- */

const AppRouter = () => {
  const { user } = useAuth();

  const [mainRouters, setMainRouters] = useState<any>([]);

  useEffect(() => {
    const userRouters = [
      {
        index: true,
        element: <Dashboard />,
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
    ];
    if (user?.is_admin) {
      const adminRouters = [
        {
          path: paths.registeredUser,
          element: <RegisteredUsers />,
        },
        {
          path: paths.temporaryUser,
          element: <TemporaryUsers />,
        },
      ];
      const mergedRouters = userRouters.concat(adminRouters);
      setMainRouters(mergedRouters);
    } else {
      setMainRouters(userRouters);
    }
  }, [user]);

  const routes = [
    {
      element: (
        <Suspense fallback={<Splash />}>
          <AuthGuard>
            <App />
          </AuthGuard>
        </Suspense>
      ),
      children: [
        {
          path: paths.default,
          element: (
            <Suspense fallback={<PageLoader />}>
              <MainLayout />
            </Suspense>
          ),
          children: mainRouters,
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
              path: paths.loginByCode,
              element: <LoginByCodePage />,
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

  return <RouterProvider router={router} />;
};

export default AppRouter;
