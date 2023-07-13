import { Spinner } from 'components/Elements';
import { DetailLayout, MainLayout } from 'components/Layout';
import { AroundRoutes } from 'features/around';
import { ChatRoutes } from 'features/chat';
import { MarketRoutes } from 'features/market';
import { TownLife } from 'features/misc';
import { UserRoutes } from 'features/user';

import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  if (location.pathname.split('/').length === 2) {
    return (
      <MainLayout>
        <Suspense
          fallback={
            <div>
              <Spinner size="xl" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </MainLayout>
    );
  }
  return (
    <DetailLayout>
      <Suspense
        fallback={
          <div>
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </DetailLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/home/*', element: <MarketRoutes /> },
      { path: '/town-life', element: <TownLife /> },
      { path: '/around', element: <AroundRoutes /> },
      { path: '/chat/*', element: <ChatRoutes /> },
      { path: '/user/*', element: <UserRoutes /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
