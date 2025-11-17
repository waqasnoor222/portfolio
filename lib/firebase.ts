"use client";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiDtaeDKfIaE_IhLln6-_t0cl1XMp30bE",
  authDomain: "portfolio-2c9da.firebaseapp.com",
  projectId: "portfolio-2c9da",
  storageBucket: "portfolio-2c9da.firebasestorage.app",
  messagingSenderId: "345884171357",
  appId: "1:345884171357:web:759a04c2385703e03f81b4",
  measurementId: "G-QGEM4J00YT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };