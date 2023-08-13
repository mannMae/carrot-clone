import { queryClient } from 'library/react-query';

export const logout = () => {
  queryClient.setQueryData(['user'], null);
};
