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
        <div class=" bg-gray-600 w-[30rem] md:w-[50rem] rounded-xl shadow-lg shadow-black">
           <div class="m-5">
            <h1 class="text-center text-2xl font-serif font-semibold">Inspectie formulier</h1>
           </div>
            <div class="">

              <form class="mx-2 py-4 px-2 my-3 text-[16px]">

                <div class="border-x-2 border-b-2 border-black rounded-xl my-2 mb-8 px-2">
                  <div class="flex">
                    <div class="flex mr-5">
                      <input class="w-4" type="radio" @click="toggleSchade()" value="true" v-model="toggleschade">
                    </div>
                    <div class="flex justify-center">
                      <h1 class="text-center text-lg font-semibold">Schade opnemen</h1>
                    </div>
                  </div>
                  <div v-if="toggleschade === 'true'" class="mb-3">
                    <span class="font-semibold">Locatie: </span><input class="rounded-lg border-black border-2 p-1" type="text" v-model="locatie" placeholder="Locatie"><br>
                    <span class="font-semibold">Nieuwe Schade: </span><input class="w-[20px] h-[15px]" type="radio" v-model="selected" value="true" @click="toggle()"><br>
                    <div v-if="selected === 'true'" class=" pl-6 mx-2 border-x-2 border-b-2 rounded-xl mb-5 border-black linear duration-500 shadow-lg shadow-black hover:shadow-xl">                    
                      <h1 class="text-[20px] font-semibold mb-2">Selecteer soort schade</h1>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="moedwillig"> <span>Moedwillig</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="slijtage"> <span>Slijtage</span> <br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="geweld"> <span>Geweld</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="normaalGebruik"> <span>Normaal gebruik</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="calamiteit"> <span>Calamiteit</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="anders"> <span>Anders...</span><br>
                      <textarea class="w-[20rem] h-[10rem] rounded-xl p-2 mb-4 border-black border-2" placeholder="Opmerkingen..."></textarea>
                    </div>
                    <span class="font-semibold">Datum: </span><input class="rounded-lg p-1 text-center border-black border-2" type="date" v-model="datum"><br>
                    <span class="font-semibold">Acute actie vereist: </span> <input class="w-[20px] h-[15px]" type="radio" v-model="actie"><br>
                    <span class="font-semibold">Omschrijving:</span><br>
                    <textarea class="w-[20rem] h-[10rem] rounded-xl p-2 border-black border-2" placeholder="Omschrijving"></textarea>
                  </div> 
                </div>

                <div class="border-x-2 border-b-2 border-black rounded-xl my-2 mb-8 px-2">
                  <div class="flex">
                    <div class="grid mr-5">
                      <input class="w-4" type="radio" @click="toggleOnderhoud()" value="true" v-model="toggleonderhoud">
                    </div>
                    <div class="flex justify-center">
                      <h1 class="text-center text-lg font-semibold">Achterstallig onderhoud opnemen</h1>
                    </div>
                  </div>
                  <div v-if="toggleonderhoud === 'true'" class="">
                    <span class="font-semibold">Locatie: </span><input class="rounded-lg border-black border-2 p-1" type="text" v-model="locatie" placeholder="Locatie"><br>
                    <span class="font-semibold">Soort Onderhoud:</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="schilderwerk"> <span>Schilderwerk</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="houtrot"> <span>Hourot</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="elektraOnderhoud"> <span>Elektra</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="leidingwerk"> <span>Leidingwerk</span><br>
                    <input class="w-[20px] h-[15px]" type="checkbox" v-model="beglazing"> <span>Beglazing</span><br>
                    <span class="font-semibold">Acute actie vereist: </span> <input class="w-[20px] h-[15px]" type="radio" v-model="actie"><br>
                    <span class="font-semibold">Kostenindicatie </span>
                    <select class="border-2 border-black rounded-xl mb-3 text-center" v-model="kostenindicatie" placeholder="Kosten">
                      <option class="" value="0_500">€0-500</option>
                      <option class="" value="500_1500">€500-1.500</option>
                      <option class="" value="1500">€1.500+</option>
                    </select>
                  </div> 
                </div>
                
                <div class="border-x-2 border-b-2 border-black rounded-xl my-2 mb-8 px-2">
                  <div class="flex">
                    <div class="flex mr-4">
                      <input class="w-4" type="radio" @click="toggleTechnische()" value="true" v-model="toggletechnische">
                    </div>
                    <div class="flex justify-center">
                      <h1 class="text-center text-lg font-semibold">Technische installatie inspecteren</h1>
                    </div>
                  </div>
                  <div v-if="toggletechnische === 'true'" class="">
                    <span>Locatie: </span><input type="text" v-model="locatie" placeholder="Locatie"><br>
                    <span>Soort installatie:</span><br>
                    <input type="checkbox" v-model="koeling"> <span>Koeling</span><br>
                    <input type="checkbox" v-model="verwarming"> <span>Verwarming</span><br>
                    <input type="checkbox" v-model="luchtverversing"> <span>Luchtverversing</span><br>
                    <input type="checkbox" v-model="elektra"> <span>Elektra</span><br>
                    <input type="checkbox" v-model="beveiliging"> <span>Beveiliging</span><br>
                    <span>Gemelde storing: </span><br>
                    <span>[Gemelde storing]</span><br>
                    <span>Test procedure: </span> <span>[Link naar bestand]</span><br>
                    <span>Goed gekeurd: </span> <input type="radio" v-model="goedgekeurd"><br>
                    <span>Opmerking: </span><br>
                    <textarea class=""></textarea>
                  </div> 
                </div>
                
                <div class="border-x-2 border-b-2 border-black rounded-xl my-2 px-2">
                  <div class="flex ">
                    <div class="flex mr-4">
                      <input type="radio" @click="toggleModificatie()" value="true" v-model="togglemodificatie">
                    </div>
                    <div class="flex justify-center col-span-3">
                      <h1 class="text-center text-lg font-semibold">Modificaties inventariseren</h1>
                    </div>
                  </div>
                  <div v-if="togglemodificatie === 'true'" class="">
                    <span>Bestaande Modificaties:</span> <span>[Link bestaande modificaties ]</span><br>
                    <span>Locatie: </span><input type="text" v-model="locatieAangetroffen" placeholder="Locatie aangetroffen modificaties"><br>
                    <span>Uitgevoerd door: </span>
                    <select>
                      <option value="huurder">Huurder</option>
                      <option value="aannemer">Aannemer</option>
                      <option value="onbekend">Onbekend</option>
                    </select><br>
                    <span>Beschrijving Modificatie</span><br>
                    <textarea placeholder="Beschrijving"></textarea><br>
                    <span>Te ondernemen actie</span><br>
                    <input type="checkbox" v-model="accepteren"> <span>Accepteren</span><br>
                    <input type="checkbox" v-model="keuren"> <span>Laten keuren</span><br>
                    <input type="checkbox" v-model="verwijderen"> <span>Laten verwijderen</span><br>
                    <input type="checkbox" v-model="aanpassenKeuren"> <span>Laten aanpassen en keuren</span><br>
                  </div> 
                </div>

                <input class="" type="submit" value="Versturen">

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
      toggleschade: 'false',
      toggleonderhoud: 'false',
      toggletechnische: 'ture',
      togglemodificatie: 'false',
    }
  },

  methods:{
    toggle(){
      this.selected = !this.selected;
    },
    toggleSchade(){
      this.toggleschade = !this.toggleschade;
    },
    toggleOnderhoud(){
      this.toggleonderhoud = !this.toggleonderhoud;
    },
    toggleTechnische(){
      this.toggletechnische = !this.toggletechnische;
    },
    toggleModificatie(){
      this.togglemodificatie = !this.togglemodificatie;
    }
  }
}
</script>

