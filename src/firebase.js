// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6Ea7Fb3oLzwT0TwBKR65QbJTzlyGbJX4",
  authDomain: "movies-login-yt.firebaseapp.com",
  projectId: "movies-login-yt",
  storageBucket: "movies-login-yt.appspot.com",
  messagingSenderId: "245491299998",
  appId: "1:245491299998:web:21f9a9d83b4d519baf6d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app