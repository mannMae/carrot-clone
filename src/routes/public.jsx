import { Spinner } from 'components/Elements';
import { DetailLayout } from 'components/Layout';
import { AuthRoutes } from 'features/auth';
import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const App = (props) => {
  const location = useLocation();
  if (location.pathname.split('/').length === 1) {
    return (
      <Suspense
        fallback={
          <div>
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
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

export const publicRoutes = [
  {
    path: '*',
    element: <App />,
    children: [{ path: '*', element: <AuthRoutes /> }],
  },
];
