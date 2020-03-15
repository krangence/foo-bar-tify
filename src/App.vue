<template>
  <v-app>
    <v-content>
      <navbar/>
      <Main/>
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main.vue';
import navbar from './components/navbar.vue';

export default {
  name: 'App',

  components: {
    navbar,
    Main,
  },

  data: () => ({
    //
  }),

};
</script>

<style>
#app {
  background-color: #bdc3c7;
}
</style>
