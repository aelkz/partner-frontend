import 'babel-polyfill'
import Vue from 'vue'
import style from './style'
import App from './components/App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import VueResource from 'vue-resource'

Vue.use(VueResource)

// Vue.http.options.root = 'http://test.com/api/v1/'
Vue.http.options.root = 'http://partner-frontend.proxy.beeceptor.com/api/v1/'
//Vue.http.options.root = 'http://partner-frontend.proxy.beeceptor.com/t/api/v1/'

const unsync = sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
