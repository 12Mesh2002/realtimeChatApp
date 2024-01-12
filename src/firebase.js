// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCShPS0nWRbKjwQva82goYlmJxfGZjAIjo",
//   authDomain: "chatapp-c7d41.firebaseapp.com",
//   databaseURL: "https://chatapp-c7d41-default-rtdb.firebaseio.com",
//   projectId: "chatapp-c7d41",
//   storageBucket: "chatapp-c7d41.appspot.com",
//   messagingSenderId: "826820604306",
//   appId: "1:826820604306:web:88f804363f1cd109d9d14b",
//   measurementId: "G-G00V1GQD6C"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore()


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO85yMONlJK8Leki3XWh7iLIOyZJ8CqeQ",
  authDomain: "realtime-chatapp-fb90e.firebaseapp.com",
  projectId: "realtime-chatapp-fb90e",
  storageBucket: "realtime-chatapp-fb90e.appspot.com",
  messagingSenderId: "195563445412",
  appId: "1:195563445412:web:555e5919ca35cf533b1a31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()