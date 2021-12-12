<template>
  <nav class="border-t-4 border-yellow-600">
    <div
      class="container mx-auto flex flex-row md:flex-row items-center justify-between px-8 py-4 lg:px-28"
    >
      <ul class="flex items-center sm:py-2">
        <li>
          <router-link to="/" class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
            <h1 class="ml-1 font-bold ">Movies</h1>
          </router-link>
        </li>
        <li class="hover:text-yellow-600 ml-6">
          <router-link to="/">Movies</router-link>
        </li>
        <li class="hover:text-yellow-600 ml-6">
          <router-link to="/tv">TV Shows</router-link>
        </li>
      </ul>
      <div class="flex items-center">
        <div>
          <a href="https://twitter.com/6lzona">
            <img src="/img/me.jpg" alt="person" class="w-8 h-8 rounded-full" />
          </a>
        </div>
      </div>
    </div>
      <router-view />
  </nav>
</template>

<script>

export default {
  name: "NavBar",

};
</script>
