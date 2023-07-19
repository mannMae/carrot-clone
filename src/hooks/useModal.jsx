import { queryClient } from 'library/react-query';

export const useModal = () => {
  const open = (modalOptions) =>
    queryClient.setQueryData(['modal'], { isActive: true, modalOptions });
  const close = () =>
    queryClient.setQueryData(['modal'], {
      isActive: false,
      modalOptions: {
        title: '',
        content: '',
        button: null,
      },
    });

  return { open, close };
};
