import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  display: ${(props) => (props.display ? props.display : 'flex')};
  width: ${(props) => (props.width ? props.width : null)};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : null)};
  height: ${(props) => (props.height ? props.height : null)};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  gap: ${(props) => (props.gap ? props.gap : '5px')};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : null)};

  grid-template-columns: ${(props) =>
    props.gridTemplateColumns ? props.gridTemplateColumns : null};

  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.theme.colors[props.borderColor]}`
      : null};
  border-top: ${(props) =>
    props.borderTopColor
      ? `1px solid ${props.theme.colors[props.borderTopColor]}`
      : null};
  border-bottom: ${(props) =>
    props.borderBottomColor
      ? `1px solid ${props.theme.colors[props.borderBottomColor]}`
      : null};

  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
  padding: ${(props) => (props.padding ? props.padding : null)};
  color: ${(props) => (props.color ? props.theme.colors[props.color] : null)};
  background-color: ${(props) =>
    props.backgroundColor ? props.theme.colors[props.backgroundColor] : null};
  overflow: ${(props) => (props.overflow ? props.overflow : null)};
  overflow-y: ${(props) => (props.overflowY ? props.overflowY : null)};
  opacity: ${(props) => props.opacity};

  transform: ${(props) => props.transform};
`;
