import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button, Dropdown } from 'components/Elements';
import {
  BottomNavigationItem,
  BottomNavigationWrapper,
  Contents,
  HeaderWrapper,
  Icon,
  Icons,
} from './MainLayout.style';
import { useScroll } from 'hooks/useScroll';

import SearchIcon from 'assets/icons/search.svg';
import HamburgerIcon from 'assets/icons/hamburger.svg';
import BellIcon from 'assets/icons/bell.svg';

import HomeOutlinedIcon from 'assets/icons/home-outlined.svg';
import DocumentOutlinedIcon from 'assets/icons/document-outlined.svg';
import LocationOutlinedIcon from 'assets/icons/location-outlined.svg';
import ChatBubbleOutlinedIcon from 'assets/icons/chat-bubble-outlined.svg';
import UserOutlinedIcon from 'assets/icons/user-outlined.svg';
import HomeFilledIcon from 'assets/icons/home-filled.svg';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Contents>
        {children}
        <WriteButton size="medium" />
      </Contents>
      <BottomNavigation />
    </>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <Dropdown options={['역삼동', '노량진동']} />
      <Icons>
        <Icon src={SearchIcon} />
        <Icon src={HamburgerIcon} />
        <Icon src={BellIcon} />
      </Icons>
    </HeaderWrapper>
  );
};

const BottomNavigation = () => {
  const location = useLocation();
  console.log(location);
  return (
    <BottomNavigationWrapper>
      <BottomNavigationItem>
        {location.pathname === '/' ? (
          <Icon src={HomeFilledIcon} />
        ) : (
          <Icon src={HomeOutlinedIcon} />
        )}
        홈
      </BottomNavigationItem>
      <BottomNavigationItem>
        <Icon src={DocumentOutlinedIcon} />
        동네생활
      </BottomNavigationItem>
      <BottomNavigationItem>
        <Icon src={LocationOutlinedIcon} />내 근처
      </BottomNavigationItem>
      <BottomNavigationItem>
        <Icon src={ChatBubbleOutlinedIcon} />
        채팅
      </BottomNavigationItem>
      <BottomNavigationItem>
        <Icon src={UserOutlinedIcon} />
        나의 당근
      </BottomNavigationItem>
    </BottomNavigationWrapper>
  );
};

const WriteButton = ({ ...props }) => {
  const [isShowingText, setIsShowingText] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY >= 20) {
      setIsShowingText(false);
    } else {
      setIsShowingText(true);
    }
  }, [scrollY]);
  return (
    <Button
      startIcon="+"
      {...props}
      contentWidth={isShowingText ? '38px' : '0px'}
      position="fixed"
      bottom="10%"
      right="10%"
    >
      글쓰기
    </Button>
  );
};
