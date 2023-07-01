import { Image, Item, Wrapper, Infomation, Box } from './Slider.style';

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
            {item.price}원
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
