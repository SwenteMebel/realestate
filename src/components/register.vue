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
            <form  @submit.prevent="register" class="p-2 md:w-[25rem] s:w-[18rem] grid mb-6">
                <label class=" items-end grid pl-1 font-serif font-semibold">Email:</label>
                <input class="border-2 rounded-xl pl-2" type="email" v-model="email" placeholder="E-mail" required>
                <label class="items-end grid pl-1 font-serif font-semibold">Wachtwoord</label>
                <input class="border-2 rounded-xl pl-2" type="password" v-model="password" placeholder="Wachtwoord" required>
                <button class="border-2 rounded-xl pl-2 my-2 mt-[2rem] md:mt-[4rem] font-semibold text-white">Registreer</button>
            </form>
        </div>  
    </section>
    
</template>

<script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "@/routing";
import { ref } from 'vue';

export default {
name : 'registerVue',

    methods:{
        register(){
        // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries

            // Your web app's Firebase configuration
            
                const auth = getAuth();
                const email = ref('');
                const password = ref('');
                    createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((email, password) => {
                    const user = email.value + password.value;
                    alert( user + 'gebruiker aangemaakt');
                    router.push('/login');
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert('oeps er ging iets fout. De fout code is: ' + errorCode  + '. De fout melding is: ' + errorMessage)
            }) 
        },
    },
}


</script>