import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BottomNavigationWrapper,
  HeaderWrapper,
  Heading,
  Icon,
  Icons,
  Price,
  PriceOffer,
  Wrapper,
} from './DetailLayout.style';
import { Box, Button, ShareButton } from 'components/Elements';
import React, { useEffect, useState } from 'react';
import { details } from 'features/market/routes/MarketDetail';
import { LikeButton } from 'features/like';
import { useModal } from 'hooks/useModal';
import { locationData } from 'features/location/routes/Location';
import { Form, InputField } from 'components/Form';
import { useDialog } from 'hooks/useDialog';

import LeftArrowIcon from 'assets/icons/left-arrow.svg';
import HomeIcon from 'assets/icons/home-outlined.svg';
import KebabIcon from 'assets/icons/kebab.svg';
import XIcon from 'assets/icons/x.svg';
import PhoneIcon from 'assets/icons/phone.svg';
import PlusIcon from 'assets/icons/plus-black.svg';
import AirplaneGrayIcon from 'assets/icons/airplane-gray.svg';
import AirplanePrimaryIcon from 'assets/icons/airplane-primary.svg';
import { SearchField } from 'components/Form/SearchField';

export const DetailLayout = ({ children }) => {
  const location = useLocation();
  const [hasTopImage, setHasTopImage] = useState(false);

  useEffect(() => {
    if (details.images.length) {
      setHasTopImage(true);
    }
  }, []);

  if (location.pathname.split('/')[1] === 'write') {
    const handleSubmit = (value) => {
      console.log(value);
    };
    return (
      <Wrapper padding="0">
        <Form onSubmit={(value) => handleSubmit(value)}>
          {() => (
            <>
              <Header hasTopImage={hasTopImage} />
              {children}
              <BottomNavigation />
            </>
          )}
        </Form>
      </Wrapper>
    );
  }

  return (
    <Wrapper padding="0">
      <Header hasTopImage={hasTopImage} />
      {children}
      <BottomNavigation />
    </Wrapper>
  );
};

