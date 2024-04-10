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
    </div>
</template>






<script>


export default {
    name: 'detailSchade',
    props: [
    'schadedata' 
    ],
   
   
}
</script>
