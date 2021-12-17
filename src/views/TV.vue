<template>
  <div>
    <hero-series />
    <popular-series />
  </div>
</template>

<script>
import HeroSeries from "../components/HeroSeries.vue";
import PopularSeries from "../components/PopularSeries.vue";

export default {
  name: "App",
  components: {
    HeroSeries,
    PopularSeries
  },
};
</script>
