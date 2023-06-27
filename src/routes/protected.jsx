import { Spinner } from 'components/Elements';
import { MainLayout } from 'components/Layout/MainLayout';
import { ChatRoutes } from 'features/chat';
import { Around, Home, TownLife } from 'features/misc';
import { UserRoutes } from 'features/users';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const App = () => {
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
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/town-life', element: <TownLife /> },
      { path: '/around', element: <Around /> },
      { path: '/chat/*', element: <ChatRoutes /> },
      { path: '/user/*', element: <UserRoutes /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
