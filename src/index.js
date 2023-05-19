import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import * as firebase from 'firebase';
import 'firebase/firestore';
// import { initializeApp } from "firebase/app";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBeMEwqSarVRD_0iyYFC3pBxEPNO0ylIfY",
//   authDomain: "cart-6ae6a.firebaseapp.com",
//   projectId: "cart-6ae6a",
//   storageBucket: "cart-6ae6a.appspot.com",
//   messagingSenderId: "462031344192",
//   appId: "1:462031344192:web:60c661c7ef39721e9345a5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBeMEwqSarVRD_0iyYFC3pBxEPNO0ylIfY",
    authDomain: "cart-6ae6a.firebaseapp.com",
    projectId: "cart-6ae6a",
    storageBucket: "cart-6ae6a.appspot.com",
    messagingSenderId: "462031344192",
    appId: "1:462031344192:web:60c661c7ef39721e9345a5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


