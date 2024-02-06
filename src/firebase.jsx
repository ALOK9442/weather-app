// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt2UOOEeqzPoLCZqpL7T808BcN2rlIQsM",
  authDomain: "weather-app-75ce4.firebaseapp.com",
  projectId: "weather-app-75ce4",
  storageBucket: "weather-app-75ce4.appspot.com",
  messagingSenderId: "907622852651",
  appId: "1:907622852651:web:468dc144d1115921d0226e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);