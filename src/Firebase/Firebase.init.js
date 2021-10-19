import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const hospitalFirebaseAuth = ()=>{
    initializeApp(firebaseConfig);
}

export default hospitalFirebaseAuth;