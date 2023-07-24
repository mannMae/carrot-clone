import { Anchor, BoxTitle, Description, List, Wrapper } from './Write.style';
import { ImageInputField } from 'components/Form/ImageInputField';
import { Box, Button } from 'components/Elements';
import { CheckboxField, InputField, TextareaField } from 'components/Form';
import { RadioField } from 'components/Form/RadioField';
import { useState } from 'react';

import RightArrowIcon from 'assets/icons/right-arrow.svg';
import { useQuery } from 'react-query';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { OftenPhrase } from '..';

export const Write = () => {
  const bottomSheet = useBottomSheet();
  const [tradeType, setTradeType] = useState('판매하기');

  const { data, isLoading } = useQuery(['form']);
  const { register, formState } = data?.methods;

  const [description, setDescription] = useState('');
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
            <Description
              onClick={() =>
                bottomSheet.open({
                  type: 'content',
                  title: '나눔 신청을 받으면 이런 점이 달라요.',
                  content: (
                    <>
                      <List>
                        <li>채팅 대신 이웃의 신청을 받아요.</li>
                        <li>
                          신청한 이웃 중에서 나눔하고 싶은 이웃을 선택해요.
                        </li>
                        <li>판매자가 먼저 채팅을 시작해요.</li>
                      </List>
                    </>
                  ),
                  buttons: [
                    <Button
                      variant="primary"
                      width="100%"
                      height="50px"
                      borderRadius="5px"
                      fontWeight="600"
                      alignItems="center"
                      size="large"
                      onClick={() => bottomSheet.close()}
                    >
                      확인
                    </Button>,
                  ],
                })
              }
            >
              알아보기
            </Description>
          </Box>
        )}
      </Box>
      <Box gap="15px">
        <BoxTitle>자세한 설명</BoxTitle>
        <TextareaField
          placeholder={`노량진동에 올릴 게시글 내용을 작성해 주세요.\n(판매 금지 물품은 게시가 제한될 수 있어요.)\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요.\n과학기술정보통신부, 한국 인터넷진흥원과 함께해요.`}
          required
          error={formState.errors['description']}
          registration={register('description')}
          addedValue={description}
          setDescription={setDescription}
        />
        <Button
          variant="blackLightGray"
          padding="6px 12px"
          borderRadius="5px"
          type="button"
          onClick={() =>
            bottomSheet.open({
              type: 'content',
              content: <OftenPhrase getValue={setDescription} />,
            })
          }
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
