import { Link, useLocation } from 'react-router-dom';
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
import { useEffect, useState } from 'react';

export const DetailLayout = ({ children }) => {
  const [hasTopImage, setHasTopImage] = useState(true);
  console.log(children);
  useEffect(() => {
    setHasTopImage();
  }, []);

  return (
    <Wrapper>
      <Header hasTopImage={true} />
      {children}
    </Wrapper>
  );
};

const Header = ({ hasTopImage }) => {
  const location = useLocation();
  return (
    <HeaderWrapper hasTopImage={hasTopImage}>
      <Icons>
        <Link to={-1}>
          <Icon src={LeftArrowIcon} hasTopImage={hasTopImage} />
        </Link>
        <Link to="/home">
          <Icon src={HomeIcon} hasTopImage={hasTopImage} />
        </Link>
      </Icons>
      <Icons>
        <Icon src={ShareIcon} hasTopImage={hasTopImage} />
        <Icon src={HamburgerIcon} hasTopImage={hasTopImage} />
      </Icons>
    </HeaderWrapper>
  );
};
