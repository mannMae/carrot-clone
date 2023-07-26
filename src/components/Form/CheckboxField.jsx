import { useEffect, useState } from 'react';
import { Input, Label } from './Checkbox.style';

export const CheckboxField = ({
  children,
  registration,
  isBoxVisible,
  getValue,
  fontSize,
}) => {
  const [isChecked, setIsChecked] = useState(null);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    if (getValue) {
      getValue(isChecked);
    }
  }, [isChecked]);
  return (
    <Label onChange={handleChange} fontSize={fontSize}>
      <Input
        type="checkbox"
        {...registration}
        defaultValue={isChecked}
        isBoxVisible={isBoxVisible}
      />
      {children}
    </Label>
  );
};
