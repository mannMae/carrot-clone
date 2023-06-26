import { Spinner } from 'components/Elements';
import { MainLayout } from 'components/Layout/MainLayout';
import { Home } from 'features/misc';
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
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
