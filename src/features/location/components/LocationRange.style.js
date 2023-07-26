import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  padding: 40px 0 0;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 0 20px;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
  line-height: 25px;
`;

export const Infomation = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  text-decoration: underline;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
`;
