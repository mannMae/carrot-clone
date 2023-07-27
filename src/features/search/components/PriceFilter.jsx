import { Box, Button } from 'components/Elements';
import { Infomation, Title, Wrapper } from './PriceFilter.style';
import { useState } from 'react';
import { InputField } from 'components/Form';

export const PriceFilter = ({ close, defaultPriceRange }) => {
  const [priceRange, setPriceRange] = useState(defaultPriceRange);

  return (
    <Wrapper>
      <Box alignItems="start" gap="20px" padding="30px 10px" maxWidth="310px">
        <Title>가격</Title>
        <Box flexDirection="row" alignItems="center">
          <InputField borderRadius="5px" placeholder="최소 금액" />
          <Infomation>~</Infomation>
          <InputField borderRadius="5px" placeholder="최대 금액" />
        </Box>
        <Box
          width="100%"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="start"
          gap="10px"
        >
          <Button
            variant="transparent"
            borderColor="lightGray"
            padding="6px 8px"
          >
            2,000원 ~ 4,000원
          </Button>
          <Button
            variant="transparent"
            borderColor="lightGray"
            padding="6px 8px"
          >
            4,000원 ~ 6,000원
          </Button>
          <Button
            variant="transparent"
            borderColor="lightGray"
            padding="6px 8px"
          >
            6,000원 ~ 12,000원
          </Button>
        </Box>
        <Box flexDirection="row" justifyContent="center" width="100%">
          <Button
            variant="blackLightGray"
            size="large"
            borderRadius="5px"
            padding="10px 20px"
            onClick={() => {
              setPriceRange(defaultPriceRange);
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
