import { queryClient } from 'library/react-query';
import { storage } from 'utils/storage';

export const logout = () => {
  queryClient.setQueryData(['user'], null);
  storage.setUser(null);
};
