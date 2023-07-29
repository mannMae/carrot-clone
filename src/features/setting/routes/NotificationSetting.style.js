import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 50px 0 0;
`;

export const BoxTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray};
`;
