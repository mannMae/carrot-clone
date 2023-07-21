import { useParams } from 'react-router-dom';
import { Anchor, BoxTitle, Description, Wrapper } from './Write.style';
import { ImageInputField } from 'components/Form/ImageInputField';
import { Box, Button } from 'components/Elements';
import { CheckboxField, InputField, TextareaField } from 'components/Form';
import { RadioField } from 'components/Form/RadioField';
import { useState } from 'react';
import { useBottomSheet } from 'hooks/useBottomSheet';

import RightArrowIcon from 'assets/icons/right-arrow.svg';

export const Write = () => {
  const params = useParams();
  const [tradeType, setTradeType] = useState('판매하기');
  const bottomSheet = useBottomSheet();

  return (
    <Wrapper>
      <ImageInputField />
      <Box gap="15px">
        <BoxTitle>제목</BoxTitle>
        <InputField placeholder="제목" type="text" />
      </Box>
      <Box gap="15px">
        <BoxTitle>거래방식</BoxTitle>
        <RadioField getValue={setTradeType} />
        <InputField placeholder="가격을 입력해주세요." type="number" required />
        {tradeType === '판매하기' ? (
          <CheckboxField>가격 제안 받기</CheckboxField>
        ) : (
          <Box flexDirection="row" alignItems="center">
            <CheckboxField>나눔 이벤트 열기</CheckboxField>
            <Description onClick={() => {}}>알아보기</Description>
          </Box>
        )}
      </Box>
      <Box gap="15px">
        <BoxTitle>자세한 설명</BoxTitle>
        <TextareaField required />
        <Button variant="blackLightGray" padding="6px 12px" borderRadius="5px">
          자주 쓰는 문구
        </Button>
      </Box>
      <Box gap="15px">
        <BoxTitle>거래 희망 장소</BoxTitle>
        <Button
          endIcon={RightArrowIcon}
          size="medium"
          variant="gray"
          width="100%"
          padding="10px"
          borderRadius="5px"
          justifyContent="space-between"
        >
          위치 추가
        </Button>
      </Box>
      <Anchor>보여줄 동네 선택 〉</Anchor>
    </Wrapper>
  );
};
