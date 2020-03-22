<template>
  <v-app-bar color="secondary">
    <v-toolbar-title>Company Title Here</v-toolbar-title>
    <v-spacer></v-spacer>

<v-btn class="ma-1" rounded color="accent" dark top="1" right="true">
<router-link to="/">Home</router-link></v-btn>
<v-btn class="ma-1" rounded color="accent" dark top="1" right="true">
  <router-link to="/about">About</router-link></v-btn>
    <v-btn class="ma-1" rounded color="accent" dark top="1" right="true">
    <router-link to="/contact">Contact</router-link></v-btn>
    <v-btn class="ma-1" rounded color="accent" dark top="1" right="true">
      <router-link to="/login">Login</router-link></v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'navbar',

  data: () => ({
    drawer: false,
  }),
};
</script>
