import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Show from "../views/Show.vue";
import TV from "../views/TV.vue";
import ShowTv from "../views/Show_tv.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/show",
    name: "Show",
    component: Show,
  },
  {
    path: "/tv",
    name: "TV",
    component: TV,
  },
  {
    path: "/show-tv",
    name: "ShowTv",
    component: ShowTv,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
