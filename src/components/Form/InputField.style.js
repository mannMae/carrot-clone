import { styled } from 'styled-components';

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin: ${(props) => props.margin};
  border: ${(props) =>
    props.border ? props.border : `1px solid ${props.theme.colors.lightGray}`};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  caret-color: ${(props) =>
    props.caretColor ? props.theme.colors[props.caretColor] : null};
  &:focus {
    outline: ${(props) =>
      props.outline ? props.outline : `solid ${props.theme.colors.black}`};
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
