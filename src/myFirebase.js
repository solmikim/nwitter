import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 환경 변수는 REACT_APP 이라고 prefix를 붙여야 작동됨.
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth();