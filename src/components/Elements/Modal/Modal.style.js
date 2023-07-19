import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: ${(props) => (props.isActive ? '200' : '-200')};
  transform: ${(props) =>
    props.isActive
      ? 'translate(-50%, -50%)'
      : 'translate(-50%, -50%) scale(2,2)'};
  display: ${(props) => (props.isActive ? 'flex' : 'hidden')};
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  transition: opacity ease 0.5s 0s, transform ease 0.5s 0s;
`;

export const Box = styled.div`
  display: ${(props) => (props.display ? props.display : 'flex')};
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  gap: ${(props) => (props.gap ? props.gap : '5px')};
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
  overflow: hidden;
`;

export const Text = styled.span`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.fontSizes.medium};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '20px')};
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  white-space: pre-wrap;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 199;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0.2;
`;
