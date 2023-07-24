import { queryClient } from 'library/react-query';
import { useForm } from 'react-hook-form';
import { FormItem } from './Form.style';

export const Form = ({ onSubmit = () => {}, children, options, schema }) => {
  const methods = useForm({ ...options });
  queryClient.setQueryData(['form'], { methods });

  return (
    <FormItem onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </FormItem>
  );
};
