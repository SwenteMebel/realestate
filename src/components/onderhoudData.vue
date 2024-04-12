<template>
 
        
    <div if="loadingStatus === loading">
        <div v-if="Onderhoud && Onderhoud.length >= 1" class="bg-light-dark md:w-[50rem] md:my-[8rem] p-[1rem] rounded-md m-2">
            <div class="grid grid-cols-7">
                <div class="col-span-5 ml-[6rem] md:col-span-6">
                    <h1 class="grid justify-center text-xl font-semibold text-white">Achterstallig Onderhoud</h1>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <span  class="grid justify-center text-xl font-semibold text-white"> Aantal: {{ Onderhoud.length }}</span>
                </div>
            </div>
          
            <div v-for="onderhoud, index in Onderhoud" :key="onderhoud.id" @click="selectTask(index)" class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime">
                <p class="font-semibold">Soort opdracht: <span class="font-normal">Achterstallig Onderhoud</span></p>
                <p class="font-semibold">Schade Nummer: <span class="font-normal">{{ onderhoud.id }}</span></p>
                <p class="font-semibold">Locatie: <span class="font-normal">{{ onderhoud.locatie }}</span></p>
                
                
                <detailOnderhoud  v-if="toggle && selectedTaskIndex === index" :onderhoudData="onderhoud" />

            </div>
        </div>
    </div>
       
  
</template>

<script>


import detailOnderhoud from './detailOnderhoud.vue';


export default {  
    name: 'OnderhoudDataVue',
  
    // Hier laad je alle componenten in die je importeert 
    components: { 
        detailOnderhoud,
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
       
        this.$store.dispatch('OnderhoudAPI/ophalenOnderhoud') // roept naar de functie OnderhoudAPI in de Axios API 
    },

    computed: {
    
        selectTaskData(){
            return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
                ...this.onderhoud[this.selectedTaskIndex]
            }
        },

        Onderhoud() {
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