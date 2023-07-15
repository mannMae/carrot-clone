import { useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  Heading,
  Icon,
  Icons,
  Wrapper,
} from './DetailLayout.style';
import { Dropdown } from 'components/Elements';

import LeftArrowIcon from 'assets/icons/left-arrow.svg';
import HomeIcon from 'assets/icons/home-outlined.svg';
import ShareIcon from 'assets/icons/share.svg';
import HamburgerIcon from 'assets/icons/hamburger-dots.svg';
import { useState } from 'react';

export const DetailLayout = ({ children }) => {
  console.log(children);
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

const Header = () => {
  const [hasTopImage, setHasTopImage] = useState(true);
  const location = useLocation();
  return (
    <HeaderWrapper hasTopImage={hasTopImage}>
      <Icons>
        <Icon src={LeftArrowIcon} hasTopImage={hasTopImage} />
        <Icon src={HomeIcon} hasTopImage={hasTopImage} />
      </Icons>
      <Icons>
        <Icon src={ShareIcon} hasTopImage={hasTopImage} />
        <Icon src={HamburgerIcon} hasTopImage={hasTopImage} />
      </Icons>
    </HeaderWrapper>
  );

  //   if (location.pathname === '/home') {
  //     return (
  //       <HeaderWrapper>
  //         <Dropdown options={['역삼동', '노량진동']} />
  //         <Icons>
  //           <Icon src={SearchIcon} />
  //           <Icon src={HamburgerIcon} />
  //           <Icon src={BellIcon} />
  //         </Icons>
  //       </HeaderWrapper>
  //     );
  //   } else if (location.pathname === '/town-life') {
  //     return (
  //       <HeaderWrapper>
  //         <Dropdown options={['역삼동', '노량진동']} />
  //         <Icons>
  //           <Icon src={SearchIcon} />
  //           <Icon src={UserCicleIcon} />
  //           <Icon src={BellIcon} />
  //         </Icons>
  //       </HeaderWrapper>
  //     );
  //   } else if (location.pathname === '/around') {
  //     return (
  //       <HeaderWrapper>
  //         <Dropdown options={['역삼동', '노량진동']} />
  //         <Icons>
  //           <Icon src={SearchIcon} />
  //           <Icon src={QrReadIcon} />
  //           <Icon src={BellIcon} />
  //         </Icons>
  //       </HeaderWrapper>
  //     );
  //   } else if (location.pathname === '/chat') {
  //     return (
  //       <HeaderWrapper>
  //         <Heading>채팅</Heading>
  //         <Icons>
  //           <Icon src={QrReadIcon} />
  //           <Icon src={BellIcon} />
  //         </Icons>
  //       </HeaderWrapper>
  //     );
  //   } else if (location.pathname === '/user') {
  //     return (
  //       <HeaderWrapper>
  //         <Heading>나의 당근</Heading>
  //         <Icons>
  //           <Icon src={SettingIcon} />
  //         </Icons>
  //       </HeaderWrapper>
  //     );
  //   }
};
