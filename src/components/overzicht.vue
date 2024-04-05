<template>
    <section class=" md:grid md:justify-center bg-gradient-to-r from-green-lime via-light-dark to-dark-house">
        <!--<div class="bg-light-dark md:w-[50rem] md:my-[8rem] p-[1rem] rounded-md m-2">
                <div class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime" 
                    v-for="opdracht, index in opdrachtenData.opdrachten" :key="opdracht.id">

                    <div v-if="opdracht.type === 'Schade Opnemen'" @click="selectTask(index)">
                        <p class="font-semibold">Soort opdracht: <span class="font-normal">{{ opdracht.type }}</span></p>
                        <p class="font-semibold">Ordernummer: <span class="font-normal">{{ opdracht.id }}</span></p>
                        <p class="font-semibold">Locatie: <span class="font-normal">{{ opdracht.locatie }}</span></p> 
                        <taskDetails v-if="toggle && selectedTaskIndex === index" :opdracht="selectedTaskData" />  
                    </div>

                        <div v-if="opdracht.type === 'Achterstallig onderhoud'" @click="selectTask(index)">
                            <p class="font-semibold">Soort opdracht: <span class="font-normal">{{ opdracht.type }}</span></p>
                            <p class="font-semibold">Ordernummer: <span class="font-normal">{{ opdracht.id }}</span></p>
                            <p class="font-semibold">Locatie: <span class="font-normal">{{ opdracht.locatie }}</span></p> 
                            <taskDetails v-if="toggle && selectedTaskIndex === index" :opdracht="selectedTaskData" />  
                    </div>

                    <div v-if="opdracht.type === 'Technische installatie'" @click="selectTask(index)"> 
                            <p class="font-semibold">Soort Opdracht: <span class="font-normal">{{ opdracht.type }}</span></p>
                            <p class="font-semibold">Ordernummer: <span class="font-normal">{{ opdracht.id }}</span></p>
                            <p class="font-semibold">Locatie: <span class="font-normal"> {{ opdracht.locatie }}</span></p>
                            <taskDetails v-if="toggle && selectedTaskIndex === index" :opdracht="selectedTaskData" />
                    </div>

                    <div v-if="opdracht.type === 'Modificaties inverntarisatie'" @click="selectTask(index)">
                            <p class="font-semibold">Soort Opdracht: <span class="font-normal">{{ opdracht.type }}</span></p>
                            <p class="font-semibold">Ordernummer: <span class="font-normal">{{ opdracht.id }}</span></p>
                            <p class="font-semibold">Locatie: <span class="font-normal"> {{ opdracht.locatie }}</span></p>
                            <taskDetails  v-if="toggle && selectedTaskIndex === index" :opdracht="selectedTaskData" />
                    </div>
                </div>           
            </div> -->
        


        <div v-if="schade && schade.length >= 1" class="bg-light-dark md:w-[50rem] md:my-[8rem] p-[1rem] rounded-md m-2">
            <div v-for="schadedata, index in schade" :key="schadedata.id" @click="selectTask(index)" class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime">
                <p class="font-semibold">Soort opdracht: <span class="font-normal">Schade Opnemen</span></p>
                <p class="font-semibold">Schade Nummer: <span class="font-normal">{{ schadedata.id }}</span></p>
                <p class="font-semibold">Locatie: <span class="font-normal">{{ schadedata.locatie }}</span></p>
                <p class="font-semibold" >Datum: <span class="font-normal">{{ schadedata.Datum }}</span></p>
                
                <taskData  v-if="toggle && selectedTaskIndex === index" :schadedata="schadedata" />
               
            </div>
        </div>
    </section>
</template>
<!-- :opdracht="selectedTaskData" verstuurd de data door naar de component en kan daar verder gebruikt word.
   selectedTaskData is een functie die word aangeroepen.-->

