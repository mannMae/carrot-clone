import { useState } from 'react';
import {
  AccentBadge,
  AdBanner,
  AdBannerAnchor,
  AdBannerContent,
  CarAddtionalInfo,
  CarName,
  CarPrice,
  CarType,
  Categories,
  Category,
  CategoryIcon,
  Description,
  DescriptionBubble,
  FoldButton,
  Icon,
  JobLocation,
  JobPay,
  JobPost,
  JobRank,
  JobTitle,
  PropertyCategory,
  PropertyInfomation,
  PropertyLocation,
  PropertyPrice,
  ReadMore,
  Section,
  SectionDescriptionWrapper,
  SectionSubtitle,
  SectionTitle,
  SliderItem,
  SliderItemImage,
  SliderItemInfomation,
  SliderWrapper,
  Wrapper,
} from './Around.style';

import DownArrowIcon from 'assets/icons/down-arrow-square.svg';
import InfomationIcon from 'assets/icons/infomation.svg';

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
        <SliderWrapper>
          {properties.map((item, i) => {
            return (
              <SliderItem key={i}>
                <SliderItemImage src={item.image} />
                <SliderItemInfomation>
                  <PropertyCategory>{item.category}</PropertyCategory>
                  <PropertyInfomation>{item.size}</PropertyInfomation>
                  <PropertyPrice>{item.price}</PropertyPrice>
                  <PropertyLocation>{item.location}</PropertyLocation>
                </SliderItemInfomation>
              </SliderItem>
            );
          })}
        </SliderWrapper>
        <ReadMore>더보기 〉</ReadMore>
      </Section>
      <Section>
        <SectionTitle>오늘의 인기 알바</SectionTitle>
        <SliderWrapper>
          {jobList.map((job, i) => {
            return (
              <SliderItem key={i}>
                <JobPost>
                  <JobTitle>
                    <JobRank>{i + 1}위</JobRank> {job.title}
                  </JobTitle>
                  <JobLocation>
                    {job.name} ・ {job.location}
                  </JobLocation>
                  <JobPay>{job.pay}</JobPay>
                </JobPost>
              </SliderItem>
            );
          })}
        </SliderWrapper>
        <ReadMore>더보기 〉</ReadMore>
      </Section>
      <Section>
        <SectionTitle>지금 인기있는 중고차 매물</SectionTitle>
        <SectionSubtitle>오늘 381명이 거래했어요</SectionSubtitle>
        <SliderWrapper>
          {usedCars.map((car, i) => {
            return (
              <SliderItem key={i}>
                <SliderItemImage src={car.image} />
                <SliderItemInfomation>
                  <CarType>{car.type}</CarType>
                  <CarName>{car.name}</CarName>
                  <CarPrice>{car.price}</CarPrice>
                  <CarAddtionalInfo>{car.views}명이 보는 중</CarAddtionalInfo>
                </SliderItemInfomation>
              </SliderItem>
            );
          })}
        </SliderWrapper>
        <ReadMore>더보기 〉</ReadMore>
      </Section>
      <Section>
        <SectionTitle>
          직거래로 딜러 수수료를 아껴보세요
          <SectionDescription>
            딜러 매도비와 알선 수수료를 아껴, 저렴하게 구매할 수 있어요.
          </SectionDescription>
        </SectionTitle>
        <SliderWrapper>
          {directUsedCars.map((car, i) => {
            return (
              <SliderItem key={i}>
                <SliderItemImage src={car.image} />
                <SliderItemInfomation>
                  <CarType>{car.type}</CarType>
                  <CarName>{car.name}</CarName>
                  <CarPrice>{car.price}</CarPrice>
                  <AccentBadge>{car.savedMoney} 절약</AccentBadge>
                </SliderItemInfomation>
              </SliderItem>
            );
          })}
        </SliderWrapper>
        <ReadMore>더보기 〉</ReadMore>
      </Section>
      <Section>
        <SectionTitle>이런 상품은 어떠세요?</SectionTitle>
        <SectionSubtitle>
          오라형님이 봤던 상품을 바탕으로 제안해요.
        </SectionSubtitle>
        <SliderWrapper>
          {directUsedCars.map((car, i) => {
            return (
              <SliderItem key={i}>
                <SliderItemImage src={car.image} />
                <SliderItemInfomation>
                  <CarType>{car.type}</CarType>
                  <CarName>{car.name}</CarName>
                  <CarPrice>{car.price}</CarPrice>
                  <AccentBadge>{car.savedMoney} 절약</AccentBadge>
                </SliderItemInfomation>
              </SliderItem>
            );
          })}
        </SliderWrapper>
      </Section>
    </Wrapper>
  );
};

