import { styled } from 'styled-components';

export const Wrapper = styled.button`
  position: ${(props) => (props.position ? props.position : null)};
  top: ${(props) => (props.top ? props.top : null)};
  bottom: ${(props) => (props.bottom ? props.bottom : null)};
  left: ${(props) => (props.left ? props.left : null)};
  right: ${(props) => (props.right ? props.right : null)};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  border: ${(props) =>
    props?.variant?.backgroundColor === 'white'
      ? `1px solid ${props.theme.colors[props.variant.color]}`
      : 'none'};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '15px'};

  padding: ${(props) => (props.size ? props.size.padding : '2px 6px')};
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSizes[props.size.fontSize]
      : props.theme.fontSizes['medium']};
  background-color: ${(props) =>
    props.variant
      ? props.theme.colors[props.variant.backgroundColor]
      : props.theme.colors['primary']};
  color: ${(props) =>
    props.variant
      ? props.theme.colors[props.variant.color]
      : props.theme.colors['white']};
  cursor: pointer;
  outline: none;
`;

export const Content = styled.span`
  display: inline-block;
  width: ${(props) => (props.contentWidth ? props.contentWidth : null)};
  overflow: hidden;
  white-space: nowrap;
  transition: all ease 1s 0s;
`;

export const Icon = styled.img`
  width: ${(props) => (props.size ? props.size : '14px')};
  height: ${(props) => (props.size ? props.size : '14px')};
`;
