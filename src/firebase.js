// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAoCvYz4dNR4rV7KypMTGnK8RfPT8ahGv8",
  authDomain: "gaurdian-1c568.firebaseapp.com",
  projectId: "gaurdian-1c568",
  storageBucket: "gaurdian-1c568.firebasestorage.app",
  messagingSenderId: "903021608749",
  appId: "1:903021608749:web:af41d32b575fc380a45da4",
  measurementId: "G-6JQZH68Q7R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Add this line:
export const auth = getAuth(app);
