import { styled } from 'styled-components';

export const Icon = styled.img`
  width: ${(props) => (props.width ? props.width : '24px')};
  height: ${(props) => (props.height ? props.height : '24px')};
  cursor: pointer;
  filter: ${(props) => (props.hasTopImage ? 'invert(100%)' : null)};
`;
