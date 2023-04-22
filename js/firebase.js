// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0kZ1duvq4IqBY-EEW0hihhk7NQ7D9ios",
  authDomain: "web-iot-bc5bf.firebaseapp.com",
  projectId: "web-iot-bc5bf",
  storageBucket: "web-iot-bc5bf.appspot.com",
  messagingSenderId: "924770185268",
  appId: "1:924770185268:web:1642351b3438b91a6d5a61",
  measurementId: "G-9L4ZDC2STG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);