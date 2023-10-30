import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2QtX-v4P_CE39RqvBJohTuH-BiXogcgA",
    authDomain: "notetaken-333.firebaseapp.com",
    databaseURL: "https://notetaken-333-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "notetaken-333",
    storageBucket: "notetaken-333.appspot.com",
    messagingSenderId: "860446458634",
    appId: "1:860446458634:web:773937ec5f4eadfc1030f3"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;

