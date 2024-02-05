// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {auth as auth2} from "@react-native-firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC1ed8mAkaMnDVVrY-Pu8rPPJAkE5O8SWE",
  authDomain: "prive-pay.firebaseapp.com",
  databaseURL: "https://prive-pay-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "prive-pay",
  storageBucket: "prive-pay.appspot.com",
  messagingSenderId: "393961825543",
  appId: "1:393961825543:web:243e0d9b11ca97ea5591a2"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {
    auth,app,auth2
}