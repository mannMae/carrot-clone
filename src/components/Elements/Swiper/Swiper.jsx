import { useEffect, useState } from 'react';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  CheckCircle,
  CheckedCircle,
  Icon,
  Image,
  Infomation,
  InnerShadow,
  Item,
  Label,
  Wrapper,
} from './Swiper.style';
import { theme } from 'providers/theme';
import { Button } from '../Button';

import XIcon from 'assets/icons/x.svg';
import BellIcon from 'assets/icons/bell-filled.svg';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { NotificationKeyword } from 'features/notification';
import { Box } from '..';

import LikeIcon from 'assets/icons/like.svg';
import HeartIcon from 'assets/icons/heart-outlined.svg';
import CommentIcon from 'assets/icons/comment.svg';
import DownArrowIcon from 'assets/icons/down-arrow.svg';
import CheckedCircleIcon from 'assets/icons/checked-circle.svg';
import { queryClient } from 'library/react-query';
import { useQuery } from 'react-query';
import { getWorkedAtByTimestamp } from 'utils/workedAt';
import { CheckboxField } from 'components/Form';
import { TownRange } from 'features/location';
import {
  CategoryFilter,
  PriceFilter,
  SortFilter,
} from 'features/search/components';

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
  const { data, isLoading } = useQuery(['sort']);

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

  if (category === '동네홍보' || category === '동네생활') {
    return (
      <Box flexDirection="row" padding="10px 20px">
        <Button
          size="medium"
          variant={data?.standard === '정확도순' ? 'dark' : 'transparent'}
          borderColor="lightGray"
          onClick={() =>
            queryClient.setQueryData(['sort'], {
              standard: '정확도순',
            })
          }
        >
          정확도순
        </Button>
        <Button
          size="medium"
          variant={data?.standard === '최신순' ? 'dark' : 'transparent'}
          borderColor="lightGray"
          onClick={() =>
            queryClient.setQueryData(['sort'], {
              standard: '최신순',
            })
          }
        >
          최신순
        </Button>
      </Box>
    );
  }
  if (category === '중고거래') {
    return (
      <Box flexDirection="row" padding="20px" overflowX="scroll" gap="15px">
        <Button
          variant="transparent"
          size="medium"
          endIcon={DownArrowIcon}
          borderColor="lightGray"
          onClick={() =>
            bottomSheet.open({
              type: 'content',
              content: <TownRange close={bottomSheet.close} />,
            })
          }
        >
          노량진동 외 78
        </Button>
        <Button
          variant="transparent"
          size="medium"
          endIcon={DownArrowIcon}
          borderColor="lightGray"
          onClick={() =>
            bottomSheet.open({
              type: 'content',
              content: <PriceFilter close={bottomSheet.close} />,
            })
          }
        >
          가격
        </Button>
        <Button
          variant="transparent"
          size="medium"
          endIcon={DownArrowIcon}
          borderColor="lightGray"
          onClick={() =>
            bottomSheet.open({
              type: 'content',
              content: <CategoryFilter close={bottomSheet.close} />,
            })
          }
        >
          카테고리
        </Button>
        <Button
          variant="transparent"
          size="medium"
          endIcon={DownArrowIcon}
          borderColor="lightGray"
          onClick={() =>
            bottomSheet.open({
              type: 'content',
              content: <SortFilter close={bottomSheet.close} />,
            })
          }
        >
          정확도순
        </Button>
      </Box>
    );
  }
};

