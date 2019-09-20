import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuetify from "vuetify/lib";
import { routes } from "./routes";
import  store from './store/store';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuetify);

//Firebase db link
Vue.http.options.root = 'https://vuejs-stock-trader-d802e.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const opts = {};

export default new Vuetify(opts);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
