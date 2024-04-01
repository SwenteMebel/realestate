// Firebase keys en config file. 

export const firebaseConfig = {
  apiKey: "AIzaSyDKYA6NRZfxErR7iTv5WOTCm5RQuNq2iQk",
  authDomain: "realestate-sm.firebaseapp.com",
  projectId: "realestate-sm",
  storageBucket: "realestate-sm.appspot.com",
  messagingSenderId: "327419885461",
  appId: "1:327419885461:web:f920d102ebdbe9a755a89c"
};

<<<<<<< HEAD

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
=======
>>>>>>> ad78e314c7e44e2e02624ebecced6ddc2ec761b0
