import { useEffect, useState } from 'react';
import { useScroll } from 'hooks/useScroll';
import { ButtonBox, Buttons, Overlay } from './WriteButton.style';
import { Button } from 'components/Elements';

import PlusIcon from 'assets/icons/plus.svg';
import XIcon from 'assets/icons/x.svg';
import BoxPlusIcon from 'assets/icons/box-plus.svg';
import CarIcon from 'assets/icons/car.svg';
import HouseIcon from 'assets/icons/house.svg';
import AppleIcon from 'assets/icons/apple.svg';
import BookIcon from 'assets/icons/book.svg';
import ApronIcon from 'assets/icons/apron.svg';
import { Link } from 'react-router-dom';

export const WriteButton = ({ contentScrollY, ...props }) => {
  const [isShowingText, setIsShowingText] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY >= 20) {
      setIsShowingText(false);
    } else {
      setIsShowingText(true);
    }
  }, [scrollY]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {}, [isActive]);

  return (
    <>
      {isActive && (
        <ButtonBox>
          <Buttons>
            <Button
              startIcon={ApronIcon}
              {...props}
              gap="5px"
              backgroundColor="white"
              color="black"
              size="medium"
              padding="10px"
              width="160px"
              justifyContent="start"
              onClick={() => setIsActive((prev) => !prev)}
            >
              알바
            </Button>
            <Button
              startIcon={BookIcon}
              {...props}
              gap="5px"
              backgroundColor="white"
              color="black"
              size="medium"
              padding="10px"
              width="160px"
              justifyContent="start"
              onClick={() => setIsActive((prev) => !prev)}
            >
              과외/클래스
            </Button>
            <Button
              startIcon={AppleIcon}
              {...props}
              gap="5px"
              backgroundColor="white"
              color="black"
              size="medium"
              padding="10px"
              width="160px"
              justifyContent="start"
              onClick={() => setIsActive((prev) => !prev)}
            >
              농수산물
            </Button>
            <Button
              startIcon={HouseIcon}
              {...props}
              gap="5px"
              backgroundColor="white"
              color="black"
              size="medium"
              padding="10px"
              width="160px"
              justifyContent="start"
              onClick={() => setIsActive((prev) => !prev)}
            >
              부동산
            </Button>
            <Button
              startIcon={CarIcon}
              {...props}
              gap="5px"
              backgroundColor="white"
              color="black"
              size="medium"
              padding="10px"
              width="160px"
              justifyContent="start"
              onClick={() => setIsActive((prev) => !prev)}
            >
              중고차
            </Button>
          </Buttons>
          <Link to="/write/market">
            <Button
              startIcon={BoxPlusIcon}
              {...props}
              // position="fixed"
              // bottom="15%"
              // right="10%"
              borderRadius="10px"
              gap="5px"
              backgroundColor="white"
              color="black"
              size="medium"
              padding="10px"
              width="160px"
              justifyContent="start"
              onClick={() => setIsActive((prev) => !prev)}
            >
              내 물건 팔기
            </Button>
          </Link>
        </ButtonBox>
      )}
      {isActive ? (
        <Button
          startIcon={XIcon}
          {...props}
          contentWidth="0px"
          position="fixed"
          bottom="10%"
          right="10%"
          borderRadius="17px"
          backgroundColor="white"
          zIndex="200"
          onClick={() => setIsActive((prev) => !prev)}
        >
          글쓰기
        </Button>
      ) : (
        <Button
          startIcon={PlusIcon}
          {...props}
          contentWidth={isShowingText ? '50px' : '0px'}
          position="fixed"
          bottom="10%"
          right="10%"
          borderRadius="17px"
          onClick={() => setIsActive((prev) => !prev)}
        >
          글쓰기
        </Button>
      )}
      {isActive && <Overlay onClick={() => setIsActive(false)} />}
    </>
  );
};
