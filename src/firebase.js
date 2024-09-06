// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArNBhPEVy80bWsBUln5u0FQy0ZRhW4BOY",
  authDomain: "clone-yt-88aa9.firebaseapp.com",
  projectId: "clone-yt-88aa9",
  storageBucket: "clone-yt-88aa9.appspot.com",
  messagingSenderId: "890411072091",
  appId: "1:890411072091:web:9de0d05c68db6139925d7e",
  measurementId: "G-YNZM134Z81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();