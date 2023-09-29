// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


//Hm7Vkh9Vc2GHPfvNU2Vz 
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlw7WZY17dWiEHtDvDVjbgTy_NPv8EPjU",
  authDomain: "react-crud-f01b1.firebaseapp.com",
  projectId: "react-crud-f01b1",
  storageBucket: "react-crud-f01b1.appspot.com",
  messagingSenderId: "105252202085",
  appId: "1:105252202085:web:e8e4242d5b54280c86488c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)