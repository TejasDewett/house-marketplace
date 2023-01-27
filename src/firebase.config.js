// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUkNL9o88ZtMh3rPQliOsC3lEqhGhFqYg",
  authDomain: "house-marketplace-app-11fd4.firebaseapp.com",
  projectId: "house-marketplace-app-11fd4",
  storageBucket: "house-marketplace-app-11fd4.appspot.com",
  messagingSenderId: "21408166168",
  appId: "1:21408166168:web:3e8e19a8762eaf187eae6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()