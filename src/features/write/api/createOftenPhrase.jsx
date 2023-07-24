import { queryClient } from 'library/react-query';
import { useMutation, useQuery } from 'react-query';

export const createOftenPhrase = () => {};

export const useCreateOftenPhrase = () => {
  const { data, isLoading } = useQuery(['oftenPhrase']);

  const create = (phrase) =>
    queryClient.setQueryData(['oftenPhrase'], {
      phraseList: data?.phraseList ? [...data.phraseList, phrase] : [phrase],
    });
  return { create };
};
