import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./registerServiceWorker";
import VuePageTransition from "vue-page-transition";

import "@/scss/index.scss";

Vue.use(VuePageTransition);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
