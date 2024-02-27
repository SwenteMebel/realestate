<template>
    <div class="bg-gradient-to-r from-gray-100/50 via-green-300/60 to-black text-gray-100 md:py-3.5  md:px-6 h-14 md:h-20 md:flex justify-between items-center sticky top-0 shadow-xl hover:shadow-gray-700 linear duration-300 z-10">
   <img alt="Logo" id="logo" src="../assets/RealEstateLogo_met_text.png" class="md:w-[15rem] w-[10.5rem]">
      <div class="flex items-center">
        <h1 class="text-xl font-black self-center">{{ title }}</h1>
        <p class="text-md font-light self-center px-2">{{ subtitle }}</p>
      </div>
  

      <span  class="absolute md:hidden right-20 top-3 text-xl cursor-pointer w-2">
        <li @click="openMenu()" :class="[open ? 'bi bi-x' : 'bi bi-filet-left']" class="list-none text-2xl font-bold">X</li> 
      </span>
  

      <ul class="md:flex md:items-center md:static bg-gradient-to-r from-gray-100 via-green-300/60 to-black text-black md:text-white md:bg-none absolute md:w-auto text-semibold w-full h-auto top-14 duration-300 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
        <li class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/">Home</router-link></li>
        <li class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/">Profile</router-link></li>
        


        
      </ul>
    </div>
  </template>
    
  <script>
    export default {
      name: 'headerVue',
      props: {
        title: String, 
        subtitle: String
      },
    
        data(){
            return{
                open: false,
            }
        },
        
        methods:{
            openMenu(){
                this.open = !this.open;
            }
        },      
    }
  </script>

  <style scoped>
   #logo {
      mix-blend-mode: color-burn;
   }
  </style>