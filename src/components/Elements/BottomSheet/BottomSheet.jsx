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

export const BottomSheet = () => {
  const ref = useRef(null);
  const content = useRef(null);
  const touchStartY = useRef(0);
  const [defaultHeight, setDefaultHeight] = useState();
  const [height, setHeight] = useState(0);
  const { close } = useBottomSheet();

  const { data } = useQuery(['bottomSheet']);
  if (!data) {
    return;
  }
  const { isActive, options } = data;
  if (options?.type === 'select') {
    return (
      <>
        <Wrapper isActive={isActive} bottom="5%">
          {options.buttons && (
            <Buttons>
              {options.buttons.map((props, i) => (
                <Button key={i} onClick={props.clickEvent}>
                  {props.content}
                </Button>
              ))}
            </Buttons>
          )}
          <Buttons>
            <Button isStrong={true} onClick={() => close()}>
              취소
            </Button>
          </Buttons>
        </Wrapper>
        <Overlay isActive={isActive} onClick={() => close()} />
      </>
    );
  }

  const handleTouchStart = (e) => {
    console.log(e);
    touchStartY.current = e.changedTouches[0].screenY;
    setDefaultHeight(content.current.offsetHeight);
    console.log(content.current.offsetHeight);
    console.log('TouchStart', touchStartY);
  };
  const handleTouchMove = (e) => {
    const screenY = e.changedTouches[0].screenY;
    const height = screenY - touchStartY.current;
    setHeight(-height);
    console.log('TouchMove', height);
  };
  const handleTouchEnd = (e) => {
    setHeight(0);
    console.log('end', height);
    if (-height * 2 >= defaultHeight) {
      console.log('close');
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
      <Overlay isActive={isActive} onClick={() => close()} />
    </>
  );
};
