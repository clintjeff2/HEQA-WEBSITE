import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVlbUDKvKwILmNr8Y2WUyUycLjMiMC5Dk",
  authDomain: "heqa-solutions.firebaseapp.com",
  projectId: "heqa-solutions",
  storageBucket: "heqa-solutions.firebasestorage.app",
  messagingSenderId: "221296346927",
  appId: "1:221296346927:web:97ddcbf21542d4bacc83da",
  measurementId: "G-P26YBBVSL2",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export default app;
