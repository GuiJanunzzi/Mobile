import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

//Pegar o getReactNatvePersistence mesmo sem tipagem
const{getReactNativePersistence} = require("firebase/auth") as any

const firebaseConfig = {
  apiKey: "AIzaSyCgWl6z9mP7WTxb7_zYVW9UiIDWjo72VQ8",
  authDomain: "aulafirebase-e8d31.firebaseapp.com",
  projectId: "aulafirebase-e8d31",
  storageBucket: "aulafirebase-e8d31.firebasestorage.app",
  messagingSenderId: "188867228533",
  appId: "1:188867228533:web:54c6b067976499c515193c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
});

export{auth,db,collection,addDoc,getDocs}
