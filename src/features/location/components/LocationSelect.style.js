import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  padding: 40px 0 0;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  padding: 0 0 20px;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
  line-height: 25px;
  white-space: pre-wrap;
`;

export const Tip = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
`;
