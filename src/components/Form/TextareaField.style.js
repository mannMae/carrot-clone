import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 110px;
  border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
  border-radius: 5px;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  resize: none;
  &:focus {
    outline: ${(props) => `solid ${props.theme.colors.black}`};
  }
`;

export const Count = styled.span`
  position: absolute;
  bottom: 5%;
  right: 2%;
`;

export const Value = styled.span`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.gray};
`;
