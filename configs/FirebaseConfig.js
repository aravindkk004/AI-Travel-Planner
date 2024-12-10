// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY2eTx6Z5Ah4owaDDNwbTE26xGAFp7qoI",
  authDomain: "react-native-projects-5fa13.firebaseapp.com",
  projectId: "react-native-projects-5fa13",
  storageBucket: "react-native-projects-5fa13.firebasestorage.app",
  messagingSenderId: "413281476497",
  appId: "1:413281476497:web:94c511d179eed21af88430",
  measurementId: "G-J92N4ZN2JT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);