import { Box, Button } from 'components/Elements';
import { SectionTitle, Wrapper } from './UserInfo.style';
import { Link, useLocation } from 'react-router-dom';
import { EditPhone, RegistEmail, Terms } from '..';

export const UserInfo = () => {
  const location = useLocation();
  if (location.pathname === '/setting/user/info/email/regist') {
    return <RegistEmail />;
  }
  if (location.pathname === '/setting/user/info/phone/edit') {
    return <EditPhone />;
  }

  console.log(location);
  if (location.pathname.includes('/setting/user/info/terms')) {
    return <Terms />;
  }

  return (
    <Wrapper>
      <Box padding="15px 15px 0">
        <SectionTitle>계정 정보</SectionTitle>
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
            이메일
          </Button>
          <Link to="./email/regist">
            <Button backgroundColor="transparent" color="primary" padding="0">
              등록
            </Button>
          </Link>
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
            justifyContent="start"
          >
            <Box>
              <Button padding="0" variant="transparent">
                휴대폰 번호
              </Button>
              <Button padding="0" variant="transparentGray" size="small">
                010 7430 0220
              </Button>
            </Box>
          </Button>
          <Link to="./phone/edit">
            <Button backgroundColor="transparent" color="primary" padding="0">
              변경
            </Button>
          </Link>
        </Box>
      </Box>
      <Box padding="15px 15px 0" borderTopColor="lightGray">
        <SectionTitle>기타</SectionTitle>
        <Link to="./terms" style={{ width: '100%' }}>
          <Button
            variant="transparent"
            padding="15px 0"
            width="100%"
            justifyContent="start"
          >
            서비스 이용약관
          </Button>
        </Link>
      </Box>
    </Wrapper>
  );
};
