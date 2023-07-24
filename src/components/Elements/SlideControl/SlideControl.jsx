import { useEffect, useState } from 'react';
import {
  Button,
  Bar,
  Point,
  Wrapper,
  Labels,
  Label,
} from './SlideControl.style';
import Draggable from 'react-draggable';

export const SlideControl = ({ points = 3, defaultValue = 0, getValue }) => {
  const [value, setValue] = useState(defaultValue);
  const [bodyOffset, setBodyOffset] = useState(0);
  const [x, setX] = useState(0);

  const section = 100 / points;
  const bar = document.getElementById('bar');

  useEffect(() => {
    if (bar) {
      setBodyOffset(bar.offsetWidth - bar.offsetLeft + 10);
    }
  }, []);

  const stopDragButton = (data) => {
    setBodyOffset(
      data.node.offsetParent.offsetWidth -
        data.node.offsetParent.offsetLeft +
        10
    );
    const position = (data.x / bodyOffset) * 100;
    const newValue = Math.round(position / section);
    setValue(newValue);
    setX(newValue * (bodyOffset / points));
  };

  useEffect(() => {
    if (bar) {
      setBodyOffset(bar.offsetWidth - bar.offsetLeft + 10);
    }
    getValue(value);
    setX(value * (bodyOffset / points));
  }, [value]);

  return (
    <Wrapper>
      <Bar id="bar">
        {Array.from({ length: points + 1 }).map((p, i) => (
          <Point key={i} onClick={() => setValue(i)} />
        ))}
        <Draggable
          axis="x"
          handle="#button"
          bounds="#bar"
          position={{ x: x, y: 0 }}
          onStop={(e, data) => stopDragButton(data)}
        >
          <Button id="button" position={value} />
        </Draggable>
      </Bar>
      <Labels>
        <Label>가까운 동네</Label>
        <Label>먼 동네</Label>
      </Labels>
    </Wrapper>
  );
};
