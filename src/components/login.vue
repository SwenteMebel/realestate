<template>
    <section class="flex justify-center w-screen mb-20">
        <div class="w-[22rem] md:w-[30rem] md:h-[35rem] h-[30rem] mt-[5rem] md:mt-[10rem] grid justify-center rounded-xl shadow-lg shadow-black mb-5 bg-gradient-to-r from-green-lime via-light-dark to-dark-house focus:shadow-gray-700 linear duration-200">
            <div class=" grid justify-center items-center">
                <div class="">
                    <img src="../assets//RealestateText.png" alt="logo" class="w-30 rounded-lg">
                </div>
                <div class="text-center">
                    <h1 class="text-xl font-bold font-serif"> <i class="fa-solid fa-right-to-bracket fa-sm"></i> Login</h1> 
                </div>
            </div>

            <form  class="p-2 md:w-[25rem] s:w-[18rem] grid mb-6">
                <label class=" items-end grid pl-1 font-serif font-semibold">Email:</label>
                <input class="border-2 rounded-xl pl-2" type="text" v-model="email" placeholder="E-mail" autocomplete="username" required >
                <label class="items-end grid pl-1 font-serif font-semibold">Wachtwoord</label>
                <input class="border-2 rounded-xl pl-2" type="password" v-model="password" placeholder="Wachtwoord" autocomplete="current-password" required>
                <button  @click="login()" type="button" class="border-2 rounded-xl pl-2 my-2 mt-[2rem] md:mt-[4rem] font-semibold text-white">Login</button>
            </form>
        </div>  
    </section>
    
</template>

<script>
import { firebaseConfig } from '@/store/FirebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import router from '@/routing';



initializeApp(firebaseConfig)

const auth = getAuth();

export default {
    name: 'loginVue',

    data(){
        return{
            email: '',
            password: '',
            user: '',
        }
    },

    methods:{

        login(){
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(() => {
                    alert('logged in.')
                    console.log('logged in as ' , auth.currentUser)
                    this.user = auth.currentUser;
                    const user = this.user 
                    localStorage.setItem('user', JSON.stringify(user));
                    router.push('/')

                }) 
                .catch((err) => {
                    alert(err.message)
                })
             
            
            
        }

    }

}
</script>