<template>
 
        
    <div if="loadingStatus === loading">
        <div v-if="technisch && technisch.length >= 1" class="bg-light-dark md:w-[50rem] md:my-[8rem] p-[1rem] rounded-md m-2">
            <h1 class="grid justify-center text-xl font-semibold text-white">Achterstallig Onderhoud</h1>
            <div v-for="technisch, index in technisch" :key="technisch.id" @click="selectTask(index)" class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime">
                <p class="font-semibold">Soort opdracht: <span class="font-normal">Technische Installatie</span></p>
                <p class="font-semibold">Schade Nummer: <span class="font-normal">{{ technisch.id }}</span></p>
                <p class="font-semibold">Locatie: <span class="font-normal">{{ technisch.locatie }}</span></p>
                
                
                <detailTechnisch  v-if="toggle && selectedTaskIndex === index" :onderhoudData="technisch" />

            </div>
        </div>
    </div>
       
  
</template>

<script>


import detailTechnisch from './detailTechnisch.vue';


export default {  
    name: 'OnderhoudDataVue',
  
    // Hier laad je alle componenten in die je importeert 
    components: { 
        detailTechnisch,
    },

    data(){
        return{
            selectedTaskIndex: 0, // Is het index getal waar het mee begint in de opdrachten array. 
            toggle: false, //toggle voor taskDetails
            technisch: []
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
        this.$store.dispatch('TechnischAPI/ophalenTechnisch') // roept naar de functie OnderhoudAPI in de Axios API 
    },

    computed: {
    
        selectTaskData(){
            return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
                ...this.onderhoud[this.selectedTaskIndex]
            }
        },

        ophalenTechnisch() {
            console.log('Technische data  ' , this.$store.state.TechnischAPI.onderhoud)
            return this.$store.state.TechnischAPI.onderhoud;
        },

        loadingStatus() {
            return this.$store.state.TechnischAPI.loadingStatus;
        },

        error() {
            return this.$store.state.TechnischAPI.error;
        }


    },




}
</script>