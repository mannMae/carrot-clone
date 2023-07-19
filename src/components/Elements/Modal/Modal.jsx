import { useModal } from 'hooks/useModal';
import { useQuery } from 'react-query';
import { Box, Overlay, Text, Wrapper } from './Modal.style';
import { Button } from '../Button';

export const Modal = () => {
  const { close } = useModal();

  const { data } = useQuery(['modal']);
  if (!data) {
    return;
  }

  const { isActive, modalOptions } = data;
  const { title, content, button } = modalOptions;

  return (
    <>
      <Wrapper isActive={isActive}>
        {title && <Text>{title}</Text>}
        {content && <Text>{content}</Text>}
        <Box flexDirection="row" width="100%">
          <Button
            variant=""
            width="100%"
            height="30px"
            borderRadius="5px"
            fontWeight="600"
            alignItems="center"
          >
            네, 안 볼게요
          </Button>
          <Button
            color="black"
            backgroundColor="white"
            borderColor="lightGray"
            width="100%"
            height="30px"
            borderRadius="5px"
            fontWeight="600"
            alignItems="center"
            onClick={() => close()}
          >
            취소
          </Button>
        </Box>
      </Wrapper>
      <Overlay isActive={isActive} onClick={() => close()} />
    </>
  );
};
