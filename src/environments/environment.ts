// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCCNo0qJLO25qht4pvnPl7vKjCkC6A97Lc',
    authDomain: 'lcvck-687.firebaseapp.com',
    projectId: 'lcvck-687',
    storageBucket: 'lcvck-687.appspot.com',
    messagingSenderId: '128130740212',
    appId: '1:128130740212:web:4cbac17720caca8ee9d3a1',
    measurementId: 'G-V9R3KDJJRB',
  },
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
