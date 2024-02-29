<template>
<div class="text-text-house  md:hidden bg-gradient-to-r from-green-lime via-light-dark to-dark-house justify-between items-center sticky bottom-0 shadow-xl hover:shadow-gray-700 linear duration-300 z-10">
    <div class="grid grid-cols-3">
        <div class="flex justify-start">
            <img alt="Logo" id="logo" src="../assets/RealEstateLogo.png" class="w-[3rem] h-[3rem]">
        </div>

        <div class="flex justify-center">
            <ul class="flex justify-center items-center">
                <li class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/"><i class="fa-solid fa-house fa-sm" style="color: #27ce78;"></i></router-link></li>
                <li class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/profile"><i class="fa-solid fa-user fa-sm" style="color: #27ce78;"></i></router-link></li>
                <li class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/login"><i class="fa-solid fa-person-walking-dashed-line-arrow-right fa-sm" style="color: #27ce78;"></i></router-link></li>
            </ul>
        </div>
       
    </div>
       
    
    </div>
  </template>
    
  <script>
    export default {
      name: 'tabbarVue',
          
    }
  </script>
  
  <style scoped>
   #logo {
      mix-blend-mode: color-burn;
   }
  </style>