import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA9G-xf7JSx_8iYDq_dzdUWxEf4jI7D7m4",
  authDomain: "todos-909e6.firebaseapp.com",
  projectId: "todos-909e6",
  storageBucket: "todos-909e6.appspot.com",
  messagingSenderId: "58246305607",
  appId: "1:58246305607:web:f2812ae354062542191e62",
  databaseURL: "https://todos-909e6-default-rtdb.europe-west1.firebasedatabase.app/"
};

const firebaseApp = initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);

export default firebaseApp