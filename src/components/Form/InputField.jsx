import { useEffect, useState } from 'react';
import { Input } from './InputField.style';

export const InputField = ({
  type = 'text',
  registraion,
  defaultValue,
  isDisabled,
  placeholder,
  getValue,
}) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e) => {
    setValue(e.target.value);
    getValue(e.target.value);
  };

  useEffect(() => {}, []);
  return (
    <Input
      type={type}
      {...registraion}
      value={value}
      disabled={isDisabled}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
