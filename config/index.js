// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import  "firebase/compat/auth";
//import initfirebase from './index';

import Authentification from './../Screens/Authentification';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {THE_KEY_TO_HAPPINESS} from '@env'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


//import initfirebase from './index';
import "firebase/compat/database";
import "firebase/compat/storage";

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "@env";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  
};

// Initialize Firebase
const initfirebase = app.initializeApp(firebaseConfig);
export default initfirebase