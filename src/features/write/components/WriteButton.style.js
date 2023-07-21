import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 199;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0.3;
`;

export const ButtonBox = styled.div`
  position: fixed;
  bottom: 15%;
  right: 10%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
`;
