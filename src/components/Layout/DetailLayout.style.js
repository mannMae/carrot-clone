import { styled } from 'styled-components';

export const Wrapper = styled.div``;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${(props) =>
    props.hasTopImage ? 'transparent' : props.theme.colors.white};
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
