import { useState } from 'react';
import { Input, Label } from './Checkbox.style';

export const CheckboxField = ({ children, registration }) => {
  const [isChecked, setIsChecked] = useState(null);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <Label onChange={handleChange}>
      <Input type="checkbox" {...registration} defaultValue={isChecked} />
      {children}
    </Label>
  );
};
