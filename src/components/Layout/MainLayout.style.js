import { styled } from 'styled-components';

export const Wrapper = styled.div``;

//

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

  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.white};
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
`;

//

export const Contents = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
  position: relative;
  overflow-y: scroll;
  height: 100%;
`;

//

//

export const BottomNavigationWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: ${(props) => `0.5px solid ${props.theme.colors.gray}`};
  padding: 10px;
  background-color: #fff;
`;

export const BottomNavigationItem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Keywords = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 15px;
  gap: 15px;
  background-color: #fff;
`;
