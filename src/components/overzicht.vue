<template>
    <section class="bg-red-200 p-2 md:grid md:justify-center bg-gradient-to-r from-green-lime via-light-dark to-dark-house">
        <schadeDataVue class="mb-10" />
        <onderhoudDataVue class="mb-10" />
        <technischeDataVue class="mb-10" />
        <modificatieDataVue class="mb-10" />
    </section>
</template>

<script>
import schadeDataVue from './schadeData.vue';
import onderhoudDataVue from './onderhoudData.vue'
import technischeDataVue from './technischeData.vue';
import modificatieDataVue from './modificatieData.vue';



export default {  
    name: 'overzichtVue',
  
    // Hier laad je alle componenten in die je importeert 
    components: { 
    schadeDataVue,
    onderhoudDataVue,
    technischeDataVue,
    modificatieDataVue,
    },


}




</script>