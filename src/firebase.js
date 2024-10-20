// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVL_a-SMaIusmyATXRUeDSHPdPrvlntKg",
  authDomain: "algozenith-ad2c2.firebaseapp.com",
  projectId: "algozenith-ad2c2",
  storageBucket: "algozenith-ad2c2.appspot.com",
  messagingSenderId: "896503105598",
  appId: "1:896503105598:web:3d36333449b1547a45e96f",
  measurementId: "G-ZXKLQY0RB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {app };
// export default db;
export const storage = getStorage(app);
export const db = getFirestore(app);