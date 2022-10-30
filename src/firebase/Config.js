// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTp-xWD2W0QK6jVPq7fYrFDdJlRB3Xi8w",
  authDomain: "real-todo-app-50aa7.firebaseapp.com",
  projectId: "real-todo-app-50aa7",
  storageBucket: "real-todo-app-50aa7.appspot.com",
  messagingSenderId: "36572030786",
  appId: "1:36572030786:web:1ac1fd8ed1a7f98703cadb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);