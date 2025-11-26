// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlDBgtRqGf5Q79flNjjwi7xTXgGCDWlNA",
  authDomain: "play-a50ce.firebaseapp.com",
  projectId: "play-a50ce",
  storageBucket: "play-a50ce.firebasestorage.app",
  messagingSenderId: "440242414210",
  appId: "1:440242414210:web:e96254b905aa73c82bca9b",
  measurementId: "G-JLWSE05RZP"
};

// Initialize Firebase
import { getAuth } from "firebase/auth";
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, analytics, auth };