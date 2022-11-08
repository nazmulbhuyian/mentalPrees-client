// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy6vGLUfT9nW5GMbZuL9SR0eWXVnA6h58",
  authDomain: "mental-press.firebaseapp.com",
  projectId: "mental-press",
  storageBucket: "mental-press.appspot.com",
  messagingSenderId: "382013999312",
  appId: "1:382013999312:web:5a06759271b0cd2978f6d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;