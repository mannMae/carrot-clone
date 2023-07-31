import { Box, Button } from 'components/Elements';
import { Wrapper } from './Language.style';

import CheckIcon from 'assets/icons/check-primary.svg';
import { useState } from 'react';
import { useModal } from 'hooks/useModal';

export const Language = () => {
  const [language, setLanguage] = useState('ko-KR');
  const modal = useModal();
  return (
    <Wrapper>
      <Button
        width="100%"
        justifyContent="space-between"
        padding="15px 0"
        color="black"
        backgroundColor="transparent"
        endIcon={language === 'ko-KR' && CheckIcon}
        onClick={() => {
          if (language === 'ko-KR') {
            return;
          }
          modal.open({
            title: '',
            content: `언어를 한국어로 변경하시겠습니까?`,
            buttons: (
              <Box flexDirection="column" width="100%">
                <Button
                  variant=""
                  width="100%"
                  height="30px"
                  borderRadius="5px"
                  fontWeight="600"
                  alignItems="center"
                >
                  확인
                </Button>
                <Button
                  color="black"
                  backgroundColor="white"
                  borderColor="lightGray"
                  width="100%"
                  height="30px"
                  borderRadius="5px"
                  fontWeight="600"
                  alignItems="center"
                  onClick={() => modal.close()}
                >
                  취소
                </Button>
              </Box>
            ),
          });
        }}
      >
        한국어
      </Button>
      <Button
        width="100%"
        justifyContent="space-between"
        padding="15px 0"
        color="black"
        backgroundColor="transparent"
        endIcon={language === 'en-UK' && CheckIcon}
        onClick={() => {
          if (language === 'en-UK') {
            return;
          }
          modal.open({
            title: '',
            content: `언어를 영어(영국)로 변경하시겠습니까?`,
            buttons: (
              <Box flexDirection="column" width="100%">
                <Button
                  variant=""
                  width="100%"
                  height="30px"
                  borderRadius="5px"
                  fontWeight="600"
                  alignItems="center"
                >
                  확인
                </Button>
                <Button
                  color="black"
                  backgroundColor="white"
                  borderColor="lightGray"
                  width="100%"
                  height="30px"
                  borderRadius="5px"
                  fontWeight="600"
                  alignItems="center"
                  onClick={() => modal.close()}
                >
                  취소
                </Button>
              </Box>
            ),
          });
        }}
      >
        영어(영국)
      </Button>
      <Button
        width="100%"
        justifyContent="space-between"
        padding="15px 0"
        color="black"
        backgroundColor="transparent"
        endIcon={language === 'en-CA' && CheckIcon}
        onClick={() => {
          if (language === 'en-CA') {
            return;
          }
          modal.open({
            title: '',
            content: `언어를 영어(캐나다)로 변경하시겠습니까?`,
            buttons: (
              <Box flexDirection="column" width="100%">
                <Button
                  variant=""
                  width="100%"
                  height="30px"
                  borderRadius="5px"
                  fontWeight="600"
                  alignItems="center"
                >
                  확인
                </Button>
                <Button
                  color="black"
                  backgroundColor="white"
                  borderColor="lightGray"
                  width="100%"
                  height="30px"
                  borderRadius="5px"
                  fontWeight="600"
                  alignItems="center"
                  onClick={() => modal.close()}
                >
                  취소
                </Button>
              </Box>
            ),
          });
        }}
      >
        영어(캐나다)
      </Button>
      <Button
        width="100%"
        justifyContent="space-between"
        padding="15px 0"
        color="black"
        backgroundColor="transparent"
        endIcon={language === 'en-US' && CheckIcon}
        onClick={() => {
          if (language === 'en-US') {
            return;
          }
          modal.open({
            title: '',
            content: `언어를 영어로 변경하시겠습니까?`,
            buttons: (
              <Box flexDirection="column" width="100%">
                <Button
                  variant=""
                  width="100%"
                  height="30px"
                  borderRadius="5px"
                  fontWeight="600"
                  alignItems="center"
                >
                  확인
                </Button>
                <Button
                  color="black"
                  backgroundColor="white"
                  borderColor="lightGray"
                  width="100%"
                  height="30px"
                  borderRadius="5px"
                  fontWeight="600"
                  alignItems="center"
                  onClick={() => modal.close()}
                >
                  취소
                </Button>
              </Box>
            ),
          });
        }}
      >
        영어
      </Button>
      <Button
        width="100%"
        justifyContent="space-between"
        padding="15px 0"
        color="black"
        backgroundColor="transparent"
        endIcon={language === 'ja-JP' && CheckIcon}
        onClick={() => {
          if (language === 'ja-JP') {
            return;
          }
          modal.open({
            title: '',
            content: `언어를 일본어로 변경하시겠습니까?`,
            buttons: (
              <Box flexDirection="column" width="100%">
                <Button
                  variant=""
                  width="100%"
                  height="30px"
                  borderRadius="5px"
                  fontWeight="600"
                  alignItems="center"
                >
                  확인
                </Button>
                <Button
                  color="black"
                  backgroundColor="white"
                  borderColor="lightGray"
                  width="100%"
                  height="30px"
                  borderRadius="5px"
                  fontWeight="600"
                  alignItems="center"
                  onClick={() => modal.close()}
                >
                  취소
                </Button>
              </Box>
            ),
          });
        }}
      >
        일본어
      </Button>
    </Wrapper>
  );
};
