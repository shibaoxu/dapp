<template>
  <v-container>
    <v-form>
      <v-text-field v-model="name" label="姓名" placeholder="Your name" />
      <v-text-field v-model="age" label="年龄" placeholder="Your age" type="number" />
      <v-textarea v-model="state" label="状态" hint="Your state, a description about yourself" />
      <div class="text-center">
        <v-btn @click="setupAccount" class="mr-4">提交</v-btn>
        <v-btn href="/">返回</v-btn>
      </div>
    </v-form>
  </v-container>
</template>
<script>
import { initialAccount } from "@/api/socialMusic";
export default {
  name: "Setup",
  data() {
    return {
      name: "",
      age: 0,
      state: ""
    };
  },
  methods: {
    async setupAccount() {
      await initialAccount(this.name, parseInt(this.age), this.state)
    }
  }
};
</script>
