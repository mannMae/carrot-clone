import { Input, Label } from './Checkbox.style';

export const CheckboxField = ({ children }) => {
  return (
    <Label>
      <Input type="checkbox" />
      {children}
    </Label>
  );
};
