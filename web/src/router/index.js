import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Setup from "../views/Setup.vue";
import Follow from "../views/Follow.vue"
import Music from "../views/AddMusic.vue";


// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "setup",
        component: Setup
      },
      {
        path: "follow",
        component: Follow
      },
      {
        path: "music",
        component: Music
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
