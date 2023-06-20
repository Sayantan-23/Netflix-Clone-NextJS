// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXLx6mq2eL5Axuy05yB4mW-0otYxQ-TjY",
  authDomain: "video-streaming-app-a054a.firebaseapp.com",
  projectId: "video-streaming-app-a054a",
  storageBucket: "video-streaming-app-a054a.appspot.com",
  messagingSenderId: "41966389963",
  appId: "1:41966389963:web:c59b0fc70b7a5205f5a94e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
