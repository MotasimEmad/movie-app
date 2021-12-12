<template>
<div class="container mx-auto px-16 lg:px-28 lg:pt-16">
      <div class="container mx-auto px-16 lg:px-28 lg:pt-16" v-show="isLoading"> 
        <bounce></bounce>
        <h1 class="uppercase text-lg text-yellow-600 font-semibold">
          Loading Movies ...
        </h1>
      </div>
      <div class="popular-movies py-4">
        <h1 class="uppercase text-lg text-yellow-600 font-semibold">
          Popular Movies
        </h1>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4"
        >
          <div class="mt-8" v-for="popular in populars" v-bind:key="popular.id">
            <router-link :to="{name: 'Show' , params: {movie_id: popular.id}, props: true}">
              <img
                :src="path + popular.poster_path"
                alt="poster"
                class="hover:opacity-75 transition ease-in-out duration-150 rounded-lg"
              />
            </router-link>
            <div class="mt-2 text-sm">
              <a href="#" class="text-lg hover:text-gray-300">{{
                popular.title
              }}</a>
              <div class="flex items-center text-gray-400">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 fill-current text-yellow-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </span>
                <span class="ml-1">{{ popular.vote_average * 10}}%</span>
                <span class="mx-2">|</span>
                <span>{{ popular.release_date }}</span>
              </div>
              <!-- <div v-for="genre in genres" v-bind:key="genre.id">
                <div :if="popular.genre_ids == genre.id">
                  <div>{{ genre.name }}</div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="popular-movies py-4 mt-20">
        <h1 class="uppercase text-lg text-yellow-600 font-semibold">
          Now Playing
        </h1>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4"
        >
          <div class="mt-8" v-for="playing in playings" v-bind:key="playing.id">
            <router-link :to="{name: 'Show' , params: {movie_id: playing.id}, props: true}">
              <img
                :src="path + playing.poster_path"
                alt="poster"
                class="hover:opacity-75 transition ease-in-out duration-150 rounded-lg"
              />
            </router-link>
            <div class="mt-2 text-sm">
              <a href="#" class="text-lg hover:text-gray-300">{{
                playing.title
              }}</a>
              <div class="flex items-center text-gray-400">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 fill-current text-yellow-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </span>
                <span class="ml-1">{{ playing.vote_average * 10}}%</span>
                <span class="mx-2">|</span>
                <span>{{ playing.release_date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      isLoading: false,
      populars: [],
      playings: [],
      genres: [],
      path: 'https://image.tmdb.org/t/p/w500/'
    };
  },
  mounted() {
    this.isLoading = true;
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5641e993ec87be68dc40f563fa1a125d"
      )
      .then((response) => {
        this.isLoading = false;
        this.populars = response.data.results;
        console.log(response.data.results);
      });

       axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=5641e993ec87be68dc40f563fa1a125d"
      )
      .then((response) => {
        this.genres = response.data.genres;
        console.log(response.data.genres);
      });

       axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=5641e993ec87be68dc40f563fa1a125d"
      )
      .then((response) => {
        this.playings = response.data.results;
        console.log(response.data.results);
      });
  },
};
</script>