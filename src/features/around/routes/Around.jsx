import { useState } from 'react';
import {
  AdBanner,
  AdBannerAnchor,
  AdBannerContent,
  Categories,
  Category,
  CategoryIcon,
  Description,
  DescriptionBubble,
  FoldButton,
  Icon,
  ReadMore,
  Section,
  SectionDescriptionWrapper,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
  Wrapper,
} from './Around.style';

import DownArrowIcon from 'assets/icons/down-arrow-square.svg';
import InfomationIcon from 'assets/icons/infomation.svg';
import { Slider } from '../components/Slider';
import { Button } from 'components/Elements';
import { Swiper } from '../components/Swiper';

export const Around = () => {
  const [isFoldedCategories, setIsFoldedCategories] = useState(true);
  return (
    <Wrapper>
      <Categories isFoldedCategories={isFoldedCategories}>
        {categories.map((category, i) => {
          if (isFoldedCategories) {
            if (i >= 11) {
              return;
            }
          }
          return (
            <Category key={i}>
              <CategoryIcon src={category.image} />
              {category.name}
            </Category>
          );
        })}
        {isFoldedCategories ? (
          <Category onClick={() => setIsFoldedCategories(false)}>
            <CategoryIcon src={DownArrowIcon} />
            더보기
          </Category>
        ) : (
          <FoldButton onClick={() => setIsFoldedCategories(true)}>
            접기 ⌃
          </FoldButton>
        )}
        <AdBanner>
          <AdBannerContent>
            싸움 잘하는 분 우대! 에버랜드에 나타난 악당을 물리칠 알바 모집중!
          </AdBannerContent>
          <AdBannerAnchor>지원하기 〉</AdBannerAnchor>
        </AdBanner>
      </Categories>
      <Section>
        <SectionTitle>새로 올라온 부동산 매물</SectionTitle>
        <Slider items={properties} type="property" />
        <ReadMore>더보기 〉</ReadMore>
      </Section>
      <Section>
        <SectionTitle>오늘의 인기 알바</SectionTitle>
        <Slider items={jobList} type="job" />
        <ReadMore>더보기 〉</ReadMore>
      </Section>
      <Section>
        <SectionTitle>지금 인기있는 중고차 매물</SectionTitle>
        <SectionSubtitle>오늘 381명이 거래했어요</SectionSubtitle>
        <Slider items={usedCars} type="usedCar" />
        <ReadMore>더보기 〉</ReadMore>
      </Section>
      <Section>
        <SectionHeader>
          <SectionTitle>우리동네 인기쿠폰</SectionTitle>
          <Button
            variant="transparent"
            size="large"
            fontWeight="700"
            padding="0 10px 0 0"
          >
            받은 쿠폰함 〉
          </Button>
        </SectionHeader>
        <Slider items={coupons} type="coupon" />
        <ReadMore>쿠폰 더보기 〉</ReadMore>
      </Section>
      <Section>
        <SectionTitle>이웃들의 추천 가게</SectionTitle>
        <Slider items={stores} type="store"></Slider>
      </Section>
      <Section>
        <SectionTitle>
          직거래로 딜러 수수료를 아껴보세요
          <SectionDescription>
            딜러 매도비와 알선 수수료를 아껴, 저렴하게 구매할 수 있어요.
          </SectionDescription>
        </SectionTitle>
        <Slider items={directUsedCars} type="directUsedCar" />
        <ReadMore>더보기 〉</ReadMore>
      </Section>
      <Section>
        <SectionTitle>걸어서 갈 수 있는 동네 알바</SectionTitle>
        <Swiper items={aroundJobs} itemsPerSlide={3}></Swiper>
        <ReadMore>더보기 〉</ReadMore>
      </Section>
      <Section>
        <SectionTitle>
          최근 본 가게
          <SectionDescription direction="right">
            최근에 소식, 상품, 쿠폰을 조회한 가게예요.
          </SectionDescription>
        </SectionTitle>
        <Slider items={recendViewedStores} type="recent" />
      </Section>
      <Section>
        <SectionTitle>이런 상품은 어떠세요?</SectionTitle>
        <SectionSubtitle>
          오라형님이 봤던 상품을 바탕으로 제안해요.
        </SectionSubtitle>
        <Slider items={products} type="product" />
      </Section>
    </Wrapper>
  );
};

