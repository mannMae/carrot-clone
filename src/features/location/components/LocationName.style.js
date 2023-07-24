import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
`;

export const Example = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;
