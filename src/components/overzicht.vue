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