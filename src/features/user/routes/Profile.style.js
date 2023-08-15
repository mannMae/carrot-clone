import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 60px 15px 0;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

export const Nickname = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
`;

export const Uid = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray};
`;
