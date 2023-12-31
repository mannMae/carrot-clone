import { styled } from 'styled-components';

export const Wrapper = styled.button`
  position: ${(props) => (props.position ? props.position : null)};
  top: ${(props) => (props.top ? props.top : null)};
  bottom: ${(props) => (props.bottom ? props.bottom : null)};
  left: ${(props) => (props.left ? props.left : null)};
  right: ${(props) => (props.right ? props.right : null)};
  z-index: ${(props) => (props.zIndex ? props.zIndex : null)};

  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  gap: ${(props) => (props.gap ? props.gap : null)};

  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  box-sizing: border-box;
  border: ${(props) =>
    props?.variant?.backgroundColor === 'white'
      ? `1px solid ${props.theme.colors[props.variant.color]}`
      : props.borderColor
      ? `1px solid ${props.theme.colors[props.borderColor]}`
      : 'none'};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '15px'};
  border-bottom: ${(props) =>
    props.borderBottomColor
      ? `1px solid ${props.theme.colors[props.borderBottomColor]}`
      : null};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  padding: ${(props) =>
    props.padding
      ? props.padding
      : props.size
      ? props.size.padding
      : '2px 6px'};
  background-color: ${(props) =>
    props.variant
      ? props.theme.colors[props.variant.backgroundColor]
      : props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : props.theme.colors['primary']};
  color: ${(props) =>
    props.variant
      ? props.theme.colors[props.variant.color]
      : props.color
      ? props.theme.colors[props.color]
      : props.theme.colors['white']};
  cursor: pointer;
  outline: none;
  transition: all ease 0.5s 0s;
  transform: ${(props) => (props.transform ? props.transform : null)};
`;

export const Content = styled.span`
  display: flex;
  width: ${(props) => (props.contentWidth ? props.contentWidth : null)};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
  white-space: nowrap;
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSizes[props.size.fontSize]
      : props.fontSize
      ? props.fontSize
      : props.theme.fontSizes['medium']};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  transition: all ease 0.5s 0s;
`;

export const Icon = styled.img`
  width: ${(props) => (props.size ? props.size : '14px')};
  height: ${(props) => (props.size ? props.size : '14px')};
  filter: ${(props) => (props.filter ? props.filter : null)};
`;
