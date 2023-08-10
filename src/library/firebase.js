// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { RecaptchaVerifier } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB5Gf-OqvQoyQXUTg8M4-xWnNAAaxMlvtA',
  authDomain: 'carrot-market-clone-3db9b.firebaseapp.com',
  projectId: 'carrot-market-clone-3db9b',
  storageBucket: 'carrot-market-clone-3db9b.appspot.com',
  messagingSenderId: '959844861850',
  appId: '1:959844861850:web:e1a0c671cda8e4f66a5c23',
  measurementId: 'G-ZDBEX1JTKM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
firebaseAuth.languageCode = 'it';

window.recaptchaVerifier = new RecaptchaVerifier(
  firebaseAuth,
  'recaptcha-container',
  { size: 'invisible', callback: (response) => {} }
);

export const appVerifier = window.recaptchaVerifier;
