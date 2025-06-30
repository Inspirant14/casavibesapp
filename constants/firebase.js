// app/firebase.js


import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDugYsoGbhT5sAqtqAhS__RK6J9LLsUv4A",
  authDomain: "http://gitnov-b2c60.firebaseapp.com/",
  projectId: "gitnov-b2c60",
  storageBucket: "http://gitnov-b2c60.firebasestorage.app/",
  messagingSenderId: "1049719053343",
  appId: "1:1049719053343:web:491fa8e32a51de1a2b092a"
};

const app = initializeApp(firebaseConfig);

// ici on injecte la persistance
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
