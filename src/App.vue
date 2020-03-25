<template>
  <v-app>
    <v-content>
      <navbar/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navbar from './components/navbar.vue';

export default {
  name: 'App',

  components: {
    navbar,
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
