import { queryClient } from 'library/react-query';
import { useQuery } from 'react-query';

export const useUpdateOftenPhrase = () => {
  const { data, isLoading } = useQuery(['oftenPhrase']);

  const update = (index, value) => {
    data.phraseList[index] = value;
    queryClient.setQueryData(['oftenPhrase'], {
      phraseList: [...data.phraseList],
    });
  };
  return { update };
};
