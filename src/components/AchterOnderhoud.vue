<template>
         <div class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime">
                    <div class="flex">
                      <div class="grid mr-5">
                        <input class="w-4" type="radio" @click="toggleOnderhoud()" value="true" v-model="toggleonderhoud">
                      </div>
                      <div class="flex justify-center">
                        <h1 class="text-center text-lg font-semibold">Achterstallig onderhoud opnemen</h1>
                      </div>
                    </div>
                    <form v-on:submit="addOnderhoud" v-if="toggleonderhoud" >
                        <span if="error >= 1">{{ error }}</span>
                        <span class="font-semibold">Locatie: </span><input class="rounded-lg border-black border-2 pl-1" type="text" v-model="locatie" placeholder="Locatie" required><br>
                        <span class="font-semibold">Soort Onderhoud:</span><br>
                        <input class="w-[20px] h-[15px]" type="radio" value="true" @click="toggleschilderwerk()" v-model="schilderwerk"> <span>Schilderwerk</span><br>
                        <input class="w-[20px] h-[15px]" type="radio" value="true" @click="togglehoutrot()" v-model="houtrot"> <span>Houtrot</span><br>
                        <input class="w-[20px] h-[15px]" type="radio" value="true" @click="togglelektraOnderhoud()" v-model="elektraOnderhoud"> <span>Elektra</span><br>
                        <input class="w-[20px] h-[15px]" type="radio" value="true" @click="toggleleidingwerk()" v-model="leidingwerk"> <span>Leidingwerk</span><br>
                        <input class="w-[20px] h-[15px]" type="radio" value="true" @click="togglebeglazing()" v-model="beglazing"> <span>Beglazing</span><br>
                        <span class="font-semibold">Acute actie vereist: </span> <input class="w-[20px] h-[15px]" type="radio" v-model="actie" value="true" @click="actieOnderhoud()" ><br>
                        <span class="font-semibold">Kostenindicatie </span>
                        <select class="border-2 border-black rounded-lg mb-3 " v-model="kostenindicatie" placeholder="Kosten" required>
                          <option class="" value="0-500">€0-500</option>
                          <option class="" value="500-1500">€500-1.500</option>
                          <option class="" value="1500">€1.500+</option>
                        </select><br>
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

  const achterstalligOnderhoud = collection(db, 'AchterstalligOnderhoud'); // de data SchadeOpnemen ophalen en een variable geven.

export default {
   name: 'AchterOnderhoudVue',

  data(){
    return{
      toggleonderhoud: false, // Formulier onderhoud openen.
      actieonderhoud: false, // Actie vereist bij onderhoud opnemen
      error: '',
      locatie: '',
      schilderwerk: false,
      houtrot: false,
      elektraOnderhoud: false,
      leidingwerk: false,
      beglazing: false,
      actie: false,
      kostenindicatie: '',
    }
  },

  methods:{
    toggleOnderhoud(){ // Formulier onderhoud openen
        this.toggleonderhoud = !this.toggleonderhoud;
    },
    actieOnderhoud(){ // Actie vereist bij onderhoud opnemen
        this.actie = !this.actie;
    },
    toggleschilderwerk(){
        this.schilderwerk = !this.schilderwerk;
    },
    togglehoutrot(){
        this.houtrot = !this.houtrot;
    },
    togglelektraOnderhoud(){
      this.elektraOnderhoud = !this.elektraOnderhoud;
    },
    toggleleidingwerk(){
      this.leidingwerk = !this.leidingwerk;
    },
    togglebeglazing(){
      this.beglazing = !this.beglazing;
    },
    
    
    async addOnderhoud(){ // Voeg schade toe aan de database table SchadeOpnemen.
        try {
          addDoc(achterstalligOnderhoud, {
            locatie: this.locatie,
            Schilderwerk: this.schilderwerk,
            Houtrot: this.houtrot,
            Elektra: this.elektraOnderhoud,
            Leidingwerk: this.leidingwerk,
            Beglazing: this.beglazing,
            actieVereist: this.actie,
            Kosten: this.kostenindicatie,
            
          });
          alert('Nieuwe schade is toegevoegd.')
        } catch (error){
          alert(error.message)
          this.error = error;
        } 
    },
  }
}
</script>
