// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKB8gvdC52BYkB4AjNZ-uuBDkSo6N7cIc",
  authDomain: "tiendaluna-d3465.firebaseapp.com",
  projectId: "tiendaluna-d3465",
  storageBucket: "tiendaluna-d3465.appspot.com",
  messagingSenderId: "896838749089",
  appId: "1:896838749089:web:343789eff25e9575b859e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);