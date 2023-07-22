import { Input } from './InputField.style';

export const InputField = ({
  type = 'text',
  registraion,
  value,
  isDisabled,
}) => {
  return (
    <Input type={type} {...registraion} value={value} disabled={isDisabled} />
  );
};
