<template>

    <div >
        <hr class="m-2 p-[0.2rem]  bg-gradient-to-r from-green-lime via-light-dark to-dark-house rounded-2xl">
        <ul class="bg-gray-300 md:pl-2 list-disc md:mx-3 md:py-2 md:px-8 px-7 py-2 rounded-xl my-3 shadow-md shadow-black">
            <h3 class="text-xl font-semibold">Nieuwe technische installatie</h3>
            <li class="ml-5" v-if="technischDetail.beveiliging">Beveiliging</li>
            <li class="ml-5" v-if="technischDetail.elektra">Elektra</li>
            <li class="ml-5" v-if="technischDetail.koeling">Koeling</li>
            <li class="ml-5" v-if="technischDetail.luchtvervuiling">Luchtvervuiling</li>
            <li class="ml-5" v-if="technischDetail.verwarming">Verwarming</li>
            <p class="font-semibold">Goed gekeurd <span class="font-normal">{{ technischDetail.goedgekeurd  ? 'Ja' : 'Nee' }}</span></p>
            <p class="font-semibold" v-if="technischDetail.opmerking != '' ">Opmerking:<br>
            <span class="font-normal">{{ technischDetail.opmerking }}</span></p>
        </ul>
        <input v-if="technischeLengte.length >= 2" @click="removeItem(technischDetail.id)" value="Delete" type="submit" class="bg-gradient-to-r from-green-lime to-light-dark py-2 rounded-lg px-3 m-2 shadow-black font-semibold shadow-lg active:shadow-md active:shadow-orange-500 duration-100 linear">
    </div>
</template>






<script>


export default {
    name: 'detailTechnisch',
    props: [
    'technischDetail' 
    ],
   
   methods:{
        removeItem(itemId){
            const item = itemId
            this.$store.dispatch('TechnischeAPI/deleteItem', item)
        },  
   },

   computed:{
        technischeLengte(){
            return this.$store.state.TechnischeAPI.technische;
        }
   }


}
</script>
