<template>
 
        
    <div if="loadingStatus === loading">
        <div v-if="schade && schades.length >= 1" class="bg-light-dark md:w-[50rem] md:my-[8rem] p-[1rem] rounded-md m-2">
            <div v-for="onderhoud, index in Onderhoud" :key="onderhoud.id" @click="selectTask(index)" class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime">
                <p class="font-semibold">Soort opdracht: <span class="font-normal">Achterstallig Onderhoud</span></p>
                <p class="font-semibold">Schade Nummer: <span class="font-normal">{{ onderhoud.id }}</span></p>
                <p class="font-semibold">Locatie: <span class="font-normal">{{ onderhoud.locatie }}</span></p>
                <p class="font-semibold" >Datum: <span class="font-normal">{{ onderhoud.Datum }}</span></p>
                
                <taskData  v-if="toggle && selectedTaskIndex === index" :onderhoudData="Onderhoud" />

            </div>
        </div>
    </div>
       
  
</template>

<script>

import taskData from '../components/taskData.vue'



export default {  
    name: 'OnderhoudDataVue',
  
    // Hier laad je alle componenten in die je importeert 
    components: { 
    taskData,
    },

    data(){
        return{
            selectedTaskIndex: 0, // Is het index getal waar het mee begint in de opdrachten array. 
            toggle: false, //toggle voor taskDetails
            onderhoud: []
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
        this.$store.dispatch('OnderhoudAPI/ophalenOnderhoud') // roept naar de functie OnderhoudAPI in de Axios API 
    },

    computed: {
    
        selectTaskData(){
            return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
                ...this.onderhoud[this.selectedTaskIndex]
            }
        },

        Onderhoud() {
            console.log('onderhoudData  ' , this.$store.state.OnderhoudAPI.onderhoud)
            return this.$store.state.OnderhoudAPI.onderhoud;
        },

        loadingStatus() {
            return this.$store.state.OnderhoudAPI.loadingStatus;
        },

        error() {
            return this.$store.state.OnderhoudAPI.error;
        }


    },




}
</script>