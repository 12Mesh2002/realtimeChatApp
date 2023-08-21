import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCShPS0nWRbKjwQva82goYlmJxfGZjAIjo",
  authDomain: "chatapp-c7d41.firebaseapp.com",
  projectId: "chatapp-c7d41",
  storageBucket: "chatapp-c7d41.appspot.com",
  messagingSenderId: "826820604306",
  appId: "1:826820604306:web:88f804363f1cd109d9d14b",
  measurementId: "G-G00V1GQD6C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
