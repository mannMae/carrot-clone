import { Spinner } from 'components/Elements';
import { DetailLayout, MainLayout } from 'components/Layout';
import { AroundRoutes } from 'features/around';
import { getUser } from 'features/auth';
import { ChatRoutes } from 'features/chat';
import { LocationRoutes } from 'features/location';
import { MarketRoutes } from 'features/market';
import { TownLife } from 'features/misc';
import { SearchRoutes } from 'features/search';
import { SettingRoutes } from 'features/setting';
import { UserRoutes } from 'features/user';
import { WriteRoutes } from 'features/write/routes';

import { Suspense, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { storage } from 'utils/storage';

const App = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: user } = useQuery(['user', 'register']);
  const uid = storage.getUser();

  useEffect(() => {
    try {
      getUser(uid).then((res) => {
        if (res.val()) {
        } else {
          navigate('/user/profile');
        }
        console.log(res);
      });
    } catch (error) {
      console.error(error);
    }
  }, [uid]);

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
      { path: '/location/*', element: <LocationRoutes /> },
      { path: '/write/*', element: <WriteRoutes /> },
      { path: '/search/*', element: <SearchRoutes /> },
      { path: '/setting/*', element: <SettingRoutes /> },
      { path: '*', element: <Navigate to="/home" /> },
    ],
  },
];