const SectionDescription = ({ children, direction }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <SectionDescriptionWrapper onClick={() => setIsShowing((prev) => !prev)}>
      <Icon src={InfomationIcon} />
      <DescriptionBubble isShowing={isShowing}>
        ▲<Description direction={direction}>{children}</Description>
      </DescriptionBubble>
    </SectionDescriptionWrapper>
  );
};

const categories = [
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '알바',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '중고차 직거래',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '부동산 직거래',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '농수산물',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '음식점',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '카페 ・ 디저트',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '운동',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '뷰티샵',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '인테리어시공',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '과외 ・ 클래스',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '미용실',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '이사 ・ 용달',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '수리',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '청소',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '세탁소',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '취미',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '학원',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '육아',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '병원 ・ 약국',
  },
  {
    image:
      'https://yt3.ggpht.com/yti/AHyvSCDyFbfnK8sHqLR3m5Ro9VO4AYQdNqoI-drdfV4R=s88-c-k-c0x00ffffff-no-rj-mo',
    name: '반려동물',
  },
];

const properties = [
  {
    image:
      'data:image/jpeg;base64,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',
    category: '아파트',
    size: '14.2평',
    floor: '13층',
    infra: '이수역',
    price: '월세 1억 / 100',
    location: '사당동',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    category: '아파트',
    size: '14.2평',
    floor: '13층',
    infra: '이수역',
    price: '월세 1억 / 100',
    location: '사당동',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    category: '아파트',
    size: '14.2평',
    floor: '13층',
    infra: '이수역',
    price: '월세 1억 / 100',
    location: '사당동',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    category: '아파트',
    size: '14.2평',
    floor: '13층',
    infra: '이수역',
    price: '월세 1억 / 100',
    location: '사당동',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    category: '아파트',
    size: '14.2평',
    floor: '13층',
    infra: '이수역',
    price: '월세 1억 / 100',
    location: '사당동',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    category: '아파트',
    size: '14.2평',
    floor: '13층',
    infra: '이수역',
    price: '월세 1억 / 100',
    location: '사당동',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    category: '아파트',
    size: '14.2평',
    floor: '13층',
    infra: '이수역',
    price: '월세 1억 / 100',
    location: '사당동',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    category: '아파트',
    size: '14.2평',
    floor: '13층',
    infra: '이수역',
    price: '월세 1억 / 100',
    location: '사당동',
  },
];

const jobList = [
  {
    title: '잭앤더 평일 아르바이트 구합니다',
    name: '잭앤더베이글',
    location: '반포동',
    pay: '시급 12,000원',
  },
  {
    title: '잭앤더 평일 아르바이트 구합니다',
    name: '잭앤더베이글',
    location: '반포동',
    pay: '시급 12,000원',
  },
  {
    title: '잭앤더 평일 아르바이트 구합니다',
    name: '잭앤더베이글',
    location: '반포동',
    pay: '시급 12,000원',
  },
  {
    title: '잭앤더 평일 아르바이트 구합니다',
    name: '잭앤더베이글',
    location: '반포동',
    pay: '시급 12,000원',
  },
  {
    title: '잭앤더 평일 아르바이트 구합니다',
    name: '잭앤더베이글',
    location: '반포동',
    pay: '시급 12,000원',
  },
  {
    title: '잭앤더 평일 아르바이트 구합니다',
    name: '잭앤더베이글',
    location: '반포동',
    pay: '시급 12,000원',
  },
  {
    title: '잭앤더 평일 아르바이트 구합니다',
    name: '잭앤더베이글',
    location: '반포동',
    pay: '시급 12,000원',
  },
  {
    title: '잭앤더 평일 아르바이트 구합니다',
    name: '잭앤더베이글',
    location: '반포동',
    pay: '시급 12,000원',
  },
];

const usedCars = [
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    views: 127,
  },
];

