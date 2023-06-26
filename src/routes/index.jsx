import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
import { Home } from 'features/misc';

export const AppRoutes = () => {
  const routes = protectedRoutes;

  // const commonRoutes = [{ path: '/', element: <Home /> }];

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
