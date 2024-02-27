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


<section class="grid justify-center mt-20 md:mt-10 font-serif">
        <div class=" w-[30rem] md:w-[50rem] rounded-lg shadow-lg shadow-black">
           <div class="m-5">
            <h1 class="text-center text-2xl font-serif font-semibold">Inspectie formulier</h1>
           </div>
            <div class="">

              <form class="mx-2 py-4 px-2 my-3 text-[16px]">

                <div class="border-x-2 border-b-2 border-black rounded-lg my-2 mb-8 px-2">
                  <div class="flex">
                    <div class="flex mr-5">
                      <input class="w-4" type="radio" @click="toggleSchade()" value="true" v-model="toggleschade">
                    </div>
                    <div class="flex justify-center">
                      <h1 class="text-center text-lg font-semibold">Schade opnemen</h1>
                    </div>
                  </div>
                  <div v-if="toggleschade === 'true'" class="mb-3 mt-4">
                    <span class="font-semibold">Locatie: </span><input class="rounded-lg border-black border-2 pl-1" type="text" v-model="locatie" placeholder="Locatie"><br>
                    <span class="font-semibold">Nieuwe Schade: </span><input class="w-[20px] h-[15px]" type="radio" v-model="selected" value="true" @click="toggle()"><br>
                    <div v-if="selected === 'true'" class="bg-white pl-6 mx-2 border-x-2 border-b-2 rounded-lg mb-5 border-black linear duration-500 shadow-lg shadow-black hover:shadow-xl">                    
                      <h1 class="text-[20px] font-semibold mb-2">Selecteer soort schade</h1>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="moedwillig"> <span>Moedwillig</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="slijtage"> <span>Slijtage</span> <br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="geweld"> <span>Geweld</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="normaalGebruik"> <span>Normaal gebruik</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="calamiteit"> <span>Calamiteit</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="anders"> <span>Anders...</span><br>
                      <textarea class="w-[20rem] h-[10rem] rounded-lg p-2 mb-4 border-black border-2" placeholder="Opmerkingen..."></textarea>
                    </div>
                    <span class="font-semibold">Datum: </span><input class="rounded-lg p-1 text-center border-black border-2" type="date" v-model="datum"><br>
                    <span class="font-semibold">Acute actie vereist: </span> <input class="w-[20px] h-[15px]" type="radio" v-model="actieSchade" value="true" @click="actieToggleSchade()"><br>
                    <span class="font-semibold">Omschrijving:</span><br>
                    <textarea class="w-[20rem] h-[10rem] rounded-lg p-2 border-black border-2" placeholder="Omschrijving"></textarea>
                  </div> 
                </div>

                <div class="border-x-2 border-b-2 border-black rounded-lg my-2 mb-8 px-2">
                  <div class="flex">
                    <div class="grid mr-5">
                      <input class="w-4" type="radio" @click="toggleOnderhoud()" value="true" v-model="toggleonderhoud">
                    </div>
                    <div class="flex justify-center">
                      <h1 class="text-center text-lg font-semibold">Achterstallig onderhoud opnemen</h1>
                    </div>
                  </div>
                  <div v-if="toggleonderhoud === 'true'" class="">
                    <span class="font-semibold">Locatie: </span><input class="rounded-lg border-black border-2 pl-1" type="text" v-model="locatie" placeholder="Locatie"><br>
                    <span class="font-semibold">Soort Onderhoud:</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="schilderwerk"> <span>Schilderwerk</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="houtrot"> <span>Hourot</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="elektraOnderhoud"> <span>Elektra</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="leidingwerk"> <span>Leidingwerk</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="beglazing"> <span>Beglazing</span><br>
                    <span class="font-semibold">Acute actie vereist: </span> <input class="w-[20px] h-[15px]" type="radio" v-model="actieonderhoud" value="true" @click="actieOnderhoud()" ><br>
                    <span class="font-semibold">Kostenindicatie </span>
                    <select class="border-2 border-black rounded-lg mb-3 text-center" v-model="kostenindicatie" placeholder="Kosten">
                      <option class="" value="0_500">€0-500</option>
                      <option class="" value="500_1500">€500-1.500</option>
                      <option class="" value="1500">€1.500+</option>
                    </select>
                  </div> 
                </div>
                
                <div class="border-x-2 border-b-2 border-black rounded-lg my-2 mb-8 px-2">
                  <div class="flex">
                    <div class="flex mr-4">
                      <input class="w-4" type="radio" @click="toggleTechnische()" value="true" v-model="toggletechnische">
                    </div>
                    <div class="flex justify-center">
                      <h1 class="text-center text-lg font-semibold">Technische installatie inspecteren</h1>
                    </div>
                  </div>
                  <div v-if="toggletechnische === 'true'" class="">
                    <span class="font-semibold">Locatie: </span><input class="rounded-lg border-2 border-black pl-2" type="text" v-model="locatie" placeholder="Locatie"><br>
                    <span class="font-semibold">Soort installatie:</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="koeling"> <span>Koeling</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="verwarming"> <span>Verwarming</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="luchtverversing"> <span>Luchtverversing</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="elektra"> <span>Elektra</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="beveiliging"> <span>Beveiliging</span><br>
                    <span class="font-semibold">Gemelde storing: </span><br>
                    <span class="">[Gemelde storing]</span><br>
                    <span class="font-semibold">Test procedure: </span> <span>[Link naar bestand]</span><br>
                    <span class="font-semibold">Goed gekeurd: </span> <input type="radio" v-model="goedgekeurd" value="true" @click="goedGekeurd()"><br>
                    <span class="font-semibold">Opmerking: </span><br>
                    <textarea class="w-[20rem] h-[10rem] rounded-lg p-2 border-black border-2" placeholder="Opmerking..."></textarea>
                  </div> 
                </div>
                
                <div class="border-x-2 border-b-2 border-black rounded-lg my-2 px-2">
                  <div class="flex ">
                    <div class="flex mr-4">
                      <input class="w-4" type="radio" @click="toggleModificatie()" value="true" v-model="togglemodificatie">
                    </div>
                    <div class="flex justify-center col-span-3">
                      <h1 class="text-center text-lg font-semibold">Modificaties inventariseren</h1>
                    </div>
                  </div>
                  <div v-if="togglemodificatie === 'true'" class="">
                    <span class="font-semibold">Bestaande Modificaties:</span> <span>[Link bestaande modificaties ]</span><br>
                    <span class="font-semibold">Locatie: </span><input class="rounded-lg border-2 border-black pl-2 w-[16.5rem]" type="text" v-model="locatieAangetroffen" placeholder="Locatie aangetroffen modificaties"><br>
                    <span class="font-semibold">Uitgevoerd door: </span>
                    <select v-model="uitgevoerd" class="border-2 border-black rounded-lg mt-1 ">
                      <option value="huurder">Huurder</option>
                      <option value="aannemer">Aannemer</option>
                      <option value="onbekend">Onbekend</option>
                    </select><br>
                    <span class="font-semibold">Beschrijving Modificatie</span><br>
                    <textarea class="w-[20rem] h-[10rem] rounded-lg p-2 border-black border-2" placeholder="Beschrijving"></textarea><br>
                    <span class="font-semibold">Te ondernemen actie</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="accepteren"> <span>Accepteren</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="keuren"> <span>Laten keuren</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="verwijderen"> <span>Laten verwijderen</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="aanpassenKeuren"> <span>Laten aanpassen en keuren</span><br>
                  </div> 
                </div>
                <div class="flex justify-center mt-2">
                  <input class="bg-white py-2 rounded-lg px-3 m-2 shadow-black shadow-lg active:shadow-md active:shadow-green-400 duration-100 linear" type="submit" value="Versturen">
                  
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

      selected: 'false', //Als nieuwe schade aangeklikt word.
      toggleschade: 'false', // Formulier schade openen.
      toggleonderhoud: 'false', // Formulier onderhoud openen.
      toggletechnische: 'false', // Formulier technisch openen.
      togglemodificatie: 'flase', // formulier modificatie openen.
      actieSchade: 'false', // Actie vereist bij Schade opnemen. 
      actieonderhoud: 'false', // Actie vereist bij onderhoud opnemen
      goedgekeurd: 'false', // Goed keuring in formulier technische installatie
    }
  },

  methods:{
    toggle(){ //Als nieuwe schade aangeklikt word.
      this.selected = !this.selected;
    },
    toggleSchade(){ // Formulier schade openen.
      this.toggleschade = !this.toggleschade;
    },
    toggleOnderhoud(){ // Formulier onderhoud openen
      this.toggleonderhoud = !this.toggleonderhoud;
    },
    toggleTechnische(){ // Formulier technisch openen.
      this.toggletechnische = !this.toggletechnische;
    },
    toggleModificatie(){ // formulier modificatie openen.
      this.togglemodificatie = !this.togglemodificatie;
    },
    actieToggleSchade(){// Actue actie versies bij Schade opnemen. 
      this.actieSchade = !this.actieSchade;
    },
    actieOnderhoud(){ // Actie vereist bij onderhoud opnemen
      this.actieonderhoud = !this.actieonderhoud;
    },
    goedGekeurd(){ // Goed keuring in formulier technische installatie
      this.goedgekeurd = !this.goedgekeurd;
    },
  }
}
</script>

