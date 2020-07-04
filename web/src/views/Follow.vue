<template>
  <v-container>
    <FollowPeopleUnit
      v-for="(item,index) in followData"
      :key="index"
      :name="item.name"
      :address="item.address"
      class="mb-4"
    />
  </v-container>
</template>
<script>
import FollowPeopleUnit from "./FollowPeopleUnit";
import { getFollowPeopleUsersData } from "@/api/socialMusic";
export default {
  name: "Follow",
  components: {
    FollowPeopleUnit
  },
  data() {
    return {
      followData: []
    };
  },
  created() {
    getFollowPeopleUsersData().then(data => (this.followData = data));
  }
};
</script>