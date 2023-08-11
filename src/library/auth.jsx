import { getUser, loginWithPhoneNumber } from 'features/auth';
import { configureAuth } from 'react-query-auth';
import { storage } from 'utils/storage';

const handleUserResponse = (data = { jwt: '', user: '' }) => {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
};

const userFn = async () => {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
};

const loginFn = async (data) => {
  const response = await loginWithPhoneNumber(data);
  const user = await handleUserResponse(response);
  return user;
};

const registerFn = () => {};

const logoutFn = () => {};

const authConfig = {
  userFn,
  loginFn,
  registerFn,
  logoutFn,
};

export const { useUser, useLogin, AuthLoader } = configureAuth(authConfig);
