import 'babel-polyfill'
import Vue from 'vue'
import style from './style'
import App from './components/App.vue'
import store from './store'
import router from './router'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
