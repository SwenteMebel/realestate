<template>
    <div class="border-x-2 border-b-2 border-black rounded-lg my-2 px-2">
                    <div class="flex ">
                      <div class="flex mr-4">
                        <input class="w-4" type="radio" @click="toggleModificatie()" value="true" v-model="togglemodificatie">
                      </div>
                      <div class="flex justify-center col-span-3">
                        <h1 class="text-center text-lg font-semibold">Modificaties inventariseren</h1>
                      </div>
                    </div>
                    <form v-if="togglemodificatie" class="">
                      <span class="font-semibold">Bestaande Modificaties:</span> <span>[Link bestaande inventarisatie]</span><br>
                      <span class="font-semibold">Locatie: </span><input class="rounded-lg border-2 border-black pl-2 w-[16.5rem]" type="text" v-model="locatieAangetroffen" placeholder="Locatie aangetroffen modificaties"><br>
                      <span class="font-semibold">Uitgevoerd door: </span>
                      <select v-model="uitgevoerd" class="border-2 border-black rounded-lg mt-1 ">
                        <option value="huurder">Huurder</option>
                        <option value="aannemer">Aannemer</option>
                        <option value="onbekend">Onbekend</option>
                      </select><br>
                      <span class="font-semibold">Beschrijving Modificatie</span><br>
                      <textarea v-model="beschrModi" class="w-[20rem] h-[10rem] rounded-lg p-2 border-black border-2" placeholder="Beschrijving"></textarea><br>
                      <span class="font-semibold">Te ondernemen actie</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="accepteren"> <span>Accepteren</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="keuren"> <span>Laten keuren</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="verwijderen"> <span>Laten verwijderen</span><br>
                      <input class="w-[20px] h-[15px]" type="checkbox" v-model="aanpassenKeuren"> <span>Laten aanpassen en keuren</span><br>
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

const modificatieInventaris = collection(db, 'ModificatieInventaris'); // de data SchadeOpnemen ophalen en een variable geven.

export default {
name: 'ModificatieVue',

data(){
return{
    togglemodificatie: false, // formulier modificatie openen.


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

    toggleModificatie(){ // formulier modificatie openen.
        this.togglemodificatie = !this.togglemodificatie;
    },
          
    addSchade(){ // Voeg schade toe aan de database table SchadeOpnemen.
        addDoc(modificatieInventaris, {
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
