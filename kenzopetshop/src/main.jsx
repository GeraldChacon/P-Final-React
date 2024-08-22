import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNvPOGTpPYE8hl9aUPaUOV8scsx74YPjI",
  authDomain: "kenzopetshop-5d649.firebaseapp.com",
  projectId: "kenzopetshop-5d649",
  storageBucket: "kenzopetshop-5d649.appspot.com",
  messagingSenderId: "396862809824",
  appId: "1:396862809824:web:9ce73a853d3eb360a6d285"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
