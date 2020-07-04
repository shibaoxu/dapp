<template>
  <v-card class="mx-auto" color="26c6da" max-width="600">
    <v-card-title class="pa-2">
      <v-icon large left>mdi-twitter</v-icon>
      <span class="title font-weight-light">{{name}}</span>
    </v-card-title>
    <v-card-subtitle>
        <span class="title font-weight-light">{{address}}</span>
    </v-card-subtitle>

    <v-card-text
      class="headline font-weight-bold"
    >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>
    <v-card-actions>
      <v-btn>Follow</v-btn>
    </v-card-actions>
    <!-- <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions> -->
  </v-card>
</template>
<script>
export default {
  name: "FollowPeopleUnit",
  props: ["address", "name", "age", "state"]
};
</script>