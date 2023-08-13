import { useEffect, useState } from 'react';
import { InputField } from '.';
import { queryClient } from 'library/react-query';

export const SearchField = (props) => {
  const [value, getValue] = useState('');

  const handleChangeInput = () => {
    if (props.queryKey) {
      queryClient.setQueryData(['search', props.queryKey], {
        keyword: value,
      });
    }
  };

  useEffect(() => {
    handleChangeInput();
  }, [value]);

  return <InputField {...props} getValue={getValue} />;
};
