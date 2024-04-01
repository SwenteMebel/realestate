<template>
     <div class="border-x-2 border-b-2 border-black rounded-lg my-2 mb-8 px-2">
        <div class="flex">
            <div class="flex mr-5">
                <input class="w-4" type="radio" @click="toggleSchade()" value="true" v-model="toggleschade">
            </div>

            <div class="flex justify-center">
                <h1 class="text-center text-lg font-semibold">Schade opnemen</h1>
            </div>
        </div>
        
        <form v-on:submit="addSchade" v-if="toggleschade" class="sm:mb-3 sm:mt-4">
            <span class="font-semibold">Locatie: </span><input class="rounded-lg border-black border-2 pl-1" type="text" v-model="schadeLocatie" placeholder="Locatie"><br>
            <span class="font-semibold">Nieuwe Schade: </span><input class="w-[20px] h-[15px]" type="radio" v-model="schadeNieuw" value="true" @click="toggle()"><br>
            <div v-if="selected" class="bg-white pl-6 mx-2 border-x-2 border-b-2 rounded-lg mb-5 border-black linear duration-500 shadow-lg shadow-black hover:shadow-xl">                    
            <h1 class="text-[20px] font-semibold mb-2">Selecteer soort schade</h1>
            <input class="w-[20px] h-[15px]" type="checkbox" v-model="schadeMoedwillig"> <span>Moedwillig</span><br>
            <input class="w-[20px] h-[15px]" type="checkbox" v-model="schadeSlijtage"> <span>Slijtage</span> <br>
            <input class="w-[20px] h-[15px]" type="checkbox" v-model="schadeGeweld"> <span>Geweld</span><br>
            <input class="w-[20px] h-[15px]" type="checkbox" v-model="schadeNormaalGebruik"> <span>Normaal gebruik</span><br>
            <input class="w-[20px] h-[15px]" type="checkbox" v-model="schadeCalamiteit"> <span>Calamiteit</span><br>
            <input class="w-[20px] h-[15px]" type="checkbox" v-model="schadeAnders"> <span>Anders...</span><br>
            <textarea class=" w-[15rem] md:w-[20rem] h-[10rem] rounded-lg p-2 mb-4 border-black border-2" placeholder="Opmerkingen..."></textarea>
            </div>
            <span class="font-semibold">Datum: </span><input class="rounded-lg p-1 text-center border-black border-2" type="date" v-model="schadeDatum"><br>
            <span class="font-semibold">Acute actie vereist: </span> <input class="w-[20px] h-[15px]" type="radio" v-model="schadeActie" @click="actieToggleSchade()" value="true" ><br>
            <span class="font-semibold">Omschrijving:</span><br>
            <textarea class="w-[20rem] h-[10rem] rounded-lg p-2 border-black border-2" placeholder="Omschrijving" v-model="schadeOmschrijving" ></textarea><br>
            <input class="bg-gradient-to-r from-green-lime to-light-dark py-2 rounded-lg px-3 m-2 shadow-black font-semibold shadow-lg active:shadow-md active:shadow-orange-500 duration-100 linear" type="submit"  value="Versturen">
        </form> 
    </div>
</template>


<script>
    
    import { ref } from 'vue'
    import { initializeApp } from 'firebase/app'; 
    import { firebaseConfig } from '@/FirebaseConfig' 
    import { getFirestore, collection, addDoc} from 'firebase/firestore';

    initializeApp(firebaseConfig) //defineert de db in de app.
    
    const db = getFirestore(); // connectie met de database firestore

    const schadeOpnemen = collection(db, 'SchadeOpnemen'); // de data SchadeOpnemen ophalen en een variable geven.

export default {
    name: 'SchadeOpnemenVue',

  data(){
    return{
        selected: false, //Als nieuwe schade aangeklikt word.
        toggleschade: false, // Formulier schade openen.
        actieSchade: false, 
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
    toggleSchade(){ // Formulier schade openen.
        this.toggleschade = !this.toggleschade;
    },
    toggle(){ //Als nieuwe schade aangeklikt word.
        this.selected = !this.selected;
    },
    actieToggleSchade(){// Actue actie versies bij Schade opnemen. 
        this.schadeActie = !this.schadeActie;
    },
      addSchade(){ // Voeg schade toe aan de database table SchadeOpnemen.
        addDoc(schadeOpnemen, {
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
        
        .then(() => {
          alert('Nieuwe schade is toegevoegd.')
      
        })
        .catch(error => {
          alert(error.message)
        })
       
      },
  }
}
</script>
