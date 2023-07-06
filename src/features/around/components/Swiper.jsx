import { useEffect, useState } from 'react';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Image, Infomation, Item, Wrapper } from './Swiper.style';
import { theme } from 'providers/theme';

export const Swiper = ({ items, itemsPerSlide }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const newPages = [];

    if (itemsPerSlide) {
      for (let i = 0; i < Math.round(items.length / itemsPerSlide); i++) {
        newPages.push(items.slice(i, i + itemsPerSlide));
      }
    } else {
      newPages.push(items);
    }
    setPages(newPages);
  }, []);

  return (
    <Wrapper>
      <SwiperComponent
        style={{ '--swiper-pagination-color': theme.colors.primary }}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={50}
        autoHeight={true}
        pagination={true}
      >
        {pages.map((items, i) => {
          return (
            <SwiperSlide key={i}>
              {items.map((item, j) => {
                return <SwiperItem item={item} key={j} order={j} />;
              })}
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </Wrapper>
  );
};

const SwiperItem = ({ item, order }) => {
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
};
