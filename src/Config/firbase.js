import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
 const key = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "onlyfame-5f840.firebaseapp.com",
  projectId: "onlyfame-5f840",
  storageBucket: "onlyfame-5f840.firebasestorage.app",
  messagingSenderId: "321294639712",
  appId: "1:321294639712:web:c0acd0b02a101f7ab09905",
  measurementId: "G-1RV36ZMT7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
    // firebase.js