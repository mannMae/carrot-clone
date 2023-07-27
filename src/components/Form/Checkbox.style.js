import { styled } from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSizes[props.fontSize]
      : props.theme.fontSizes.small};
  cursor: pointer;
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  display: ${(props) => (props.isBoxVisible ? 'span' : 'none')};
`;
