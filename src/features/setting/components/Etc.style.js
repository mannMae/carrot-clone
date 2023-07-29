import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px 0 0;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
`;

export const Description = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;
