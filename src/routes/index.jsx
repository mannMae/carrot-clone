import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
import { Home } from 'features/misc';
import { useQuery } from 'react-query';
import { BottomSheet } from 'components/Elements';
import { queryClient } from 'library/react-query';

export const AppRoutes = () => {
  const routes = protectedRoutes;

  const query = useQuery(['bottomSheet']);
  const bottomSheetQueries = queryClient
    .getQueryCache()
    .queries.map((query, i) => query.queryKey)
    .filter((p) => p[0] === 'bottomSheet');

  console.log(queryClient.getQueryCache());

  // const commonRoutes = [{ path: '/', element: <Home /> }];

  const element = useRoutes([...routes]);

  console.log(bottomSheetQueries);

  return (
    <>
      {element}
      {/* {bottomSheetQueries.map((query, i) => (
        <BottomSheet query={query} key={i} />
      ))} */}
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
