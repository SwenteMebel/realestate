<template>
         <div class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime">
                    <div class="flex">
                      <div class="flex mr-4">
                        <input class="w-4" type="radio" @click="toggleTechnische()" value="true" v-model="toggletechnische">
                      </div>
                      <div class="flex justify-center">
                        <h1 class="text-center text-lg font-semibold">Technische installatie inspecteren</h1>
                      </div>
                    </div>
                    <form v-if="toggletechnische" class="">
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
                      <textarea class="w-[20rem] h-[10rem] rounded-lg p-2 border-black border-2" placeholder="Opmerking..."></textarea><br>
                      <input class="bg-gradient-to-r from-green-lime to-light-dark py-2 rounded-lg px-3 m-2 shadow-black font-semibold shadow-lg active:shadow-md active:shadow-orange-500 duration-100 linear" type="submit" value="Versturen">
                    </form> 
                  </div>
</template>


<script>
   
   import { ref } from 'vue'
   import { initializeApp } from 'firebase/app'; 
   import { firebaseConfig } from '@/store/FirebaseConfig' 
   import { getFirestore, collection, addDoc} from 'firebase/firestore';

   initializeApp(firebaseConfig) //defineert de db in de app.
   
   const db = getFirestore(); // connectie met de database firestore

   const technische = collection(db, 'TechnischeInstallatie'); // de data SchadeOpnemen ophalen en een variable geven.

export default {
   name: 'TechnischeVue',

 data(){
   return{
        toggletechnische: false, // Formulier technisch openen.
        goedgekeurd: false, // Goed keuring in formulier technische installatie
       // data voor Schade opnemen. 
       schadeLocatie: ref(''), 
       schadeNieuw: ref(''), 
       schadeMoedwillig: ref(''), 
       schadeSlijtage: ref(''), 
       schadeGeweld: ref(''), 
       schadeNormaalGebruik: ref(''), 
       schadeCalamiteit: ref(''), 
       schadeAnders: ref(''), 
       schadeDatum: ref(''), 
       schadeActie: ref(''), 
       schadeOmschrijving:ref(''),
   }
 },

 methods:{
    toggleTechnische(){ // Formulier technisch openen.
        this.toggletechnische = !this.toggletechnische;
    },
    goedGekeurd(){ // Goed keuring in formulier technische installatie
        this.goedgekeurd = !this.goedgekeurd;
    },

    addSchade(){ // Voeg schade toe aan de database table SchadeOpnemen.
       addDoc(technische, {
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
