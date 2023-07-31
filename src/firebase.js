// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_a_fEwJefzScryULWHce2ImZgbWqS6qI",
  authDomain: "pet-store-36d05.firebaseapp.com",
  projectId: "pet-store-36d05",
  storageBucket: "pet-store-36d05.appspot.com",
  messagingSenderId: "832898595624",
  appId: "1:832898595624:web:dfe8d5eba6a157b939ee1d",
  measurementId: "G-BMPH828E0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;