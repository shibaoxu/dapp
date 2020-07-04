<template>
  <v-container fluid>
    <v-banner class="text-center single-line app subtitle-1 blue--text">欢迎来到去中心化的音乐社交世界!</v-banner>
    <v-row align-content="center">
      <v-col class="text-center">
        <v-btn href="setup">
          <v-icon left>mdi-pencil</v-icon>Setup Account
        </v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn href="music">
          <v-icon left>mdi-radio</v-icon>Add Music
        </v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn href="follow">
          <v-icon left>mdi-twitter-retweet</v-icon>Follow People
        </v-btn>
      </v-col>
    </v-row>
    <router-view />
  </v-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>
