<template>
  <v-app-bar color="secondary">
    <v-toolbar-title>Company Title Here</v-toolbar-title>
    <v-spacer></v-spacer>

<v-btn class="ma-1" rounded color="accent" dark top="1" right="true"
to="/">Home</v-btn>
<v-btn class="ma-1" rounded color="accent" dark top="1" right="true"
to="../views/about.vue">About</v-btn>
    <v-btn class="ma-1" rounded color="accent" dark top="1" right="true"
    to="">Contact</v-btn>
    <v-btn class="ma-1" rounded color="accent" dark top="1" right="true"
    to="">Login</v-btn>
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
