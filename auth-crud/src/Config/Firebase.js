
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCTFOOhPD3L9BGbMRpWOp08-kT34KO9X4",
  authDomain: "auth-crud-9c747.firebaseapp.com",
  projectId: "auth-crud-9c747",
  storageBucket: "auth-crud-9c747.appspot.com",
  messagingSenderId: "588241740408",
  appId: "1:588241740408:web:e137925df1ba5099a0c38d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()