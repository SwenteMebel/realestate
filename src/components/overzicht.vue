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
                    <ul class="bg-gray-500 md:pl-2 list-disc md:ml-3 md:py-2" 
                    v-if="opdracht.soortOnderhoud.schilderwerk == true || opdracht.soortOnderhoud.houtrot == true || opdracht.soortOnderhoud.elektra == true || opdracht.soortOnderhoud.leidingwerk == true || opdracht.soortOnderhoud.beglazing == true "> 
                    <h3>Soort Onderhoud</h3>
                        <li v-if="opdracht.soortOnderhoud.schilderwerk == true">Schilderwerk</li>
                        <li v-if="opdracht.soortOnderhoud.houtrot == true">Houtrot</li>
                        <li v-if="opdracht.soortOnderhoud.elektra == true">Elektra</li>
                        <li v-if="opdracht.soortOnderhoud.leidingwerk == true">Leidingwerk</li>
                        <li v-if="opdracht.soortOnderhoud.beglazing == true">Beglazing</li>
                    </ul>
                    <p>Acute actie: <span>{{ opdracht.actueActie ? 'Ja' : 'Nee' }}</span></p>
               </template>

               <template v-if="opdracht.type === 'Technische installatie'"> 
                    <p>Soort Opdracht: <span>{{ opdracht.type }}</span></p>
                    <p>Ordernummer: <span>{{ opdracht.id }}</span></p>
                    <p>Plaats: <span> {{ opdracht.plaats }}</span></p>
                    <p>Adres: <span>{{ opdracht.straat }} {{ opdracht.huisnr }}</span></p>
                    <ul class="bg-gray-500 md:pl-2 list-disc md:ml-3 md:py-2"  
                    v-if="opdracht.soortInstallatie.koeling == true || opdracht.soortInstallatie.verwarming == true || opdracht.soortInstallatie.luchtverversing == true || opdracht.soortInstallatie.elektra == true || opdracht.soortInstallatie.beveiliging == true">
                        <li v-if="opdracht.soortInstallatie.koeling">Koeling</li>
                        <li v-if="opdracht.soortInstallatie.verwarming">Verwarming</li>
                        <li v-if="opdracht.soortInstallatie.luchtverversing">Luchtverversing</li>
                        <li v-if="opdracht.soortInstallatie.elektra">Elektra</li>
                        <li v-if="opdracht.soortInstallatie.beveiliging">Beveiliging</li>
                    </ul>
                    <p>Gemelde Storing: <br>
                    <span>{{ opdracht.gemeldeStoring }}</span></p>
                    <p>Foto van situatie:</p>
                    <url src="../assets/{{ opdracht.fotoinstallatie }} alt='{{ opdracht.id }}'"></url>
                    <p>Goed gekeurd: {{ opdracht.goedGekeurd ? 'Ja' : 'Nee' }}</p>
                    <p>Opmerking:<br>
                    <span>{{ opdracht.opmerking }}</span></p>
               </template>

               <template v-if="opdracht.type === 'Modificaties inverntarisatie'">
                <p>Soort Opdracht: <span>{{ opdracht.type }}</span></p>
                    <p>Ordernummer: <span>{{ opdracht.id }}</span></p>
                    <p>Plaats: <span> {{ opdracht.plaats }}</span></p>
                    <p>Adres: <span>{{ opdracht.straat }} {{ opdracht.huisnr }}</span></p>
                    <ul class="bg-gray-500 md:pl-2 list-disc md:ml-3 md:py-2"  
                    v-if="opdracht.uitgevoerdDoor.huurder == true || opdracht.uitgevoerdDoor.aannemer == true || opdracht.uitgevoerdDoor.onbekend == true">
                        <h3>Uitgevoerd door</h3>
                        <li v-if="opdracht.uitgevoerdDoor.huurder">Huurder</li>
                        <li v-if="opdracht.uitgevoerdDoor.aannemer">Aannemer</li>
                        <li v-if="opdracht.uitgevoerdDoor.onbekend">Onbekend</li>
                    
                    </ul>
                    <p>Beschrijving: <br>
                    <span>{{ opdracht.beschrijving }}</span></p>
                    <ul v-if="opdracht.ondernemenActie.accepteren == true || opdracht.ondernemenActie.accepteren == true|| opdracht.ondernemenActie.accepteren == true ||opdracht.ondernemenActie.accepteren == true">
                        <li v-if="opdracht.ondernemenActie.accepteren">Accepteren</li>
                        <li v-if="opdracht.ondernemenActie.latenKeuren">Laten keuren</li>
                        <li v-if="opdracht.ondernemenActie.verwijderen">Verwijderen</li>
                        <li v-if="opdracht.ondernemenActie.aanpassenEnKeuren">Laten aanpassen en keuren</li>
                    </ul>
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