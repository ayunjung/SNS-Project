// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXKRRnDUYKNm5p9gqjciGE50Gx0N7lie4",
  authDomain: "sns-project-5229d.firebaseapp.com",
  projectId: "sns-project-5229d",
  storageBucket: "sns-project-5229d.appspot.com",
  messagingSenderId: "615452519845",
  appId: "1:615452519845:web:f21cbd7caab93bd596cc4c",
  measurementId: "G-R2YF4YFZSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;