const coupons = [
  {
    image:
      'data:image/jpeg;base64,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',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    userName: '번하트',
    category: '조향/캔들/비누클래스',
    title: '평일 오후 클래스 20%할인',
    deadline: '2023.08.31까지',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    userName: '번하트',
    category: '조향/캔들/비누클래스',
    title: '평일 오후 클래스 20%할인',
    deadline: '2023.08.31까지',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    userName: '번하트',
    category: '조향/캔들/비누클래스',
    title: '평일 오후 클래스 20%할인',
    deadline: '2023.08.31까지',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    userName: '번하트',
    category: '조향/캔들/비누클래스',
    title: '평일 오후 클래스 20%할인',
    deadline: '2023.08.31까지',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    userName: '번하트',
    category: '조향/캔들/비누클래스',
    title: '평일 오후 클래스 20%할인',
    deadline: '2023.08.31까지',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    userName: '번하트',
    category: '조향/캔들/비누클래스',
    title: '평일 오후 클래스 20%할인',
    deadline: '2023.08.31까지',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    userName: '번하트',
    category: '조향/캔들/비누클래스',
    title: '평일 오후 클래스 20%할인',
    deadline: '2023.08.31까지',
  },
  {
    image:
      'data:image/jpeg;base64,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',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    userName: '번하트',
    category: '조향/캔들/비누클래스',
    title: '평일 오후 클래스 20%할인',
    deadline: '2023.08.31까지',
  },
];

