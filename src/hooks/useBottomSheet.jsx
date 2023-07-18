import { queryClient } from 'library/react-query';

export const useBottomSheet = () => {
  const open = (buttons) => {
    queryClient.setQueryData(['bottomSheet'], { isActive: true, buttons });
  };
  const close = () =>
    queryClient.setQueryData(['bottomSheet'], { isActive: false, buttons: [] });

  return { open, close };
};
