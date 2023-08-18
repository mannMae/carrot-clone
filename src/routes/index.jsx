import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
import { useQuery } from 'react-query';
import { BottomSheet } from 'components/Elements';
import { queryClient } from 'library/react-query';
import { publicRoutes } from './public';
import { useUser } from 'library/auth';
import { storage } from 'utils/storage';
import { useEffect } from 'react';

export const AppRoutes = () => {
  const uid = storage.getUser();

  const routes = uid ? protectedRoutes : publicRoutes;

  const query = useQuery(['bottomSheet']);
  const bottomSheetQueries = queryClient
    .getQueryCache()
    .queries.map((query, i) => query.queryKey)
    .filter((p) => p[0] === 'bottomSheet');

  const element = useRoutes([...routes]);

  useEffect(() => {}, []);

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
