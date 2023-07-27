import { Box, Button } from 'components/Elements';
import { Title, Wrapper } from './SortFilter.style';
import { useState } from 'react';

import CheckIcon from 'assets/icons/check-primary.svg';

export const SortFilter = ({ close, defaultSort }) => {
  const [sort, setSort] = useState(defaultSort);

  return (
    <Wrapper>
      <Box alignItems="start" gap="20px" padding="0 10px" width="310px">
        <Title>정렬</Title>
        <Box
          width="100%"
          justifyContent="start"
          gap="15px"
          height="180px"
          overflowY="scroll"
        >
          <Button
            width="100%"
            justifyContent="space-between"
            color={sort === '정확도순' ? 'primary' : 'black'}
            backgroundColor="transparent"
            fontWeight="600"
            size="medium"
            endIcon={sort === '정확도순' ? CheckIcon : null}
            onClick={() => setSort('정확도순')}
          >
            정확도순
          </Button>
          <Button
            width="100%"
            justifyContent="space-between"
            color={sort === '최신순' ? 'primary' : 'black'}
            backgroundColor="transparent"
            fontWeight="600"
            size="medium"
            endIcon={sort === '최신순' ? CheckIcon : null}
            onClick={() => setSort('최신순')}
          >
            최신순
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};
