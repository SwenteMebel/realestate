<template>
    <div>
        <hr class="m-2 p-[0.2rem]  bg-gradient-to-r from-green-lime via-light-dark to-dark-house rounded-2xl">
        <ul class="bg-gray-300 md:pl-2 list-disc md:mx-3 md:py-2 md:px-8 px-7 py-2 rounded-xl my-3 shadow-md shadow-black">
            <h3 class="text-xl font-semibold">Modificatie </h3>
            <li class="ml-5" v-if="modificatieDetail.uitgevoerd"><span>Uitgevoerd door: </span><span>{{ modificatieDetail.uitgevoerd }}</span></li>
            <li class="ml-5" v-if="modificatieDetail.aanpassenKeuren"><span>Aanpassen en Keuren</span></li>
            <li class="ml-5" v-if="modificatieDetail.accepteren"><span>Aanpassing accepteren</span></li>
            <li class="ml-5" v-if="modificatieDetail.keuren"><span>Aanpassing keuren</span></li>
            <li class="ml-5" v-if="modificatieDetail.verwijderen"><span>Aanpassing verwijderen</span></li>
            <p class="ml-5 font-semibold" v-if="modificatieDetail.beschrijving ">Beschrijving:<br><span class="font-normal">{{ modificatieDetail.beschrijving }}</span></p>
        </ul>
        <input v-if="modificatieLengte.length >= 2" @click="removeItem(modificatieDetail.id)" value="Delete" type="submit" class="bg-gradient-to-r from-green-lime to-light-dark py-2 rounded-lg px-3 m-2 shadow-black font-semibold shadow-lg active:shadow-md active:shadow-orange-500 duration-100 linear">
        
    </div>
</template>






<script>

export default {
    name: 'TaksDetails',
    props: [
        'modificatieDetail',  
    ],

methods:{
    removeItem(itemId){
        const item = itemId
        this.$store.dispatch('ModificatieAPI/deleteItem', item)
    }
},

computed:{
        modificatieLengte(){
            return this.$store.state.ModificatieAPI.modificatie;
        }
   }
    


}
</script>

