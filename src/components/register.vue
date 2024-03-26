<template>
    <section class="flex justify-center w-screen mb-20">
        <div class="w-[22rem] md:w-[30rem] md:h-[35rem] h-[30rem] mt-[5rem] md:mt-[10rem] grid justify-center rounded-xl shadow-lg shadow-black mb-5 bg-gradient-to-r from-green-lime via-light-dark to-dark-house focus:shadow-gray-700 linear duration-200">
            <div class=" grid justify-center items-center">
                <div class="">
                    <img src="../assets//RealestateText.png" alt="logo" class="w-30 rounded-lg">
                </div>
                <div class="text-center">
                    <h1 class="text-xl font-bold font-serif"> <i class="fa-solid fa-right-to-bracket fa-sm"></i> Register</h1> 
                </div>
            </div>
            <form class="p-2 md:w-[25rem] s:w-[18rem] grid mb-6" @submit.prevent="register">
                <label class=" items-end grid pl-1 font-serif font-semibold">Email:</label>
                <input class="border-2 rounded-xl pl-2" type="text" v-model="email" placeholder="E-mail" required>
                <label class="items-end grid pl-1 font-serif font-semibold">Wachtwoord</label>
                <input class="border-2 rounded-xl pl-2" type="password" v-model="password" placeholder="Wachtwoord" required>
                <button class="border-2 rounded-xl pl-2 my-2 mt-[2rem] md:mt-[4rem] font-semibold text-white" type="submit">Registreer</button>
            </form>
        </div>  
    </section>
    
</template>

<script >
import { ref } from 'vue';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


export default {
name : 'registerVue',

methods:{
    register(){
       // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
    const firebaseConfig = initializeApp ({
    apiKey: "AIzaSyDKYA6NRZfxErR7iTv5WOTCm5RQuNq2iQk",
    authDomain: "realestate-sm.firebaseapp.com",
    projectId: "realestate-sm",
    storageBucket: "realestate-sm.appspot.com",
    messagingSenderId: "327419885461",
    appId: "1:327419885461:web:f920d102ebdbe9a755a89c"
    });

    // Initialize Firebase
    const firebaseLink = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseLink);
    const email = ref('');
    const password = ref('');
        createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((email, password) => {
        const user = email.value + password.value;
        alert( user + 'gebruiker aangemaakt')
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('oeps er ging iets fout. ' + errorCode + errorMessage)
    })

    }
}
}


</script>