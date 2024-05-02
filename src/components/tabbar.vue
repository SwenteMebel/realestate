<template>
  <div v-if="user" class="text-text-house  md:hidden bg-gradient-to-r from-green-lime via-light-dark to-dark-house justify-between items-center sticky bottom-0 shadow-xl hover:shadow-gray-700 linear duration-300 z-10">
    <div class="grid grid-cols-3">
        <div class="flex justify-start">
            <img alt="Logo" id="logo" src="../assets/RealEstateLogo.png" class="w-[3rem] h-[3rem]">
        </div>

        <div class="flex justify-center">
            <ul class="flex justify-center items-center">
                <li class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/"><i class="fa-solid fa-house fa-sm" style="color: #27ce78;"></i></router-link></li>
                <li class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/profile"><i class="fa-solid fa-user fa-sm" style="color: #27ce78;"></i></router-link></li>
                <li class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/overzicht"><i class="fa-solid fa-clipboard-list fa-sm" style="color: #27ce78;"></i></router-link></li>
                <li class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/register"><i class="fa-regular fa-address-card fa-sm" style="color: #27ce78;"></i></router-link></li>
      
              </ul>
        </div>
       
    </div>
  </div>
  </template>
    
  <script>
  
  import { initializeApp } from 'firebase/app';
  import { firebaseConfig } from '@/store/FirebaseConfig';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  



  initializeApp(firebaseConfig)

  const auth = getAuth();



    export default {
      name: 'tabbarVue',
      
      data(){
        return{
          user: null,
        }
      },
      methods:{
    

        checkuser(){
          if(localStorage.getItem('user')){
              const user = localStorage.getItem('user')
              this.user = JSON.parse(user)
          } else {
              this.user = null
            console.log('geen user gevonden.')
          }
        },
      },  
    
    mounted() {
      this.checkuser();

      // Listen for authentication state changes
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in.
          this.user = user;
        } else {
          // User is signed out.
          this.user = null;
        }
      });
    }
    
     
      }
  </script>
  
  <style scoped>
   #logo {
      mix-blend-mode: color-burn;
   }
  </style>