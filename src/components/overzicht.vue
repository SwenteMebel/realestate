<template>
    <section class=" md:grid md:justify-center bg-gradient-to-r from-green-lime via-light-dark to-dark-house">
       <schadeDataVue />
        
       
    </section>
</template>

<script>
import schadeDataVue from './schadeData.vue';

import { getFirestore, collection, getDocs } from 'firebase/firestore';


const db = getFirestore(); // connectie met de database firestore


export default {  
    name: 'overzichtVue',
  
    // Hier laad je alle componenten in die je importeert 
    components: { 
    schadeDataVue,
    },

    data(){
        return{
            //opdrachtenData, // DATA van JSON bestand
            selectedTaskIndex: 0, // Is het index getal waar het mee begint in de opdrachten array. 
            toggle: false, //toggle voor taskDetails
            schade: []
        }
    },

   

    methods: {
        selectTask(index){
            console.log('index = ' + index)
          
            this.selectedTaskIndex = index; // haalt het index getal uit de aangeklikte object.
            console.log( this.selectedTaskIndex = index ) 
            this.toggle = !this.toggle; // zet de toggle op false of true als er op gelikt wordt
        },
    
    },

    beforeCreate() {
        console.log('beforecreate word geladen')
        this.$store.dispatch('schadeAPI/ophalenSchade') // roept naar de functie ophalenSchade in de Axios API 
    },

    computed: {
    
        selectTaskData(){
            return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
                ...this.schade[this.selectedTaskIndex]
            }
        },

        schades() {
            console.log('dit is data van schades functie ' , this.$store.state.schadeAPI.schade)
            return this.$store.state.schadeAPI.schade;
        },

        loadingStatus() {
            return this.$store.state.schadeAPI.loadingStatus;
        },

        error() {
            return this.$store.state.schadeAPI.error;
        }


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