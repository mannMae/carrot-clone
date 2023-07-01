import { styled } from 'styled-components';

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 20px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Image = styled.img`
  height: ${(props) => (props.height ? props.height : '140px')};
  width: ${(props) => (props.width ? props.width : '140px')};
  object-fit: cover;
  border-radius: 10px;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.theme.colors[props.borderColor]}`
      : null};
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : null)};
`;

export const Infomation = styled.span`
  background-color: ${(props) =>
    props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : props.theme.colors.white};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSizes[props.fontSize]
      : props.theme.fontSizes.medium};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  padding: ${(props) => (props.padding ? props.padding : null)};
  border-radius: ${(props) => (props.backgroundColor ? '3px' : null)};
`;
