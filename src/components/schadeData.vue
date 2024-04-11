<template>
 
        
    <div if="loadingStatus === loading">
        <div v-if="schade && schades.length >= 1" class="bg-light-dark md:w-[50rem] md:my-[8rem] p-[1rem] rounded-md m-2">
            <h1 class="grid justify-center text-xl font-semibold text-white">Schade Opnemen</h1>
            <div v-for="schadedata, index in schades" :key="schadedata.id" class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime">
                <div @click="selectTask(index)" >
                    <p class="font-semibold">Soort opdracht: <span class="font-normal">Schade Opnemen</span></p>
                    <p class="font-semibold">Schade Nummer: <span class="font-normal">{{ schadedata.id }}</span></p>
                    <p class="font-semibold">Locatie: <span class="font-normal">{{ schadedata.locatie }}</span></p>
                    <p class="font-semibold" >Datum: <span class="font-normal">{{ schadedata.Datum }}</span></p>
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
</script>