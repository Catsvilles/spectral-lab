// @ts-nocheck
import Vue from 'vue';
import App from './App';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import theme from './constants/theme';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue(); // Global event bus

Vue.use(Vuetify, { theme });

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app');