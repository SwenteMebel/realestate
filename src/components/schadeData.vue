<template>
 
        
    <div v-if="loadingStatus !== loading">
        <div v-if="schade && schades.length >= 1" class="bg-light-dark md:w-[50rem] md:my-[8rem] p-[1rem] rounded-md m-2">
         <div class="grid grid-cols-7">
            <div class="col-span-5 ml-[6rem] md:col-span-6">
                <h1 class="grid justify-center text-xl font-semibold text-white">Schade Opnemen</h1>
            </div>
            <div class="col-span-2 md:col-span-1">
                <span  class="grid justify-center text-xl font-semibold text-white"> Aantal: {{ schades.length }}</span>
            </div>
         </div>
         
            <div v-for="schadedata, index in schades" :key="schadedata.id" class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime">
                <div @click="selectTask(index)" >
                    <p class="font-semibold">Soort opdracht: <span class="font-normal">Schade Opnemen</span></p>
                    <p class="font-semibold">Schade Nummer: <span class="font-normal">{{ schadedata.id }}</span></p>
                    <p class="font-semibold">Locatie: <span class="font-normal">{{ schadedata.locatie }}</span></p>
                    
                    <detailSchade  v-if="toggle && selectedTaskIndex === index" :schadedata="schadedata" />
                </div>
            </div>
        
        </div>
    </div>
       
  
</template>

<script>

import detailSchade from './detailSchade.vue'



export default {  
    name: 'schadeDataVue',
  
    // Hier laad je alle componenten in die je importeert 
    components: { 
        detailSchade,
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
        this.$store.dispatch('schadeAPI/ophalenSchade') // roept naar de functie ophalenSchade in de Axios API 
    },

    computed: {
    
        selectTaskData(){
            return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
                ...this.schade[this.selectedTaskIndex]
            }
        },

        schades() {
            return this.$store.state.schadeAPI.schade; // Haalt data uit de vuex array schade en je kunt het hier gebruiken
        },

        loadingStatus() {
            return this.$store.state.schadeAPI.loadingStatus; // Kijkt of er loading nodig is.
        },

        error() {
            return this.$store.state.schadeAPI.error; // kijkt of er een error is. 
        }


    },
}
</script>
