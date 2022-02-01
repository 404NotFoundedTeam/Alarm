// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0St5T3hUy4KCO8rqgna1AzBkIWrBKbj0",
  authDomain: "alarm-79c14.firebaseapp.com",
  databaseURL: "https://alarm-79c14-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alarm-79c14",
  storageBucket: "alarm-79c14.appspot.com",
  messagingSenderId: "717650813926",
  appId: "1:717650813926:web:bd5f27363058aa0426ec27",
  measurementId: "G-G9EQ4KEWX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);