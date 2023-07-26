import { useEffect, useState } from 'react';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Box,
  Image,
  Infomation,
  InnerShadow,
  Item,
  Wrapper,
} from './Swiper.style';
import { theme } from 'providers/theme';
import { Button } from '../Button';

import XIcon from 'assets/icons/x.svg';
import BellIcon from 'assets/icons/bell-filled.svg';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { NotificationKeyword } from 'features/notification';

export const Swiper = ({
  items,
  itemsPerSlide,
  type,
  categoryItems,
  setIndex,
  index,
  isContentScrollY,
  categories,
  toggleActiveDelete,
}) => {
  const [swiper, setSwiper] = useState(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const newPages = [];

    if (items) {
      if (itemsPerSlide) {
        for (let i = 0; i < Math.round(items.length / itemsPerSlide); i++) {
          newPages.push(items.slice(i, i + itemsPerSlide));
        }
      } else {
        newPages.push(items);
      }
      setPages(newPages);
    }
    if (categoryItems) {
      setPages(categoryItems);
      console.log(categoryItems);
    }
  }, [items, categoryItems]);

  const handleSlideChange = (e) => {
    if (setIndex) {
      setIndex(e.realIndex);
    }
  };

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(index);
    }
  }, [index]);
  return (
    <Wrapper>
      <SwiperComponent
        style={{ '--swiper-pagination-color': theme.colors.primary }}
        modules={items ? [Pagination] : categoryItems ? null : null}
        slidesPerView={1}
        spaceBetween={50}
        autoHeight={true}
        pagination={true}
        onSlideChange={handleSlideChange}
        onSwiper={setSwiper}
      >
        {pages.map((page, i) => {
          return (
            <SwiperSlide
              key={i}
              style={
                isContentScrollY && {
                  height: '95vh',
                  overflowY: 'scroll',
                }
              }
            >
              {categories && (
                <SwiperSlideHeader
                  category={categories[i]}
                  isActiveDeleteButton={toggleActiveDelete}
                />
              )}
              {page.map((item, j) => {
                if (categories?.length) {
                  return (
                    <SwiperItem
                      item={item}
                      key={j}
                      order={j}
                      type={type}
                      toggleActiveDelete={toggleActiveDelete}
                      category={categories[i]}
                    />
                  );
                }
                return (
                  <SwiperItem
                    item={item}
                    key={j}
                    order={j}
                    type={type}
                    toggleActiveDelete={toggleActiveDelete}
                  />
                );
              })}
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </Wrapper>
  );
};

const SwiperSlideHeader = ({ category, isActiveDeleteButton }) => {
  const bottomSheet = useBottomSheet(1);
  if (category === '키워드 알림') {
    if (isActiveDeleteButton) {
      return (
        <Box
          flexDirection="row"
          backgroundColor="lightGray"
          padding="10px"
          borderRadius="0"
          justifyContent="end"
        >
          <Button
            variant="transparent"
            size="medium"
            padding="0"
            fontWeight="500"
          >
            전체 삭제
          </Button>
        </Box>
      );
    } else {
      return (
        <Box
          flexDirection="row"
          padding="10px"
          borderRadius="0"
          justifyContent="space-between"
          alignItems="center"
        >
          <Infomation>
            <Image src={BellIcon} width="12px" height="12px" /> 알림 받는 키워드
            1개
          </Infomation>
          <Button
            variant="blackLightGray"
            size="medium"
            padding="6px 12px"
            fontWeight="500"
            borderRadius="5px"
            onClick={() =>
              bottomSheet.open({
                type: 'content',
                content: <NotificationKeyword />,
              })
            }
          >
            설정
          </Button>
        </Box>
      );
    }
  }
};

const SwiperItem = ({
  item,
  order,
  type,
  toggleActiveDelete,
  category = '',
}) => {
  if (type === 'aroundStore') {
    return (
      <Item>
        <Box
          flexDirection="row"
          padding="15px"
          borderRadius="0"
          borderTopColor={order === 0 ? null : 'lightGray'}
          gap="15px"
        >
          <Image src={item.image} width="80px" height="80px" />
          <Box padding="5px 0">
            <Infomation fontSize="small">
              {item.name}{' '}
              <Infomation color="gray" fontSize="small">
                {item.categoryDetail}
              </Infomation>
            </Infomation>
            <Infomation>{item.news}</Infomation>
            <Infomation fontSize="small" color="gray">
              {item.postedAt}
            </Infomation>
          </Box>
        </Box>
      </Item>
    );
  }

  if (type === 'aroundJob') {
    return (
      <Item>
        <Box
          flexDirection="row"
          padding="15px"
          borderRadius="0"
          borderTopColor={order === 0 ? null : 'gray'}
        >
          <Box>
            <Infomation color="gray" fontWeight="500">
              {item.name}
              <Infomation color="gray">
                ・ {item.location} ・ {item.distance}
              </Infomation>
            </Infomation>
            <Infomation>{item.content}</Infomation>
            <Infomation fontWeight="700">{item.pay}</Infomation>
            <Box>
              {item.badges.map((badge, i) => (
                <Infomation
                  fontSize="small"
                  backgroundColor="primaryLight"
                  color="primary"
                  padding="2px 4px"
                >
                  {badge}
                </Infomation>
              ))}
            </Box>
          </Box>
          <Image src={item.image} width="60px" height="60px" />
        </Box>
      </Item>
    );
  }

  if (type === 'myStory') {
    return (
      <Item
        backgroundColor={item.backgroundColor}
        borderRadius="10px"
        margin="15px auto 45px"
      >
        <Box
          flexDirection="row"
          padding="15px 0 15px 15px"
          alignItems="stretch"
        >
          <Box justifyContent="space-between">
            <Infomation
              color="gray"
              backgroundColor="primaryLight"
              fontSize="xsmall"
              padding="3px"
            >
              {item.type}
            </Infomation>
            <Infomation color="white" fontSize="large" fontWeight="700">
              {item.title}
            </Infomation>
            <Infomation color="white">{item.description}</Infomation>
          </Box>
          <Image src={item.image} borderRadius="10px 0 0 10px" width="200px" />
        </Box>
      </Item>
    );
  }

  if (type === 'image') {
    return (
      <>
        <Item>
          <Image src={item} width="100%" height="100%" />
        </Item>
        <InnerShadow />
      </>
    );
  }

  if (type === 'notification' && category === '활동 알림') {
    return (
      <Item onClick={item.clickEvent}>
        <Box flexDirection="row" padding="30px 0" gap="15px">
          <Image
            src={item.icon}
            width="40px"
            height="40px"
            borderRadius="50%"
          />
          <Box>
            {item.content && (
              <Infomation fontSize="medium">{item.content} </Infomation>
            )}
            {item.tip && (
              <Infomation fontSize="small" color="gray" fontWeight="600">
                {item.tip}
              </Infomation>
            )}
            {item.notificatedAt && (
              <Infomation fontSize="small" color="gray">
                {item.notificatedAt}
              </Infomation>
            )}
          </Box>
          {item?.image && (
            <Image
              src={item.icon}
              width="70px"
              height="70px"
              borderRadius="5px"
            />
          )}
          {toggleActiveDelete && (
            <Button
              startIcon={XIcon}
              size="xlarge"
              variant="transparent"
              padding="0"
              onClick={() => item.delete()}
            />
          )}
        </Box>
      </Item>
    );
  }

  if (type === 'notification' && category === '키워드 알림') {
    return (
      <Item onClick={item.clickEvent}>
        <Box flexDirection="row" padding="30px 0" gap="15px">
          <Image
            src={item.image}
            width="70px"
            height="70px"
            borderRadius="5px"
          />
          <Box>
            <Infomation fontSize="medium">
              <Infomation fontWeight="700">{item.keyword}</Infomation> -{' '}
              {item.title}
            </Infomation>
            <Infomation fontSize="small" color="gray">
              {item.town} ・ {item.postedAt}
            </Infomation>
          </Box>
          {toggleActiveDelete && (
            <Button
              startIcon={XIcon}
              size="xlarge"
              variant="transparent"
              padding="0"
              onClick={() => item.delete()}
            />
          )}
        </Box>
      </Item>
    );
  }
};
