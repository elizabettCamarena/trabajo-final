import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7GbzGg1g6HkPM-ofhOQ5gs24iOtsB1ls",
  authDomain: "final-f5670.firebaseapp.com",
  projectId: "final-f5670",
  storageBucket: "final-f5670.appspot.com",
  messagingSenderId: "853451928479",
  appId: "1:853451928479:web:4340a8015c8978d013c3aa",
  measurementId: "G-FVDNRVTCY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
