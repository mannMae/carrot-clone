import { useQuery } from 'react-query';
import {
  Button,
  Buttons,
  ContentBox,
  Overlay,
  Title,
  Wrapper,
} from './BottomSheet.style';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { Box } from '..';
import React, { useRef, useState } from 'react';

export const BottomSheet = ({ query }) => {
  const ref = useRef(null);
  const content = useRef(null);
  const touchStartY = useRef(0);
  const [defaultHeight, setDefaultHeight] = useState();
  const [height, setHeight] = useState(0);
  const layer = query[1];
  const { close } = useBottomSheet(layer);

  const { data } = useQuery(query);
  if (!data) {
    return;
  }
  console.log(data);
  const { isActive, options } = data;

  const handleTouchStart = (e) => {
    touchStartY.current = e.changedTouches[0].screenY;
    setDefaultHeight(content.current.offsetHeight);
  };

  const handleTouchMove = (e) => {
    const screenY = e.changedTouches[0].screenY;
    const height = screenY - touchStartY.current;
    setHeight(-height);
  };

  const handleTouchEnd = (e) => {
    setHeight(0);
    setDefaultHeight(null);
    if (-height * 2 >= defaultHeight) {
      close();
    }
  };

  return (
    <>
      <Wrapper
        isActive={isActive}
        bottom="0"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={ref}
        layer={layer}
      >
        <ContentBox
          height={height && `${defaultHeight + height}px`}
          maxHeight={
            options?.maxHeight
              ? `${options?.maxHeight}px`
              : `${defaultHeight}px`
          }
          ref={content}
        >
          {options?.title && <Title>{options?.title}</Title>}
          {options?.content && options?.content}
          {options?.buttons && (
            <Box>
              {options?.buttons.map((button, i) => (
                <React.Fragment key={i}>{button}</React.Fragment>
              ))}
            </Box>
          )}
        </ContentBox>
      </Wrapper>
      <Overlay isActive={isActive} onClick={() => close()} layer={layer} />
    </>
  );
};
