import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routing'
//import storeData from './data/index.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initializeApp( {
  apiKey: "AIzaSyDKYA6NRZfxErR7iTv5WOTCm5RQuNq2iQk",
  authDomain: "realestate-sm.firebaseapp.com",
  projectId: "realestate-sm",
  storageBucket: "realestate-sm.appspot.com",
  messagingSenderId: "327419885461",
  appId: "1:327419885461:web:f920d102ebdbe9a755a89c"
});


const auth = getAuth(firebaseApp);
const db  = getFirestore(firebaseApp);

onAuthStateChanged(auth, user => {
  if(!user == null ) {
    console.log('logged in!' )
    router.push('/')
  } else {
    console.log('no user.');
    router.push('/login');
  }
})

createApp(App)
//.use(storeData)
.use(router)
.mount('#app')
export {auth, db }
