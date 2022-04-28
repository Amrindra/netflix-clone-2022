// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBfG91lhaGeSkVzztLPS-50RpZ_FBOlrEs',
  authDomain: 'netflix-clone-2022-b913b.firebaseapp.com',
  projectId: 'netflix-clone-2022-b913b',
  storageBucket: 'netflix-clone-2022-b913b.appspot.com',
  messagingSenderId: '699502093395',
  appId: '1:699502093395:web:5c421d963377bd0b6792a6',
};

// Initialize Firebase. Just want to check if firebase isn't initialized then initialize it
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
