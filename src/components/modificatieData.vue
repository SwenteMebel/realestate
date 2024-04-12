<template>
 
        
    <div v-if="loadingStatus !== loading">
        <div v-if="modificatie && ophalenModificaties.length >= 1" class="bg-light-dark md:w-[50rem] md:my-[8rem] p-[1rem] rounded-md m-2">
            <div class="grid grid-cols-7">
                <div class="col-span-5 ml-[6rem] md:col-span-6">
                    <h1 class="grid justify-center text-xl font-semibold text-white">Modificatie inventarisatie</h1>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <span  class="grid justify-center text-xl font-semibold text-white"> Aantal: {{ ophalenModificaties.length }}</span>
                </div>
            </div>
    
            <div v-for="modificatie, index in ophalenModificaties" :key="modificatie.id" @click="selectTask(index)" class=" bg-white opacity-70 hover:opacity-100 p-4 mb-4 m-2 rounded-md ease-linear duration-300 hover:shadow-lg hover:shadow-green-lime">
                <p class="font-semibold">Soort opdracht: <span class="font-normal">Modificatie inventarisatie</span></p>
                <p class="font-semibold">Technisch Nummer: <span class="font-normal">{{ modificatie.id }}</span></p>
                <p class="font-semibold">Locatie: <span class="font-normal">{{ modificatie.locatie }}</span></p>

                <detailModificatie  v-if="toggle && selectedTaskIndex === index" :modificatieDetail="modificatie" />
            </div>
        </div>
    </div>
       
  
</template>

<script>


import detailModificatie from './detailModificatie.vue';


export default {  
    name: 'OnderhoudDataVue',
  
    // Hier laad je alle componenten in die je importeert 
    components: { 
        detailModificatie,
    },

    data(){
        return{
            selectedTaskIndex: 0, // Is het index getal waar het mee begint in de opdrachten array. 
            toggle: false, //toggle voor taskDetails
            modificatie: []
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
        console.log('beforecreate word geladenin technisch ')
        this.$store.dispatch('ModificatieAPI/ophalenModificatie') // roept naar de functie OnderhoudAPI in de Axios API 
    },

    computed: {
    
        selectTaskData(){
            return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
                ...this.modificatie[this.selectedTaskIndex]
            }
        },

        ophalenModificaties() {
            console.log('Modificatie data  ' , this.$store.state.ModificatieAPI.modificatie)
            return this.$store.state.ModificatieAPI.modificatie;
        },

        loadingStatus() {
            return this.$store.state.ModificatieAPI.loadingStatus;
        },

        error() {
            return this.$store.state.ModificatieAPI.error;
        }


    },




}
</script>