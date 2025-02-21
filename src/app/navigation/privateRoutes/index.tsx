import { Outlet } from 'react-router-dom';
import { AppSuspense } from '../../../shared/components/AppSuspense/AppSuspense';
import { ProtectedRoute } from '../../../shared/components/ProtectedRoute/ProtectedRoute';
import { AppLayout } from '../../../shared/layouts/AppLayout/AppLayout';
import { privateRoutesMap } from '../../../shared/navigation';
import React from 'react';
import { Profile } from '../../../pages/Profile/Profile';

export const privateRoutes = [
  {
    element: (
      <ProtectedRoute>
        <AppLayout>
          <AppSuspense>
            <Outlet />
          </AppSuspense>
        </AppLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: privateRoutesMap.home,
        element: <Profile />,
      },
    ],
  },
];
