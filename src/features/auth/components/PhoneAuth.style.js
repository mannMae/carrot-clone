import { styled } from 'styled-components';

export const Guide = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;

export const Anchor = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
  text-decoration: underline;
  cursor: pointer;
`;
