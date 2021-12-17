import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MovieDetails from "../views/MovieDetails.vue";
import TV from "../views/TV.vue";
import ShowDetails from "../views/ShowDetails.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie_details/:movie_id",
    name: "MovieDetails",
    component: MovieDetails,
    props: true
  },
  {
    path: "/tv",
    name: "TV",
    component: TV,
  },
  {
    path: "/show_details/:show_id",
    name: "ShowDetails",
    component: ShowDetails,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
