import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, serviceWorker } from './app';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2GcX5HlakoBPgIWZLzEVeSXCsuD_yWy0",
  authDomain: "restaurant-reservations-75bf9.firebaseapp.com",
  projectId: "restaurant-reservations-75bf9",
  storageBucket: "restaurant-reservations-75bf9.firebasestorage.app",
  messagingSenderId: "1014631005085",
  appId: "1:1014631005085:web:829c51fc9515af06a7cd74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
