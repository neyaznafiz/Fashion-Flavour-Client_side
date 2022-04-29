// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb-5ybQezcWo_CdOqPBG9sMFQize0yBkk",
  authDomain: "fashion-flavour.firebaseapp.com",
  projectId: "fashion-flavour",
  storageBucket: "fashion-flavour.appspot.com",
  messagingSenderId: "342599968946",
  appId: "1:342599968946:web:055a34cf223a945dfd41ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth