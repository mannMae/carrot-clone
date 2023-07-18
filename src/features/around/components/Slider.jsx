import { Button } from 'components/Elements';
import { Image, Item, Wrapper, Infomation, Box } from './Slider.style';

import DownloadIcon from 'assets/icons/download.svg';

export const Slider = ({ items, type }) => {
  return (
    <Wrapper>
      {items.map((item, i) => (
        <SliderItem key={i} item={item} type={type} rank={i}></SliderItem>
      ))}
    </Wrapper>
  );
};

export const SliderItem = ({ item, type, rank }) => {
  if (type === 'job') {
    return (
      <Item>
        <Box
          width="200px"
          height="100px"
          borderColor="lightGray"
          padding="10px"
        >
          <Infomation fontWeight={700}>
            <Infomation color="primary" fontWeight={700}>
              {rank + 1}위
            </Infomation>{' '}
            {item.title}
          </Infomation>
          <Infomation>
            {item.name} ・ {item.location}
          </Infomation>
          <Infomation fontWeight={700}>{item.pay}</Infomation>
        </Box>
      </Item>
    );
  }
  if (type === 'usedCar') {
    return (
      <Item>
        <Image src={item.image} />
        <Box>
          <Infomation fontSize="xsmall" color="gray">
            {item.type}
          </Infomation>
          <Infomation fontSize="xsmall">{item.name}</Infomation>
          <Infomation fontSize="xsmall">{item.price}</Infomation>
          <Infomation fontSize="xsmall" color="primary">
            {item.views}명이 보는 중
          </Infomation>
        </Box>
      </Item>
    );
  }

  if (type === 'coupon') {
    return (
      <Item>
        <Box width="200px" height="220px" borderColor="lightGray" padding="0">
          <Image
            src={item.image}
            width="100%"
            height="100px"
            borderRadius="0px"
          />
          <Box padding="10px">
            <Box flexDirection="row" alignItems="center">
              <Image
                src={item.profileImage}
                width="20px"
                height="20px"
                borderRadius="50%"
              />
              <Infomation fontSize="small">{item.userName}</Infomation>
              <Infomation fontSize="small">{item.category}</Infomation>
            </Box>
            <Infomation fontSize="medium">{item.title}</Infomation>
            <Infomation fontSize="xsmall">{item.deadline}</Infomation>
            <Button
              startIcon={DownloadIcon}
              size="small"
              width="100%"
              borderRadius="5px"
              variant="primaryLight"
            >
              쿠폰 받기
            </Button>
          </Box>
        </Box>
      </Item>
    );
  }

  if (type === 'store') {
    return (
      <Item>
        <Box width="200px" height="220px" borderColor="lightGray" padding="0">
          {item.images.length === 1 ? (
            <Box flexDirection="row" height="100px">
              <Image
                src={item.images[0]}
                width="100%"
                height="100px"
                borderRadius="0px"
              />
            </Box>
          ) : (
            <Box flexDirection="row" height="100px">
              <Image
                src={item.images[0]}
                width="50%"
                height="100px"
                borderRadius="0px"
              />
              <Image
                src={item.images[1]}
                width="50%"
                height="100px"
                borderRadius="0px"
              />
            </Box>
          )}
          <Box padding="10px">
            <Box>
              <Infomation fontSize="small" fontWeight="700">
                {item.name}
              </Infomation>
              <Infomation
                fontSize="small"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              >
                {item.introduce}
              </Infomation>
              <Infomation fontSize="xsmall" color="gray">
                {item.distance} ・ 후기 {item.comments} ・ 단골 {item.likes}
              </Infomation>
            </Box>
            <Box backgroundColor="lightGray" padding="5px" display="block">
              <Infomation fontSize="small" fontWeight="700">
                {item.recentComment.userName}
              </Infomation>{' '}
              <Infomation
                display="-webkit-box"
                fontSize="small"
                textOverflow="ellipsis"
                webkitLineClamp={2}
                webkitBoxOrient="vertical"
              >
                {item.recentComment.comment}
              </Infomation>
            </Box>
          </Box>
        </Box>
      </Item>
    );
  }

  if (type === 'directUsedCar') {
    return (
      <Item>
        <Image src={item.image} />
        <Box>
          <Infomation fontSize="xsmall" color="gray">
            {item.type}
          </Infomation>
          <Infomation fontSize="xsmall">{item.name}</Infomation>
          <Infomation fontSize="xsmall">{item.price}</Infomation>
          <Infomation
            fontSize="xsmall"
            color="white"
            backgroundColor="primary"
            padding="2px 3px"
          >
            {item.savedMoney} 절약
          </Infomation>
        </Box>
      </Item>
    );
  }

  if (type === 'recent') {
    return (
      <Item>
        <Box
          width="120px"
          height="140px"
          borderColor="lightGray"
          padding="0"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={item.profileImage}
            width="60px"
            height="60px"
            borderRadius="50%"
          />
          <Infomation fontWeight="500">{item.name}</Infomation>
          <Infomation
            fontSize="small"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            textAlign="center"
            color="gray"
          >
            {item.category}
          </Infomation>
        </Box>
        <Button position="absolute" variant="transparent" top="5%" right="5%">
          ✕
        </Button>
      </Item>
    );
  }

  if (type === 'product') {
    return (
      <Item>
        <Image src={item.image} />
        <Box>
          <Infomation fontSize="small" color="gray">
            {item.shopName} ・ {item.distance}
          </Infomation>
          <Infomation fontSize="small" fontWeight="500">
            {item.productName}
          </Infomation>
          <Infomation fontSize="small" fontWeight="700">
            <Infomation fontSize="small" fontWeight="700" color="primary">
              {item.discount}
            </Infomation>{' '}
            {item.price.toLocaleString('en-US')}원
          </Infomation>
          {item.badge && (
            <Infomation
              fontSize="xsmall"
              color="black"
              backgroundColor="lightGray"
              padding="2px 3px"
            >
              {item.badge}
            </Infomation>
          )}
        </Box>
      </Item>
    );
  }

  return (
    <Item>
      <Image src={item.image} />
      <Box>
        <Infomation>{item.category}</Infomation>
        <Infomation>
          {item.size} ・ {item.floor} ・ {item.infra}
        </Infomation>
        <Infomation fontWeight={700}>{item.price}</Infomation>
        <Infomation fontSize="small" color="gray">
          {item.location}
        </Infomation>
      </Box>
    </Item>
  );
};
