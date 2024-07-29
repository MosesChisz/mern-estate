// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fc14e.firebaseapp.com",
  projectId: "mern-estate-fc14e",
  storageBucket: "mern-estate-fc14e.appspot.com",
  messagingSenderId: "394531494084",
  appId: "1:394531494084:web:58d89c4c7edadaa28a1191"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);