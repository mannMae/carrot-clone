import { queryClient } from 'library/react-query';

export const useBottomSheet = (layer) => {
  const open = (options) => {
    layer
      ? queryClient.setQueryData(['bottomSheet', layer], {
          isActive: true,
          options,
        })
      : queryClient.setQueryData(['bottomSheet'], {
          isActive: true,
          options,
        });
  };
  const close = () => {
    layer
      ? queryClient.setQueryData(['bottomSheet', layer], {
          isActive: false,
          options: {},
        })
      : queryClient.setQueryData(['bottomSheet'], {
          isActive: false,
          options: {},
        });
  };

  return { open, close };
};
