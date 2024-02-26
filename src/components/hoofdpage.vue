<template>
<section class="flex justify-center md:h-[20rem] h-[10rem]">
  <div class=" bg-orange-200 mt-[3rem]">
    <div class=" ">
      <img src="../assets/RealestateText.png" alt="textimg" class="h-[7rem] md:h-[10rem]">
    </div>

    <div class=" flex md:grid justify-center mt-2">
      <h1 class="md:text-xl text-lg font-serif items-center">Ingelogd als <span>[Gebruikersnaam]</span></h1> 
    </div>
  </div>
</section>


<section class="grid justify-center mt-20 md:mt-10">
        <div class=" bg-slate-400 w-[30rem] md:w-[50rem]">
            <h1 class="text-center text-2xl font-serif font-semibold">Inspectie formulier</h1>
            <div class="">
              <form class="bg-purple-300 mx-2 py-4 px-2 my-3">
                <div class="border-2 rounded-md">
                  <h1 class="text-center text-lg font-semibold">Schade opnemen</h1>
                  <input type="text" v-model="locatie" placeholder="Locatie"><br>
                  <input type="radio" v-model="selected" value="true" @click="toggle()"><span>Nieuwe Schade</span><br>
                  <div v-if="selected === 'true'">                    
                    <h1>Selecteer soort schade</h1>
                    <input type="checkbox" v-model="moedwillig">Moedwillig <br>
                    <input type="checkbox" v-model="Slijtage">Slijtage <br>
                    <input type="checkbox" v-model="Geweld">Geweld<br>
                    <input type="checkbox" v-model="Normaal_gebruik">Normaal gebruik<br>
                    <input type="checkbox" v-model="Calamiteit">Calamiteit<br>
                    <input type="checkbox" v-model="Anders">Anders...<br>
                    <textarea></textarea>
                  </div>
                </div>
                <div class="border-2 rounded-md">
                  <h1 class="text-center text-lg font-semibold">Achterstallig onderhoud opnemen</h1>
                </div>
                <div class="border-2 rounded-md">
                  <h1 class="text-center text-lg font-semibold">Technische installaties inspecteren</h1>
                </div>
                <div class="border-2 rounded-md">
                  <h1 class="text-center text-lg font-semibold">Modificaties inventariseren</h1>
                </div>
              </form>
            </div>
        </div>
</section>

</template>

<script>
export default {
  name: 'hoofdpageVue',
  data(){
    return{
      selected: 'false',
    }
  },

  methods:{
    toggle(){
      this.selected = !this.selected;
    }
  }
}
</script>

