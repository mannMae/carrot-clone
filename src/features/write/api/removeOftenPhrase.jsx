import { queryClient } from 'library/react-query';
import { useQuery } from 'react-query';

export const useRemoveOftenPhrase = () => {
  const { data, isLoading } = useQuery(['oftenPhrase']);

  const remove = (index) => {
    data.phraseList.splice(index, 1);
    queryClient.setQueryData(['oftenPhrase'], {
      phraseList: [...data.phraseList],
    });
  };
  return { remove };
};
