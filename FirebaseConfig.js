// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2CDSK__Tfg685XJvMzKXXStBlVc3IrJE",
  authDomain: "bus-login-5877a.firebaseapp.com",
  projectId: "bus-login-5877a",
  storageBucket: "bus-login-5877a.appspot.com",
  messagingSenderId: "755072367825",
  appId: "1:755072367825:web:7a994e6dab3b04195159f0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDB = getFirestore(firebaseApp);

export { firebaseApp, firebaseAuth, firebaseDB };