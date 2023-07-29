import { Box, Button } from 'components/Elements';
import { SectionTitle, Wrapper } from './Setting.style';
import { ToggleSwitch } from 'components/Elements/ToggleSwitch/ToggleSwitch';
import { useState } from 'react';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { SetTime } from '..';
import { Link } from 'react-router-dom';

export const Setting = () => {
  const [isDoNotDisturbModeActive, setIsDoNotDisturbModeActive] =
    useState(false);
  const [doNotDisturbModeStartTime, setDoNotDisturbModeStartTime] =
    useState('오후 11:00');

  const [doNotDisturbModeEndTime, setDoNotDisturbModeEndTime] =
    useState('오전 8:00');
  const bottomSheet = useBottomSheet(0);
  return (
    <Wrapper>
      <Box padding="15px 15px 0" borderTopColor="lightGray">
        <SectionTitle>알림 설정</SectionTitle>
        <Link to="./notification">
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            알림 및 소리
          </Button>
        </Link>
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="transparent"
            padding="15px 0"
            justifyContent="space-between"
          >
            방해금지 시간 설정
          </Button>
          <ToggleSwitch getValue={setIsDoNotDisturbModeActive} />
        </Box>
        {isDoNotDisturbModeActive && (
          <Box width="100%">
            <Box
              flexDirection="row"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                variant="transparent"
                padding="15px 0"
                justifyContent="space-between"
              >
                시작 시간
              </Button>
              <Button
                padding="15px 0"
                justifyContent="space-between"
                color="primary"
                backgroundColor="transparent"
                onClick={() =>
                  bottomSheet.open({
                    type: 'content',
                    content: (
                      <SetTime
                        getValue={setDoNotDisturbModeStartTime}
                        defaultValue={doNotDisturbModeStartTime}
                        close={bottomSheet.close}
                      />
                    ),
                  })
                }
              >
                {doNotDisturbModeStartTime}
              </Button>
            </Box>
            <Box
              flexDirection="row"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                variant="transparent"
                padding="15px 0"
                width="100%"
                justifyContent="space-between"
              >
                종료 시간
              </Button>
              <Button
                padding="15px 0"
                justifyContent="space-between"
                color="primary"
                backgroundColor="transparent"
                onClick={() =>
                  bottomSheet.open({
                    type: 'content',
                    content: (
                      <SetTime
                        getValue={setDoNotDisturbModeEndTime}
                        defaultValue={doNotDisturbModeEndTime}
                        close={bottomSheet.close}
                      />
                    ),
                  })
                }
              >
                {doNotDisturbModeEndTime}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      <Box padding="15px 15px 0" borderTopColor="lightGray">
        <SectionTitle>사용자 설정</SectionTitle>
        <Link to="./user/info" style={{ width: '100%' }}>
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            계정 / 정보 관리
          </Button>
        </Link>
        <Link to="./user/follow" style={{ width: '100%' }}>
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            모아보기 사용자 관리
          </Button>
        </Link>
        <Link to="./user/block" style={{ width: '100%' }}>
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            차단 사용자 관리
          </Button>
        </Link>
        <Link to="./user/hidden" style={{ width: '100%' }}>
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            게시글 미노출 사용자 관리
          </Button>
        </Link>
        <Link to="./user/etc" style={{ width: '100%' }}>
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            기타 설정
          </Button>
        </Link>
      </Box>
      <Box padding="15px 15px 0" borderTopColor="lightGray">
        <SectionTitle>기타</SectionTitle>
        <Link to="./announcement">
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            공지사항
          </Button>
        </Link>
        <Button
          variant="transparent"
          padding="15px 0"
          width="100%"
          justifyContent="start"
        >
          국가 변경
        </Button>
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            언어 설정
          </Button>
          <Button backgroundColor="transparent" color="primary" padding="0">
            한국어
          </Button>
        </Box>
        <Button
          variant="transparent"
          padding="15px 0"
          width="100%"
          justifyContent="start"
        >
          캐시 데이터 삭제하기
        </Button>
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            최신버전 업데이트
          </Button>
          <Button backgroundColor="transparent" color="primary" padding="0">
            23.29.0(232900)
          </Button>
        </Box>
        <Button
          variant="transparent"
          padding="15px 0"
          width="100%"
          justifyContent="start"
        >
          로그아웃
        </Button>
        <Button
          variant="transparent"
          padding="15px 0"
          width="100%"
          justifyContent="start"
        >
          탈퇴하기
        </Button>
      </Box>
    </Wrapper>
  );
};
