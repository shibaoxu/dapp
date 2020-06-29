<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title>Social Music</v-toolbar-title>
    </v-app-bar>
    <v-main>
        <Home />
    </v-main>
    <v-footer app dark>
      <v-spacer/>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
};
</script>
