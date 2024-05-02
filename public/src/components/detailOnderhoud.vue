<template>
    <div>
        <hr class="m-2 p-[0.2rem]  bg-gradient-to-r from-green-lime via-light-dark to-dark-house rounded-2xl">
        <ul class="bg-gray-300 md:pl-2 list-disc md:mx-3 md:py-2 md:px-8 px-7 py-2 rounded-xl my-3 shadow-md shadow-black">
            <h3 class="text-xl font-semibold">Achterstallig onderhoud</h3>
            <li class="ml-5" v-if="onderhoudData.Beglazing">Beglazing</li>
            <li class="ml-5" v-if="onderhoudData.Elektra">Elektra</li>
            <li class="ml-5" v-if="onderhoudData.Houtrot">Houtrot</li>
            <li class="ml-5" v-if="onderhoudData.Leidingwerk">Leidingwerk</li>
            <li class="ml-5" v-if="onderhoudData.Schilderwerk">Schilderwerk</li>
            <li class="ml-5" v-if="onderhoudData.actieVereist">{{ onderhoudData.actieVereist ? 'Actie vereist' : 'Geen actie vereist' }}</li>
            <li class="ml-5" v-if="onderhoudData.Kosten"> € {{ onderhoudData.Kosten }}</li>
           
        </ul>
        <input v-if="onderhoudLengte.length >= 2" @click="removeItem(onderhoudData.id)" value="Delete" type="submit" class="bg-gradient-to-r from-green-lime to-light-dark py-2 rounded-lg px-3 m-2 shadow-black font-semibold shadow-lg active:shadow-md active:shadow-orange-500 duration-100 linear">
    </div>
</template>






<script>

export default {
    name: 'TaksDetails',
    props: [
        'onderhoudData',
        
    ],


    methods:{
        removeItem(itemId){
            const item = itemId
            this.$store.dispatch('OnderhoudAPI/deleteItem', item)
        }
    },

    computed:{
        onderhoudLengte(){
            return this.$store.state.OnderhoudAPI.onderhoud;
        }
    }


}
</script>

