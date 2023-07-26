import { useState } from 'react';
import { Box, Button } from 'components/Elements';
import { Buttons, SectionTitle, Wrapper } from './Search.style';

import XIcon from 'assets/icons/x.svg';

export const Search = () => {
  const [recentKeywords, setRecentKeywords] = useState('');
  const handleButtonClick = (keyword) => {
    if (recentKeywords.includes(keyword)) {
      const newRecentKeywords = recentKeywords.filter((v) => v !== keyword);
      setRecentKeywords([keyword, ...newRecentKeywords]);
    } else {
      setRecentKeywords([keyword, ...recentKeywords]);
    }
  };
  return (
    <Wrapper>
      <Box>
        <SectionTitle>이웃들이 많이 찾고 있어요!</SectionTitle>
        <Buttons>
          {mostViewedKeywords.map((keyword, i) => (
            <Button
              key={i}
              size="medium"
              variant="transparent"
              borderColor="lightGray"
              fontWeight="500"
              onClick={() => handleButtonClick(keyword)}
            >
              {keyword}
            </Button>
          ))}
        </Buttons>
      </Box>
      {recentKeywords.length !== 0 && (
        <Box gap="10px">
          <Box
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <SectionTitle>최근 검색어</SectionTitle>
            <Button
              variant="transparentGray"
              size="small"
              onClick={() => setRecentKeywords([])}
            >
              모두 지우기
            </Button>
          </Box>
          <Box
            width="100%"
            flexDirection="row"
            justifyContent="start"
            gap="10%"
            flexWrap="wrap"
          >
            {recentKeywords.map((keyword, i) => (
              <Button
                key={i}
                onClick={() => handleButtonClick(keyword)}
                variant="transparent"
                endIcon={XIcon}
                endIconClickEvent={(e) => {
                  e.stopPropagation();
                  setRecentKeywords((prev) =>
                    prev.filter((v) => v !== keyword)
                  );
                }}
                width="45%"
                justifyContent="space-between"
                borderBottomColor="lightGray"
                borderRadius="0"
                padding="10px 0"
              >
                {keyword}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Wrapper>
  );
};

const mostViewedKeywords = [
  '성시경',
  '먹태깡',
  '에어팟프로2',
  '컴퓨터',
  '헬스',
  'tv',
  '테니스',
  '세탁기',
  '맨시티',
  '창문형에어컨',
];
