// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "lumina-1307f.firebaseapp.com",
  projectId: "lumina-1307f",
  storageBucket: "lumina-1307f.firebasestorage.app",
  messagingSenderId: "341788965217",
  appId: "1:341788965217:web:2f215d2e021368d9182d20"
};

// Initialize Firebase
const app = getApps().lenght == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

