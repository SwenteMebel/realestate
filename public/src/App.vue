<template>
  <headerVue />

  <router-view />
  
  <tabbarVue />
</template>

<script>
import headerVue from './components/header.vue';
import tabbarVue from './components/tabbar.vue';

export default {
  
  name: 'App',
  components: {
    headerVue,
    tabbarVue,
  }
}
</script>
