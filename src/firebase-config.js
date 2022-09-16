import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGZaGoYwFXLHUbzRUZ-vElaPqhI--F_8A",
  authDomain: "neon-9e263.firebaseapp.com",
  projectId: "neon-9e263",
  storageBucket: "neon-9e263.appspot.com",
  messagingSenderId: "916673163035",
  appId: "1:916673163035:web:d0f6113821de1d8fbbadbe",
  measurementId: "G-9K44M37XWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();