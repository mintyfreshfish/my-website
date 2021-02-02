import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
var VueScrollTo = require('vue-scrollto');
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueScrollTo)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
