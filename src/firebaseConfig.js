import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";

export const firebaseApp = initializeApp({
  // enter your firebase project details
  apiKey: "..........",
  authDomain: "..........",
  projectId: "..........",
  storageBucket: "..........",
  messagingSenderId: "..........",
  appId: "..........",
  measurementId: ".........."
});

export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});