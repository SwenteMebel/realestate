<template >
       
        <div v-if="opdracht.type === 'Schade Opnemen'" class="font-serif">
            <hr class="m-2 p-[0.2rem]  bg-gradient-to-r from-green-lime via-light-dark to-dark-house rounded-2xl">
            <ul class="bg-gray-300 md:pl-2 list-disc md:mx-3 md:py-2 md:px-8 px-7 py-2 rounded-xl my-3 shadow-md shadow-black"
            v-if="opdracht.nieuweSchade.moedwillig == true || opdracht.nieuweSchade.slijtage == true || opdracht.nieuweSchade.geweld == true || opdracht.nieuweSchade.normaalGebruik == true || opdracht.nieuweSchade.calamiteit == true">
                <h3 class="text-xl font-semibold">Nieuwe Schade</h3>
                <li class="ml-5" v-if="opdracht.nieuweSchade.moedwillig == true">Moedwillig</li>
                <li class="ml-5" v-if="opdracht.nieuweSchade.slijtage == true">Slijtage</li>
                <li class="ml-5" v-if="opdracht.nieuweSchade.geweld == true">Geweld</li>
                <li class="ml-5" v-if="opdracht.nieuweSchade.normaalGebruik == true">Normaal gebruik</li>
                <li class="ml-5" v-if="opdracht.nieuweSchade.calamiteit == true">Calamiteit</li>
                <p class="font-semibold" v-if="opdracht.nieuweSchade.anders != '' ">Opmerking:<br> <span class="font-normal">{{ opdracht.nieuweSchade.anders }}</span></p>
            </ul>
            <p class="font-semibold">Datum: <span class="font-normal">{{ opdracht.datum }}</span></p>
            <p class="font-semibold">Acute Actie: <span class="font-normal">{{ opdracht.actueActie ? 'Ja' : 'Nee' }}</span></p>
            <p class="font-semibold">Omschrijving: <br><span class="font-normal">{{ opdracht.omschrijving }}</span></p>
        </div>
        
        <template v-if="opdracht.type === 'Achterstallig onderhoud'">
            <hr class="m-2 p-[0.2rem]  bg-gradient-to-r from-green-lime via-light-dark to-dark-house rounded-2xl">
            <ul class="bg-gray-300 md:pl-2 list-disc md:mx-3 md:py-2 md:px-8 px-7 py-2 rounded-xl my-3 shadow-md shadow-black" 
            v-if="opdracht.soortOnderhoud.schilderwerk == true || opdracht.soortOnderhoud.houtrot == true || opdracht.soortOnderhoud.elektra == true || opdracht.soortOnderhoud.leidingwerk == true || opdracht.soortOnderhoud.beglazing == true "> 
            <h3 class="text-xl font-semibold">Soort Onderhoud</h3>
                <li class="ml-5" v-if="opdracht.soortOnderhoud.schilderwerk == true">Schilderwerk</li>
                <li class="ml-5" v-if="opdracht.soortOnderhoud.houtrot == true">Houtrot</li>
                <li class="ml-5" v-if="opdracht.soortOnderhoud.elektra == true">Elektra</li>
                <li class="ml-5" v-if="opdracht.soortOnderhoud.leidingwerk == true">Leidingwerk</li>
                <li class="ml-5" v-if="opdracht.soortOnderhoud.beglazing == true">Beglazing</li>
            </ul>
            <p class="font-semibold">Acute actie: <span class="font-normal">{{ opdracht.actueActie ? 'Ja' : 'Nee' }}</span></p>
        </template>

        <template v-if="opdracht.type === 'Technische installatie'"> 
            <hr class="m-2 p-[0.2rem]  bg-gradient-to-r from-green-lime via-light-dark to-dark-house rounded-2xl">
            <ul class="bg-gray-300 md:pl-2 list-disc md:mx-3 md:py-2 md:px-8 px-7 py-2 rounded-xl my-3 shadow-md shadow-black"  
            v-if="opdracht.soortInstallatie.koeling == true || opdracht.soortInstallatie.verwarming == true || opdracht.soortInstallatie.luchtverversing == true || opdracht.soortInstallatie.elektra == true || opdracht.soortInstallatie.beveiliging == true">
                <h3 class="text-xl font-semibold">Geplande installatie</h3>    
                <li class="ml-5" v-if="opdracht.soortInstallatie.koeling">Koeling</li>
                <li class="ml-5" v-if="opdracht.soortInstallatie.verwarming">Verwarming</li>
                <li class="ml-5" v-if="opdracht.soortInstallatie.luchtverversing">Luchtverversing</li>
                <li class="ml-5" v-if="opdracht.soortInstallatie.elektra">Elektra</li>
                <li class="ml-5" v-if="opdracht.soortInstallatie.beveiliging">Beveiliging</li>
            </ul>
            <p class="font-semibold">Gemelde Storing: <br>
            <span class="font-normal">{{ opdracht.gemeldeStoring }}</span></p>
            <p class="font-semibold">Foto van situatie:</p>
            <url src="../assets/{{ opdracht.fotoinstallatie }} alt='{{ opdracht.id }}'"></url>
            <p class="font-semibold">Goed gekeurd: <span class="font-normal">{{ opdracht.goedGekeurd ? 'Ja' : 'Nee' }}</span></p>
            <p class="font-semibold">Opmerking:<br>
            
            <span class="font-normal">{{ opdracht.opmerking }}</span></p>
        </template>

        <template v-if="opdracht.type === 'Modificaties inverntarisatie'">
            <hr class="m-2 p-[0.2rem]  bg-gradient-to-r from-green-lime via-light-dark to-dark-house rounded-2xl">
            <ul class="bg-gray-300 md:pl-2 list-disc md:mx-3 md:py-2 md:px-8 px-7 py-2 rounded-xl my-3 shadow-md shadow-black"   
            v-if="opdracht.uitgevoerdDoor.huurder == true || opdracht.uitgevoerdDoor.aannemer == true || opdracht.uitgevoerdDoor.onbekend == true">
                <h3 class="text-xl font-semibold">Uitgevoerd door</h3>
                <li class="ml-5" v-if="opdracht.uitgevoerdDoor.huurder">Huurder</li>
                <li class="ml-5" v-if="opdracht.uitgevoerdDoor.aannemer">Aannemer</li>
                <li class="ml-5" v-if="opdracht.uitgevoerdDoor.onbekend">Onbekend</li>
            
            </ul>
            <p class="font-semibold">Beschrijving: <br>
            <span class=" font-normal">{{ opdracht.beschrijving }}</span></p>
            <ul class="bg-gray-300 md:pl-2 list-disc md:mx-3 md:py-2 md:px-8 px-7 py-2 rounded-xl my-3 shadow-md shadow-black"   
            v-if="opdracht.ondernemenActie.accepteren == true || opdracht.ondernemenActie.latenKeuren == true || opdracht.ondernemenActie.verwijderen == true || opdracht.ondernemenActie.aanpassenEnKeuren == true">
                <h3 class="text-xl font-semibold">Te ondernemen actie</h3>    
                <li class="ml-5"  v-if="opdracht.ondernemenActie.accepteren">Accepteren</li>
                <li class="ml-5" v-if="opdracht.ondernemenActie.latenKeuren">Laten keuren</li>
                <li class="ml-5" v-if="opdracht.ondernemenActie.verwijderen">Verwijderen</li>
                <li class="ml-5" v-if="opdracht.ondernemenActie.aanpassenEnKeuren">Laten aanpassen en keuren</li>
            </ul>
        </template>
    <!-- props: ['opdracht'] te gebruiken ontvang je de Data die is mee gegeven met de :opdracht="selectedTaskData"
de benaming 'opdracht' word hier gebruikt als key value omdat die ook met ':opdracht' word verstuurd. -->
</template>




<script>

import opdrachtenData from '@/data/service/opdrachten';

export default {
  name: 'TaksDetails',

  data(){
    return{
        opdrachtenData,
    }
  },


}
</script>

