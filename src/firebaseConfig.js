// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export const auth = getAuth(app);

