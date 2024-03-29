import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'jquery'
import 'popper.js'

Vue.config.productionTip = false

import { router } from './router'
import './form'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
