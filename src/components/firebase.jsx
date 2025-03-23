// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIBtZdY03B5y1WtlWbKp3CerH2AXYGEeE",
  authDomain: "dashboard-370c4.firebaseapp.com",
  projectId: "dashboard-370c4",
  storageBucket: "dashboard-370c4.firebasestorage.app",
  messagingSenderId: "1091403323419",
  appId: "1:1091403323419:web:305aab28f38d0b14aa80be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export default app;
