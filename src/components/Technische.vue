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
                    <form v-on:submit.prevent="addTechnisch" v-if="toggletechnische" class="">
                      <span v-if="toegevoegd != ''" class="flex justify-center items-center bg-green-500 p-1 rounded-lg my-2"> {{ toegevoegd }}</span>
                      <span v-if="error != ''" class="flex justify-center items-center bg-red-500 p-1 rounded-lg my-2">{{ error }}</span>
                      <span class="font-semibold">Locatie: </span><input class="rounded-lg border-2 border-black pl-2" type="text" v-model="locatie" placeholder="Locatie" required><br>
                      <span class="font-semibold">Soort installatie:</span><br>
                      <input class="w-[20px] h-[15px]" type="radio" @click="toggleKoeling()" value="true" v-model="koeling"> <span>Koeling</span><br>
                      <input class="w-[20px] h-[15px]" type="radio" @click="toggleVerwarming()" value="true" v-model="verwarming"> <span>Verwarming</span><br>
                      <input class="w-[20px] h-[15px]" type="radio" @click="toggleLuchtverversing()" value="true" v-model="luchtverversing"> <span>Luchtverversing</span><br>
                      <input class="w-[20px] h-[15px]" type="radio" @click="toggleElektra()" value="true" v-model="elektra"> <span>Elektra</span><br>
                      <input class="w-[20px] h-[15px]" type="radio" @click="toggleBeveiliging()" value="true" v-model="beveiliging"> <span>Beveiliging</span><br>
                      <span class="font-semibold">Goed gekeurd: </span> <input type="radio" v-model="goedgekeurd" value="true" @click="goedGekeurd()"><br>
                      <span class="font-semibold">Opmerking: </span><br>
                      <textarea class="w-[20rem] h-[10rem] rounded-lg p-2 border-black border-2" v-model="opmerkingTechnisch" placeholder="Opmerking..." required></textarea><br>
                      <input class="bg-gradient-to-r from-green-lime to-light-dark py-2 rounded-lg px-3 m-2 shadow-black font-semibold shadow-lg active:shadow-md active:shadow-orange-500 duration-100 linear" type="submit" value="Versturen">
                    </form> 
                  </div>
</template>


<script>
   
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
        toegevoegd: '',
        error: '',
       // data voor Schade opnemen. 
        locatie: '',
        koeling: false,
        verwarming: false,
        luchtverversing: false,
        elektra: false,
        beveiliging: false,
        opmerkingTechnisch: '',
        goedgekeurd: false,
   }
 },

 methods:{
    toggleTechnische(){ // Formulier technisch openen.
        this.toggletechnische = !this.toggletechnische;
    },
    goedGekeurd(){ // Goed keuring in formulier technische installatie
        this.goedgekeurd = !this.goedgekeurd;
    },
    toggleKoeling(){ // Goed keuring in formulier technische installatie
        this.koeling = !this.koeling;
    },
    toggleVerwarming(){
      this.verwarming = !this.verwarming;
    },
    toggleLuchtverversing(){
      this.luchtverversing = !this.luchtverversing;
    },
    toggleElektra(){
      this.elektra = !this.elektra;
    },
    toggleBeveiliging(){
      this.beveiliging =  !this.beveiliging; 
    },


    async addTechnisch() { 
      try {
        await addDoc(technische, {
          locatie: this.locatie,
          koeling: this.koeling,
          verwarming: this.verwarming,
          luchtverversing: this.luchtverversing,
          elektra: this.elektra,
          beveiliging: this.beveiliging,
          opmerking: this.opmerkingTechnisch,
          goedgekeurd: this.goedgekeurd,
        });
        
        const geslaagd = 'Technische schade is toegevoegd.'
        this.toegevoegd = geslaagd
      } catch (error) {
        console.log(error.message)
        this.error = error.message
      }
    }
 }
}
</script>
