import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { Button, Dropdown } from 'components/Elements';
import { WriteButton } from 'features/write';
import {
  BottomNavigationItem,
  BottomNavigationWrapper,
  Contents,
  HeaderWrapper,
  Heading,
  Icon,
  Icons,
  Keywords,
} from './MainLayout.style';

import SearchIcon from 'assets/icons/search.svg';
import HamburgerIcon from 'assets/icons/hamburger.svg';
import BellIcon from 'assets/icons/bell.svg';
import UserCicleIcon from 'assets/icons/user-circle.svg';
import QrReadIcon from 'assets/icons/qr-read.svg';
import SettingIcon from 'assets/icons/settings.svg';
import { usePullToRefresh } from 'hooks/usePullToRefresh';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { Notification } from 'features/notification';

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
import LeftArrowIcon from 'assets/icons/left-arrow.svg';
import { InputField } from 'components/Form';
import { useState } from 'react';

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
  const [inputValue, setInputValue] = useState('');
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/keyword=${inputValue}`);
    }
  };

  if (location.pathname === '/home') {
    return (
      <HeaderWrapper>
        <Dropdown options={['역삼동', '노량진동']} />
        <Icons>
          <Icon src={HamburgerIcon} />
          <Link to="/search">
            <Icon src={SearchIcon} />
          </Link>
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
          <Icon src={UserCicleIcon} />
          <Link to="/search">
            <Icon src={SearchIcon} />
          </Link>
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
          <Link to="/search">
            <Icon src={SearchIcon} />
          </Link>
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
          <Link to="/setting">
            <Icon src={SettingIcon} />
          </Link>
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
  } else if (location.pathname === '/search') {
    return (
      <>
        <HeaderWrapper gap="30px">
          <Icons>
            <Icon src={LeftArrowIcon} onClick={() => navigate(-1)} />
          </Icons>
          <InputField
            backgroundColor="lightGray"
            color="gray"
            outline="none"
            placeholder="노량진동 근처에서 검색"
            borderRadius="10px"
            getValue={setInputValue}
            onKeyPress={handleKeyPress}
          />
          {inputValue !== '' && (
            <Keywords>
              {keywords.map((keyword, i) => (
                <Link to={`/search/keyword=${keyword}`}>
                  <Button
                    key={i}
                    startIcon={SearchIcon}
                    size="medium"
                    gap="10px"
                    color="black"
                    backgroundColor="transparent"
                  >
                    {keyword}
                  </Button>
                </Link>
              ))}
            </Keywords>
          )}
        </HeaderWrapper>
      </>
    );
  } else if (location.pathname === '/setting') {
    return (
      <HeaderWrapper>
        <Icons>
          <Icon src={LeftArrowIcon} onClick={() => navigate(-1)} />
        </Icons>
        <Heading>설정</Heading>
        <Icons></Icons>
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
  if (
    location.pathname === '/location' ||
    location.pathname === '/search' ||
    location.pathname === '/setting'
  ) {
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

const keywords = [
  '화분',
  '행거',
  '향수',
  '화장대',
  '핸드폰',
  '호텔',
  '휴대폰',
  '헌터',
  '헬스',
  '협탁',
  '헬멧',
  '헤드셋',
  '휴대용유모차',
  '항아리',
  '햄스터',
];