<script>
//import opdrachtenData from '../store/service/opdrachten.js' // import alle opdrachtenData uit de data map
//import taskDetails from '../components/taskDetails.vue'
import taskData from '../components/taskData.vue'
import { getFirestore, collection, onSnapshot, getDocs } from 'firebase/firestore';

const db = getFirestore(); // connectie met de database firestore

const schadeOpnemen = collection(db, 'SchadeOpnemen'); // de data SchadeOpnemen ophalen en een variable geven.

export default {  
    name: 'overzichtVue',
  
    // Hier laad je alle componenten in die je importeert 
    components: { 
    //taskDetails, 
    taskData,
    },

    data(){
        return{
            //opdrachtenData, // DATA van JSON bestand
            selectedTaskIndex: 0, // Is het index getal waar het mee begint in de opdrachten array. 
            toggle: false, //toggle voor taskDetails
            schade: []
        }
    },

    mounted(){
        // haalt de scahde data op uit firestore zodra er wat veranderd veranderd dat ook direct hier.
        onSnapshot(schadeOpnemen, (snapshot) => {
            let schade = [];
            snapshot.docs.forEach((doc) => {
            schade.push({...doc.data(), id: doc.id})
        })
           
            this.schade = schade;
            console.log('this schade van mounted', this.schade)
           
        })
    },

    methods: {
        selectTask(index){
            console.log('index = ' + index)
          
            this.selectedTaskIndex = index; // haalt het index getal uit de aangeklikte object.
            console.log( this.selectedTaskIndex = index ) 
            this.toggle = !this.toggle; // zet de toggle op false of true als er op gelikt wordt
        },
    
    },

    computed: {
        //selectedTaskData(){
            
            //return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
              //  ...this.opdrachtenData.opdrachten[this.selectedTaskIndex] 
                
           // }
            
        //},
        selectTaskData(){
            
            return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
                ...this.schade[this.selectedTaskIndex]
              
            }
            
        },

        //ophalenSchade() {
        //const schadeArray = [...this.$store.state.schadeAPI.schade]; // Maak een nieuwe array van de Proxy
        //console.log('schadeArray ', schadeArray);
        //return schadeArray;
        //}


    },




}



const achterStallig = collection(db, 'AchterstalligOnderhoud'); // de data achterstalligonderhoud ophalen en variable geven
const technischeInstallatie = collection(db, 'TechnischeInstallatie') // de data TechnischeInstallatie ophalen en variable geven
const modificatieInventaris = collection(db, 'ModificatieInventaris') // de data ModificatieInverntaris ophalen en variable geven

// De variable verwerken in een array dmv een foreach loop


//getDocs(schadeOpnemen)
  //  .then((snapshot) => {
    //   let schade = []
      // snapshot.docs.forEach((doc) => {
        //    schade.push({...doc.data(), id: doc.id})
       //})
       //console.log(schade)
    //})
    //.catch(error => {
      //  console.log(error.message)
    //})
// De variable verwerken in een array dmv een foreach loop
getDocs(achterStallig)
    .then((snapshot) => {
       let achterstallig = []
       snapshot.docs.forEach((doc) => {
        achterstallig.push({...doc.data(), id: doc.id})
       })
       console.log(achterstallig)
    })
    .catch(error => {
        console.log(error.message)
    })

// De variable verwerken in een array dmv een foreach loop
getDocs(technischeInstallatie)
    .then((snapshot) => {
       let technisch = []
       snapshot.docs.forEach((doc) => {
        technisch.push({...doc.data(), id: doc.id})
       })
       console.log(technisch)
    })
    .catch(error => {
        console.log(error.message)
    })

    getDocs(modificatieInventaris)
        .then((snapshot) => {
            let modificatie = []
            snapshot.docs.forEach((doc) => {
                modificatie.push({...doc.data(), id: doc.id})
            }) 
            console.log(modificatie)
        })
        .catch(error =>{
            console.log(error.message)
        })



</script>