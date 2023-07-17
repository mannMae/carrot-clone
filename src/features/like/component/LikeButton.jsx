import { useEffect, useState } from 'react';

import Lottie from 'react-lottie';

import LikeAnimation from 'assets/animations/like.json';
import { Inner, Wrapper } from './LikeButton.style';

export const LikeButton = ({ userId }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (likeList.includes(userId)) {
      setIsLiked(true);
    }
  }, []);

  const defaultOptions = {
    loop: false,
    autoplay: isLiked,
    animationData: LikeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleClickButton = () => {};

  return (
    <Wrapper onClick={() => setIsLiked((prev) => !prev)}>
      <Inner>
        <Lottie
          isStopped={!isLiked}
          options={defaultOptions}
          height="50px"
          width="50px"
          onClick={() => handleClickButton()}
        />
      </Inner>
    </Wrapper>
  );
};

const likeList = [1, 2];
