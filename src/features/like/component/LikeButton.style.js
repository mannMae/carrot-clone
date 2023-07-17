import { styled } from 'styled-components';

export const Wrapper = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
`;

export const Inner = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
