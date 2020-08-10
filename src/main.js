import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueTypedJs);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
