import React from 'react';
import { useQuery } from 'react-query';
import { Button, Buttons, Overlay, Wrapper } from './Dialog.style';
import { useDialog } from 'hooks/useDialog';

export const Dialog = () => {
  const { close } = useDialog();

  const { data } = useQuery(['dialog']);
  if (!data) {
    return;
  }
  const { isActive, options } = data;
  // if (options?.type === 'select') {
  return (
    <>
      <Wrapper isActive={isActive} bottom="5%">
        {options.buttons && (
          <Buttons>
            {options.buttons.map((props, i) => (
              <Button key={i} onClick={props.clickEvent} color={props.color}>
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
  // }
};
