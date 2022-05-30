import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKHFMWzrwDp1Ud4ui6CDJ51QYFTnnRfog",
  authDomain: "sae203-b029b.firebaseapp.com",
  projectId: "sae203-b029b",
  storageBucket: "sae203-b029b.appspot.com",
  messagingSenderId: "385048472092",
  appId: "1:385048472092:web:c3392960f03eb159b5cdd9"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
