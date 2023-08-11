import { Box, Button } from 'components/Elements';
import {
  Anchor,
  Description,
  Icon,
  LoginGuide,
  Title,
  Wrapper,
} from './Auth.style';
import { Link } from 'react-router-dom';

export const Auth = () => {
  return (
    <Wrapper>
      <Box></Box>
      <Box alignItems="center">
        <Icon src="https://play-lh.googleusercontent.com/GYyvqXHYzWglBwPLtHEjGV3rKFBaAHC8HMl8XQ0pzdwZjqdb9HkJ4z53rZ9_VdBb1fg=w480-h960-rw" />
        <Title>당신 근처의 당근마켓</Title>
        <Description>
          {
            '중고 거래부터 동네 정보까지,\n지금 내 동네를 선택하고 시작해보세요!'
          }
        </Description>
      </Box>
      <Box alignItems="center" gap="20px">
        <Button size="large" width="100%" borderRadius="5px" padding="10px">
          시작하기
        </Button>
        <LoginGuide>
          이미 계정이 있나요?
          <Link to="./login">
            <Anchor>로그인</Anchor>
          </Link>
        </LoginGuide>
      </Box>
    </Wrapper>
  );
};
