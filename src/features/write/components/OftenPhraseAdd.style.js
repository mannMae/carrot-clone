import { styled } from 'styled-components';

export const Wrapper = styled.div`
  height: 600px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  padding: 0 0 15px;
`;

export const Title = styled.h5`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
`;
