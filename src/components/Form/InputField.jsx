import { useEffect, useState } from 'react';
import { Input } from './InputField.style';

export const InputField = (props) => {
  const { registraion, defaultValue, getValue, isDisabled, maxLength } = props;
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e) => {
    setValue(e.target.value);
    if (getValue) {
      getValue(e.target.value);
    }

    if (maxLength) {
      if (e.target.value.length > maxLength) {
        setValue(value.substr(0, maxLength));
      }
    }
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Input
      {...props}
      {...registraion}
      value={value}
      disabled={isDisabled}
      onChange={handleChange}
    />
  );
};
