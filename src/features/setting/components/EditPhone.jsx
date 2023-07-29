import { Box, Button } from 'components/Elements';
import {
  Content,
  Description,
  Icon,
  SubDescription,
  Tip,
  Wrapper,
} from './EditPhone.style';
import { InputField } from 'components/Form';
import { useEffect, useState } from 'react';
import { validate } from 'utils/validate';

import { Link } from 'react-router-dom';

import RightArrowIcon from 'assets/icons/right-arrow.svg';

export const EditPhone = ({ defaultPhoneNumber = '010 0000 0000' }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (validate.phone(phoneNumber)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [phoneNumber]);
  return (
    <Wrapper>
      <Box gap="20px" alignItems="start">
        <Description>새로운 휴대폰 번호를 입력해주세요</Description>
        <SubDescription>{`현재 등록된 휴대폰 번호는 ${defaultPhoneNumber}이에요.`}</SubDescription>
        <InputField
          borderRadius="5px"
          placeholder="휴대폰 번호"
          getValue={setPhoneNumber}
          type="number"
        />
        <Tip>
          <Content>
            <strong>꼭 확인해주세요!</strong> 기존에 본인인증한 명의자 정보와
            일치하지 않으면 당근페이를 사용할 수 없어요.
          </Content>
          <Link to="/service-center/user">
            <Icon src={RightArrowIcon} />
          </Link>
        </Tip>
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
        인증문자 받기
      </Button>
    </Wrapper>
  );
};
