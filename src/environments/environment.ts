// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: "AIzaSyBAYzRN0oomYDNHCCZ-a7nHMjuiURLOi6M",
      authDomain: "lcvck-sae-501.firebaseapp.com",
      projectId: "lcvck-sae-501",
      storageBucket: "lcvck-sae-501.appspot.com",
      messagingSenderId: "535754239395",
      appId: "1:535754239395:web:085da32544c7869925be16",
      measurementId: "G-BTRSLQ6RVN"
    }
  };
  

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);