import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './index.css';

import VueSpinners from 'vue-spinners'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
Vue.use(VueSpinners)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
