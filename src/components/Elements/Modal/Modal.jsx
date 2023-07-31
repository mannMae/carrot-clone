import { useModal } from 'hooks/useModal';
import { useQuery } from 'react-query';
import { Box, Overlay, Text, Wrapper } from './Modal.style';
import { Button } from '../Button';

export const Modal = () => {
  const { close } = useModal();

  const { data, isLoading } = useQuery(['modal']);
  if (!data || isLoading) {
    return;
  }

  const { isActive, modalOptions } = data;
  const { title, content, buttons } = modalOptions;

  return (
    <>
      <Wrapper isActive={isActive}>
        {title && <Text>{title}</Text>}
        {content && <Text>{content}</Text>}
        {isActive && buttons && buttons}
      </Wrapper>
      <Overlay isActive={isActive} onClick={() => close()} />
    </>
  );
};
