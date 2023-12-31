import { useState } from 'react';
import {
  Arrow,
  Label,
  Options,
  Overlay,
  Radio,
  Select,
  Wrapper,
} from './Dropdown.style';
import { Link } from 'react-router-dom';

export const Dropdown = ({ options }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(options[0]);

  const handleClickRadio = (e) => {
    setValue(e.target.id);
  };
  return (
    <>
      <Wrapper>
        <Select onClick={() => setIsActive(!isActive)}>
          {value} <Arrow isActive={isActive}>〉</Arrow>
        </Select>
        <Options isActive={isActive} onClick={() => setIsActive(false)}>
          {options.map((p, i) => (
            <Label key={i} isSelected={value === p}>
              {p}
              <Radio
                type="radio"
                name="region"
                onClick={handleClickRadio}
                id={p}
              />
            </Label>
          ))}
          <Link to="/location" style={{ display: 'flex' }}>
            <Label>내 동네 설정하기</Label>
          </Link>
        </Options>
      </Wrapper>
      {isActive && <Overlay onClick={() => setIsActive(!isActive)} />}
    </>
  );
};
