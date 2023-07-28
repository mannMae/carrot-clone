import { useEffect, useRef, useState } from 'react';
import { Button, Wrapper } from './ToggleSwitch.style';

export const ToggleSwitch = ({ getValue }) => {
  const [isActive, setIsActive] = useState(false);
  const button = useRef(null);
  const touchStartX = useRef(0);
  const [isTouching, setIsTouching] = useState(false);
  const [x, setX] = useState(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    setIsTouching(true);
  };

  const handleTouchMove = (e) => {
    const screenX = e.changedTouches[0].screenX;
    const X = screenX - touchStartX.current;

    console.log(X, screenX);
    if (X <= 0) {
      setX(0);
    } else if (X >= 23) {
      setX(23);
    } else {
      setX(X);
    }
  };

  const handleTouchEnd = (e) => {
    setIsTouching(false);
    if (x >= 12) {
      setIsActive(true);
    }
    if (x <= 12) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (getValue) {
      getValue(isActive);
    }
  }, [isActive]);
  return (
    <Wrapper onClick={() => setIsActive((prev) => !prev)} isActive={isActive}>
      <Button
        type="button"
        isActive={isActive}
        ref={button}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        isTouching={isTouching}
        x={x}
      />
    </Wrapper>
  );
};
