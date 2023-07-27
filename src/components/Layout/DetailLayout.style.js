import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => (props.padding ? props.padding : '50px 0 0')};
`;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : null)};

  padding: 10px;
  background-color: ${(props) =>
    props.hasTopImage ? 'transparent' : props.theme.colors.white};
  border-bottom: ${(props) =>
    props.borderBottomColor ? `1px solid ${props.borderBottomColor}` : null};
`;

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 500;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const Icon = styled.img`
  width: ${(props) => (props.width ? props.width : '24px')};
  height: ${(props) => (props.height ? props.height : '24px')};
  cursor: pointer;
  filter: ${(props) => (props.hasTopImage ? 'invert(100%)' : null)};
`;

export const BottomNavigationWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: ${(props) =>
    props.borderTopColor
      ? `0.5px solid ${props.theme.colors[props.borderTopColor]}`
      : null};
  padding: 15px;
  background-color: #fff;
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

export const Price = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
`;

export const PriceOffer = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
`;
