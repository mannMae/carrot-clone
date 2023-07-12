import { useEffect, useState } from 'react';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Image, Infomation, Item, Wrapper } from './Swiper.style';
import { theme } from 'providers/theme';

export const Swiper = ({
  items,
  itemsPerSlide,
  type,
  categoryItems,
  setIndex,
  index,
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

  console.log(pages, type);

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
            <SwiperSlide key={i}>
              {page.map((item, j) => {
                return <SwiperItem item={item} key={j} order={j} type={type} />;
              })}
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </Wrapper>
  );
};

const SwiperItem = ({ item, order, type }) => {
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
    console.log('aroundJob');
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
};
