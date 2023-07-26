import { styled } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 10px 0;
  gap: 10px;
`;

export const Text = styled.span`
  max-width: 80%;

  border-radius: 20px;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height: 20px;
  color: ${(props) => props.theme.colors[props.color]};
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
`;

export const Date = styled.span`
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;

export const Time = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => props.theme.colors.gray};
`;

export const UserProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-position: 0 5px;
  background-color: ${(props) => props.theme.colors.lightGray};
`;
