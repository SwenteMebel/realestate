<template>
  <div class="text-text-house bg-gradient-to-r from-green-lime via-light-dark to-dark-house text-gray-100 md:py-3.5  md:px-6 h-14 md:h-20 md:flex justify-between items-center sticky top-0 shadow-xl hover:shadow-gray-700 linear duration-300 z-10">
 <img alt="Logo" id="logo" src="../assets/RealEstateLogo_met_text.png" class="md:w-[15rem] w-[10.5rem]">
    
    <span  class="absolute lg:hidden right-20 top-3 text-xl cursor-pointer w-2">
      <li @click="openMenu()" :class="[open ? 'bi bi-x' : 'bi bi-filet-left']" class="list-none text-2xl font-bold"><i class="fa-solid fa-align-left" style="color: rgba(0, 170, 162, 1);"></i></li> 
    </span>

   
    <ul class="lg:flex lg:items-center lg:static bg-gradient-to-r from-green-lime via-light-dark to-dark-house text-black md:text-white lg:bg-none absolute lg:w-auto text-semibold w-full h-auto md:top-20 lg:top-20  duration-300 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
      <li  @click="openMenu()" v-if="user" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/"><i class="fa-solid fa-house fa-sm" style="color: #27ce78;"></i> Home</router-link></li>
      <li  @click="openMenu()" v-if="user" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/profile"><i class="fa-solid fa-user fa-sm" style="color: #27ce78;"></i> Profile</router-link></li>
      <li  @click="openMenu()" v-if="user" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/overzicht"><i class="fa-solid fa-clipboard-list fa-sm" style="color: #27ce78;"></i> Overzicht</router-link></li>
      <li  @click="openMenu()" v-if="user" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/register"><i class="fa-regular fa-address-card fa-sm" style="color: #27ce78;"></i> Registeer</router-link></li>
      <button @click="logout"  v-if="user" value="Log out" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><i class="fa-solid fa-person-walking-dashed-line-arrow-right fa-sm" style="color: #27ce78;"></i> Log out </button>
      <li  @click="openMenu()" v-if="!user" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/login"><i class="fa-solid fa-person-walking-dashed-line-arrow-right fa-sm" style="color: #27ce78;"></i> Log in</router-link></li>
    </ul>
    
  </div>    
   


</template>
  
<script>

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/store/FirebaseConfig';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from '@/routing';



initializeApp(firebaseConfig)

const auth = getAuth();


  export default {
    name: 'headerVue',
    props: {
      title: String, 
      subtitle: String,
      
    },
  
      data(){
          return{
              open: false,
              user: null,
          }
      },

    methods:{
      openMenu(){
        this.open = !this.open;
      },

      logout(){
        signOut(auth)
        localStorage.removeItem('user')
        this.user = ''
        router.push('/login')
      },

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