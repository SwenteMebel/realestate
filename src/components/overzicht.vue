<template>
    <section class="bg-sky-900 md:grid md:justify-center ">
        <div class="bg-blue-300 md:w-[50rem] md:my-[8rem] px-[1rem]">
            <div class="bg-orange-200 p-2 mb-4 m-2" v-for="opdracht, index in opdrachtenData.opdrachten" :key="opdracht.id" @click="selectTask(index)">
               <template v-if="opdracht.type === 'Schade Opnemen'">
                    <p>Soort opdracht: <span>{{ opdracht.type }}</span></p>
                    <p>Ordernummer: <span>{{ opdracht.id }}</span></p>
                    <p>Locatie: <span>{{ opdracht.locatie }}</span></p>
                    <taskDetails v-if="selectedTask" :opdracht="selectedTask"></taskDetails>
               </template>

                <template v-if="opdracht.type === 'Achterstallig onderhoud'">
                    <p>Soort opdracht: <span>{{ opdracht.type }}</span></p>
                    <p>Ordernummer: <span>{{ opdracht.id }}</span></p>
                    <p>Locatie: <span>{{ opdracht.locatie }}</span></p>  
                </template>

               <template v-if="opdracht.type === 'Technische installatie'"> 
                    <p>Soort Opdracht: <span>{{ opdracht.type }}</span></p>
                    <p>Ordernummer: <span>{{ opdracht.id }}</span></p>
                    <p>Locatie: <span> {{ opdracht.locatie }}</span></p>
               </template>

               <template v-if="opdracht.type === 'Modificaties inverntarisatie'">
                    <p>Soort Opdracht: <span>{{ opdracht.type }}</span></p>
                    <p>Ordernummer: <span>{{ opdracht.id }}</span></p>
                    <p>Locatie: <span> {{ opdracht.locatie }}</span></p>
               </template>
            </div>
        </div>
    </section>
</template>


<script>
import opdrachtenData from '../data/service/opdrachten.js' // import alle opdrachtenData uit de data map
import taskDetails from '../components/taskDetails.vue'

export default {  
    name: 'overzichtVue',
   
    // Hier laad je alle componenten in die je importeert 
    components: { 
    taskDetails,
    },

    data(){
        return{
            opdrachtenData,
            selectedTaskIndex: 0, // Is het index getal waar het mee begint in de opdrachten array. 
        }
    },

    methods: {
        selectTask(index){
            this.selectedTaskIndex = index; // haalt het index getal uit de aangeklikte object.
        },
    },

    computed:{
        selectedTask(){
            return { // selecteerd en kopieert de opdrachten array uit het object en zet het in de selectedTaskIndex
                ...this.opdrachtenData.opdrachten[this.selectedTaskIndex] 
               
            }
        },
    }
}

</script>