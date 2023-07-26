import { styled } from 'styled-components';

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  border: ${(props) =>
    props.border ? props.border : `1px solid ${props.theme.colors.lightGray}`};
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