const stores = [
  {
    images: [
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxAPEBAPDQ8PDQ8PDxANDw8NDw4NFRUWFhURFRUYHSsgGBolGxUVITEhJSktLi4uFx8zODMsNygtLisBCgoKDg0NFQ8QFysaFRktLSstKy0tLS0rKzc3NysrKysrKy0tKy0tNy0rKysrKy03LTc3LS0rLSsrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EAEQQAAIBAwEDCAUJBgQHAAAAAAABAgMEERIFIVEGMTJBcZGhsRMzYXKBByIjQlKSorLBFENic4LRNGNk8BUXdIOjwuH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGxEBAQEBAAMBAAAAAAAAAAAAAAESEQITIiH/2gAMAwEAAhEDEQA/AFAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAIAkAJDA2AwAuAGwGAFwA2AwAoYGwGAFAbAYAUBsBgBcANgMAKA2AwAoDYDACgNgGAuANtpsq4rerpTkvtNaY973HbtORtV76tSFJcIpzffuXmB5fA9KlKb0wjKcuEIuT7kfQLPkraQw3GVZ8ajyu5YR2qFvGC0whCnHhFJLuQHzyz5K3dTngqS41ZafwrL70di15Fwz9JVlLHS0RUF2b857T2Kh2vwC8woLG4Dzr5PWaWlUs/xOU9XbnJ5/anJecMyoP0sFv0P1i7OqXn2nsmQB8ta6uZ83YwPd7X2JSuMy9XV+3FdL2SXX5njr6wqUJaakccGt8ZLimBlAbAYAUBsBgBcANgAHwGB8BgBMBpHwGAEwGkfAYATAYHwGAEwGB8BgBMBgfAYATAYHwaLawrVehTlJcUsR73uAyYDB6G25LVXvqThSXBfPl+i8Tr2vJq3hvcZ1X/G8LuWP1A8TTpOTxGLk+EU5PuR1LXk5dVPqKmuNR6fBZfge5oW0YLEIxprhCKRcoLt7QPMWnJGmvW1JTf2aa0r9X5Has9j0KXQowTX1pfOl3vLOgkMgFUPb3bh1Bf73slIZIASGRCRIDIo2i90UXoy7Se9dgGVCyZK6+wVgQzPc0IVIuE4qUX1Pz9jLmI2B4jbNhGhV0RbcXFSWedJtrGevmMODt8qF9PH+VH80jj4ATAYHwGAEwQW4AB9IaS/QGgCjSGkv0BoAo0hpNGgjQBRpDSbaFlUn0YSl7Ut3fzHRocnqj6co01w6Uu4Dg6SYU23hJt8Em33Hsbbk/QjzqVR/xvC7kdOjbRgsRjGC4RSQHi7bYVxU+poXGo9Phz+B1bbktH95UcvZTWPFnpFFdvaMBgtdjUKfRpRz9qfz5eJuUP8Aa3Dk4AVRQyROCcAQkSkCGAEMiCQGRJCJAkAACUZNqdJe6a0ZNq9KPugZE9zIYJ7n8CGArEY7K5AeZ5Sr6aP8pfmkcnSdvlBHNWP8tecjl6AKNIaS/QToAz6QNGgANGgNBp0EaAM+gejbSm9MVl+CXF8C3Qd+xt1CCWN/O+0DnUNir60m3wgsLvZ0bfZlOPNCOeMvns2RRbGICRpcW/LyLYwS5lgZIGBAAAEkkDIAQyIQyQEgSSgIwSAACJIDIDJk5EyGQHyGRMhkC1My7VXRfai4p2hvgvYwMKfORkWLIyBLYjGbEbA4m2o5qL3F5swaDqbTjma939WZNAGbQGg06A0AZtAGnQQBq0BoNPow0AVW9HM4r2+C3nbijDZU/nZ4I6CAeJbErii2KAkhksVgQSQADIZCIlAOhkIhkgGyTkWpKMFqlKMI8ZNRS+LObX5RWcP38aj4UVKv+RMDqAecrcrYc1KhVnwdRwpRfi5eBhrco7uXRVCivdnWkuyTaX4TWazfKPYMqrXEILM5xguM5KK8Tw1S6uKnrLitL2RkqK/8aRXC3p5zpUpfal8+X3nvLhn2R6ypyktF0arrf9PCddZ7YJpfFmefKKb9XbT9jr1KdKL+7qfgcWNQb02BmJuulLaN3P69CiuEISqy+9JpfhFgpNp1Li4qYeca1Sj3U0s/HJwbvlBa0d1S4owfB1I6m+GOcrht51N1C2vbng6VrVjTf/cmlHxLyHbX0S3raop5zu8Sa++LR53kxeXElUhcW1S0e6dNVKlKo5x5pdCTxhqO5/aR3FPxObqwJk5FrrEmLqAfIrZGoWU1nGVl5ws73jnAx3kcy+H6so0GyrHLE9GBm0B6M06A0AZtAGnQAGnQGg0aA0ARbRxn4GlC28ef4FyiBMSyIuUlltJLrbwc+55RWVPKlcU21zxpv0su6OWB0mKzzdflpbr1dKvV9ulU4/iafgc+tyxry6FGlS9s5TrPw0l5U1Hs8EywlltJcW8I+eXG3bypz15RXCmo0/FLPic6o3N5nKVR8aknN97Llm+b6Hcbfs6fSuKba51SzWl3QTOdX5Z0F6ulWq8HJQpRfe8+B45JGWre0qUfpa9Km88+Y092dyxJvq3f2NZibr1lblfcy6FKjS97XWf/AKrwOfcbZuqj0zuakdXNGnKNDtw4JS8Tk0Ksqj+ht7u536k6VvWdPhuqSShj2ZOna7D2lNfNs4W6/wBVcUqfO8vdS1sfkT6rRZWVCadStPM1LC1y1zawt+qWXx7iqcYqTUXmOXjs6joUOR15Jp1Lu3orrjQt515fCc5xS+6b6PIe33+luLy4z1OtGhFdnoYxfiNQza8/KtGKzKUYrjJqK8TPHa9CTxTn6aS+rbxncS7oJnuLbkts+m042lCUlzTqw9PNf1VMs60IqKxFKK4RSiu5E2vrfO6ULypj0VhdST66yp2iXtaqyjLwNdPYO055z+x2y6m51rqa7YqMV+I9wxWTVWeEeShyPqyx6a/rvjG1pUbaL+MlOXiX0+Rez081KdS5f+ruK9dP+iUtPgeikxJS+HaTta5GWx2ZbW6xQt6Fuv8AIo06X5UjU5FTrx4p9m/yMV3ti3pb6lWFP+ZOFP8AM0RWm6lp01PsS+d/Le6Xdul/SXSZ5K95f7MgmncU6vU1SVS4z7PmRa8TLsv5Q7GrONHVWprCUa1elopyfNhvOU/a0kB7C7WUmZlItyprdNNZxlTTWeG5iehaW56uzqAhMJRTxuXxW8hDPmQCxj/tjaCyhHKfb/Ys0AZ9AaDRoDQBn0AaNIAaNAaC/SGkClLG84vK51/QKVGvUt3Cac3T05nB7tLbTa587sPcd9wOZe0/S06lKW7VFrdzp8QPnlWCnvqSnWfGtOdV/ibIc4RXVFfBI7dHkLBvNa8u6vGNJ0rWm/ux1fiOjbcjNmww/wBlhWaedV1Kd088fpWzemMvES2xb6tCqwnP7FJ+ln92OWaqELuqvobG8qLjOkrWPfXccn0u1oQprTThClHhTjGC7kXJk0YeBocmdpVHvja28eNStOrUT92EdP4jo0eQs366+qLfvVrQp0fhmprPXpkuaXO8du4mq1mOBQ5DbPi05xr3L/1FzXlF9sIyUPA7Gz9j2lt6i2t7f20aNOm2+LaWWWyuYpZb3d6Obd8qLGj6y5oQfCVWmn3Zz4E6ru6icnibv5SdnwyoVJVJY3ejo1qiz2tJPvOTX+VFtYo2derL+N07dN8d2tgfTMkOaXO0u3cfLJcq9t1/U2UKSfXUjWqvvzFeBCsOUNx0q/oE+qmqNPHxinLxA+oSuILrXw3+RzL7lLZUN1W5oU3wnWpQk/g3nwPCf8u7qt/ibypVzzqc6tZd0mjoWfyYWkOlKcuzTBeTA6F38pGzoNqNV1WuqlSrT7m4qPice5+VCL9Va158Nfo6S85HoLbkTYU/3Sk/4nKX64OpQ2RbU+hSpx7IxXkgPnc+Wu1q/qLOMfa1Wr/l0oqceUNd9P0CfVGFCn+ZOXifUdEF9kX0sV/8QHzBch9pV/X3taSfPGVevUj91vBptfksorfOpKT68KMf7n0Gd5Bc78hVd56MZS92Ll5IDzVr8ntjDng54+1KT8sHWteS9nT6NGmnx0Qz34ydFTqvmpS+OI+bRKoV284hFv7Uv7JgPQtoQWIpJcC5QRV+yVXz1EvYot+Of0GVhxqVH2OKXkA0qUXz4KKltvypLGHlPr7OBoVjDg32zm/1HjawXNGPcgKLeK0rGPbjj1lmgv0BoAo0BoL9IaQKNAF+kALtIaS7SGkCnSc+/hoevmi+dvclI62kjSB539rpr6ya9nzt3wMG0uU1pbR1VqsaceMn+iy/A9LW2TRk86FGXGKS+OOY5l9sOTT+bTrJrDi4qDa7ObxA8bW+VTZy9W6tf+XRmvGekxy+UqvV/wANs+tU9s5afCMZeZ6qy5P2tDd+zUqLy/3cYZfHm3nThGktyS6uZAeAe3OUFd/R21KhF/bjJyX35pfhCOwtvV8+lvXST6qbjRa7HTin4nvnWhH67S7YpBCspdFOfuRcvJAeEh8nEqm+5vKtf35SqvvlJnStfk8sKazJTqdrx5YPXxpVX0aMvjiH5mWxsq76oQ7ZvP4UBwrPkzYw5rWPbOOv82Tr0ralT3RpxS/y9MUl2bjYtmSfSqfdj+rf6Dx2VDrlUl2ySXggKPSU1w+CEntCC618Wkbo7Nor6ifvNz82X06EY9GMY+7FR8gOQr2UujCcvdhOS70sEr9ofNTaXtcI+GcnZ0hpA5Kta755Qj/VJ/oT/wANk+lV+7DHmzq6Q0gc1bLh1ynLtkl5JFkbCkvqJ+9mfmbtIaQM8KMVzRiuxJDaS7SGkCnSGku0hpAp0hpLtIaQKdIaS7SGkCnSGku0hpAp0hpLtIaQKdIF2kALNIYHwGAEwGkfAYATSGkfAYAqnTUlhpSXBrKMb2Pb5z6PPs11NP3c4OjgMAZaVlSh0adOPtUIp95fgfAYATSGkfAYATSGB8BgBNIYHwGAEwGkfAYATSGkfAYATAaR8BgBMBpHwGAEwGB8BgBMBpHwGAEwGB8BgBMBpHwGAE0hgfAYATSA+CQGAbAYAXAYGwGAFwA2AwAoDYDAChgbAYAXADYDACgNgMAKA2AwAuAGwGAFDA2AwAoDYDACgNgMALgBsBgBQwNgMALgBsBgBQGwGAFDA2AwAoDYABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==',
    ],
    name: '청년에어컨',
    introduce:
      '안녕하세요. 소식에 나와있는 정보들 보시면 에어컨에 대해서 잘 아실 수 있습니다.',
    distance: '4.8km',
    comments: 233,
    likes: 904,
    recentComment: {
      userName: '아띠아토',
      comment:
        '친절하시고 꼼꼼히 잘 설치해주시고 정리도 깔끔하게 해주시고 설명도 잘 해주셨어요.',
    },
  },
  {
    images: [
      'data:image/jpeg;base64,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',
      'data:image/jpeg;base64,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',
    ],
    name: '청년에어컨',
    introduce:
      '안녕하세요. 소식에 나와있는 정보들 보시면 에어컨에 대해서 잘 아실 수 있습니다.',
    distance: '4.8km',
    comments: 233,
    likes: 904,
    recentComment: {
      userName: '아띠아토',
      comment:
        '친절하시고 꼼꼼히 잘 설치해주시고 정리도 깔끔하게 해주시고 설명도 잘 해주셨어요.',
    },
  },
  {
    images: [
      'data:image/jpeg;base64,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',
    ],
    name: '청년에어컨',
    introduce:
      '안녕하세요. 소식에 나와있는 정보들 보시면 에어컨에 대해서 잘 아실 수 있습니다.',
    distance: '4.8km',
    comments: 233,
    likes: 904,
    recentComment: {
      userName: '아띠아토',
      comment:
        '친절하시고 꼼꼼히 잘 설치해주시고 정리도 깔끔하게 해주시고 설명도 잘 해주셨어요.',
    },
  },
  {
    images: [
      'data:image/jpeg;base64,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',
      'data:image/jpeg;base64,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',
    ],
    name: '청년에어컨',
    introduce:
      '안녕하세요. 소식에 나와있는 정보들 보시면 에어컨에 대해서 잘 아실 수 있습니다.',
    distance: '4.8km',
    comments: 233,
    likes: 904,
    recentComment: {
      userName: '아띠아토',
      comment:
        '친절하시고 꼼꼼히 잘 설치해주시고 정리도 깔끔하게 해주시고 설명도 잘 해주셨어요.',
    },
  },
  {
    images: [
      'data:image/jpeg;base64,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',
    ],
    name: '청년에어컨',
    introduce:
      '안녕하세요. 소식에 나와있는 정보들 보시면 에어컨에 대해서 잘 아실 수 있습니다.',
    distance: '4.8km',
    comments: 233,
    likes: 904,
    recentComment: {
      userName: '아띠아토',
      comment:
        '친절하시고 꼼꼼히 잘 설치해주시고 정리도 깔끔하게 해주시고 설명도 잘 해주셨어요.',
    },
  },
  {
    images: [
      'data:image/jpeg;base64,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',
      'data:image/jpeg;base64,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',
    ],
    name: '청년에어컨',
    introduce:
      '안녕하세요. 소식에 나와있는 정보들 보시면 에어컨에 대해서 잘 아실 수 있습니다.',
    distance: '4.8km',
    comments: 233,
    likes: 904,
    recentComment: {
      userName: '아띠아토',
      comment:
        '친절하시고 꼼꼼히 잘 설치해주시고 정리도 깔끔하게 해주시고 설명도 잘 해주셨어요.',
    },
  },
  {
    images: [
      'data:image/jpeg;base64,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',
    ],
    name: '청년에어컨',
    introduce:
      '안녕하세요. 소식에 나와있는 정보들 보시면 에어컨에 대해서 잘 아실 수 있습니다.',
    distance: '4.8km',
    comments: 233,
    likes: 904,
    recentComment: {
      userName: '아띠아토',
      comment:
        '친절하시고 꼼꼼히 잘 설치해주시고 정리도 깔끔하게 해주시고 설명도 잘 해주셨어요.',
    },
  },
  {
    images: [
      'data:image/jpeg;base64,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',
    ],
    name: '청년에어컨',
    introduce:
      '안녕하세요. 소식에 나와있는 정보들 보시면 에어컨에 대해서 잘 아실 수 있습니다.',
    distance: '4.8km',
    comments: 233,
    likes: 904,
    recentComment: {
      userName: '아띠아토',
      comment:
        '친절하시고 꼼꼼히 잘 설치해주시고 정리도 깔끔하게 해주시고 설명도 잘 해주셨어요.',
    },
  },
];

