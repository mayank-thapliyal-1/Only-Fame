
import { initializeApp } from "firebase/app";
import {getAuth,RecaptchaVerifier,signInWithPhoneNumber,PhoneAuthProvider,signInWithCredential} from "firebase/auth";
 const key = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey:key,
  authDomain: "dummy-71b29.firebaseapp.com",
  projectId: "dummy-71b29",
  storageBucket: "dummy-71b29.firebasestorage.app",
  messagingSenderId: "968344676841",
  appId: "1:968344676841:web:326d7958d835743ae7c378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();
export {auth , RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider,
    signInWithCredential} ;