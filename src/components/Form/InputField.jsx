import { useEffect, useState } from 'react';
import { Input } from './InputField.style';

export const InputField = (props) =>
  //   {
  //   type = 'text',
  //   registraion,
  //   defaultValue,
  //   isDisabled,
  //   placeholder,
  //   getValue,
  //   autoFocus,
  //   outline,
  //   border,
  //   caretColor,
  // }
  {
    const { registraion, defaultValue, getValue, isDisabled } = props;
    const [value, setValue] = useState(defaultValue);
    const handleChange = (e) => {
      setValue(e.target.value);
      if (getValue) {
        getValue(e.target.value);
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
