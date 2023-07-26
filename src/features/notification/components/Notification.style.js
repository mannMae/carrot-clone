import { styled } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  padding: 40px 0 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 500;
`;
