import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: ${(props) => (props.display ? props.display : 'flex')};
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  gap: ${(props) => (props.gap ? props.gap : '5px')};

  grid-template-columns: ${(props) =>
    props.gridTemplateColumns ? props.gridTemplateColumns : null};

  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.theme.colors[props.borderColor]}`
      : null};
  border-bottom: ${(props) =>
    props.borderBottomColor
      ? `1px solid ${props.theme.colors[props.borderBottomColor]}`
      : null};

  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
  padding: ${(props) => (props.padding ? props.padding : null)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null};
  overflow: ${(props) => (props.overflow ? props.overflow : null)};
`;
