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

export const MarkerName = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
`;
