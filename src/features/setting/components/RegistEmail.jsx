import { Box, Button } from 'components/Elements';
import { Anchor, Description, Image, Wrapper } from './RegistEmail.style';
import { InputField } from 'components/Form';
import { useEffect, useState } from 'react';
import { validate } from 'utils/validate';

import EmailImage from 'assets/icons/email-security.svg';
import { Link } from 'react-router-dom';

export const RegistEmail = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (validate.email(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email]);
  return (
    <Wrapper>
      <Box gap="30px" alignItems="center">
        <Box flexDirection="row" gap="10px">
          <Description>
            안전한 계정관리를 위해 이메일을 등록해주세요! 휴대폰 번호 변경 등
            계정에 변동사항이 있을 때 사용할 수 있어요.
          </Description>
          <Image src={EmailImage} />
        </Box>
        <InputField
          borderRadius="5px"
          placeholder="이메일 주소"
          getValue={setEmail}
        />
        <Link to=".">
          <Anchor>이메일 계정에 대해 자세히 알고 싶으신가요?</Anchor>
        </Link>
      </Box>
      <Button
        position="fixed"
        left="50%"
        bottom="5%"
        width="95%"
        color={isValid ? 'white' : 'gray'}
        backgroundColor={isValid ? 'primary' : 'lightGray'}
        borderRadius="5px"
        transform="translateX(-50%)"
        size="large"
        padding="15px"
      >
        인증메일 받기
      </Button>
    </Wrapper>
  );
};
