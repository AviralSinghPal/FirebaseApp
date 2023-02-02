// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLxl1NSPa-Tr4t9KBm0RcQyp_Uli7-f48",
  authDomain: "first-firebase-app-d28e1.firebaseapp.com",
  projectId: "first-firebase-app-d28e1",
  storageBucket: "first-firebase-app-d28e1.appspot.com",
  messagingSenderId: "827165029486",
  appId: "1:827165029486:web:402c83f891cb616d12227f",
  measurementId: "G-QY13T6RE8Q"
};


// Initialize Firebase

 const app = initializeApp(firebaseConfig);
 const auth= getAuth();

 export {app, auth};