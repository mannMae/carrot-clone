import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
import { useQuery } from 'react-query';
import { BottomSheet } from 'components/Elements';
import { queryClient } from 'library/react-query';
import { publicRoutes } from './public';
import { useUser } from 'library/auth';
import { storage } from 'utils/storage';

export const AppRoutes = () => {
  const user = storage.getUser();

  const routes = user ? protectedRoutes : publicRoutes;

  const query = useQuery(['bottomSheet']);
  const bottomSheetQueries = queryClient
    .getQueryCache()
    .queries.map((query, i) => query.queryKey)
    .filter((p) => p[0] === 'bottomSheet');

  // const commonRoutes = [{ path: '/', element: <Home /> }];

  const element = useRoutes([...routes]);

  return (
    <>
      {element}
      {[
        ['bottomSheet'],
        ['bottomSheet', 1],
        ['bottomSheet', 2],
        ['bottomSheet', 3],
      ].map((query, i) => (
        <BottomSheet query={query} key={i} />
      ))}
    </>
  );
};
