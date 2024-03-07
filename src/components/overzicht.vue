<template>
    <section>
        <div class="">
            <div class="bg-orange-200 p-2 m-2" v-for="opdracht in opdrachtenData.opdrachten" :key="opdracht.id">
               <template v-if="opdracht.type === 'Schade Opnemen'">
                    <p>Soort opdracht: <span>{{ opdracht.type }}</span></p>
                    <p>Ordernummer: <span>{{ opdracht.id }}</span></p>
                    <p>Plaats: <span>{{ opdracht.plaats }}</span></p>
                    <p>Adres: <span>{{ opdracht.straat }} {{ opdracht.huisnr }}</span></p>
                    <ul class="bg-gray-500 md:pl-2 list-disc md:ml-3 md:py-2"
                    v-if="opdracht.nieuweSchade.moedwillig == true || opdracht.nieuweSchade.slijtage == true || opdracht.nieuweSchade.geweld == true || opdracht.nieuweSchade.normaalGebruik == true || opdracht.nieuweSchade.calamiteit == true">
                        <h3>Nieuwe Schade</h3>
                        <li v-if="opdracht.nieuweSchade.moedwillig == true">Moedwillig</li>
                        <li v-if="opdracht.nieuweSchade.slijtage == true">Slijtage</li>
                        <li v-if="opdracht.nieuweSchade.geweld == true">Geweld</li>
                        <li v-if="opdracht.nieuweSchade.normaalGebruik == true">Normaal gebruik</li>
                        <li v-if="opdracht.nieuweSchade.calamiteit == true">Calamiteit</li>
                        <p v-if="opdracht.nieuweSchade.anders != '' ">Opmerking:<br> <span>{{ opdracht.nieuweSchade.anders }}</span></p>
                    </ul>
                   
                    <p>Datum:<span>{{ opdracht.datum }}</span></p>
                    <p>Acute Actie: <span>{{ opdracht.actueActie ? 'Ja' : 'Nee' }}</span></p>
                    <p>Omschrijving: <br><span>{{ opdracht.omschrijving }}</span></p>
               </template>

               <template v-if="opdracht.type === 'Achterstallig onderhoud'">
                <p>Soort opdracht: <span>{{ opdracht.type }}</span></p>
                    <p>Ordernummer: <span>{{ opdracht.id }}</span></p>
                    <p>Plaats: <span>{{ opdracht.plaats }}</span></p>
                    <p>Adres: <span>{{ opdracht.straat }} {{ opdracht.huisnr }}</span></p>
                    <ul v-if="opdracht.soortOnderhoud.schilderwerk == true || opdracht.soortOnderhoud.houtrot == true || opdracht.soortOnderhoud.elektra == true"> 

                    </ul>
                    
                    <p>Acute actie: <span>{{ opdracht.actueActie ? 'Ja' : 'Nee' }}</span></p>
               </template>
            </div>
        </div>
    </section>
</template>


<script>
import  opdrachtenData from '../data/service/opdrachten.js' // import alle opdrachtenData uit de data map

export default {
    name: 'overzichtVue',
   

    data(){
        return{
            opdrachtenData,
        }
    },

}

</script>