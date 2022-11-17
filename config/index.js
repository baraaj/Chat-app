// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import app from "firebase/compat/app";
import  "firebase/compat/auth";
//import initfirebase from './index';
import "firebase/compat/database";
import "firebase/compat/storage";
import Authentification from './../Screens/Authentification';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuFLVuO2WBxWEIwEcQqWDp93LszvMgtUs",
  authDomain: "chatappissat-232ad.firebaseapp.com",
  projectId: "chatappissat-232ad",
  storageBucket: "chatappissat-232ad.appspot.com",
  messagingSenderId: "82798699703",
  appId: "1:82798699703:web:8155876aaf86c0c4a7d932",
  measurementId: "G-4LLZ7G7KQE"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const initfirebase = app.initializeApp(firebaseConfig);
export default initfirebase;