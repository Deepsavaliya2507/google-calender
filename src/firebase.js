// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk66L27jeftgZRFPiru5dhZuzMyioYPGA",
  authDomain: "calender-d0edc.firebaseapp.com",
  projectId: "calender-d0edc",
  storageBucket: "calender-d0edc.firebasestorage.app",
  messagingSenderId: "700317419332",
  appId: "1:700317419332:web:9a27c1fa5a350204aeb911",
  measurementId: "G-YH72063DF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);