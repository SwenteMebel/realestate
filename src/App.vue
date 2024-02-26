<template>
  <headerVue />
  <HelloWorld />
  <loginvue />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import headerVue from './components/header.vue';
import loginvue from './components/login.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    headerVue,
    loginvue,
  }
}
</script>
