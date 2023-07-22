import { Anchor, BoxTitle, Description, Wrapper } from './Write.style';
import { ImageInputField } from 'components/Form/ImageInputField';
import { Box, Button } from 'components/Elements';
import { CheckboxField, InputField, TextareaField } from 'components/Form';
import { RadioField } from 'components/Form/RadioField';
import { useState } from 'react';

import RightArrowIcon from 'assets/icons/right-arrow.svg';
import { useQuery } from 'react-query';
import { useBottomSheet } from 'hooks/useBottomSheet';

export const Write = () => {
  const bottomSheet = useBottomSheet();
  const [tradeType, setTradeType] = useState('판매하기');

  const { data, isLoading } = useQuery(['form']);
  const { register, formState } = data?.methods;

  return (
    <Wrapper>
      <ImageInputField registraion={register('images')} />
      <Box gap="15px">
        <BoxTitle>제목</BoxTitle>
        <InputField
          placeholder="제목"
          type="text"
          label="Title"
          error={formState.errors['title']}
          registraion={register('title')}
        />
      </Box>
      <Box gap="15px">
        <BoxTitle>거래방식</BoxTitle>
        <RadioField getValue={setTradeType} />
        {tradeType === '판매하기' ? (
          <InputField
            placeholder="가격을 입력해주세요."
            type="number"
            required
            error={formState.errors['price']}
            registraion={register('price')}
          />
        ) : (
          <InputField
            placeholder="가격을 입력해주세요."
            type="number"
            required
            error={formState.errors['price']}
            registraion={register('price')}
            value={0}
            isDisabled={true}
          />
        )}
        {tradeType === '판매하기' ? (
          <CheckboxField
            error={formState.errors['priceOffer']}
            registration={register('priceOffer')}
          >
            가격 제안 받기
          </CheckboxField>
        ) : (
          <Box flexDirection="row" alignItems="center">
            <CheckboxField
              error={formState.errors['shareEvent']}
              registration={register('shareEvent')}
            >
              나눔 이벤트 열기
            </CheckboxField>
            <Description onClick={() => bottomSheet.open()}>
              알아보기
            </Description>
          </Box>
        )}
      </Box>
      <Box gap="15px">
        <BoxTitle>자세한 설명</BoxTitle>
        <TextareaField
          required
          error={formState.errors['description']}
          registration={register('description')}
        />
        <Button
          variant="blackLightGray"
          padding="6px 12px"
          borderRadius="5px"
          type="button"
        >
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
          type="button"
        >
          위치 추가
        </Button>
      </Box>
      <Anchor>보여줄 동네 선택 〉</Anchor>
    </Wrapper>
  );
};
