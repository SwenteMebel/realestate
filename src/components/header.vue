<template>
  <div class="text-text-house bg-gradient-to-r from-green-lime via-light-dark to-dark-house text-gray-100 md:py-3.5  md:px-6 h-14 md:h-20 md:flex justify-between items-center sticky top-0 shadow-xl hover:shadow-gray-700 linear duration-300 z-10">
 <img alt="Logo" id="logo" src="../assets/RealEstateLogo_met_text.png" class="md:w-[15rem] w-[10.5rem]">
    <div class="flex items-center">
      <h1 class="text-xl font-black self-center">{{ title }}</h1>
      <p class="text-md font-light self-center px-2">{{ subtitle }}</p>
    </div>


    <span  class="absolute md:hidden right-20 top-3 text-xl cursor-pointer w-2">
      <li @click="openMenu()" :class="[open ? 'bi bi-x' : 'bi bi-filet-left']" class="list-none text-2xl font-bold"><i class="fa-solid fa-align-left" style="color: rgba(0, 170, 162, 1);"></i></li> 
    </span>


    <ul class="md:flex md:items-center md:static bg-gradient-to-r from-green-lime via-light-dark to-dark-house text-black md:text-white md:bg-none absolute md:w-auto text-semibold w-full h-auto top-14 duration-300 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
      <li  @click="openMenu()" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/"><i class="fa-solid fa-house fa-sm" style="color: #27ce78;"></i> Home</router-link></li>
      <li  @click="openMenu()" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/profile"><i class="fa-solid fa-user fa-sm" style="color: #27ce78;"></i> Profile</router-link></li>
      <li  @click="openMenu()" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/overzicht"><i class="fa-solid fa-clipboard-list fa-sm" style="color: #27ce78;"></i> Overzicht</router-link></li>
      <li  @click="openMenu()" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/login"><i class="fa-solid fa-person-walking-dashed-line-arrow-right fa-sm" style="color: #27ce78;"></i> Log uit</router-link></li>
      <li  @click="openMenu()" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/register"><i class="fa-regular fa-address-card fa-sm" style="color: #27ce78;"></i> Registeer</router-link></li>
      <li  @click="openMenu()" class="md:mx-4 md:my-0 p-1 mx-2 text-2xl font-semibold hover:text-orange-400 font-mono ease-linear duration-300"><router-link to="/login"><i class="fa-solid fa-person-walking-dashed-line-arrow-right fa-sm" style="color: #27ce78;"></i> Log in</router-link></li>
      
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
          },

       
      },      

  }
</script>

<style scoped>
 #logo {
    mix-blend-mode: color-burn;
 }
</style>