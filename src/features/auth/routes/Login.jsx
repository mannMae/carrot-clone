import { Form, InputField } from 'components/Form';
import { Anchor, Guide, Wrapper } from './Login.style';
import { Box, Button } from 'components/Elements';
import { useEffect, useState } from 'react';
import { validate } from 'utils/validate';
import { useLogin, useUser } from 'library/auth';
import { loginWithPhoneNumber } from '../api/login';
import { appVerifier, firebaseAuth } from 'library/firebase';
import { signInWithCredential } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { queryClient } from 'library/react-query';

export const Login = () => {
  // const login = useUser();
  const [phoneNumber, setPhoneNumber] = useState();
  const [isValidated, setIsValidated] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState();
  const [confirmationCode, setConfirmationCode] = useState('');
  useEffect(() => {
    setIsValidated(validatePhoneNumber(phoneNumber));
  }, [phoneNumber]);

  const validatePhoneNumber = (phoneNumber) => {
    return validate.phone(phoneNumber);
  };

  const handleSubmit = async (values) => {
    if (isValidated) {
      loginWithPhoneNumber(firebaseAuth, phoneNumber, appVerifier)
        .then((res) => {
          setConfirmationResult(res);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleConfirmationSubmit = () => {
    console.log(confirmationResult);
    confirmationResult
      .confirm(confirmationCode)
      .then((res) => {
        console.log(res);
        queryClient.setQueryData(['user'], {
          user: res.user,
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {({ register, formState }) => {
          return (
            <Box gap="15px">
              <InputField
                maxLength="11"
                type="number"
                borderRadius="5px"
                getValue={setPhoneNumber}
                registraion={register('phoneNumber')}
                error={formState.errors['phoneNumber']}
                required
              />
              <Button
                width="100%"
                borderRadius="5px"
                fontWeight="600"
                size="large"
                variant={isValidated ? 'transparent' : 'transparentGray'}
                borderColor="lightGray"
              >
                {confirmationResult ? '인증문자 다시받기' : '인증문자 받기'}
              </Button>
            </Box>
          );
        }}
      </Form>
      {confirmationResult && (
        <Form onSubmit={handleConfirmationSubmit}>
          {({ register, formState }) => {
            return (
              <Box gap="15px">
                <InputField
                  maxLength="11"
                  type="number"
                  borderRadius="5px"
                  getValue={setConfirmationCode}
                  registraion={register('confirmationCode')}
                  error={formState.errors['confirmationCode']}
                  placeholder="인증번호 입력"
                  required
                />

                <Guide>어떤 경우에도 타인에게 공유하지 마세요!</Guide>
                <Button
                  height="40px"
                  width="100%"
                  borderRadius="5px"
                  fontWeight="600"
                  size="large"
                  color="gray"
                  backgroundColor="lightGray"
                  variant={confirmationCode.length && 'primary'}
                  borderColor={!confirmationCode.length && 'lightGray'}
                >
                  동의하고 시작하기
                </Button>
              </Box>
            );
          }}
        </Form>
      )}
      <Link to="." style={{ justifySelf: 'center', alignSelf: 'center' }}>
        <Anchor>인증번호가 오지 않나요?</Anchor>
      </Link>
    </Wrapper>
  );
};
