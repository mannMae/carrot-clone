import { useQuery } from 'react-query';
import { Button, Buttons, Overlay, Wrapper } from './BottomSheet.style';
import { useBottomSheet } from 'hooks/useBottomSheet';

export const BottomSheet = () => {
  const { close } = useBottomSheet();

  const { data } = useQuery(['bottomSheet']);
  if (!data) {
    return;
  }
  const { isActive, buttons } = data;
  console.log(data, buttons);

  return (
    <>
      <Wrapper isActive={isActive}>
        {buttons && (
          <Buttons>
            {buttons.map((props, i) => (
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
};
