import { Box, Button } from 'components/Elements';
import { BoxTitle, Description, Wrapper } from './NotificationSetting.style';
import { ToggleSwitch } from 'components/Elements/ToggleSwitch/ToggleSwitch';

export const NotificationSetting = () => {
  return (
    <Wrapper>
      <Box borderBottomColor="lightGray">
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          padding="15px"
        >
          <Box>
            <BoxTitle>채팅 알림</BoxTitle>
            <Description>메시지, 당근 전화 알림</Description>
          </Box>
          <ToggleSwitch />
        </Box>
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          padding="15px"
        >
          <Box>
            <BoxTitle>멘션 알림</BoxTitle>
            <Description>나를 언급한 메시지일 경우 알림</Description>
          </Box>
          <ToggleSwitch />
        </Box>
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          padding="15px"
        >
          <Box>
            <BoxTitle>알림음</BoxTitle>
          </Box>
          <Button size="medium" color="primary" backgroundColor="transparent">
            당근이 아떠요~(다은이)
          </Button>
        </Box>
      </Box>
      <Box borderBottomColor="lightGray">
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          padding="15px"
        >
          <Box>
            <BoxTitle>키워드 알림</BoxTitle>
            <Description>설정한 키워드의 판매글 알림</Description>
          </Box>
          <ToggleSwitch />
        </Box>
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          padding="15px"
        >
          <Box>
            <BoxTitle>알림음</BoxTitle>
          </Box>
          <Button size="medium" color="primary" backgroundColor="transparent">
            당근이 아떠요~(다은이)
          </Button>
        </Box>
      </Box>
      <Box>
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          padding="15px"
        >
          <Box>
            <BoxTitle>활동 알림</BoxTitle>
            <Description>관심, 댓글, 공감 등 알림</Description>
          </Box>
          <ToggleSwitch />
        </Box>
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          padding="15px"
        >
          <Box>
            <BoxTitle>서비스 알림</BoxTitle>
            <Description>가계부, 나눔의 날 등 알림</Description>
          </Box>
          <ToggleSwitch />
        </Box>
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          padding="15px"
        >
          <Box>
            <BoxTitle>마케팅 알림</BoxTitle>
            <Description>마케팅 정보 수신 동의 2022-12-21</Description>
          </Box>
          <ToggleSwitch />
        </Box>
        <Box
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
          padding="15px"
        >
          <Box>
            <BoxTitle>알림음</BoxTitle>
          </Box>
          <Button size="medium" color="primary" backgroundColor="transparent">
            당근이 아떠요~(다은이)
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};
