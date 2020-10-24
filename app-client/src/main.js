import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faCog, faPencilAlt  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { formatDate } from '@/utils/filters';

library.add(faTrashAlt);
library.add(faPencilAlt);
library.add(faCog);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.filter('formatDate', formatDate);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');