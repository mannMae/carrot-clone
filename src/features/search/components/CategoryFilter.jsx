import { Box, Button } from 'components/Elements';
import { Title, Wrapper } from './CategoryFilter.style';
import { useState } from 'react';
import { CheckboxField, InputField } from 'components/Form';

export const CategoryFilter = ({ close, defaultSelectedCategories }) => {
  const [selectedCategories, setSelectedCategories] = useState(
    defaultSelectedCategories
  );

  return (
    <Wrapper>
      <Box alignItems="start" gap="20px" padding="0 10px" maxWidth="310px">
        <Title>카테고리</Title>
        <Box
          width="100%"
          justifyContent="start"
          gap="15px"
          height="180px"
          overflowY="scroll"
        >
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            가공식품
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            삽니다
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            기타 중고물품
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            생활/주방
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            디지털기기
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            생활가전
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            가구/인테리어
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            유아동
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            유아도서
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            스포츠/레저
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            여성잡화
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            여성의류
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            남성패션/잡화
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            취미/게임/음반
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            뷰티/미용
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            반려동물용품
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            도서
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            식물
          </CheckboxField>
          <CheckboxField fontSize="medium" isBoxVisible={true}>
            티켓/교환권
          </CheckboxField>
        </Box>
        <Box flexDirection="row" justifyContent="center" width="100%">
          <Button
            variant="blackLightGray"
            size="large"
            borderRadius="5px"
            padding="10px 20px"
            onClick={() => {
              setSelectedCategories(defaultSelectedCategories);
              close();
            }}
          >
            초기화
          </Button>
          <Button
            size="large"
            borderRadius="5px"
            padding="10px 60px"
            onClick={() => {
              close();
            }}
          >
            적용하기
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};
