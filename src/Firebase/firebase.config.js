// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEkmyXRxpFT8c4-Jak4fBxCuqE18RXMDw",
  authDomain: "volunteer-management-web-c6c6d.firebaseapp.com",
  projectId: "volunteer-management-web-c6c6d",
  storageBucket: "volunteer-management-web-c6c6d.firebasestorage.app",
  messagingSenderId: "901274334709",
  appId: "1:901274334709:web:edbaefbeeed0367cd21cbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
