import { Box } from 'components/Elements';
import { Description, Title, Wrapper } from './Etc.style';
import { ToggleSwitch } from 'components/Elements/ToggleSwitch/ToggleSwitch';
import { Link } from 'react-router-dom';

export const Etc = () => {
  return (
    <Wrapper>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        padding="15px"
        gap="15px"
      >
        <Box width="80%">
          <Title>검색 엔진 허용하기</Title>
          <Description>
            내 게시글이 외부 검색결과, 광고, 프로모션 등에 활용될 수 있어요.
            원치 않으시면 비활성화를 해주세요.
          </Description>
        </Box>
        <ToggleSwitch />
      </Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        padding="15px"
        gap="15px"
      >
        <Box width="80%">
          <Title>맞춤형 광고 허용하기</Title>
          <Description>
            나의 관심사와 관련성이 가장 높은 광고들을 우선적으로 제공받을 수
            있어요. 원치 않으시면 비활성화를 해주세요.
          </Description>
        </Box>
        <ToggleSwitch />
      </Box>
      <Link to="./change-post-town">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          padding="15px"
          gap="15px"
        >
          <Box>
            <Title>중고거래 게시글의 동네 변경하기</Title>
            <Description>
              이사 등으로 동네가 바뀌었을 경우, 게시글을 이동할 수 있어요.
            </Description>
          </Box>
        </Box>
      </Link>
    </Wrapper>
  );
};
