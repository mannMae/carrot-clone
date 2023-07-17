import { Link, useLocation } from 'react-router-dom';
import {
  BottomNavigationWrapper,
  Box,
  HeaderWrapper,
  Heading,
  Icon,
  Icons,
  Price,
  PriceOffer,
  Wrapper,
} from './DetailLayout.style';
import { Button, Dropdown } from 'components/Elements';

import LeftArrowIcon from 'assets/icons/left-arrow.svg';
import HomeIcon from 'assets/icons/home-outlined.svg';
import ShareIcon from 'assets/icons/share.svg';
import HamburgerIcon from 'assets/icons/hamburger-dots.svg';
import { useEffect, useState } from 'react';
import { details } from 'features/market/routes/MarketDetail';
import { LikeButton } from 'features/like';

export const DetailLayout = ({ children }) => {
  const [hasTopImage, setHasTopImage] = useState(false);
  useEffect(() => {
    if (details.images.length) {
      setHasTopImage(true);
    }
  }, []);

  return (
    <Wrapper>
      <Header hasTopImage={hasTopImage} />
      {children}
      <BottomNavigation />
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

const BottomNavigation = () => {
  const location = useLocation();
  const userId = 3;
  return (
    <BottomNavigationWrapper>
      <Box flexDirection="row" height="40px" alignItems="center" gap="30px">
        <LikeButton userId={userId} />
        <Box>
          <Price>{details.price.toLocaleString('en-US')}원</Price>
          <PriceOffer>가격 제안 불가</PriceOffer>
        </Box>
      </Box>
      <Link to={`/chat/${userId}`}>
        <Button
          borderRadius="5px"
          padding="6px 12px"
          size="medium"
          fontWeight="500"
        >
          채팅하기
        </Button>
      </Link>
    </BottomNavigationWrapper>
  );
};
