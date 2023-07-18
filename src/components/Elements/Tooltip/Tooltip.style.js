import { styled } from 'styled-components';

export const Wrapper = styled.button`
  position: relative;
  padding: 0 0 0 5px;
`;

export const TooltipBubble = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: ${(props) => (props.isShowing ? 'block' : 'none')};
  text-align: right;
  font-size: 20px;
`;

export const Description = styled.p`
  position: absolute;
  top: 70%;
  left: ${(props) => (props.direction === 'right' ? '-30%' : null)};
  right: ${(props) => (props.direction === 'right' ? null : '-30%')};
  z-index: 10;
  width: 200px;
  border-radius: 5px;
  padding: 5px;
  text-align: left;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.small};
`;
