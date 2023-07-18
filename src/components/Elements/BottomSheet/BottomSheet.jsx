import { useQuery } from 'react-query';
import { Button, Buttons, Overlay, Wrapper } from './BottomSheet.style';
import { useBottomSheet } from 'hooks/useBottomSheet';

export const BottomSheet = ({ buttons }) => {
  const sheet = useQuery(['bottomSheet']).data;
  const { close } = useBottomSheet();
  console.log(sheet);
  return (
    <>
      <Wrapper isActive={sheet?.isActive}>
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
      <Overlay isActive={sheet?.isActive} onClick={() => close()} />
    </>
  );
};
