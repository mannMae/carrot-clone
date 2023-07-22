import { queryClient } from 'library/react-query';
import { useForm } from 'react-hook-form';

export const Form = ({ onSubmit = () => {}, children, options, schema }) => {
  const methods = useForm({ ...options });
  queryClient.setQueryData(['form'], { methods });

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};
