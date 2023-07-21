import { styled } from 'styled-components';

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  &:focus {
    outline: ${(props) => `solid ${props.theme.colors.black}`};
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
