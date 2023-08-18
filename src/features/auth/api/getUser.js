import { child, get, ref } from 'firebase/database';
import { firebaseDatabase } from 'library/firebase';

export const getUser = (uid) => {
  const userRef = ref(firebaseDatabase, 'users');
  return get(child(userRef, uid));
};
