import { styled } from 'styled-components';

export const Wrapper = styled.div``;

//

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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
  height: 100vh;
  position: relative;
  overflow-y: scroll;
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
