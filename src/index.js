import App from './App.vue'
import './assets/css/app.css'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VTooltip from 'v-tooltip'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'es6-promise/auto'

Vue.use(BootstrapVue)
Vue.use(VTooltip)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
