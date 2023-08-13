import { Box, Button } from 'components/Elements';
import { SectionTitle, Wrapper } from './Setting.style';
import { ToggleSwitch } from 'components/Elements/ToggleSwitch/ToggleSwitch';
import { useState } from 'react';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { SetTime } from '..';
import { Link } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { logout } from 'features/auth/api/logout';

export const Setting = () => {
  const [isDoNotDisturbModeActive, setIsDoNotDisturbModeActive] =
    useState(false);
  const [doNotDisturbModeStartTime, setDoNotDisturbModeStartTime] =
    useState('오후 11:00');

  const [doNotDisturbModeEndTime, setDoNotDisturbModeEndTime] =
    useState('오전 8:00');
  const bottomSheet = useBottomSheet(0);
  const modal = useModal();
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
          onClick={() =>
            modal.open({
              title: '',
              content: `오라형님, 당근마켓을 다른 국가로 변경하면 한국 서비스는 로그아웃돼요. 외국에서 당근마켓을 이용하시려면 그 국가의 전화번호로 새롭게 가입하셔야 해요.`,
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
                    네, 변경할게요
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
            })
          }
        >
          국가 변경
        </Button>
        <Link to="./language" style={{ width: '100%' }}>
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
        </Link>
        <Button
          variant="transparent"
          padding="15px 0"
          width="100%"
          justifyContent="start"
          onClick={() =>
            modal.open({
              title: '',
              content: `캐시 데이터 삭제 완료`,
              buttons: (
                <Box flexDirection="column" width="100%">
                  <Button
                    variant=""
                    width="100%"
                    height="30px"
                    borderRadius="5px"
                    fontWeight="600"
                    alignItems="center"
                    onClick={() => modal.close()}
                  >
                    확인
                  </Button>
                </Box>
              ),
            })
          }
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
          onClick={() =>
            modal.open({
              title: '로그아웃',
              content: `정말 로그아웃 하시겠나요?`,
              buttons: (
                <Box flexDirection="column" width="100%">
                  <Button
                    variant=""
                    width="100%"
                    height="30px"
                    borderRadius="5px"
                    fontWeight="600"
                    alignItems="center"
                    onClick={() => {
                      modal.close();
                      logout();
                    }}
                  >
                    로그아웃
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
                    닫기
                  </Button>
                </Box>
              ),
            })
          }
        >
          로그아웃
        </Button>
        <Link to="./delete-account" style={{ width: '100%' }}>
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            탈퇴하기
          </Button>
        </Link>
      </Box>
    </Wrapper>
  );
};
