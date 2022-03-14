import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

Vue.component('navbar-component', require('./components/template/Navbar.vue').default);
Vue.component('sidebar-component', require('./components/template/Sidebar.vue').default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


