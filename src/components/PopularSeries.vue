<template>
  <div class="container mx-auto px-16 lg:px-28 lg:pt-16">
    <div class="popular-movies py-4">
      <h1 class="uppercase text-lg text-indigo-400 font-semibold">
        Popular Series
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
        <slide
          class="m-4"
          v-for="popular in computedResults"
          v-bind:key="popular.id"
        >
          <router-link
            :to="{
              name: 'ShowDetails',
              params: { show_id: popular.id },
              props: true,
            }"
          >
            <img
              :src="'http://image.tmdb.org/t/p/w1280' + popular.poster_path"
              alt="poster"
              class="hover:opacity-75 transition ease-in-out duration-150 rounded-lg"
            />
          </router-link>
          <div class="mt-2 text-sm">
            <a href="#" class="text-lg hover:text-gray-300">{{
              popular.name
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
              <span class="ml-1">{{ popular.vote_average * 10 }}%</span>
              <span class="mx-2">|</span>
              <span>{{ popular.first_air_date  }}</span>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "popular-series",
  computed: {
    computedResults() {
      return this.$store.getters.popularSeriesResults;
    },
  },
  methods: {
    getResults() {
      this.$store.dispatch("popularSeriesResults");
    },
  },
  created() {
    this.getResults();
  },
};
</script>
