import { useEffect, useState } from 'react';
import { Count, Textarea, Value, Wrapper } from './TextareaField.style';

export const TextareaField = ({
  placeholder,
  count,
  limit,
  getValue = (value) => console.log(value),
  registration,
  defaultValue,
  addedValue,
  setDescription,
}) => {
  const [length, setLength] = useState(defaultValue ? defaultValue.length : 0);
  const [value, setValue] = useState();
  const handleChange = (e) => {
    getValue(e.target.value);
    setValue(e.target.value);
    setLength(e.target.value.length);
  };

  useEffect(() => {
    if (addedValue) {
      setValue((prev) => prev + '\n' + addedValue);
      setDescription(null);
    }
  }, [addedValue]);

  return (
    <Wrapper>
      <Textarea
        placeholder={placeholder}
        {...registration}
        onChange={handleChange}
        defaultValue={defaultValue && defaultValue}
        value={value}
      ></Textarea>
      {count && (
        <Count>
          <Value color={length <= limit ? 'primary' : 'danger'}>{length}</Value>
          /{limit}
        </Count>
      )}
    </Wrapper>
  );
};
