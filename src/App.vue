<template>
  <headerVue />
  <hoofdpageVue />
  <loginvue />
</template>

<script>
import hoofdpageVue from './components/hoofdpage.vue'
import headerVue from './components/header.vue';
import loginvue from './components/login.vue';

export default {
  name: 'App',
  components: {
    hoofdpageVue,
    headerVue,
    loginvue,
  }
}
</script>
