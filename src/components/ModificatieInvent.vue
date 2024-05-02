<template>
    <div class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime">
                    <div class="flex ">
                      <div class="flex mr-4">
                        <input class="w-4" type="radio" @click="toggleModificatie()" value="true" v-model="togglemodificatie">
                      </div>
                      <div class="flex justify-center col-span-3">
                        <h1 class="text-center text-lg font-semibold">Modificaties inventariseren</h1>
                      </div>
                    </div>
                    <transition name="slide-fade">
                    <form v-on:submit="addModificatie" v-if="togglemodificatie" class="">
                      <span v-if="toegevoegd != ''" class="flex justify-center items-center bg-green-500 p-1 rounded-lg my-2"> {{ toegevoegd }}</span>
                      <span v-if="error != ''" class="flex justify-center items-center bg-red-500 p-1 rounded-lg my-2">{{ error }}</span>
                      
                      <span class="font-semibold">Locatie: </span><input class="rounded-lg border-2 border-black pl-2 " type="text" v-model="locatie" placeholder="Locatie" required><br>
                      <span class="font-semibold">Uitgevoerd door: </span>
                      <select v-model="uitgevoerd" class="border-2 border-black rounded-lg mt-1" required>
                        <option value="huurder">Huurder</option>
                        <option value="aannemer">Aannemer</option>
                        <option value="onbekend">Onbekend</option>
                      </select><br>
                      <span class="font-semibold">Beschrijving Modificatie</span><br>
                      <textarea v-model="beschrijving" class="w-[20rem] h-[10rem] rounded-lg p-2 border-black border-2" placeholder="Beschrijving" required></textarea><br>
                      <span class="font-semibold">Te ondernemen actie</span><br>
                      <input class="w-[20px] h-[15px]" type="radio" value="true" @click="toggleAccepteren()" v-model="accepteren"> <span>Accepteren</span><br>
                      <input class="w-[20px] h-[15px]" type="radio" value="true" @click="toggleKeuren()" v-model="keuren"> <span>Laten keuren</span><br>
                      <input class="w-[20px] h-[15px]" type="radio" value="true" @click="toggleVerwijderen()" v-model="verwijderen"> <span>Laten verwijderen</span><br>
                      <input class="w-[20px] h-[15px]" type="radio" value="true" @click="toggleAanpassenKeuren()" v-model="aanpassenKeuren"> <span>Laten aanpassen en keuren</span><br>
                      <input class="bg-gradient-to-r from-green-lime to-light-dark py-2 rounded-lg px-3 m-2 shadow-black font-semibold shadow-lg active:shadow-md active:shadow-orange-500 duration-100 linear" type="submit" value="Versturen">
                    </form> 
                  </transition>
                  </div>
</template>


<script>


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
    toegevoegd: '',
    error: '',

  // data voor Schade opnemen. 
  locatie: '',
  uitgevoerd: '',
  beschrijving: '',
  accepteren: false,
  keuren: false,
  verwijderen:  false,
  aanpassenKeuren:  false,
  bestaandeModi: '',
}
},

methods:{

    toggleModificatie(){ // formulier modificatie openen.
        this.togglemodificatie = !this.togglemodificatie;
    },
    toggleAccepteren(){
      this.accepteren = !this.accepteren;
    },
    toggleKeuren(){
      this.keuren = !this.keuren;
    },
    toggleVerwijderen(){
      this.verwijderen = !this.verwijderen;
    },
    toggleAanpassenKeuren(){
      this.aanpassenKeuren = !this.aanpassenKeuren
    },
    
    

    async addModificatie(){ // Voeg schade toe aan de database table SchadeOpnemen.
      try {
        addDoc(modificatieInventaris, {
          locatie: this.locatie,
          uitgevoerd: this.uitgevoerd,
          beschrijving: this.beschrijving,
          keuren: this.keuren,
          accepteren: this.accepteren,
          verwijderen: this.verwijderen,
          aanpassenKeuren: this.aanpassenKeuren,
          
      });
        
        this.toegevoegd = 'Modificatie opdracht is toegevoegd.'
      } catch (error){
        this.error = error.message
        console.log(error.message)
      }
    },
  }
}
</script>

<style scoped>

.slide-fade-enter-active {
  transition: all 1s linear;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

</style>