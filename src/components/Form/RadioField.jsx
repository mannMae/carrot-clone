import { useState } from 'react';
import { Input, Label, Wrapper } from './RadioField.style';

export const RadioField = ({ name, getValue }) => {
  const [value, setValue] = useState('판매하기');
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    getValue(e.target.value);
  };
  return (
    <Wrapper>
      <Label
        onChange={handleChange}
        htmlFor="0"
        isSelected={value === '판매하기'}
      >
        판매하기
        <Input type="radio" value="판매하기" name="trade-type" id="0" />
      </Label>
      <Label
        onChange={handleChange}
        htmlFor="1"
        isSelected={value === '나눔하기'}
      >
        나눔하기
        <Input type="radio" value="나눔하기" name="trade-type" id="1" />
      </Label>
    </Wrapper>
  );
};
