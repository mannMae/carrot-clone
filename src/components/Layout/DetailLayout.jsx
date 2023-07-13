import { useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  Heading,
  Icon,
  Icons,
  Wrapper,
} from './DetailLayout.style';
import { Dropdown } from 'components/Elements';

export const DetailLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

const Header = () => {
  const location = useLocation();
  return (
    <HeaderWrapper>
      <Icons></Icons>
      <Icons></Icons>
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
