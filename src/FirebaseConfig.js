// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import router from "./routing";
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

initializeApp(firebaseConfig)


const auth = getAuth(firebaseConfig);
const db  = getFirestore(firebaseConfig);
const user = ''; 

// kijkt na of er een user is ingelogd.
onAuthStateChanged(auth, user => {
  if(!user == null ) {
    console.log('logged in!' )
    router.push('/') // gaat naar de overzicht pagina 
  } else {
    console.log('no user.');
    router.push('/login');
  }
})



export {auth, db, user}