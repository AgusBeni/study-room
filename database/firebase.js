// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhdfQiIWlJiS2KdCmA-pTo2Yu1Pogms2M",
  authDomain: "school-room-dda21.firebaseapp.com",
  projectId: "school-room-dda21",
  storageBucket: "school-room-dda21.firebasestorage.app",
  messagingSenderId: "814179752897",
  appId: "1:814179752897:web:114dfb60feefae85c42d40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const auth = getAuth(app)
