import { queryClient } from 'library/react-query';

export const useDialog = () => {
  const open = (options) => {
    queryClient.setQueryData(['dialog'], { isActive: true, options });
  };
  const close = () =>
    queryClient.setQueryData(['dialog'], { isActive: false, options: {} });

  return { open, close };
};
