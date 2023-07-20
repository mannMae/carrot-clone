import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
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
import { Button, ShareButton } from 'components/Elements';

import LeftArrowIcon from 'assets/icons/left-arrow.svg';
import HomeIcon from 'assets/icons/home-outlined.svg';
import HamburgerIcon from 'assets/icons/hamburger-dots.svg';
import { useEffect, useState } from 'react';
import { details } from 'features/market/routes/MarketDetail';
import { LikeButton } from 'features/like';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { useModal } from 'hooks/useModal';
import { locationData } from 'features/location/routes/Location';

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

  const bottomSheet = useBottomSheet();
  const modal = useModal();

  const navigate = useNavigate();

  const buttons = [
    {
      clickEvent: () => {
        navigate('/declaration');
        bottomSheet.close();
      },
      content: '신고',
    },
    {
      clickEvent: () => {
        modal.open(modalOptions);
        bottomSheet.close();
      },
      content: '이 사용자의 글 보지 않기',
    },
  ];

  const modalOptions = {
    title: '',
    content: `${details.user.username}님의 모든 게시글을 보지 않으시겠어요?\n게시글 목록에서 ${details.user.username}님의 게시글이 더는 보이지 않아요.`,
    button: (
      <Button
        variant=""
        width="100%"
        height="30px"
        borderRadius="5px"
        fontWeight="600"
        alignItems="center"
      >
        네, 안 볼게요
      </Button>
    ),
  };

  // const location = useLocation();
  const currentUrl = document.location.href;
  if (location.pathname.split('/')[1] === 'home') {
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
          <ShareButton
            title={details.title}
            text={details.description}
            url={currentUrl}
          />
          <Icon
            src={HamburgerIcon}
            hasTopImage={hasTopImage}
            onClick={() => bottomSheet.open(buttons)}
          />
        </Icons>
      </HeaderWrapper>
    );
  }

  const locationName = decodeURI(
    decodeURIComponent(location.pathname.split('/')[3])
  );

  if (location.pathname.split('/')[1] === 'location') {
    return (
      <HeaderWrapper borderBottomColor="lightGray">
        <Icons>
          <Link to={-1}>
            <Icon src={LeftArrowIcon} />
          </Link>
        </Icons>
        <Heading>{`${locationName}과 근처 동네 ${locationData[locationName]['count'][3]}개`}</Heading>
        <Icons></Icons>
      </HeaderWrapper>
    );
  }
};

const BottomNavigation = () => {
  const location = useLocation();

  if (location.pathname.split('/')[1] === 'home') {
    return (
      <BottomNavigationWrapper>
        <Box flexDirection="row" height="40px" alignItems="center" gap="30px">
          <LikeButton userId={details.userId} />
          <Box>
            <Price>{details.price.toLocaleString('en-US')}원</Price>
            <PriceOffer>가격 제안 불가</PriceOffer>
          </Box>
        </Box>
        <Link to={`/chat/${details.userId}`}>
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
  }
};