const directUsedCars = [
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    savedMoney: '53만원',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    savedMoney: '53만원',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    savedMoney: '53만원',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    savedMoney: '53만원',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    savedMoney: '53만원',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    savedMoney: '53만원',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    savedMoney: '53만원',
  },
  {
    image:
      'https://img1.daumcdn.net/thumb/R380x0/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5ecf16%2F072F53F70C0450CCC1BAF91911724F0DA6631052C62D26CDA2_55QW',
    type: '렉서스',
    name: 'IS XE20 IS 250 프리미엄',
    price: '590만원',
    savedMoney: '53만원',
  },
];

const aroundJobs = [
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    name: '레알짱',
    location: '노량진동',
    distance: '46m',
    content: '레알짱 홀 아르바이트 구합니다!',
    pay: '건당 320,000원',
    badges: ['걸어서 10분'],
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    name: '레알짱',
    location: '노량진동',
    distance: '46m',
    content: '레알짱 홀 아르바이트 구합니다!',
    pay: '건당 320,000원',
    badges: ['걸어서 10분'],
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    name: '레알짱',
    location: '노량진동',
    distance: '46m',
    content: '레알짱 홀 아르바이트 구합니다!',
    pay: '건당 320,000원',
    badges: ['걸어서 10분'],
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    name: '레알짱',
    location: '노량진동',
    distance: '46m',
    content: '레알짱 홀 아르바이트 구합니다!',
    pay: '건당 320,000원',
    badges: ['걸어서 10분'],
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    name: '레알짱',
    location: '노량진동',
    distance: '46m',
    content: '레알짱 홀 아르바이트 구합니다!',
    pay: '건당 320,000원',
    badges: ['걸어서 10분'],
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    name: '레알짱',
    location: '노량진동',
    distance: '46m',
    content: '레알짱 홀 아르바이트 구합니다!',
    pay: '건당 320,000원',
    badges: ['걸어서 10분'],
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    name: '레알짱',
    location: '노량진동',
    distance: '46m',
    content: '레알짱 홀 아르바이트 구합니다!',
    pay: '건당 320,000원',
    badges: ['걸어서 10분'],
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    name: '레알짱',
    location: '노량진동',
    distance: '46m',
    content: '레알짱 홀 아르바이트 구합니다!',
    pay: '건당 320,000원',
    badges: ['걸어서 10분'],
  },
];

