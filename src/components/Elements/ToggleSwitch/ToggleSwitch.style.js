import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  width: 60px;
  height: 30px;
  border-radius: 30px;
  padding: 1px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.lightGray};
  cursor: pointer;
  transition: all ease 0.3s 0s;
`;

export const Button = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background-color: ${(props) => props.theme.colors.white};
  transform: ${(props) =>
    props.isTouching
      ? `translateX(${props.x}px)`
      : props.isActive
      ? `translateX(30px)`
      : `translateX(0)`};
  transition: all ease 0.3s 0s;
`;
