<template>
  <headerVue />
  <hoofdpageVue />
  <loginvue />
  <tabbarVue />
</template>

<script>
import hoofdpageVue from './components/hoofdpage.vue'
import headerVue from './components/header.vue';
import loginvue from './components/login.vue';
import tabbarVue from './components/tabbar.vue';

export default {
  name: 'App',
  components: {
    hoofdpageVue,
    headerVue,
    loginvue,
    tabbarVue,
  }
}
</script>
