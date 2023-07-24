import { queryClient } from 'library/react-query';
import { useQuery } from 'react-query';

export const useRemoveLocation = () => {
  const { data, isLoading } = useQuery(['location']);

  const remove = () => {
    queryClient.setQueryData(['location'], {
      name: '',
      position: {},
    });
  };
  return { remove };
};
