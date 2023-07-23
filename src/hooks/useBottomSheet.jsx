import { queryClient } from 'library/react-query';

export const useBottomSheet = () => {
  const open = (options) => {
    queryClient.setQueryData(['bottomSheet'], { isActive: true, options });
  };
  const close = () =>
    queryClient.setQueryData(['bottomSheet'], { isActive: false, options: {} });

  return { open, close };
};
