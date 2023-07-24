import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: ${(props) =>
    props.isActive && props.bottom ? props.bottom : '-100%'};
  left: 0;
  z-index: 202;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: bottom ease 0.5s 0s;
`;

export const Buttons = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  gap: 1px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px;
  background-color: ${(props) =>
    props.isStrong ? props.theme.colors.white : props.theme.colors.lightGray};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.safe};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => (props.isStrong ? '600' : '400')};
  cursor: pointer;
  &:active {
    background-color: ${(props) => props.theme.colors.gray};
  }
`;

//

export const ContentBox = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : null)};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : null)};

  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 15px 15px 0 0;
  padding: 30px 15px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Title = styled.h5`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
`;

export const Content = styled.span``;

//
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 201;

  width: 100%;
  height: 100%;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0.2;
`;
