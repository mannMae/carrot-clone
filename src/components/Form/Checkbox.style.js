import { styled } from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const Input = styled.input.attrs({ type: 'checkbox' })``;
