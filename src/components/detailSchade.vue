<template>

    <div >
        <hr class="m-2 p-[0.2rem]  bg-gradient-to-r from-green-lime via-light-dark to-dark-house rounded-2xl">
        <ul class="bg-gray-300 md:pl-2 list-disc md:mx-3 md:py-2 md:px-8 px-7 py-2 rounded-xl my-3 shadow-md shadow-black">
            <h3 class="text-xl font-semibold">Nieuwe schade</h3>
            <li class="ml-5" v-if="schadedata.Moedwillig">Moedwillig</li>
            <li class="ml-5" v-if="schadedata.Slijtage">Slijtage</li>
            <li class="ml-5" v-if="schadedata.Geweld">Geweld</li>
            <li class="ml-5" v-if="schadedata.NormaalGebruik">Normaal gebruik</li>
            <li class="ml-5" v-if="schadedata.Calamiteit">Calamiteit</li>
            <p class="font-semibold" v-if="schadedata.Anders != '' ">Opmerking:<br>
            <span class="font-normal">{{ schadedata.AndersOmschrijving }}</span></p>
        </ul>
        <p class="font-semibold">Acute Actie: <span class="font-normal">{{ schadedata.acuteActie  ? 'Ja' : 'Nee' }}</span></p>
        <p class="font-semibold">Omschrijving: <br><span class="font-normal">{{ schadedata.Omschrijving }}</span></p>
        <input  v-if="schadedatalengte.length >= 2" @click="removeItem(schadedata.id)" value="Delete" type="submit" class="bg-gradient-to-r from-green-lime to-light-dark py-2 rounded-lg px-3 m-2 shadow-black font-semibold shadow-lg active:shadow-md active:shadow-orange-500 duration-100 linear">
    </div>
</template>






<script>


export default {
    name: 'detailSchade',
    props: [
    'schadedata' 
    ],
 
   methods: {
        removeItem(item){ // als er op de knop word gedrukt dan roept hij een actions aan in de Vuex.
            const itemId = item // itemid dat word mee gegeven.
            this.$store.dispatch('schadeAPI/deleteItem', itemId)
        },

   },

   computed:{
        schadedatalengte(){
            return this.$store.state.schadeAPI.schade; // Haalt data uit de vuex array schade en je kunt het hier gebruiken, Deze word gebruikt om de delete knop te laten zien ofniet.
        } 
   }
}
</script>