const SectionDescription = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <SectionDescriptionWrapper onClick={() => setIsShowing((prev) => !prev)}>
      <Icon src={InfomationIcon} />
      <DescriptionBubble isShowing={isShowing}>
        ▲<Description>{children}</Description>
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
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhUZGRgYGh8cGBgaGBgYGBoYGhwaGRgaGhgcIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHDQrJCs0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQECAwAGB//EAEIQAAIBAQQFCgMFBwQCAwAAAAECABEDBCExBRJBUXEiMmFygZGhscHRE1LwBkKSsuEVIzNic4LCFKLS8VODQ8Pi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJhEAAgICAgEEAgMBAAAAAAAAAAECEQMxEiFBEyIyUWFxBIHBQv/aAAwDAQACEQMRAD8A9Lr4qG3TOxQgnV2MPEfpCNYMFmFlZlWcjev+c5y5uAG6DUzrCtTrfLUHhWXWjdBqfKVutaGu1M++AwvdDU4nOTdnOsVJrhWcHqd1Se8HLj7GdYD94er6zn8l/AagxmjzkXGaOsrHRGezztqvIqM1dyPxth2io7ZtZXiorWW1eQes/wCdpRUglsaOi7XpgKqpbfiB5yUvdpWnw+3WFM6SbsuLDZSErZ4/XGFMDRUaRIoGqpzpgcOybLpJfmPcIUmjw1DRTh94V6fWbLo5PkTuMpUvBJuID+01+c9wk/tNfm/2iH/s1Pks+4yP2YnyWfj7Q1IFxF50ovz/AO39Zm2k1+cd36xkdFL8iePtFOlbAI4UImK1wqdpHpBLlFWwri3RY6SX5h3frM30jTvpltPbAwp+RfwmOEu2C8PaBOzOkAG/mtNQ5Vy2b85UaRrTA4/9b4e12z4U8JK3XOYFiz9pDHA4Z5e8odJClaGnQP1jNrthM3sYApi1tIj5W7pVtIY01W7oU6UMoVxPbAMgT9oA4UO/Kk2Ri3RB7az5Y6o8zDbJZgk/D+qzprSTMAORFZVpvmdnrK77eb/lL2FjyRQ5Gctoyu4I+6PzU9ZQJuQra2wj2nXRCFIOI1aeGEsyqQdmPpLXZCuttFD5QGFVrZqGJNBic6Z1+voCk3Ycs9USbyeU2zE7abWr5Huk3ReWeqs5vJdaGNmMRNnSUsFxHGFWqToguiE32ebI5J6z/naQqzVxges/52kARJbGjom7rieEJUTCwGPZCVgCxkopTgPKSCZZhIAlkcz2SGlgTIAkiEBYGIdPirjqerR+BEmm15Y6nq0E9BjsjR1mPhJgOaNgjAJl1T6Qa4J+7Tqjyh+p+SM0TjtgjLge30ltTncPSSVzmwXn8PSKkUYM6YDsg9qmMYvZ83iINbpyoGjJii1XlTMrie2E2w5Uxb73bEKoCtl5Y4CFWYmFrz+wQmzgQTSk6WpIjACbsrLUbPr3k/Eq5qPuUPEMJNjampqO7hLa6lyOj/gfeOE3dVIPZJsEID41x9hJezU9wk2VnQNQ7R5iYAHeUGu2A5x2biaTO7Ly24D1hF4HLbrHzMzuw5bcB6zlfyOlaGF1Xlrxh9ukFuK8teMZXhZ1Yl7Tly/I8fajA9ZvzGQJpeRn1m/MZRZKWx46LWXOm6DKY2fOEJshiOMyCwy+VDkYY08aQqy0Y7KGFKEVGMyvIq/Z5CeguXMTqidCimznsUfsp/5e+d+yn3L3x9OjcUazy/wzQthQNqk9ME0rdGVhrChK+pjFm/dP/VPkZbTo5SdX3iyj0aL8mF10Y5RKLhqLtG4dM3Nmd3/x18veOLn/AA06g8otbL/1f8YzXQiVAGrie2aouD9UeIlaYtxM1sOa3VTyipBZ1onNgt4TldkYuuKwK8DlHhM0BMR2o5cHJ53bCbbnmAtaAVx3yDOhGdqeX3eUKszF9pacqv1kIVZWkCCFzpn8SdGANFdcezOk6ia44HfsA9pZ7NejKUeyXXXHMHd8rRzBBs1pnsG0SUswFY12j8wnGzFDj93fwlkQahx2rt/mBmCC2y0d+sfMyt2XlN2es1vFk2u2K84795k3eyIJJpjTLonI/kdK0HXEcteMZW9KwC5Dlrxhds1G+t4nZh0cmX5Hlb1meJ8zMwJrfM24nzMzElLY8dErmOMLuw5a8RBDDrmOWvGaK7M30GWnP/t/xnoLj/DTqjynnGehH8ygd6z0dzPITqjynTE5zeTIBnRjHnrY/uz/AFPQy2neevU9TK2jVsz/AFPQyum7SrId6A041gyeRYaHd2/hJ1B+WL3HO/p+0Nu7ful6g/LA3HO6ntMEC2txM0uvMbqr6ynzdb3l7lzG4DzaBLswS/OEBvHObq+sPfndkW255TcPWFoCPPX20OuQO0zEXdSKEA8QD5yz4ux/mPgaek1USBUAsrqhd1CKoG1VAauG0cTM2JRipzHjtBh+jEqztvbyr+kB0w1LX+xfNvcQMaLL/FnQLXnRRj2T2GGez1mT2PLTE7fysPWajWPlu2mY2lm2umO0DxlABxshjjsnWKKEOO70nGyzx2SVRQjcPUTMKJtuc3WPnBrS0YCo7BCbTnNxPnMWTCmc5ZPstXQdcjVkO+h75teH5dOn1ED0Q+Oqc1NRwOfcfzQ9yDiBnnOrC/ac+XZ5i+ZnifMzMTS+5nifMygiy2NHRxEOubUau4E+BMDpCLNqKx/kPiKesCMzVtaqUNMF6cdThH9n8YIpDJSgoCh6P5og+CCVJ+VdgrzBtpWOkuyfDqS+GqOe9MQhyr0y8SL2Galv81n+Bv8AlMytudqfhb3km6pysXwWvPf+bp6Jb/SLrAaz5E887xGsDQmVXKZrT4hrnWtJXTmsGAYqTqfdBApjvMut2XUrVv4lM8Mt0H01ZBWGJPJbMk5M4GfQIJ6BDQ5sQ4sQarT4Ypga83jKOOf1PaZFVSyXPFVA5WFSq/d4kyztz+r7RxQYnndaXuPNbs82mTHndYektcGwPZ5tF8h8BbnldkWWx5R4f5Rg7co8IqvD0JPQPOGSAhEmJJ3knvM1JoCdwr3TKxGA4SbwaI3Cnfh6yBVhOhrOiA7yT6ekR6bb9+3QF/KD6z1Fxs6Io6PPH1nk9LNW3frU7gB6QSQ0THWkStZ0UY92LbOgmNqzF7PDN18Wm62iiswtLUlrOgzZT3uI4UGLZkgVO+WQLqHh6iUVCaVOwybIqENM9U+czCjO1tKO3WPnNUIM89e9Lp8S1RGDOhfk1oahiO3EHLcYRonSJcVOArh05fr3TmkqLRPS3VAGFBtmlvyRn9YCYXC0DHMCmNN81vPKqOjzl8L6ohlXdiWyKo9WXWWjc7lUJJNcfrHohVvcVflWZFDhq5VIzI7sugwa3QnFd+P9pIrTb90980uFsLIN96rZNhq57abD5yDm1NRX6f4HUU4Nt/r8ghQgkEYjAjpnVOoe767oVdbZdcsxzqSaDiQKylpQq9NpJA6C1aYdEqpLlx8iOL42EWf3eqv5BHIP7s8U/LZxIqPRSqV5K41HygZVh1xvDNrK2FNWgwxoUAxHDKdKXRzt9jO0NC/UH+c2LcteqfNZlb5P/TH/ANk1pyx1Tv3iajCVD+7/APZ6CB/aFqP/AGN+d4Yn8Mf1PQQD7S8/+xvzPNM0NG98YlbDDIoCa1qNQkYUwhTtg3D2i/P4XQF/KsMtTg0o/BJeTB353EeYk3N+d2eswtW53Z6TrBsW4iKn2Ueg1nxMT6RtaKx6BDWtMDFGk3wA3lfMTTdIEVbMlEi8LVQPmYD68JZZqqVezXtP12GRSKsYWpVNVmcKMhUgCtCczw8J4q/vW1c7C7EHeCTQjeJ6/Tdx+KgXWAFcajOvTs27J4y/vR1G6zWCW0hoLpsismZa06ahj39igC1+tp9ZW3tADZ0G1Pzj3lLGzOq1dktfXVWsuuo/3D2mYUE0YnHAASLCgQ9IPlWZksw3Ch8qzS7KAhG2h8orY6R5XTKMLUsFRE+I4ZzyNZ615QAx6xOOMI0ShNVd9bka5KUAOrTEVzXGCfam7u2ujCtbRyClXIozatFwJbl2ZKjCq06R6D7PaHARGdSrEaoXXbBMCEYA0OCCtZNONNNd+CtNU1oJ0JYsra1ao7MQDiRTVCriK/MTxENvl7VMW6B2k0Am3w1TVUYDGncINenXaAR9bYXHJxahsm5Q5Jy0AtaAVqeaa8NbWGW6jQZLTWJ20pXdVhUDsFO/jKWr66O5yOsCBmKMy9orjMNHOeURrCpocwCRkw2Go8hvnnwc/XdrvyUko8VWhgJc9JAOwb+EorHf5e0lUANczjnsrTKWz+qq9NK/8Bj4u+T6CLrblTSuB8DsM0vVsVUsCcNwJOYyAge0cYRauACSQBvJoO+enhviziy0mYtpQnWxtMVpzH6feanSJrXXfL5LSvlMRek+dPxL7zjfbIZ2ifjX3joSyUv9NQFXIXOiNSuArjTdBtKXnXJOPMbnChzY5ds1a/2P/kT8ae8Av1qrhirBhqMKqQRkdognoKGlxvAcLQU1W1c8yKAnKMbXJog0C9Q3RaN/jHtocGlZoljdoDtvvcB6SLI4t2esm1+9w9pSwOJ4D1kvKKPTIZsDFN+aroPrAE+kaMeSYrtsbVRuWvp/lBPRobCzdmRtVhQ+nrLFSXcqKsqEKN7FcPExrfHV7OycGv3a9h1u4qYr0ZeAWdt7YcKmBKg2YaOR1s3LBxTJXJw1VJqtdmPhPKaUAD+HdSnnPfX5/wB2/VI7xSfOL/a1dj/O3kvtJTVSSK4/iydedMPiToaMfRlZmrurj2CVv9Fayr8481ltflMF+voQa/gA2ZY46wPj+ggZRB9uSV3CtPCkKsKBXA6R4Vg95BagGA+J5Ae02u1Ar7ak+CY+UUZGaWjC0fMgMdhwxOGWOfTGd0ck809opNRZCp4nzg97tGY/CszQ/wDyOM1U/dX+Y79g6aSEYtStspKaqkjF71r2hRBUKaO+zW+Rd9NvdvlLe5O20DvjO6XFUUKq0AwAhQu06Iyl4ItR8nmrC4myR6kHhXa5b1mC2AetXVKU5xArnlPQ3xV1SNvtsiNAhYq4qGpRvlPDdvnNaedNvoqkvTaRezuNcA6Meg18jNP2efnX67YXo7RwR2wyGJGPAVHfThBbbVqSa548lvadcoxjKrI70Xs9FE466936y970ALRGQ2gowpWnSDv6IEbdBmT+BvaXW+JlrDtVh4kS8XGqTISi7toFf7DqTU2xqc8Bidp4nPtlB9nEu9QTrlsQSoqKYU4Rml6QEMHTAg84bMYZpxeb2+kTKva6GxfJWeQvOgEtmGqNU5AKFUNtqcM5b9jPYWbJqNSjGueY3rhPT6GtNUFaE1atewe0Y2mcOONxVs2R03R4vQrjXZQtOVrE1qCcq+EeO2DRjbXNG5WqA3zDA9p29sX2qhKlsRs6ZWTvs54xpUD/AAWNTkCKVMzWzKV21FO6aLeCfXtlLV6igzJ2bhj6iSbWyyj4BmfAimcGNmmtr41pTPCmHR0CEuhPZnTLHpy8ZU0G3xBPcJGUmyiikaPeSyquFEyEGSzCiigCZmu7vwlq03+nhF5Mbii7MSKE4btkDbR1lWvw0rWvNGe+FBqztaaw0V1RuHhOlq8JE1goN1lUtTP3izSqlilTh6CnrWMVUDE5/wDVYq0pVyuwQsZHoXqzKBlrPX6751xI1HAz1mJ/CwPkJdcwBsGPbQzK4EAOBnRq91fWGjJjC/Xo6xsrNv3pxJz+GpJox2VOwHjDLjd1RQB2k5k7STvi66fBRnKtUu7OxoSSWJOdMgKAdAEL/wBenzeDe0lT5XQ71Q1VhLhon/aCfN4N7TjpBfmP4W9o/qNeCXBfZlpMKpOs1AcccBj0xbYshcauIU1J2cKxo19RsGx4q3tMjbWNMAQd9G9ZzxxXPk9F+dRoLTSY2r3e0q1/r9zvMAe9IdgHSAR4SEt13nuM7Ek9nO7Whmjq2aCX/wBLZnNBAEvaDafwn2hCX9On8JlEofSEbl+TY3Cy+QTPSiFwKSP9enT+EzO0vqH5vwmN7aroHuuytwsioxhTtAm0gg+bu9zMrXSIGSN/dyfeMpRSpCuMmMS8T6XthguZBqegAZHjBr3pN9XDAdGffn3UgmvrJWmOtT1rJynfSHjGuzawPJx21J4CtfQdslbSgYnfT/rtqP7eErZvRT0Kvq3mAJgjHkDbie2pPoIj0MFWaa9ak0GGG07aHZuwpkZz2a1oAPMnx9Zmz6iU3Z8cSB2ZnslkagWh5Tbhjuz2DhFaQUzNwoNDhwlGYbIU1kAcx31NduEwayHzDuHvFaY6oyoNp8Me8SdTAkHLoElrLDnAd58pTVpFCdrzpNPqk6CzUEoCx1jkF9KRVpRixULgAIzs21gRsCmvZFmkrQ1ATZt/WUYEejs35NB8q1P9og9ycKLQDOjY9hlGtNWzNMyACf7FEwS0Ca4GZTzBjMCFtlUEnWbFicztMZ3HFlxrj6GLV+u+Mrjzl4+hjYkTyMvpk0C0wwOWHyxEXJBxOPSZ6HSKBwAfrEQdNFKRXZx/SCUW5OjRkuKsQ1PzN+JveG3CzOsCxJ6CTSatZ2SkijVBpszH/U2R0GQMWKp2NJ2qNLV8Yvvz4ADjDqqdhkNdUbEgyknKSpIRJJ9idTLqY2e4IqliDQAk0ONBjCl0KDlTvPtJ+jN+CnOK8iAiY2qdE9SNBdXvPtMb3o5LOmsAa1yJ2U3jpgeGS7o3OLEFo1LFTl+8ocxXA1GE9ffsSJ5rSoC2ahBQG0AoRXNSDPQtaB1VgaggEHeCMDK4FVr9CZn0v7BLVMOMCDUDDtHEfpGLxdepScfJOMjUuBY13kA+H/GdYc4Z83ZnzaecT2l5K4bN31xMb6OvCswcZBfEBa+Ml5RS+iL1QckbPPb9dEvYWoUBjmuXp2wS0cmh6ST5zW2bADcPE/QES6tj1pEo5c44Dd77zCwF+YbvvN+ndAbAe3aYbrgZZDAUzPQJkugtkOBsNTwpMyh3d2MIQ7AOJrQV47ZL0pkeipH/AHFcQ2CfDPT3Tpt2+B950WkE5TjqDaDXgRFV+fVWgxNfWMA2qcMSVi29kKlc2JPrKPQq2ML45WyAHOOrXw9oG70qozK4zr/anUAHOOrXo5MHJoaZkrjwgkwpG6/XfGFyPKH1sMXrDrqeUJXGRyBl4NSIWDQQNucvGFOZVbYnhHnrfG1p0sT30FT2mWmrLRm6x85GqJLyUNkym1mJkgm1mZaJKRq6VVhvUjvBEYXC01kQ71U94Bi18RTfh34RnYmVRNhgMU6c+52+kZK0W6azTt9IuTTGhs87phqIn9QflaEfZe3Ju6o3OTDipxXww7JW+3UWiqpJHLqKUz1Ww8TDrrcijc0gUHgCPWcsLUrR0SpxoItouvQwh9qIFbTokRiIbzA7G+vZWikcwghx3UI4evRGltZ5iKr1ZTnZVIfJbq4qpB4ePpNn5o+tpnibO8PZPUHHwI3Geq0dfVtUBGBBoy7Qa+URoZMZ2WHl7+EtZvlxFOJJH6zJzQ9/lKo/KA6R4ETN0FBl2eoqdgoO/wDQQh7QCgOwQO7tRK9J8JLvQ7zsr4mZ9IK7YV/qV+XxHtOlKfztOi9h6AbI0JJz1TTz9IHeuSgZszs44wwNVizZAYQC8NVNZshkOyNLQEVvFpya/eNKdGAkKKYZkrUnozkO+bbSBQdkvZrQdJUlugARBjZYZdjiIEmX1vhl1zErjIzGDZpx9pvWDWjYoOn2hKyy2yb0hRbnltxPnIGc0tE5bdYyMpPyP4LrlLoDWZhxmcKQQ3y1rrKqld2JYjpIyME88cdcjKLloaqMRDbJ4gvd9YNyHRRsDU1ia9OQyjS4WxdAxAByNMqjA06JXF/Jhkk4x2icsbirYyDwHSx5nb6QpTBNJfd7fSWyfFix2KrymsoFaNrDUP8AOBUeRHAmOFclFO9RXjSed0s1FT+ovk0b3K0rZIf5ROfE/c0VnHpM0cwS2EILzC2jyYkUL7wm2LrzZ1jd4utlpIyKoRXuyrBbjfDYOGzU4N0j3H1nGl6SK7zZVBiDNHq7vflcBlNR9ZjYYUrcqvb3Vnz27Xp7J6qcjiNhG4z2uiL2loNZTkDhtBIyPjM12FMcvUIo2n1xmYFWJ2V8JLPVU7D4CTYkVPf3Vma7Mn0E6w+h+k6VqJ0JgC0Os5x5IHfhArQ6yknmqZvaHl6gyAxMwZdZSPujOKxkSCMW3qNUdki1OqoH3mHK4bpf4iqNc80KABvOUX3a1LjWOZ+qRWEZg4Qy6HEQIHCb2drqgtuEeDIyCktNa26FoPHGN1GE87otqsN5IJ756FTKxd2LJVRJUbh3SNUbhIJkVjiirT16VQqGlCQX3BRlXtiOwcK4KGoGbUADAAk5YHAYnfwoGV8vaI7F1wbJqVGVKGuztEBtLZHOrZYsRifuqNpzOJAp2zxs8Oea771R0wfGNUZ3elDrBjlQqGIahU0emyq7djNvNPUfZ5iEK7qHOuYxx7IjTTIRQhsWBApgDQ028w+ZjT7POzB3K6oJFBt6SfDulv4ePhmtNtvf0Llk3Gmj0avAdJtUcDNQ8HvJqKT15aOZbPMfaJ6In9RfJoz0dhZoKUzFODHf2RH9rK/CUjMOp7taHaFvmujqSKo4I4Moy7QZzwdSZaXxGbTG1M0ZpQ4iUkxEDV8YPeUwm7zJzWTY6FVulYttrOObdIDbpEaGEj3XXYKKAk0qchxpsjnRegrzZOHVkIIoRrNRl/Dn0ways+WvGem0bePuH+32kckpR0VhGMthK2DkAYYU35AcJpZ2DAg4eM3WXBkXnkW9KIL8Bp0KnRfWkH0oiVzR9UZmle6dapySg2ZmS/Jav3m9oq03fzYoyg8t647hkT7TsOUtf7cMFRTggoetj5V8Zno84EbjF9xeoYb6N3jHyEOuR5RE54y9zKte0bVwmN5tcl34maMcIBZvruT3ekumRatjbRxo31sImN9+0Lo7IqFsc9am4fKdxmtzNCege0UlCzM28/XjWFyaXRlFN9hJ+0tr/wCM/i//ADIP2itvkP4v0mC2eMsLOJzl9jcY/RD6ctDnYg8TWVTTNouC2KDhUSwspYWUFh4ozfTNt/4k8feWTTt42Io4Fh5NOez+uwzNbObk/s3FG/7avO4fif8A5TO00zedy97f8pYJIazxh5S+wcV9DFTropf5gfAnzM1u13RKlBStK9mWfGCWbUslH84HhGV3UZS8Un2Tk2gitZmDJrKMYzYqK2iTBlhBmVpFYUCWi1EBtFjF4JbrAMAonKB+soajQYLRpspnPl2Wx6Htxt9cYnlDP3ELrPPWNsUYEf8AY2iPrG0DAMMjOaUaOiLs0r0Tp06IOKLb+IvCeR+1H8ZuqPMyZ09E89kaL2dQekZXXn9k6dOZfIv/AMjO15p4QHR+X10Tp0sRGt3zbqmA2PN7/WdOmfgKLpJ2GdOijHThmZ06YxDfXjKDOdOmMWH13SWznTpjGg5g/qCMrrInS+PRKRsc5R5M6UYiKGUedOijIHfbxg1tkJE6AIMc5ZZ06QybLQ0W2xxofmnregnTpCei0djOdOnSJQ//2Q==',
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
