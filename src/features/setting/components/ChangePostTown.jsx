import { Button } from 'components/Elements';
import {
  Description,
  Options,
  GuideToServiceCenter,
  Label,
  Wrapper,
} from './ChangePostTown.style';
import { Link } from 'react-router-dom';

import CheckIcon from 'assets/icons/check-primary.svg';
import DownArrowIcon from 'assets/icons/down-arrow.svg';
import { useEffect, useState } from 'react';

export const ChangePostTown = () => {
  const [currentTown, setCurrentTown] =
    useState('기존 게시글이 있는 동네 선택하기');
  const [changedTown, setChangedTown] =
    useState('게시글을 이동할 동네 선택하기');
  return (
    <Wrapper>
      <Description>
        이사 등으로 동네가 바뀌었을 경우, 판매 중인 중고거래 게시글 모두를
        변경된 동네로 이동할 수 있어요.
      </Description>
      <Label>
        현재 게시글이 있는 동네
        <Dropdown
          defaultValue={currentTown}
          getValue={setCurrentTown}
          options={['기존 게시글이 있는 동네 선택하기']}
        />
      </Label>
      <Label>
        게시글 옮길 동네 (동네인증된 지역)
        <Dropdown
          defaultValue={changedTown}
          getValue={setChangedTown}
          options={['게시글을 이동할 동네 선택하기', '동작구 노량진동']}
        />
      </Label>
      <Button borderRadius="5px" size="large" fontWeight="600" padding="10px">
        모든 게시글 이동하기
      </Button>
      <GuideToServiceCenter>
        더 궁금한 점이 있으면 <Link to=".">고객센터</Link>로 문의주세요
      </GuideToServiceCenter>
    </Wrapper>
  );
};

export const Dropdown = ({ defaultValue, getValue, options }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickButton = (option) => {
    getValue(option);
  };
  return (
    <Button
      position="relative"
      variant="transparent"
      borderColor="lightGray"
      borderRadius="5px"
      size="medium"
      justifyContent="space-between"
      padding="15px"
      endIcon={DownArrowIcon}
      onClick={() => setIsActive((prev) => !prev)}
    >
      {defaultValue}
      {isActive ? (
        <Options>
          {options.map((option, i) => (
            <Button
              key={i}
              startIcon={defaultValue === option && CheckIcon}
              backgroundColor="white"
              color="black"
              borderRadius="5px"
              padding="15px"
              width="100%"
              zIndex="10"
              justifyContent="start"
              onClick={() => {
                handleClickButton(option);
              }}
            >
              {option}
            </Button>
          ))}
        </Options>
      ) : null}
    </Button>
  );
};
