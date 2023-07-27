import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 50%;
  min-width: 90%;
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  border-bottom: ${(props) =>
    props.borderBottomColor
      ? `1px solid ${props.theme.colors[props.borderBottomColor]}`
      : null};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.white};
  cursor: pointer;
`;

export const Image = styled.img`
  height: ${(props) => (props.height ? props.height : '140px')};
  width: ${(props) => (props.width ? props.width : '140px')};
  object-fit: cover;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '10px'};
`;

export const Box = styled.div`
  display: ${(props) => (props.display ? props.display : 'flex')};
  width: 100%;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  gap: ${(props) => (props.gap ? props.gap : '5px')};
  width: ${(props) => (props.width ? props.width : null)};
  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.theme.colors[props.borderColor]}`
      : null};
  border-top: ${(props) =>
    props.borderTopColor
      ? `1px solid ${props.theme.colors[props.borderTopColor]}`
      : null};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '5px'};
  padding: ${(props) => (props.padding ? props.padding : null)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null};
  overflow: hidden;
`;

export const Infomation = styled.span`
  display: ${(props) => (props.display ? props.display : 'inline')};
  width: ${(props) =>
    props.width ? props.width : props.textOverflow ? '100%' : null};
  padding: ${(props) => (props.padding ? props.padding : null)};
  background-color: ${(props) =>
    props.backgroundColor ? props.theme.colors[props.backgroundColor] : null};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSizes[props.fontSize]
      : props.theme.fontSizes.medium};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  border-radius: ${(props) => (props.backgroundColor ? '3px' : null)};
  white-space: ${(props) => (props.whiteSpace ? props.whiteSpace : null)};
  overflow: ${(props) =>
    props.overflow ? props.overflow : props.textOverflow ? 'hidden' : null};
  text-overflow: ${(props) => (props.textOverflow ? props.textOverflow : null)};
  -webkit-line-clamp: ${(props) =>
    props.webkitLineClamp ? props.webkitLineClamp : null};
  -webkit-box-orient: ${(props) =>
    props.webkitBoxOrient ? props.webkitBoxOrient : null};
  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};
`;

export const InnerShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 40px 40px -40px #333, inset 0 -40px 40px -40px #333;
`;

export const Icon = styled.img`
  width: 12px;
  height: 12px;
`;

export const Label = styled.label`
  width: 130px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  margin: 0 0 0 25px;
`;

export const CheckCircle = styled.span`
  width: 25px;
  height: 25px;
  border: ${(props) => `2px solid ${props.theme.colors.lightGray}`};
  border-radius: 50%;
`;

export const CheckedCircle = styled.img`
  width: 25px;
  height: 25px;
`;
