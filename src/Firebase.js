// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAELYx-V7A80KRq1hzW13T5hpdX1LzzEpI",
  authDomain: "socio-hero.firebaseapp.com",
  projectId: "socio-hero",
  storageBucket: "socio-hero.appspot.com",
  messagingSenderId: "747728266144",
  appId: "1:747728266144:web:286cc22e74ef8b95b9bac5",
  measurementId: "G-MMQRD300TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(app);
