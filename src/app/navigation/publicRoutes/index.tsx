import { Outlet } from 'react-router-dom';
import React from 'react';
import { publicRoutesMap } from '../../../shared/navigation';
import { AppSuspense } from '../../../shared/components/AppSuspense/AppSuspense';
import { AuthLayout } from '../../../shared/layouts/AuthLayout/AuthLayout';
import { Login } from '../../../pages/Login/Login';
import { Registration } from '../../../pages/Registration/Registration';

export const publicRoutes = [
  {
    element: (
      <AuthLayout>
        <AppSuspense>
          <Outlet />
        </AppSuspense>
      </AuthLayout>
    ),
    children: [
      {
        path: publicRoutesMap.login,
        element: <Login />,
      },
      {
        path: publicRoutesMap.registration,
        element: <Registration />,
      },
    ],
  },
];