const Header = ({ hasTopImage }) => {
  const location = useLocation();

  const dialog = useDialog();
  const modal = useModal();

  const navigate = useNavigate();

  const buttons = [
    {
      clickEvent: () => {
        navigate('/declaration');
        dialog.close();
      },
      content: '신고',
    },
    {
      clickEvent: () => {
        modal.open(modalOptions);
        dialog.close();
      },
      content: '이 사용자의 글 보지 않기',
    },
  ];

  const chatKebabButtons = [
    {
      clickEvent: () => {
        navigate('/declaration');
        dialog.close();
      },
      content: '알림끄기',
    },
    {
      clickEvent: () => {
        navigate('/declaration');
        dialog.close();
      },
      content: '차단하기',
    },
    {
      clickEvent: () => {
        navigate('/declaration');
        dialog.close();
      },
      content: '신고하기',
    },
    {
      clickEvent: () => {
        modal.open(modalOptions);
        dialog.close();
      },
      content: '채팅방 나가기',
      color: 'danger',
    },
  ];

  const modalOptions = {
    title: '',
    content: `${details.user.username}님의 모든 게시글을 보지 않으시겠어요?\n게시글 목록에서 ${details.user.username}님의 게시글이 더는 보이지 않아요.`,
    buttons: (
      <Box flexDirection="row" width="100%">
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
        <Button
          color="black"
          backgroundColor="white"
          borderColor="lightGray"
          width="100%"
          height="30px"
          borderRadius="5px"
          fontWeight="600"
          alignItems="center"
          onClick={() => modal.close()}
        >
          취소
        </Button>
      </Box>
    ),
  };

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
            src={KebabIcon}
            hasTopImage={hasTopImage}
            onClick={() => dialog.open({ type: 'select', buttons })}
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

  if (location.pathname.split('/')[1] === 'write') {
    return (
      <HeaderWrapper borderBottomColor="lightGray">
        <Icons>
          <Link to={-1}>
            <Icon src={XIcon} />
          </Link>
        </Icons>
        <Heading>내 물건 팔기</Heading>
        <Button backgroundColor="transparent" color="black">
          임시저장
        </Button>
      </HeaderWrapper>
    );
  }

  if (location.pathname.split('/')[1] === 'chat') {
    return (
      <HeaderWrapper borderBottomColor="lightGray">
        <Icons>
          <Link to={-1}>
            <Icon src={LeftArrowIcon} />
          </Link>
        </Icons>
        <Heading>종호</Heading>
        <Icons>
          <Icon src={PhoneIcon} />
          <Icon
            src={KebabIcon}
            onClick={() =>
              dialog.open({ type: 'select', buttons: chatKebabButtons })
            }
          />
        </Icons>
      </HeaderWrapper>
    );
  }
  if (location.pathname.split('/')[1] === 'search') {
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
          />
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/info') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>계정 / 정보 관리</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/info/email/regist') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>이메일 등록하기</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/info/phone/edit') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>휴대폰 번호 변경하기</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/info/terms') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>서비스 이용약관</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/info/terms/terms-of-use') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>서비스 이용약관</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/info/terms/privacy-policy') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>개인정보 처리방침</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/info/terms/location-service') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>위치기반서비스 이용약관</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/follow') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>모아보기 사용자 관리</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/block') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>차단 사용자 관리</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/hidden') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>게시글 미노출 사용자 관리</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/etc') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>기타 설정</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/user/change-post-town') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>중고거래 게시글의 동네 변경하기</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/notification') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>알림 및 소리</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/language') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>언어 설정</Heading>
          <Button
            color="black"
            backgroundColor="transparent"
            fontWeight="600"
            onClick={() => {
              modal.open({
                title: '언어를 초기화 하시겠습니까?',
                content: `언어를 초기화 하시면 디바이스에 설정된 언어를 따르게 됩니다.`,
                buttons: (
                  <Box flexDirection="column" width="100%">
                    <Button
                      variant=""
                      width="100%"
                      height="30px"
                      borderRadius="5px"
                      fontWeight="600"
                      alignItems="center"
                    >
                      확인
                    </Button>
                    <Button
                      color="black"
                      backgroundColor="white"
                      borderColor="lightGray"
                      width="100%"
                      height="30px"
                      borderRadius="5px"
                      fontWeight="600"
                      alignItems="center"
                      onClick={() => modal.close()}
                    >
                      취소
                    </Button>
                  </Box>
                ),
              });
            }}
          >
            초기화하기
          </Button>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname.split('/')[2] === 'announcement') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading>공지사항</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/setting/delete-account') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={XIcon} />
            </Link>
          </Icons>
          <Heading>탈퇴하기</Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/auth/login') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <Heading></Heading>
          <Icons></Icons>
        </HeaderWrapper>
      </>
    );
  }

  if (location.pathname === '/auth/register') {
    return (
      <>
        <HeaderWrapper borderBottomColor="lightGray">
          <Icons>
            <Link to={-1}>
              <Icon src={LeftArrowIcon} />
            </Link>
          </Icons>
          <SearchField
            placeholder="동명(읍, 면)으로 검색 (ex. 서초동)"
            margin="0 0 0 20px"
            borderRadius="10px"
            backgroundColor="lightGray"
            queryKey="town"
          />
        </HeaderWrapper>
      </>
    );
  }
};

const BottomNavigation = () => {
  const location = useLocation();
  const [text, setText] = useState('');

  if (location.pathname.split('/')[1] === 'home') {
    return (
      <BottomNavigationWrapper borderTopColor="gray">
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

  if (location.pathname.split('/')[1] === 'write') {
    return (
      <BottomNavigationWrapper>
        <Button
          borderRadius="5px"
          padding="15px"
          size="large"
          fontWeight="500"
          width="100%"
        >
          작성 완료
        </Button>
      </BottomNavigationWrapper>
    );
  }

  if (location.pathname.split('/')[1] === 'chat') {
    return (
      <BottomNavigationWrapper>
        <Box
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            startIcon={PlusIcon}
            size="xlarge"
            padding="0"
            variant="transparent"
          />
          <Box
            backgroundColor="lightGray"
            width="100%"
            padding="5px"
            borderRadius="25px"
          >
            <InputField
              placeholder="메세지 보내기"
              backgroundColor="transparent"
              border="none"
              outline="none"
              getValue={setText}
            />
          </Box>
          {text.length === 0 ? (
            <Button
              startIcon={AirplaneGrayIcon}
              size="xxlarge"
              padding="0"
              variant="transparent"
            />
          ) : (
            <Button
              startIcon={AirplanePrimaryIcon}
              size="xxlarge"
              padding="0"
              variant="transparent"
            />
          )}
        </Box>
      </BottomNavigationWrapper>
    );
  }
};
