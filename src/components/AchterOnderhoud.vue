<template>
         <div class="border-x-2 border-b-2 border-black rounded-lg my-2 mb-8 px-2">
                    <div class="flex">
                      <div class="grid mr-5">
                        <input class="w-4" type="radio" @click="toggleOnderhoud()" value="true" v-model="toggleonderhoud">
                      </div>
                      <div class="flex justify-center">
                        <h1 class="text-center text-lg font-semibold">Achterstallig onderhoud opnemen</h1>
                      </div>
                    </div>
                    <form v-if="toggleonderhoud" >
                      <span class="font-semibold">Locatie: </span><input class="rounded-lg border-black border-2 pl-1" type="text" v-model="locatie" placeholder="Locatie"><br>
                      <span class="font-semibold">Soort Onderhoud:</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="schilderwerk"> <span>Schilderwerk</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="houtrot"> <span>Houtrot</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="elektraOnderhoud"> <span>Elektra</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="leidingwerk"> <span>Leidingwerk</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="beglazing"> <span>Beglazing</span><br>
                      <span class="font-semibold">Acute actie vereist: </span> <input class="w-[20px] h-[15px]" type="radio" v-model="actieonderhoud" value="true" @click="actieOnderhoud()" ><br>
                      <span class="font-semibold">Kostenindicatie </span>
                      <select class="border-2 border-black rounded-lg mb-3 " v-model="kostenindicatie" placeholder="Kosten">
                        <option class="" value="0_500">€0-500</option>
                        <option class="" value="500_1500">€500-1.500</option>
                        <option class="" value="1500">€1.500+</option>
                      </select><br>
                      <input class="bg-gradient-to-r from-green-lime to-light-dark py-2 rounded-lg px-3 m-2 shadow-black font-semibold shadow-lg active:shadow-md active:shadow-orange-500 duration-100 linear" type="submit" value="Versturen">
                    </form> 
                  </div>
</template>


<script>
   

   import { initializeApp } from 'firebase/app'; 
   import { firebaseConfig } from '@/FirebaseConfig' 
   import { getFirestore, collection, addDoc} from 'firebase/firestore';

   initializeApp(firebaseConfig) //defineert de db in de app.
   
   const db = getFirestore(); // connectie met de database firestore

   const achterstalligOnderhoud = collection(db, 'AchterstalligOnderhoud'); // de data SchadeOpnemen ophalen en een variable geven.

export default {
   name: 'AchterOnderhoudVue',

 data(){
   return{
      toggleonderhoud: false, // Formulier onderhoud openen.
      actieonderhoud: false, // Actie vereist bij onderhoud opnemen
   }
 },

 methods:{
    toggleOnderhoud(){ // Formulier onderhoud openen
        this.toggleonderhoud = !this.toggleonderhoud;
    },

    actieOnderhoud(){ // Actie vereist bij onderhoud opnemen
        this.actieonderhoud = !this.actieonderhoud;
    },

    addSchade(){ // Voeg schade toe aan de database table SchadeOpnemen.
       addDoc(achterstalligOnderhoud, {
         locatie: this.schadeLocatie,
         nieuweSchade: this.schadeNieuw,
         Moedwillig: this.schadeMoedwillig,
         Slijtage: this.schadeSlijtage,
         Geweld: this.schadeGeweld,
         NormaalGebruik: this.schadeNormaalGebruik,
         Calamiteit: this.schadeCalamiteit,
         Anders: this.schadeAnders,
         Datum: this.schadeDatum,
         acuteActie: this.schadeActie,
         Omschrijving: this.schadeOmschrijving,
       })
       alert('Nieuwe schade is toegevoegd.')
       .then((e) => {
         e.preventDefault();
       })
       .catch(error => {
         console.log(error.message)
       })
      
    },
 }
}
</script>
