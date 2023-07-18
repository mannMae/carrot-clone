import { queryClient } from 'library/react-query';
import { useMutation, useQuery } from 'react-query';

export const useBottomSheet = () => {
  const open = () =>
    queryClient.setQueryData(['bottomSheet'], { isActive: true });
  const close = () =>
    queryClient.setQueryData(['bottomSheet'], { isActive: false });
  // const open = useCallback(() => setIsActive(true), []);
  // const close = useCallback(() => setIsActive(false), []);
  return { open, close };
};
