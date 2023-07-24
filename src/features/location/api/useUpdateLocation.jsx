import { queryClient } from 'library/react-query';
import { useQuery } from 'react-query';

export const useUpdateLocation = () => {
  const { data, isLoading } = useQuery(['location']);

  const update = (name, position) => {
    queryClient.setQueryData(['location'], {
      name,
      position,
    });
  };
  return { update };
};
