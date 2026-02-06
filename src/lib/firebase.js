import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmKDegiqZ9XMlZ2w6pKmAPih0f9G4MZB0",
  authDomain: "shikhar-alo-ec624.firebaseapp.com",
  projectId: "shikhar-alo-ec624",
  storageBucket: "shikhar-alo-ec624.firebasestorage.app",
  messagingSenderId: "553481992909",
  appId: "1:553481992909:web:7dc21c247931301c8d8784"
};

// Next.js এ সার্ভার সাইড রেন্ডারিং এর সময় বারবার ইনিশিয়ালাইজেশন এড়াতে এই চেকটি জরুরি
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);