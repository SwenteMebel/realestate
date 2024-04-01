// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { 
    getFirestore, 
    collection,
    getDocs,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKYA6NRZfxErR7iTv5WOTCm5RQuNq2iQk",
  authDomain: "realestate-sm.firebaseapp.com",
  projectId: "realestate-sm",
  storageBucket: "realestate-sm.appspot.com",
  messagingSenderId: "327419885461",
  appId: "1:327419885461:web:f920d102ebdbe9a755a89c"
};
// init firebase app
initializeApp(firebaseConfig)


// init service
const db  = getFirestore();

// collection ref
const SchadeOpnemen = collection(db, 'SchadeOpnemen');


// get collection data
getDocs(SchadeOpnemen)
    .then((snapshot) => {
        let schade = [];
        snapshot.docs.forEach((doc) => {
            schade.push({ ...doc.data(), id: doc.id})
        })
        console.log(schade)
    })
    .catch(error => {
        console.log(error.message)
    })
