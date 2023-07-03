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
  position: relative;
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
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '10px'};
`;

export const Box = styled.div`
  display: ${(props) => (props.display ? props.display : 'flex')};
  width: 100%;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  gap: 5px;
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.theme.colors[props.borderColor]}`
      : null};
  border-radius: 5px;
  padding: ${(props) => (props.padding ? props.padding : null)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null};
  overflow: hidden;
`;

export const Infomation = styled.span`
  display: ${(props) => (props.display ? props.display : 'inline')};
  width: ${(props) =>
    props.width ? props.width : props.textOverflow ? '100%' : null};
  padding: ${(props) => (props.padding ? props.padding : null)};
  background-color: ${(props) =>
    props.backgroundColor ? props.theme.colors[props.backgroundColor] : null};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSizes[props.fontSize]
      : props.theme.fontSizes.medium};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  border-radius: ${(props) => (props.backgroundColor ? '3px' : null)};
  white-space: ${(props) => (props.whiteSpace ? props.whiteSpace : null)};
  overflow: ${(props) =>
    props.overflow ? props.overflow : props.textOverflow ? 'hidden' : null};
  text-overflow: ${(props) => (props.textOverflow ? props.textOverflow : null)};
  -webkit-line-clamp: ${(props) =>
    props.webkitLineClamp ? props.webkitLineClamp : null};
  -webkit-box-orient: ${(props) =>
    props.webkitBoxOrient ? props.webkitBoxOrient : null};
  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};
`;