const recendViewedStores = [
  {
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    name: '번하트',
    category: '조향/캔들/비누클래스',
  },
  {
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    name: '번하트',
    category: '조향/캔들/비누클래스',
  },
  {
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    name: '번하트',
    category: '조향/캔들/비누클래스',
  },
  {
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    name: '번하트',
    category: '조향/캔들/비누클래스',
  },
  {
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    name: '번하트',
    category: '조향/캔들/비누클래스',
  },
  {
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    name: '번하트',
    category: '조향/캔들/비누클래스',
  },
  {
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    name: '번하트',
    category: '조향/캔들/비누클래스',
  },
  {
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEDukwIjHIyFDeMuejlwHmFSRaG6Ta8mWoA&usqp=CAU',
    name: '번하트',
    category: '조향/캔들/비누클래스',
  },
];

const products = [
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    shopName: '손수담떡공방',
    distance: '1.6km',
    productName: '수제 화과자 세트',
    discount: '20%',
    price: 40000,
    likes: 31,
    badge: '배송',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    shopName: '손수담떡공방',
    distance: '1.6km',
    productName: '수제 화과자 세트',
    discount: '20%',
    price: 40000,
    likes: 31,
    badge: '무료배송',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    shopName: '손수담떡공방',
    distance: '1.6km',
    productName: '수제 화과자 세트',
    discount: '20%',
    price: 40000,
    likes: 31,
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    shopName: '손수담떡공방',
    distance: '1.6km',
    productName: '수제 화과자 세트',
    discount: '20%',
    price: 40000,
    likes: 31,
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    shopName: '손수담떡공방',
    distance: '1.6km',
    productName: '수제 화과자 세트',
    discount: '20%',
    price: 40000,
    likes: 31,
    badge: '무료배송',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    shopName: '손수담떡공방',
    distance: '1.6km',
    productName: '수제 화과자 세트',
    discount: '20%',
    price: 40000,
    likes: 31,
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    shopName: '손수담떡공방',
    distance: '1.6km',
    productName: '수제 화과자 세트',
    discount: '20%',
    price: 40000,
    likes: 31,
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    shopName: '손수담떡공방',
    distance: '1.6km',
    productName: '수제 화과자 세트',
    discount: '20%',
    price: 40000,
    likes: 31,
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    shopName: '손수담떡공방',
    distance: '1.6km',
    productName: '수제 화과자 세트',
    discount: '20%',
    price: 40000,
    likes: 31,
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPsWEDgqaGl-hgEXDY_b-2kU2pcTHUXpPH0b7EY5SwQ&s',
    shopName: '손수담떡공방',
    distance: '1.6km',
    productName: '수제 화과자 세트',
    discount: '20%',
    price: 40000,
    likes: 31,
  },
];
