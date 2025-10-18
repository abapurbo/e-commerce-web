// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  DapiKey: import.meta.env.VITE_DapiKey,
  DauthDomain: import.meta.env.VITE_DauthDomain,
  DprojectId: import.meta.env.VITE_DprojectId,
  DstorageBucket: import.meta.env.VITE_DstorageBucket,
  DmessagingSenderId: import.meta.env.VITE_DmessagingSenderId,
  DappId: import.meta.env.VITE_DappId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
