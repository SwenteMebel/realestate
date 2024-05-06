<template class="text-text-house">
  <section class="flex justify-center md:h-[20rem] h-[10rem]">
    <div class="mt-[3rem]">
      <div class=" ">
        <img src="../assets/RealestateText.png" alt="textimg" class="h-[7rem] md:h-[10rem]">
      </div>
  
    </div>
  </section>
  
  
  <section class="mb-20 text-text-house grid justify-center mt-20 md:mt-10 font-serif bg-gradient-to-r from-green-lime via-light-dark to-dark-house">
          <div class=" xs:w-[16rem] sm:w-[20rem] md:w-[40rem] rounded-lg shadow-lg shadow-black my-20 bg-gradient-to-r from-green-lime via-light-dark to-dark-house md:px-6 px-3 pb-4  ">
            <div class="m-5">
              <h1 class="text-center text-2xl font-serif font-semibold">Inspectie formulier</h1>
            </div>
              
            <SchadeOpenemVue  /> <!--Vue Schade formulier.-->
            <AchterOnderhoudVue /> <!--Vue Achter stallig onderhoud formulier.-->
            <TechnischeVue /> <!--Vue Technisch formulier.-->
            <ModificatieInventVue /> <!--Vue Modificatie inventarisatie formulier.-->
        
          </div>  
             
              
          
        
  </section>
  
  </template>
  
  <script>
  import SchadeOpenemVue from './SchadeOpnemen.vue'
  import AchterOnderhoudVue from './AchterOnderhoud.vue'
  import TechnischeVue from './Technische.vue'
  import ModificatieInventVue from './ModificatieInvent.vue'
  import { checkIfLoggedIn } from '@/mixins/mixins'
  import router from '@/routing'

  export default {
    name: 'hoofdpageVue',
    
    components:{
      SchadeOpenemVue,
      AchterOnderhoudVue,
      TechnischeVue,
      ModificatieInventVue,
    },
  


    beforeMountmounted(){
      const user = checkIfLoggedIn()
      if(user === null){
        router.push('/login')
      } 
    }
  }
  </script>