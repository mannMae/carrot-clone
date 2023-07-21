import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  color: ${(props) =>
    props.isSelected ? props.theme.colors.white : props.theme.colors.black};
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.black : props.theme.colors.white};
  border: ${(props) =>
    props.isSelected ? 'none' : `1px solid ${props.theme.colors.lightGray}`};
  border-radius: 30px;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;
