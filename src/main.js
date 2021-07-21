import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router/index.js';
import store from './store';

import './antd.config.js';
import './element.config.js';
import Head from './components/Head.vue';
import Carousel from './components/Carousel.vue';
import './mock/index';



Vue.component('Head',Head);
Vue.component('Carousel',Carousel);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
