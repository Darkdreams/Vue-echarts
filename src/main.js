import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import axios from "./http"
import store from "./store"
import Echart from 'echarts'

import 'echarts/extension/bmap/bmap';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = Echart;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
