<template>
  <div class="flex flex-col">
    <div
      class="container mx-auto px-16 lg:px-28 lg:pt-16 h-screen"
      v-show="isLoading"
    >
      <bounce></bounce>
    </div>
    <div
      class="container mx-auto px-16 py-20 flex flex-col md:flex-row"
      v-show="!isLoading"
    >
      <img
        :src="'http://image.tmdb.org/t/p/w1280' + movie.poster_path"
        alt="poster"
        class="w-72 rounded-lg"
      />
      <div class="mt-2 md:mt-0 md:ml-20">
        <h1 class="text-white font-bold text-2xl">{{ movie.title }}</h1>
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
          <span class="ml-1">{{ movie.vote_average * 10 }}%</span>
          <span class="mx-2">|</span>
          <span>{{ movie.release_date }}</span>
        </div>
        <p class="mt-4 text-gray-200">
          {{ movie.overview }}
        </p>

        <div class="mt-8">
          <a
            href="#"
            class="bg-indigo-400 hover:bg-indigo-600 text-black text-sm py-2 px-8 font-semibold rounded flex items-center w-36"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="ml-2">Play Trailer</span>
          </a>
        </div>
      </div>
    </div>
    <div class="px-16 py-10">
      <h1 class="uppercase text-lg text-indigo-400 font-semibold">Casts</h1>
      <carousel
        :autoplay="true"
        :autoplayHoverPause="true"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :perPageCustom="[
          [320, 2],
          [768, 6],
        ]"
        :spacePadding="10"
        :spaceMargin="5"
      >
        <slide v-for="cast in casts" v-bind:key="cast.id" class="m-4">
          <img
            :src="'http://image.tmdb.org/t/p/w1280' + cast.profile_path"
            alt="cast"
            class="rounded-lg"
          />
          <div class="mt-2 text-sm">
            <h1>Character: {{ cast.character }}</h1>
            <h1>Original Name: {{ cast.original_name }}</h1>
          </div>
        </slide>
      </carousel>
    </div>
    <div class="px-16 py-10">
      <h1 class="uppercase text-lg text-indigo-400 font-semibold">
        similar movies
      </h1>
      <carousel
        :autoplay="true"
        :autoplayHoverPause="true"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :perPageCustom="[
          [320, 2],
          [768, 6],
        ]"
        :spacePadding="10"
        :spaceMargin="5"
      >
        <slide v-for="similar in similars" v-bind:key="similar.id" class="m-4">
          <img
            :src="'http://image.tmdb.org/t/p/w1280' + similar.poster_path"
            alt="cast"
            class="rounded-lg"
          />
          <div class="mt-2 text-sm">
            <a href="#" class="text-lg hover:text-gray-300">{{
              similar.title
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
              <span class="ml-1">{{ similar.vote_average * 10 }}%</span>
              <span class="mx-2">|</span>
              <span>{{ similar.release_date }}</span>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetails",
  props: ["movie_id"],

  data() {
    return {
      isLoading: false,
      movie: {},
      casts: [],
      similars: [],
      url: "https://api.themoviedb.org/3/movie/",
      api_key: "?api_key=5641e993ec87be68dc40f563fa1a125d",
    };
  },
  mounted() {
    this.isLoading = true;
    axios
      .get(this.url + this.movie_id + this.api_key + "&language=en-US")
      .then((response) => {
        this.isLoading = false;
        this.movie = response.data;
        console.log(response.data);
      });

    axios
      .get(
        this.url + this.movie_id + "/credits" + this.api_key + "&language=en-US"
      )
      .then((response) => {
        this.casts = response.data.cast;
        console.log(response.data.casts);
      });

    axios
      .get(
        this.url + this.movie_id + "/similar" + this.api_key + "&language=en-US"
      )
      .then((response) => {
        this.similars = response.data.results;
        console.log(response.data.similars);
      });
  },
};
</script>
