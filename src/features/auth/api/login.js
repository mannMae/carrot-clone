import { signInWithPhoneNumber } from 'firebase/auth';

export const loginWithPhoneNumber = (auth, phoneNumber, verifier) => {
  return signInWithPhoneNumber(auth, '+82' + phoneNumber, verifier);
};
