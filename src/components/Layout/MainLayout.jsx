import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { Dropdown } from 'components/Elements';
import { WriteButton } from 'features/write';
import {
  BottomNavigationItem,
  BottomNavigationWrapper,
  Contents,
  HeaderWrapper,
  Heading,
  Icon,
  Icons,
} from './MainLayout.style';

import SearchIcon from 'assets/icons/search.svg';
import HamburgerIcon from 'assets/icons/hamburger.svg';
import BellIcon from 'assets/icons/bell.svg';
import UserCicleIcon from 'assets/icons/user-circle.svg';
import QrReadIcon from 'assets/icons/qr-read.svg';
import SettingIcon from 'assets/icons/settings.svg';

import HomeOutlinedIcon from 'assets/icons/home-outlined.svg';
import DocumentOutlinedIcon from 'assets/icons/document-outlined.svg';
import LocationOutlinedIcon from 'assets/icons/location-on-map-outlined.svg';
import ChatBubbleOutlinedIcon from 'assets/icons/chat-bubble-outlined.svg';
import UserOutlinedIcon from 'assets/icons/user-outlined.svg';
import HomeFilledIcon from 'assets/icons/home-filled.svg';
import DocumentFilledIcon from 'assets/icons/document-filled.svg';
import LocationFilledIcon from 'assets/icons/location-on-map-fiiled.svg';
import ChatBubbleFilledIcon from 'assets/icons/chat-bubble-fiiled.svg';
import UserFilledIcon from 'assets/icons/user-filled.svg';
import QuestionMarkIcon from 'assets/icons/question-mark.svg';

import XIcon from 'assets/icons/x.svg';
import { usePullToRefresh } from 'hooks/usePullToRefresh';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { Notification } from 'features/notification';

export const MainLayout = ({ children }) => {
  const location = useLocation();
  const { ref, handleTouchStart, handleTouchMove, handleTouchEnd } =
    usePullToRefresh();

  return (
    <>
      <Header />
      <Contents
        ref={ref}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
        {(location.pathname === '/home' ||
          location.pathname === '/town-life' ||
          location.pathname === '/around') && <WriteButton size="large" />}
      </Contents>
      <BottomNavigation />
    </>
  );
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bottomSheet = useBottomSheet(0);
  if (location.pathname === '/home') {
    return (
      <HeaderWrapper>
        <Dropdown options={['역삼동', '노량진동']} />
        <Icons>
          <Icon src={HamburgerIcon} />
          <Icon src={SearchIcon} />
          <Icon
            src={BellIcon}
            onClick={() =>
              bottomSheet.open({
                type: 'content',
                content: <Notification close={() => bottomSheet.close()} />,
              })
            }
          />
        </Icons>
      </HeaderWrapper>
    );
  } else if (location.pathname === '/town-life') {
    return (
      <HeaderWrapper>
        <Dropdown options={['역삼동', '노량진동']} />
        <Icons>
          <Icon src={SearchIcon} />
          <Icon src={UserCicleIcon} />
          <Icon
            src={BellIcon}
            onClick={() =>
              bottomSheet.open({
                type: 'content',
                content: <Notification close={() => bottomSheet.close()} />,
              })
            }
          />
        </Icons>
      </HeaderWrapper>
    );
  } else if (location.pathname === '/around') {
    return (
      <HeaderWrapper>
        <Dropdown options={['역삼동', '노량진동']} />
        <Icons>
          <Icon src={SearchIcon} />
          <Icon src={QrReadIcon} />
          <Icon
            src={BellIcon}
            onClick={() =>
              bottomSheet.open({
                type: 'content',
                content: <Notification close={() => bottomSheet.close()} />,
              })
            }
          />
        </Icons>
      </HeaderWrapper>
    );
  } else if (location.pathname === '/chat') {
    return (
      <HeaderWrapper>
        <Heading>채팅</Heading>
        <Icons>
          <Icon src={QrReadIcon} />
          <Icon
            src={BellIcon}
            onClick={() =>
              bottomSheet.open({
                type: 'content',
                content: <Notification close={() => bottomSheet.close()} />,
              })
            }
          />
        </Icons>
      </HeaderWrapper>
    );
  } else if (location.pathname === '/user') {
    return (
      <HeaderWrapper>
        <Heading>나의 당근</Heading>
        <Icons>
          <Icon src={SettingIcon} />
        </Icons>
      </HeaderWrapper>
    );
  } else if (location.pathname === '/location') {
    return (
      <HeaderWrapper>
        <Icons>
          <Icon src={XIcon} onClick={() => navigate(-1)} />
        </Icons>
        <Heading>내 동네 설정</Heading>
        <Icons>
          <Link to="/service-center/location">
            <Icon src={QuestionMarkIcon} />
          </Link>
        </Icons>
      </HeaderWrapper>
    );
  }
};

const BottomNavigation = () => {
  const location = useLocation();
  const navigation = [
    {
      name: 'Home',
      value: '홈',
      to: './home',
      icon: [HomeOutlinedIcon, HomeFilledIcon],
    },
    {
      name: 'TownLife',
      value: '동네 생활',
      to: './town-life',
      icon: [DocumentOutlinedIcon, DocumentFilledIcon],
    },
    {
      name: 'Around',
      value: '내 근처',
      to: './around',
      icon: [LocationOutlinedIcon, LocationFilledIcon],
    },
    {
      name: 'Chat',
      value: '채팅',
      to: './chat',
      icon: [ChatBubbleOutlinedIcon, ChatBubbleFilledIcon],
    },
    {
      name: 'User',
      value: '나의 당근',
      to: './user',
      icon: [UserOutlinedIcon, UserFilledIcon],
    },
  ];
  if (location.pathname === '/location') {
    return;
  }
  return (
    <BottomNavigationWrapper>
      {navigation.map((p, i) => (
        <NavLink to={p.to} key={i}>
          <BottomNavigationItem>
            {location.pathname === p.to.split('.')[1] ? (
              <Icon src={p.icon[1]} />
            ) : (
              <Icon src={p.icon[0]} />
            )}
            {p.value}
          </BottomNavigationItem>
        </NavLink>
      ))}
    </BottomNavigationWrapper>
  );
};
