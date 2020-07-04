<template>
  <v-container>
    <v-form>
      <v-text-field label="音乐" placeholder="Name of the song." v-model="song" />
      <div class="text-center">
        <v-btn class="mr-4" @click="addSong">确定</v-btn>
        <v-btn href="/">返回</v-btn>
      </div>
    </v-form>
  </v-container>
</template>
<script>
import { addMusic } from "@/api/socialMusic";
export default {
  name: "Music",
  data() {
    return {
      song: ""
    };
  },
  methods: {
    async addSong() {
        await addMusic(this.song)
    }
  }
};
</script>