// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjasFcdKLJVmeWHIGStb-FbTZmEQ6vTho",
  authDomain: "card-back-app.firebaseapp.com",
  projectId: "card-back-app",
  storageBucket: "card-back-app.appspot.com",
  messagingSenderId: "942139569530",
  appId: "1:942139569530:web:bef22754d376749f43d2c3",
  measurementId: "G-R63P62X3KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);