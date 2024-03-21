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
            <form class="p-2 md:w-[25rem] s:w-[18rem] grid mb-6">
                <label class=" items-end grid pl-1 font-serif font-semibold">Email:</label>
                <input class="border-2 rounded-xl pl-2" type="text" v-model="email" placeholder="E-mail" required>
                <label class="items-end grid pl-1 font-serif font-semibold">Wachtwoord</label>
                <input class="border-2 rounded-xl pl-2" type="password" v-model="password" placeholder="Wachtwoord" required>
                <input class="border-2 rounded-xl pl-2 my-2 mt-[2rem] md:mt-[4rem] font-semibold text-white" type="submit" @click="register" value="Registreer">
            </form>
        </div>  
    </section>
    
</template>

<script >

import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // firebase user registratie api 
import { useRouter } from "vue-router"; // import router zodat deze hier ook gebruikt kunnen worden. 


const email = ref("");
const password = ref("");
const router = useRouter() // word gebruikt als een soort redirect. 


export default {
    name: 'registerVue',

    methods:{
        register() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email.value, password.value)
            
            .then(() => {
                console.log("Registratie gelukt.");
                
                router.push('/overzicht') // na registratie word je naar de login pagina verwezen 
            })
            .catch( (error) => {
                console.log(error.code);
                alert('Registratie is niet gelukt, probeer het opnieuw ' +   error.code);
            })
        }
    }
    
}
</script>