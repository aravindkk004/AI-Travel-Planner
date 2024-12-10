import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDY2eTx6Z5Ah4owaDDNwbTE26xGAFp7qoI",
  authDomain: "react-native-projects-5fa13.firebaseapp.com",
  projectId: "react-native-projects-5fa13",
  storageBucket: "react-native-projects-5fa13.firebasestorage.app",
  messagingSenderId: "413281476497",
  appId: "1:413281476497:web:94c511d179eed21af88430",
  measurementId: "G-J92N4ZN2JT"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);