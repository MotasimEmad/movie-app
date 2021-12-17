import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
export default new Vuex.Store({
  state() {
    return {
      heroResults: "",
      popularResults: "",
      topRatedResults: "",
      heroSeriesResults: "",
      popularSeriesResults: ""
    }
  },
  mutations: {},
  actions: {
    heroResults({
      state
    }) {
      axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=5641e993ec87be68dc40f563fa1a125d")
      .then((result) => {
        console.log(result);
        state.heroResults = result.data.results;
      });
    },

    popularResults({
      state
    }) {
      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5641e993ec87be68dc40f563fa1a125d&language=en-US&page=1")
      .then((result) => {
        console.log(result);
        state.popularResults = result.data.results;
      });
    },

    topRatedResults({
      state
    }) {
      axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=5641e993ec87be68dc40f563fa1a125d&language=en-US&page=1")
      .then((result) => {
        console.log(result);
        state.topRatedResults = result.data.results;
      });
    },

    heroSeriesResults({
      state
    }) {
      axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=5641e993ec87be68dc40f563fa1a125d")
      .then((result) => {
        console.log(result);
        state.heroSeriesResults = result.data.results;
      });
    },

    popularSeriesResults({
      state
    }) {
      axios.get("https://api.themoviedb.org/3/tv/popular?api_key=5641e993ec87be68dc40f563fa1a125d")
      .then((result) => {
        console.log(result);
        state.popularSeriesResults = result.data.results;
      });
    },
  },
  modules: {},
  getters: {
    heroResults(state) {
      return state.heroResults;
    },

    popularResults(state) {
      return state.popularResults;
    },

    topRatedResults(state) {
      return state.topRatedResults;
    },

    heroSeriesResults(state) {
      return state.heroSeriesResults;
    },

    popularSeriesResults(state) {
      return state.popularSeriesResults;
    }
  }
});
