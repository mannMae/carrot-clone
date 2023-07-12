import { styled } from 'styled-components';

export const Wrapper = styled.div``;

export const Navigation = styled.nav`
  position: relative;
`;

export const Categories = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Category = styled.li`
  margin: 10px;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.black : props.theme.colors.gray};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Indicator = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.position};
  background-color: ${(props) => props.theme.colors.black};
  height: 2px;
  width: ${(props) => (props.width ? props.width : null)};
  transition: all ease 0.5s 0s;
`;
