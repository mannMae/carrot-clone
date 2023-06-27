import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

export const Select = styled.button`
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSizes[props.size]
      : props.theme.fontSizes.large};
  text-align: left;
`;

export const Arrow = styled.span`
  display: inline-block;
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSizes[props.size]
      : props.theme.fontSizes.large};
  transform: ${(props) =>
    props.isActive ? 'rotate(-90deg)' : 'rotate(90deg)'};
  transition: all ease 0.5s 0s;
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.white};
  transform: scale(${(props) => (props.isActive ? 1 : 0)});
  transition: all ease 0.5s 0s;
`;

export const Label = styled.label`
  cursor: pointer;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.black : props.theme.colors.gray};
  padding: 15px;
  font-size: ${(props) =>
    props.size
      ? props.theme.fontSizes[props.size]
      : props.theme.fontSizes.medium};
  font-weight: ${(props) => (props.isSelected ? '700' : '400')};
  white-space: nowrap;
`;

export const Radio = styled.input`
  display: none;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0.5;
`;
