import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuetify from "vuetify/lib";
import { routes } from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);

const opts = {};

export default new Vuetify(opts);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
