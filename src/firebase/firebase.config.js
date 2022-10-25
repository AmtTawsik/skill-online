// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDsrNOCbF_FkkA-zOWgIQy7-PX_pGT0TI",
  authDomain: "skill-online.firebaseapp.com",
  projectId: "skill-online",
  storageBucket: "skill-online.appspot.com",
  messagingSenderId: "762140938922",
  appId: "1:762140938922:web:1f77e29358dba9e6ef76d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;