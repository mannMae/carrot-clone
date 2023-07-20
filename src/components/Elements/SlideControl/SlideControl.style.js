import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 10px;
`;

export const Bar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5px;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

export const Point = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

export const Button = styled.div`
  position: absolute;
  transition: all ease 0.1s 0s;

  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 300;
`;