const SwiperItem = ({
  item,
  order,
  type,
  toggleActiveDelete,
  category = '',
}) => {
  const [isSelected, setIsSelected] = useState(false);
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
        <Box flexDirection="row" alignItems="center" width="100%">
          <Box width="100%" padding="30px 0" flexDirection="row" gap="15px">
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
          </Box>
          {toggleActiveDelete && (
            <Button
              startIcon={XIcon}
              size="xlarge"
              variant="transparent"
              padding="0"
              justifySelf="end"
              onClick={() => item.delete()}
            />
          )}
        </Box>
      </Item>
    );
  }

  if (type === 'search' && category === '중고거래') {
    return (
      <>
        {order === 0 && (
          <Label>
            {isSelected ? (
              <CheckedCircle src={CheckedCircleIcon} />
            ) : (
              <CheckCircle></CheckCircle>
            )}
            <CheckboxField
              isBoxVisible={false}
              getValue={setIsSelected}
              fontSize="medium"
            >
              거래가능만 보기
            </CheckboxField>
          </Label>
        )}
        <Item borderBottomColor="lightGray">
          <Box
            padding="20px 0"
            width="100%"
            flexDirection="row"
            alignItems="start"
            justifyContent="space-between"
            gap="15px"
          >
            <Image
              src={item.image}
              width="100px"
              height="100px"
              borderRadius="5px"
            />
            <Box width="400px" gap="5px">
              <Infomation
                fontSize="medium"
                color="black"
                display="-webkit-box"
                textOverflow="ellipsis"
                webkitLineClamp={2}
                webkitBoxOrient="vertical"
                width="100%"
              >
                {item.title}
              </Infomation>
              <Infomation fontSize="small" color="gray">
                {item.town} ・ {getWorkedAtByTimestamp(item.postedAt)}
              </Infomation>
              <Infomation fontWeight="600">
                {item.price.toLocaleString('en-US')}원
              </Infomation>
              <Box
                width="100%"
                flexDirection="row"
                justifyContent="space-between"
                padding="15px 0 0"
              >
                <Box flexDirection="row" justifyContent="end" width="100%">
                  {item.comments && (
                    <Box flexDirection="row" alignItems="start">
                      <Icon src={CommentIcon} />
                      <Infomation>{item.comments}</Infomation>
                    </Box>
                  )}
                  {item.likes && (
                    <Box flexDirection="row" alignItems="start">
                      <Icon src={HeartIcon} />
                      <Infomation gap="5px">{item.likes}</Infomation>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Item>
      </>
    );
  }

  if (type === 'search' && category === '동네생활') {
    return (
      <Item borderBottomColor="lightGray">
        <Box padding="20px 0" width="100%">
          <Infomation
            display="flex"
            fontSize="small"
            width="none"
            backgroundColor="lightGray"
            color="gray"
            padding="2px 4px"
          >
            {item.category}
          </Infomation>
          <Box
            padding="5px 0"
            width="100%"
            flexDirection="row"
            alignItems="start"
            justifyContent="space-between"
            gap="15px"
          >
            <Box width="400px">
              <Infomation
                fontSize="medium"
                color="black"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
                width="100%"
              >
                {item.title}
              </Infomation>
              <Infomation
                fontSize="small"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
                width="100%"
                color="gray"
              >
                {item.description}
              </Infomation>
            </Box>
            <Image
              src={item.image}
              width="60px"
              height="60px"
              borderRadius="5px"
            />
          </Box>
          <Box
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
            padding="15px 0 0"
          >
            <Infomation fontSize="small" color="gray">
              {item.town} ・ {getWorkedAtByTimestamp(item.postedAt)} ・ 조회{' '}
              {item.views}
            </Infomation>
            <Box flexDirection="row">
              {item.likes && (
                <Box flexDirection="row" alignItems="start">
                  <Icon src={LikeIcon} />
                  <Infomation gap="5px">{item.likes}</Infomation>
                </Box>
              )}
              {item.comments && (
                <Box flexDirection="row" alignItems="start">
                  <Icon src={CommentIcon} />
                  <Infomation>{item.comments}</Infomation>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Item>
    );
  }

  if (type === 'search' && category === '동네홍보') {
    return (
      <Item borderBottomColor="lightGray">
        <Box
          flexDirection="row"
          alignItems="start"
          padding="20px 0"
          gap="15px"
          width="100%"
          justifyContent="space-between"
        >
          <Image
            src={item.image}
            width="100px"
            height="100px"
            borderRadius="5px"
          />
          <Box padding="5px 0">
            <Infomation
              fontSize="medium"
              color="gray"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
              width="320px"
            >
              {item.title}
            </Infomation>
            <Infomation
              display="-webkit-box"
              fontSize="small"
              textOverflow="ellipsis"
              webkitLineClamp={2}
              webkitBoxOrient="vertical"
            >
              {item.description}
            </Infomation>
            <Infomation fontSize="small" color="gray">
              {item.town} ・ {getWorkedAtByTimestamp(item.postedAt)}
            </Infomation>
            <Box
              width="100%"
              flexDirection="row"
              justifyContent="end"
              padding="15px 0 0"
            >
              {item.likes && (
                <Box flexDirection="row" alignItems="start">
                  <Icon src={HeartIcon} />
                  <Infomation gap="5px">{item.likes}</Infomation>
                </Box>
              )}
              {item.comments && (
                <Box flexDirection="row" alignItems="start">
                  <Icon src={CommentIcon} />
                  <Infomation>{item.comments}</Infomation>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Item>
    );
  }

  if (type === 'search' && category === '동네가게') {
    return (
      <Item borderBottomColor="lightGray">
        <Box
          flexDirection="row"
          alignItems="start"
          padding="20px 0"
          gap="15px"
          width="100%"
          justifyContent="space-between"
        >
          <Box padding="5px 0">
            <Infomation fontSize="small" color="gray">
              <Infomation fontWeight="600" fontSize="medium">
                {item.storeName}
              </Infomation>{' '}
              {item.category}
            </Infomation>
            <Infomation
              display="-webkit-box"
              fontSize="small"
              textOverflow="ellipsis"
              webkitLineClamp={2}
              webkitBoxOrient="vertical"
            >
              {item.description}
            </Infomation>
            <Infomation fontSize="small" color="gray">
              단골 {item.likes}
            </Infomation>
            <Infomation fontSize="small" color="gray">
              {item.distance} ・ {item.town}
            </Infomation>
            {item.badges.length !== 0 && (
              <Box flexDirection="row">
                {item.badges.map((badge, i) => (
                  <Infomation
                    key={i}
                    fontSize="small"
                    color="black"
                    backgroundColor="lightGray"
                    padding="3px"
                  >
                    {badge}
                  </Infomation>
                ))}
              </Box>
            )}
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
          <Image
            src={item.image}
            width="80px"
            height="80px"
            borderRadius="5px"
          />
        </Box>
      </Item>
    );
  }

  if (type === 'search' && category === '이웃') {
    return (
      <Item borderBottomColor="lightGray">
        <Box flexDirection="row" padding="30px 0" gap="15px" width="100%">
          <Image
            src={item.profileImage}
            width="40px"
            height="40px"
            borderRadius="50%"
          />
          <Box padding="5px 0">
            <Infomation fontSize="small">
              <Infomation fontWeight="600">{item.username}</Infomation> #
              {item.userId}
            </Infomation>
            <Infomation fontSize="small" color="gray">
              {item.town}
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
