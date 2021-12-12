<template>
  <div class="font-sans bg-gray-900 text-white">
    <nav-component></nav-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavComponent,
    FooterComponent
  },
};
</script>
