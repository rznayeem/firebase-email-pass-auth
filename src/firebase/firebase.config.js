// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCo2454Hf4Oq4CvZ1gstLmS7vblcBe17h8',
  authDomain: 'email-password-auth-306b2.firebaseapp.com',
  projectId: 'email-password-auth-306b2',
  storageBucket: 'email-password-auth-306b2.appspot.com',
  messagingSenderId: '1009919879025',
  appId: '1:1009919879025:web:ad2792da1ac14549f2f8d0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
