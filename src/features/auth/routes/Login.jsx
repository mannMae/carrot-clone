import { Form, InputField } from 'components/Form';
import { Wrapper } from './Login.style';
import { Box, Button } from 'components/Elements';
import { useEffect, useState } from 'react';
import { validate } from 'utils/validate';
import { useLogin, useUser } from 'library/auth';
import { loginWithPhoneNumber } from '../api/login';
import { appVerifier, firebaseAuth } from 'library/firebase';

export const Login = () => {
  // const login = useUser();
  const [phoneNumber, setPhoneNumber] = useState();
  const [isValidated, setIsValidated] = useState(false);
  useEffect(() => {
    setIsValidated(validatePhoneNumber(phoneNumber));
  }, [phoneNumber]);

  const validatePhoneNumber = (phoneNumber) => {
    return validate.phone(phoneNumber);
  };

  const handleSubmit = async (values) => {
    console.log(appVerifier);
    if (isValidated) {
      console.log('actived!');
      loginWithPhoneNumber(firebaseAuth, phoneNumber, appVerifier)
        .then((res) => console.log(res))
        .catch((error) => console.error(error));
    } else {
      console.log('wrong');
    }
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
                인증문자 받기
              </Button>
            </Box>
          );
        }}
      </Form>
    </Wrapper>
  );
};
