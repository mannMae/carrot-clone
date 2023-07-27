import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
  line-height: 25px;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
`;
